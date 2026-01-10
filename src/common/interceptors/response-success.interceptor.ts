/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { map, Observable } from 'rxjs';
import { RESPONSE_MESSAGE_KEY } from '../decorators/response-message.decorator';

@Injectable()
export class ResponseSuccessInterceptor implements NestInterceptor {
  constructor(public reflector: Reflector) {}
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log('Before...');

    const res = context.switchToHttp().getResponse();

    const message = this.reflector.getAllAndOverride(RESPONSE_MESSAGE_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    return next.handle().pipe(
      map((data) => {
        return {
          status: 'success',
          statusCode: res.statusCode,
          message: message || 'ok',
          data: data,
          doc: 'example api',
        };
      }),
    );
  }
}
