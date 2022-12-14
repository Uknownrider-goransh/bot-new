import MessageHandler from '../../Handlers/MessageHandler'

import BaseCommand from '../../lib/BaseCommand'

import WAClient from '../../lib/WAClient'

import { IParsedArgs, ISimplifiedMessage } from '../../typings'

import axios from 'axios'

export default class Command extends BaseCommand {

    constructor(client: WAClient, handler: MessageHandler) {

        super(client, handler, {

            command: 'covid',

            description: 'get the covid-19 info of the current place',

            aliases: ['COVID'],

            category: 'educative',

            usage: `${client.config.prefix}covid [name]`

        })

    }

    run = async (M: ISimplifiedMessage, { joined }: IParsedArgs): Promise<void> => {

        

        

        

        if (!joined) return void M.reply('๐ Provide a place name')

        const term = joined.trim()

        await axios.get(`https://api.abirhasan.wtf/covid19/v1?country=${term}`)

        .then((response) => {

                // console.log(response);

                const text = `๐ฆ  Covid Information of the place *${term}* is \n\n ๐งช *TotalTests:* ${response.data.TotalTests} \n ๐ *ActiveCases:* ${response.data.ActiveCases} \n ๐ฅ *Confirmed:* ${response.data.Confirmed} \n ๐ณ *Critical:* ${response.data.Critical} \n โ *Recovered:* ${response.data.Recovered} \n ๐งซ *NewCases:* ${response.data.NewCases} \n ๐ *NewDeaths:* ${response.data.NewDeaths} \n โ *TotalCases:* ${response.data.TotalCases} \n ๐ฉ *Country:* ${response.data.Country} `

                M.reply(text);

            })

            .catch(err => {

                M.reply(`๐ Please provide a valid place name \n Error: ${err}`)

            }

            )

    };

}
