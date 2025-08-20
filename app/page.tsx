"use client";
import { CodeBlock, Container, Text } from "@chakra-ui/react";
import { shikiAdapter } from "./adapters/highlight.adapter";

const file = {
	code: `
def main() {
    a: str = "hello world";
    943.0 / 27.54 * 12.95 / 599 / 2 * 94.323;
    358 - 54.91 + 263.12 - 958 - 23 + 6.37;
    -24 + 94 / (3 * (12 - 34));


    12 > 7;
    7 > 12;
    12 > 12;

    6 < 4;
    4 < 6;
    6 < 6;

    9 >= 5;
    5 >= 9;
    95 >= 95;

    79 <= 45;
    45 <= 79;
    79 <= 79;

    5 == 5;
    5 != 5;
    5 == 6;
    5 != 6;

    true == true;
    false == false;
    false == true;

    true != false;
    true != true;

    !false;
    !true;
} 

def fib(n: num) -> num {
    if n == 0 {
        return 0;
    }
    
    if n == 1 {
        return 1;
    }

    return fib(n - 1) + fib(n - 2);
} 

def fib_iterative() {
    iterations: num = 1000000;
    max_fib: num = 30;

    for i: num = 0; i < iterations; i++ {
        a: num = 0;
        b: num = 1;

        for j: num = 0; j < max_fib; j++ {
            temp: num = a + b ;
            a = b;
            b = temp;
        }

      
    }
}`,
	language: "kaori",
	title: "main.kaori",
};

export default function Home() {
	return (
		<CodeBlock.AdapterProvider value={shikiAdapter}>
			<CodeBlock.Root code={file.code} language={file.language}>
				<CodeBlock.Header>
					<CodeBlock.Title>{file.title}</CodeBlock.Title>
				</CodeBlock.Header>
				<CodeBlock.Content>
					<CodeBlock.Code>
						<CodeBlock.CodeText />
					</CodeBlock.Code>
				</CodeBlock.Content>
			</CodeBlock.Root>
		</CodeBlock.AdapterProvider>
	);
}
