/** @format */

import { MessageType, Mimetype } from "@adiwajshing/baileys";

import MessageHandler from "../../Handlers/MessageHandler";

import BaseCommand from "../../lib/BaseCommand";

import WAClient from "../../lib/WAClient";

import { ISimplifiedMessage } from "../../typings";

export default class Command extends BaseCommand {

  constructor(client: WAClient, handler: MessageHandler) {

    super(client, handler, {

      command: "𝘀𝘂𝗽𝗽𝗼𝗿𝘁",

      description: "shows the rules for beyond",

      category: "general",

      usage: `${client.config.prefix}support`,

      baseXp: 0,

    });

  }

  run = async (M: ISimplifiedMessage): Promise<void> => {

    const buttons = [

      {

        buttonId: "rules",

        buttonText: { displayText: `${this.client.config.prefix}rules` },

        type: 1,

      },

    ];

    const buttonMessage: any = {

      contentText: `\n\n_*

          🏮 *BOT RULES*

🚀 _Do not call bot, if you do then you'll get automatically blocked and banned by bot._

🚀 _Do not spam bot with commands, if bot is not responding then it means either bot is off or there's internet issue at owner's end._

🚀 _Do not abuse/disrespect bot and its owner._

🚀 _If you see any bug/error contact owners._

🚀 _If you want this bot in your group then contact owner by typing .owner/mod._

🚀 _Enjoy the bot and have fun as you can._\n\n`,

      footerText: "©zero two 2022",

      buttons: buttons,

      headerType: 1,

    };

    await M.reply(buttonMessage, MessageType.buttonsMessage);

  };

}

