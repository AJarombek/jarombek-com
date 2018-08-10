/**
 * Module to handle conversions to roman numerals
 * @author Andrew Jarombek
 * @since 8/9/2018
 */

/**
 * Take an integer and convert it to its proper roman numeral.  Currently the function will only
 * return the proper roman numeral for integers < 400
 * @param int - an integer to convert to a roman numeral
 * @return {string} a roman numeral string
 */
export function toRomanNumeral(int) {
    const romanNumerals = [
        {number: 100, letter: 'C'},
        {number: 90, letter: 'XC'},
        {number: 50, letter: 'L'},
        {number: 40, letter: 'XL'},
        {number: 10, letter: 'X'},
        {number: 9, letter: 'IX'},
        {number: 5, letter: 'V'},
        {number: 4, letter: 'IV'},
        {number: 1, letter: 'I'}
    ];

    let convertedNumber = "";
    for (const i in romanNumerals) {
        while (int >= romanNumerals[i].number) {
            convertedNumber += romanNumerals[i].letter;
            int -= romanNumerals[i].number;
        }
    }

    return convertedNumber;
}