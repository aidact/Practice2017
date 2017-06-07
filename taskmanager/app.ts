/// <reference path="node_modules/practice-17-taskmanager/index.d.ts" />

const mdl = angular.module('app', [
    TaskManager.MODULE.name
]);

class LoginController {
    
    public login: string;
    public password: string;
    public loading: boolean;
    
    constructor(private auth: TaskManager.AuthService) {}

    public singin() {
        this.loading = true;
        this.auth.SignIn(this.login, this.password).then((token) => {
            window.location.assign('page.html');
        }, (err) => {
            console.log(err);
            alert("Login or password incorrect");
        }).finally(()=>{
            this.loading = false;
        });
        
    }

}
LoginController.$inject = ['tmAuthService'];

class TestController {
    projects: TaskManager.IProject[] = [];
    selectedProject: TaskManager.IProject;

    constructor(private projectService: TaskManager.ProjectService) {
        projectService.GetProjects().then(projects => {
            this.projects = projects;
        })        
    } 


    showTasks(project) {
        this.selectedProject = project;
    }
}

TestController.$inject = ['tmProjectService'];

class TaskListComponent {
    public projectValue: TaskManager.IProject;

    public set project(value: TaskManager.IProject) {
        if (value != undefined && value !=null) {
            // download tasks
        }
    }

    constructor() {}

    $onInit() {
        console.log(this);
    }
}

mdl.component('taskList', {
    controller: TaskListComponent,
    template: `{{$ctrl.project}}`,
    bindings: {
        project: '<'
    }
})

mdl.controller('testcontroller', TestController)
mdl.controller('logincontroller', LoginController);