#! /usr/bin/env node
const os = require('node:os');
const yargs = require('yargs')
const {argv} = yargs(process.argv)

const main = async (data) => {
    if(data == "cores") {
        const result = os.availableParallelism()
        console.log(result);
    } else {
        const result = os.arch();
        console.log(result);
    }
}
const result = os.availableParallelism()

main(argv.data);
