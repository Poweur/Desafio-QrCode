import chalk from "chalk";

const mainPrompt = [
    {
        name: "select",
        description: chalk.yellow.bold("Escolha a ferramenta (1- QRCODE ou (2- PASSWORD (3- COMPRAS"),
        pattern: /^[1-2-3]+$/,
        message: chalk.red.italic("Escolha apenas entre 1 e 2 ou 3"),
        required: true,
    },
];

export default mainPrompt;