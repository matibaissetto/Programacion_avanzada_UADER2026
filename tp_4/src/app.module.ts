import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PaymentsModule } from './payments/payments.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validate: (config) => {
        const requiredVariables = [
          'PORT',
          'STRIPE_SECRET',
          'STRIPE_SUCCESS_URL',
          'STRIPE_CANCEL_URL',
          'STRIPE_ENDPOINT_SECRET',
        ];

        for (const variable of requiredVariables) {
          if (!config[variable]) {
            throw new Error(`Falta la variable de entorno: ${variable}`);
          }
        }

        return config;
      },
    }),
    PaymentsModule,
  ],
})
export class AppModule {}