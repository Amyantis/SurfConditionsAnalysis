import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-spot-selector',
  templateUrl: './spot-selector.component.html',
  styleUrls: ['./spot-selector.component.css']
})
export class SpotSelectorComponent implements OnInit {
  selectedSpot = '5842041f4e65fad6a7708c8d';

  spotControl = new FormControl();

  spotGroups = [{
    name: 'Australia',
    disabled: true,
    spots: [
    ]
  },
    {
      name: 'France',
      disabled: false,
      spots: [
        {value: '5842041f4e65fad6a7708c8d', viewValue: 'Lacanau'},
      ]
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
