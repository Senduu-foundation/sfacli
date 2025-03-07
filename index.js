#! /usr/bin/env node
const os = require('node:os');
const yargs = require('yargs')
const {argv} = yargs(process.argv)

const main = async (data) => {

    switch (data) {
        //cores => Returns an estimate of the default amount of parallelism a program should use
        
         case "cores":
            const coresResult = os.availableParallelism()
            console.log(coresResult);
          break;

        //arch => Returns the operating system CPU architecture for which the Node.js binary was compiled. 
        // Possible values are 'arm', 'arm64', 'ia32', 'loong64', 'mips', 'mipsel', 'ppc', 'ppc64', 'riscv64', 's390', 's390x', and 'x64'.

         case "arch":
            const eolResult = os.arch();
            console.log(eolResult)
          break;

        //cpus => Returns an array of objects containing information about each logical CPU core. 
        // The array will be empty if no CPU information is available

         case "cpus":
            const cpusResult = os.cpus();
            console.log(cpusResult)
          break;

        //endianness => Returns a string identifying the endianness of the CPU for which the Node.js binary was compiled.
        // Possible values are 'BE' for big endian and 'LE' for little endian.

         case "endianness":
            const endiannessResult = os.endianness();
            console.log(endiannessResult)
          break;

        //freemem => Returns the amount of free system memory in bytes as an integer..

         case "freemem":
            const freememResult = os.freemem();
            console.log(freememResult)
          break;

        //priority => Returns the scheduling priority for the process specified by pid. 
        // If pid is not provided or is 0, the priority of the current process is returned.

         case "priority":
            const priorityResult = os.getPriority();
            console.log(priorityResult)
          break;

        //loadavg => The load average is a measure of system activity calculated by the operating system and expressed as a fractional number.
        // The load average is a Unix-specific concept.

         case "loadavg":
            const loadavgResult = os.loadavg();
            console.log(loadavgResult)
          break;

        //networkInterfaces => The load average is a measure of system activity calculated by the operating system and expressed as a fractional number.
        // The load average is a Unix-specific concept.

         case "networkInterfaces":
            const networkInterfacesResult = os.networkInterfaces();
            console.log(networkInterfacesResult)
          break;

        //totalmem => Returns the total amount of system memory in bytes as an integer.

         case "totalmem":
            const totalmemResult = os.totalmem();
            console.log(totalmemResult)
          break;

        //uptime => Returns the system uptime in number of seconds.

         case "uptime":
            const uptimeResult = os.uptime();
            console.log(uptimeResult)
          break;
}}

main(argv.data);
