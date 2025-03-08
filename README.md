![Alt text](senduu1.png)


sfacli is a command line tool that provides operating system-related information about your local computer

## How to use sfacli
1. First make a directory.

```bash
    mkdir name
```
2. init an npm project.

```bash
    npm init
```
3. then install the sfacli tool, input the below bash command in your terminal

```bash
npm i sfacli
```
2. Below are a list of possible command you can pass into the ```--data``` tag.

 - ```cores```: Returns an estimate of the default amount of parallelism a program should use. The number of possible core your application can make use of.

 - ```arch```: Returns the operating system CPU architecture for which the Node.js binary was compiled. Possible values are 'arm', 'arm64', 'ia32', 'loong64', 'mips', 'mipsel', 'ppc', 'ppc64', 'riscv64', 's390', 's390x', and 'x64'.

 - ```cpus```:  Returns an array of objects containing information about each logical CPU core. The array will be empty if no CPU information is available

 - ```endianness```: Returns a string identifying the endianness of the CPU for which the Node.js binary was compiled. Possible values are 'BE' for big endian and 'LE' for little endian.

 - ```freemem```:  Returns the amount of free system memory in bytes as an integer.

 - ```priority```: Returns the scheduling priority for the current process.

 - ```loadavg```: Returns an estimate of the default amount of parallelism a program should use. The number of possible core your application can make use of.

 - ```networkInterfaces```: Returns an object containing network interfaces that have been assigned a network address.

 - ```totalmem```: Returns the total amount of system memory in bytes as an integer.

 - ```uptime```: Returns the system uptime in number of seconds.