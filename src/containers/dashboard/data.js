
import { createContext } from 'react'
import overview from '../../images/1. overview.svg'
import tickets from '../../images/2. tickets.svg'
import ideas from '../../images/4. contacts.svg'
import agents from '../../images/5. agents.svg'
import settings from '../../images/5. agents.svg'
import sub from '../../images/a_2. subscription.svg'
import logo from '../../images/logo.svg'


export const data = {

    boxesData: [
        {
            text: 'unresolved', number: '65',
            grid: { x: 3, y: 2, w: 1.5, h: 1, },
            key: 1
        },
        {
            text: 'resolved', number: '45',
            grid: { x: 5, y: 2, w: 1.5, h: 1, },
            key: 2
        },
        {
            text: 'closed', number: '6',
            grid: { x: 7, y: 2, w: 1.5, h: 1, },
            key: 3
        },
        {
            text: 'pending', number: '2',
            grid: { x: 9, y: 2, w: 1.5, h: 1, },
            key: 4
        },

    ],
    sideBarData: [
        {
            itemIcon: overview,
            itemName: 'overview',
            id: '0'
        },
        {
            itemIcon: tickets,
            itemName: 'tickets',
            id: '1'
        },
        {
            itemIcon: ideas,
            itemName: 'ideas',
            id: '2'

        },
        {
            itemIcon: settings,
            itemName: 'agents',
            id: '3'
        },
        {
            itemIcon: sub,
            itemName: 'settings',
            id: '4'
        },
        {
            itemIcon: agents,
            itemName: 'sub',
            id: '5'
        },
    ],
    cards: [
        {
            header: 'Unresolved tickets',
            subheader: 'Group:Support',
            details: 'View details',
            cardItems: [
                {
                    status: 'Waiting on feature Request',
                    number: 4545
                },
                {
                    status: 'Awaiting customers response',
                    number: 1000
                },
                {
                    status: 'Awaiting developer Fix',
                    number: 914
                },
                {
                    status: 'pending',
                    number: 100
                }
            ]

        }
    ]

}

export const cards = createContext(data.cards)