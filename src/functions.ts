import { SayHelloProps } from './types'

export function sayHello({firstName, lastName}: SayHelloProps) {  
    console.log('Hello')
    console.log(`You are ${firstName} ${lastName}`)
}