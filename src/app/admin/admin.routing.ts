import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders} from '@angular/core';
import { AdminComponent } from './admin/admin.component';
import { HomePageComponent } from './admin/home-page/home-page.component';
import { UsersComponent } from './admin/users/users.component';

export const routes: Routes = [

    {
        path: '',
        redirectTo: 'main',
        pathMatch: 'full'
    },
    {
        path: 'main',
        component: AdminComponent,
        children: [
            {
                path: '',
                component: HomePageComponent,
            },
            {
                path: 'users',
                component: UsersComponent,
            },
        ]
    },
    
]

export const AdminRouting: ModuleWithProviders = RouterModule.forChild(routes)