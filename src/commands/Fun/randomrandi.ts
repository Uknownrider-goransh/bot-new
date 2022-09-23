/** @format */

import { MessageType, Mimetype } from "@adiwajshing/baileys";
import MessageHandler from "../../Handlers/MessageHandler";
import BaseCommand from "../../lib/BaseCommand";
import WAClient from "../../lib/WAClient";
import { ISimplifiedMessage } from "../../typings";

export default class Command extends BaseCommand {
	constructor(client: WAClient, handler: MessageHandler) {
		super(client, handler, {
			command: "sexygirl",
			description: "shows u 18+ girls videos",
			category: "fun",
			usage: `${client.config.prefix}waifu2`,
			baseXp: 10,
		});
	}

	run = async (M: ISimplifiedMessage): Promise<void> => {
		const video = [
			"https://telegra.ph/file/77dda3c316a18c202c9c6.mp4",            
			"https://telegra.ph/file/124064431d4e4e21bcace.mp4", 
			"https://telegra.ph/file/05607d67524c6816a8226.mp4", 
			"https://telegra.ph/file/1aaee51ce8d5854568b2b.mp4", 		
			" https://telegra.ph/file/b30ca13fb6024fe0b16dd.mp4", 
			"https://telegra.ph/file/a33fa0df27a5c93d061f5.mp4", 
			"https://telegra.ph/file/bfb83f0fbc75c6102b97b.mp4", 
			"https://telegra.ph/file/b650decd7fa96be3b4dae.mp4", 
			"https://telegra.ph/file/64991525110749a13172c.mp4", 
			"https://telegra.ph/file/9057f0307a181dc24660a.mp4", 
			"https://telegra.ph/file/311bd648a37e0be533c29.mp4", 
			"https://telegra.ph/file/0cfc4956bf4eda5d1e257.mp4", 
			"https://telegra.ph/file/764b0140ec5b96dc48406.mp4", 
			"https://telegra.ph/file/2b7d3988efa7fec11bec8.mp4", 
			"https://telegra.ph/file/c74b7bd7cecea05edc4ae.mp4", 
		        "https://telegra.ph/file/a7b9646264507f2ccebd7.mp4", 
		        "https://telegra.ph/file/cd7fbe54c4fcef0cb3bda.mp4", 
		        "https://telegra.ph/file/96357df5a28e659c96ba1.mp4", 
		        "https://telegra.ph/file/0fb930559e02eabf885f3.mp4", 
		        "https://telegra.ph/file/a1edebfddb9e0ed4a7ab8.mp4", 
		        "https://telegra.ph/file/aabe2b37a752072407a7a.mp4", 
		        "https://telegra.ph/file/bd21cb0802d1428782c1c.mp4", 
		        "https://telegra.ph/file/c3cd599a41bbe630c6001.mp4", 
			"https://telegra.ph/file/45a8be27f0556a405917e.mp4", 
			"https://telegra.ph/file/7d2ecabc8b7237ac441ec.mp4", 
			"https://telegra.ph/file/faf8f07fbae12013740cf.mp4", 
             ];
                const selected = video[Math.floor(Math.random() * video.length)];
		return void this.client.sendMessage(
			M.from,
			{ url: selected },
			MessageType.video,
			{
				
				caption: `(♥ω♥) Here is your random sexy girl🌟`,
			}
		);
	};
}
