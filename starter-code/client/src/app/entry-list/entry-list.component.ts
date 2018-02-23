import { Component, OnInit } from '@angular/core';
import { JournalService } from '../services/journalservice.service';

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css']
})
export class EntryListComponent implements OnInit {
  
  entriesList: Array<any>

  constructor(private jS:JournalService) { 
    this.jS.getEntriesList().subscribe( list => this.entriesList = list );
  }

  ngOnInit() {
  }

}