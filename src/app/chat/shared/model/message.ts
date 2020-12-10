import { User } from './user'
import { Action } from './action'

export interface Message {
    from?: User
    nickname?: String
    message?: String
    action?: Action
    token: String
}
