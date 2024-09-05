import { Component, signal, computed,Input,input, Output,output, EventEmitter} from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

// const random_index = Math.floor(Math.random()*DUMMY_USERS.length)

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  // selectedUser = signal(DUMMY_USERS[random_index]);
  // imagePath = computed(()=>"assets/users/"+ this.selectedUser().avatar);
  // onUserClick (){
  //   // console.log('Clicked!');
  //   const random_index = Math.floor(Math.random()*DUMMY_USERS.length)
  //   this.selectedUser.set(DUMMY_USERS[random_index]);
  // }


/*************** Signals ******************/
  // avatar = input.required<string>();
  // name = input.required<string>();
  // onUserClick(){}
  // imagePath = computed(()=>{
  //   return 'assets/users/'+this.avatar();
  // })
/******************************************/
  @Input({required:true}) id!:string;
  @Input({required:true}) avatar!:string;
  @Input({required:true}) name!:string;
  @Output() select = new EventEmitter<string>();
  // select = output<string>()
 
  onUserClick(){
    this.select.emit(this.id);
  }
  get imagePath(){
    return 'assets/users/'+this.avatar;
  }
}
