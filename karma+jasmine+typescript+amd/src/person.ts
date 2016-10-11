import sayAge from './sayAge';
import sayHello from './sayHello';

export function replyAge (age: number): string {
	return sayAge(age);
}

export function replyHello (text: string): string {
	return sayHello(text);
}
