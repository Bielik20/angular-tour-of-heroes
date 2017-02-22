import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router'

import { Quest } from '../quest';
import { QuestService } from '../quest.service';

@Component({
  selector: 'my-quests',
  templateUrl: './quests.component.html',
  styleUrls: ['./quests.component.css']
})

export class QuestsComponent implements OnInit {

  @Input()
  hero_id?: number;
  quests: Quest[];

  constructor(private questService: QuestService) { }

  ngOnInit() {
    if(this.hero_id == null)
      this.getQuests();
    else
      this.getOwnedByHero(this.hero_id);
  }

  getQuests(): void {
    this.questService.getAll()
      .then(quests => this.quests = quests);
  }

  getOwnedByHero(hero_id: number): void {
    this.questService.getOwnedByHero(hero_id)
      .then(quests => this.quests = quests);
  }

}
