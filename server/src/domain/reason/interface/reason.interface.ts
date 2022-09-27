import {Document} from 'mongoose'

export interface IReason extends Document {
    readonly machine : string
    readonly reason : string
}