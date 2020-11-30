import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    // return "Hi, Ben. </br>This is David.</br> My account was restricted So I can't contact you via freelancer for two weeks. </br>But I want to start work right now. In my opinion, we could contact outside of freelancer.com. </br>This is my email address: sitewiser@gmail.com </br>Please send me the email and let me know your thoughts. Thanks";
    return "Hello world!";
  }
}
