import { sequelize } from './database.js'
import { Task } from './models/task.js'
import { User } from './models/user.js'

User.hasMany(Task, { as: 'tasks', foreignKey: 'ownerId', onDelete: 'CASCADE' })

Task.belongsTo(User, { as: 'owner', foreignKey: 'ownerId' })
export async function initializeDatabase() {
    return await sequelize.sync()
}
