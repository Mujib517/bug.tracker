import { Injectable } from '@angular/core';

@Injectable()
export class TaskService {

    get():any[] {
        return  [{
            id: 1,
            name: "Recharge",
            priority: 'High',
            isCompleted: false,
            category: 'General',
            created: new Date()
        },
        {
            id: 2,
            name: "Buy Groceries",
            priority: 'Medium',
            isCompleted: false,
            category: 'General',
            created: new Date()
        },
        {
            id: 3,
            name: "Shop",
            priority: 'Low',
            isCompleted: false,
            category: 'Shopping',
            created: new Date()
        },
        {
            id: 4,
            name: "Some Task",
            priority: 'Very Low',
            isCompleted: true,
            created: new Date()
        }];
    }
}