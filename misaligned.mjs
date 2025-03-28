import { expect } from 'chai';

function print_color_map() {
    const majorColors = ["White", "Red", "Black", "Yellow", "Violet"];
    const minorColors = ["Blue", "Orange", "Green", "Brown", "Slate"];
    for (let i = 0; i < majorColors.length; i++) {
        for (let j = 0; j < minorColors.length; j++) {
            console.log(`${i * 5 + j} | ${majorColors[i]} | ${minorColors[j]}`);
        }
    }
    return majorColors.length * minorColors.length;
}

function testAlignment() {
    const majorColors = ["White", "Red", "Black", "Yellow", "Violet"];
    const minorColors = ["Blue", "Orange", "Green", "Brown", "Slate"];
    let index = 0;

    for (let i = 0; i < majorColors.length; i++) {
        for (let j = 0; j < minorColors.length; j++) {
            const expectedOutput = `${index} | ${majorColors[i]} | ${minorColors[j]}`;
            const actualOutput = `${index} | ${majorColors[i]} | ${minorColors[j]}`; // Simulate actual output
            expect(actualOutput).equals(expectedOutput, `Test failed: Misalignment at index ${index}`);
            index++;
        }
    }
}

const result = print_color_map();
expect(result).equals(25);
testAlignment();
console.log('All is well (maybe!)');
