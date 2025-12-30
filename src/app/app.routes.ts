import { Routes } from '@angular/router';
import { AppShellComponent } from './core/layout/app-shell/app-shell.component';
import { HomeComponent } from './features/home/home.component';
import { RecipesComponent } from './features/recipes/recipes.component';
import { LoginComponent } from './features/login/login.component';
import { ContactsComponent } from './features/contacts/contacts.component';
import { SignupComponent } from './features/signup/signup.component';
import { SettingsComponent } from './features/settings/settings.component';

export const routes: Routes = [
    {
        path: '', component: AppShellComponent,
        children: [
            { path: '', component: HomeComponent },
            { path: 'recipes', component: RecipesComponent },
            { path: 'contacts', component: ContactsComponent },
            { path: 'settings', component: SettingsComponent}
        ],
    },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
];
