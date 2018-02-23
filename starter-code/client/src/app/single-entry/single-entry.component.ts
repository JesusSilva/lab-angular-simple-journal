import { Component, OnInit } from '@angular/core';
import { JournalService } from '../services/journalservice.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-entry',
  templateUrl: './single-entry.component.html',
  styleUrls: ['./single-entry.component.css']
})
export class SingleEntryComponent implements OnInit {

  entriesList: Array<any>;
  entry: any;
  
  constructor(private jS: JournalService ,private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getEntryDetails(params['id']);
    })
  }

  getEntryDetails(id) {
    this.jS.getSingleEntry(id)
    .subscribe((entry) => {
        this.entry = entry;
    })
  }

}