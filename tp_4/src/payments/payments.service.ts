import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import Stripe from 'stripe';
import { CreatePaymentSessionDto } from './dto/create-payment-session.dto';

@Injectable()
export class PaymentsService {
  private readonly stripe: Stripe;
  private readonly logger = new Logger(PaymentsService.name);

  constructor() {
    this.stripe = new Stripe(process.env.STRIPE_SECRET ?? '');
  }

  async createPaymentSession(dto: CreatePaymentSessionDto) {
    const session = await this.stripe.checkout.sessions.create({
      mode: 'payment',
      success_url: process.env.STRIPE_SUCCESS_URL,
      cancel_url: process.env.STRIPE_CANCEL_URL,
      line_items: dto.items.map((item) => ({
        price_data: {
          currency: dto.currency,
          product_data: {
            name: item.name,
          },
          unit_amount: Math.round(item.price * 100),
        },
        quantity: item.quantity,
      })),
      payment_intent_data: {
        metadata: {
          orderId: dto.orderId,
        },
      },
    });

    return {
      id: session.id,
      url: session.url,
    };
  }

  handleWebhook(rawBody: Buffer, signature: string) {
    let event: Stripe.Event;

    try {
      event = this.stripe.webhooks.constructEvent(
        rawBody,
        signature,
        process.env.STRIPE_ENDPOINT_SECRET ?? '',
      );
    } catch (error) {
      const message =
        error instanceof Error ? error.message : 'Invalid webhook signature';

      throw new BadRequestException(message);
    }

    if (event.type === 'charge.succeeded') {
      const charge = event.data.object as Stripe.Charge;
      const orderId = charge.metadata?.orderId;

      this.logger.log(`Payment succeeded. orderId: ${orderId}`);
    } else {
      this.logger.log(`Evento no manejado: ${event.type}`);
    }

    return { received: true };
  }
}