import { Controller } from '@nestjs/common';
import { MailService } from './mail.service';
import { GrpcMethod } from '@nestjs/microservices';
import {
  SendMailRequest,
  SendMailResponse,
} from '../../common/interface/mail.interface';

@Controller('mail')
export class MailController {
  constructor(private readonly mailService: MailService) {}

  //SEND MAIL
  @GrpcMethod('MailService', 'SendResetPasswordLink')
  async sendResetPasswordLink(
    data: SendMailRequest,
  ): Promise<SendMailResponse> {
    console.log('Sending email to:', data.to);
    return this.mailService.sendResetPasswordLink(data);
  }
}
