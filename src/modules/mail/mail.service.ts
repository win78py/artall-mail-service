import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { SendMailRequest } from 'src/common/interface/mail.interface';

@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {}

  async sendResetPasswordLink(data: SendMailRequest) {
    console.log('Data:', data);
    await this.mailerService.sendMail({
      to: data.to,
      subject: data.subject,
      text: data.text,
      context: {},
    });
    return { message: 'Mail sent successfully' };
  }
}
