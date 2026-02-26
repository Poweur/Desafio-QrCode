import prompt from 'prompt';
import mainPrompt from "./prompts/prompt-main.js";
import createQRCode from "./services/qr-code/create.js"
import createPassword from "./services/password/create.js";
import callMyCart from './services/cart/create.js';

async function main() {
  prompt.start(); // start primeiro

  prompt.get(mainPrompt, async (err, choose) => {
    if (err) {
      console.error(err);
      return;
    }

    if (choose.select == 1) {
      await createQRCode();
    } else if (choose.select == 2) {
      await createPassword();
    } else if (choose.select == 3) {
      await callMyCart(); // Chamada da função aqui, só executa quando select == 3
    }
  });
}

main();