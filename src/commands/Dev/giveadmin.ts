import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            modsOnly: true,
            command: 'giveadmin',
            description: 'promotes group members,bot owner & mods',
            category: 'dev',
            usage: `${client.config.prefix}giveadmin [@mention | tag]`,
            baseXp: 10
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        if (!M.groupMetadata?.admins?.includes(this.client.user.jid))
            return void M.reply(`❌ Failed to ${this.config.command} as I'm not an admin`)
        if (M.quoted?.sender) M.mentioned.push(M.quoted.sender)
        if (!M.mentioned.length) return void M.reply(`Please tag the users you want to ${this.config.command}`)
        M.mentioned.forEach(async (user) => {
            const usr = this.client.contacts[user]
            const username = usr.notify || usr.vname || usr.name || user.split('@')[0]
            if (M.groupMetadata?.admins?.includes(user)) M.reply(`❌ Skipped *${username}* as they're already an admin`)
            else {
                await this.client.groupMakeAdmin(M.from, [user])
                M.reply(`*🧧Status:*\n\n🍁Added *${username}* as an admin.`)
            }
        })
    }
}
