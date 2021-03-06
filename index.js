// stores the money
let money = {
  tony: 100,
  eric: 100,
  mom: 100,
  dad: 100,
};

// stores highest single amount won
let highest_money_won = {
  tony: 0,
  eric: 0,
  mom: 0,
  dad: 0,
};

//stores money won
let money_won = {
  tony: 0,
  eric: 0,
  mom: 0,
  dad: 0,
};
// stores highest money reached
let high_score_money = {
  tony: 100,
  eric: 100,
  mom: 100,
  dad: 100,
};
// stores lowest money reached
let low_score_money = {
  tony: 100,
  eric: 100,
  mom: 100,
  dad: 100,
};
// stores the wins
let wins = {
  tony: 0,
  eric: 0,
  mom: 0,
  dad: 0,
};

// stores the positions for the turns
let position = {
  tony: 0,
  eric: 0,
  mom: 0,
  dad: 0,
};

let most_recent_winnings = {
  tony: 0,
  eric: 0,
  mom: 0,
  dad: 0,
};

let difference_from_previous_highest_win = {
  tony: 0,
  eric: 0,
  mom: 0,
  dad: 0,
};

let previous_highest_win = {
  tony: 0,
  eric: 0,
  mom: 0,
  dad: 0,
};

let repeated_win_counter = {
  tony: 1,
  eric: 1,
  mom: 1,
  dad: 1,
};
let tony_boolean = false;
let eric_boolean = false;
let mom_boolean = false;
let dad_boolean = false;

let another_counter1 = 1;
let another_counter2 = 1;
let another_counter3 = 1;
let another_counter4 = 1;

// variables for repeated wins
let counter = 0;
let counter2 = 0;
let counter3 = 0;
let counter4 = 0;

// gets the names of the players
let player_one_name = document.getElementById("name-one");
player_one_name.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    document.getElementById("tony-name").innerHTML = player_one_name.value;
    player_one_name.style.display = "none";

    let firstperson = document.getElementsByClassName("table-name-firstperson");
    for (let i = 0; i < firstperson.length; i++) {
      firstperson[i].innerHTML = player_one_name.value;
    }
  }
});

let player_two_name = document.getElementById("name-two");
player_two_name.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    player_two_name.style.display = "none";
    document.getElementById("eric-name").innerHTML = player_two_name.value;
    let secondperson = document.getElementsByClassName(
      "table-name-secondperson"
    );
    for (let i = 0; i < secondperson.length; i++) {
      secondperson[i].innerHTML = player_two_name.value;
    }
  }
});

let player_three_name = document.getElementById("name-three");
player_three_name.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    player_three_name.style.display = "none";
    document.getElementById("mom-name").innerHTML = player_three_name.value;
    let thirdperson = document.getElementsByClassName("table-name-thirdperson");
    for (let i = 0; i < thirdperson.length; i++) {
      thirdperson[i].innerHTML = player_three_name.value;
    }
  }
});

let player_four_name = document.getElementById("name-four");
player_four_name.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    player_four_name.style.display = "none";
    document.getElementById("dad-name").innerHTML = player_four_name.value;
    fourthperson = document.getElementsByClassName("table-name-fourthperson");
    for (let i = 0; i < fourthperson.length; i++) {
      fourthperson[i].innerHTML = player_four_name.value;
    }
  }
});

// shows whos the leader of the game
let position_tracker = () => {
  if (position.tony === round_counter) {
    document.getElementById("tony-red").style.visibility = "visible";
  } else if (position.mom === round_counter) {
    document.getElementById("mom-red").style.visibility = "visible";
  } else if (position.eric === round_counter) {
    document.getElementById("eric-red").style.visibility = "visible";
  } else if (position.dad === round_counter) {
    document.getElementById("dad-red").style.visibility = "visible";
  }
};

let position_tracker_with_rounds = () => {
  if (position.tony === round_counter) {
    document.getElementById("tony-red").style.visibility = "visible";
    document.getElementById("tony-king").style.visibility = "visible";
  } else if (position.mom === round_counter) {
    document.getElementById("mom-red").style.visibility = "visible";
    document.getElementById("mom-king").style.visibility = "visible";
  } else if (position.eric === round_counter) {
    document.getElementById("eric-red").style.visibility = "visible";
    document.getElementById("eric-king").style.visibility = "visible";
  } else if (position.dad === round_counter) {
    document.getElementById("dad-red").style.visibility = "visible";
    document.getElementById("dad-king").style.visibility = "visible";
  }
};

let repeated_wins_counter_visibility = () => {
  document.getElementById("tony-red").style.visibility = "hidden";
  document.getElementById("dad-red").style.visibility = "hidden";
  document.getElementById("eric-red").style.visibility = "hidden";
  document.getElementById("mom-red").style.visibility = "hidden";
};
let repeated_wins_counter_visibility_numbers = () => {
  document.getElementById("tony-king").style.visibility = "hidden";
  document.getElementById("eric-king").style.visibility = "hidden";
  document.getElementById("mom-king").style.visibility = "hidden";
  document.getElementById("dad-king").style.visibility = "hidden";
};

// figures out how many rounds are left
let turn_counter = () => {
  if (turns_left === 12 || turns_left === 8 || turns_left === 4) {
    if (turns_left === 12) {
      document.getElementById("round-number").innerHTML = 2;
    } else if (turns_left === 8) {
      document.getElementById("round-number").innerHTML = 3;
    } else if (turns_left === 4) {
      document.getElementById("round-number").innerHTML = 4;
    }
  } else if (turns_left <= 16 && turns_left >= 13) {
    document.getElementById("round-number").innerHTML = 1;
  } else if (turns_left <= 11 && turns_left >= 9) {
    document.getElementById("round-number").innerHTML = 2;
  } else if (turns_left <= 7 && turns_left >= 5) {
    document.getElementById("round-number").innerHTML = 3;
  } else if (turns_left <= 3 && turns_left >= 0) {
    document.getElementById("round-number").innerHTML = 4;
  }
};

let reset_to_last_round = () => {
  if (win_order[array_length - 2] === "e") {
    if (previous_in_a_row_wins[how_many_rounds_passed - 2] > 0) {
      repeated_counter_eric = false;
      repeated_counter_tony = true;
      repeated_counter_mom = true;
      repeated_counter_dad = true;
      repeated_wins_counter_visibility();
      repeated_wins_counter_visibility_numbers();

      counter2 = previous_in_a_row_wins[how_many_rounds_passed - 2];

      document.getElementById("eric-king").innerHTML = counter2;
      document.getElementById("eric-king").style.visibility = "visible";
    }

    document.getElementById("eric-red").style.visibility = "visible";
  } else if (win_order[array_length - 2] === "t") {
    if (previous_in_a_row_wins[how_many_rounds_passed - 2] > 0) {
      repeated_counter_tony = false;
      repeated_counter_eric = true;
      repeated_counter_mom = true;
      repeated_counter_dad = true;
      repeated_wins_counter_visibility();
      repeated_wins_counter_visibility_numbers();

      counter = previous_in_a_row_wins[how_many_rounds_passed - 2];

      document.getElementById("tony-king").innerHTML = counter;
      document.getElementById("tony-king").style.visibility = "visible";
    }
    document.getElementById("tony-red").style.visibility = "visible";
  } else if (win_order[array_length - 2] === "m") {
    if (previous_in_a_row_wins[how_many_rounds_passed - 2] > 0) {
      repeated_counter_mom = false;
      repeated_counter_eric = true;
      repeated_counter_tony = true;
      repeated_counter_dad = true;
      repeated_wins_counter_visibility();
      repeated_wins_counter_visibility_numbers();

      counter3 = previous_in_a_row_wins[how_many_rounds_passed - 2];

      document.getElementById("mom-king").innerHTML = counter3;
      document.getElementById("mom-king").style.visibility = "visible";
    }
    document.getElementById("mom-red").style.visibility = "visible";
  } else if (win_order[array_length - 2] === "d") {
    if (previous_in_a_row_wins[how_many_rounds_passed - 2] > 0) {
      repeated_counter_dad = false;
      repeated_counter_eric = true;
      repeated_counter_mom = true;
      repeated_counter_tony = true;
      repeated_wins_counter_visibility();
      repeated_wins_counter_visibility_numbers();

      counter4 = previous_in_a_row_wins[how_many_rounds_passed - 2];

      document.getElementById("dad-king").innerHTML = counter4;
      document.getElementById("dad-king").style.visibility = "visible";
    }
    document.getElementById("dad-red").style.visibility = "visible";
  }
  how_many_rounds_passed--;
  previous_in_a_row_wins.pop();
  tony_boolean = false;
  eric_boolean = false;
  mom_boolean = false;
  dad_boolean = false;
  if (array_length === 1 ) {
    repeated_counter_dad = true;
    repeated_counter_eric = true;
    repeated_counter_mom = true;
    repeated_counter_tony = true;
  }
};
/*
  let array_length = win_order.length;
  if (most_recent_winnings.tony > 0) {
    most_recent_winnings.tony=0;
  }
  else if(most_recent_winnings.eric > 0){
    most_recent_winnings.eric=0;
  }
  else if(most_recent_winnings.mom > 0){
    most_recent_winnings.mom=0;
  }
  else if(most_recent_winnings.dad > 0){
    most_recent_winnings.dad=0;
  }
*/
//  win_order.push('t');
// win_prize.push(3*val);

//set_visibility();
//  // shows whos the leader of the game
// position_tracker();
// figures out how many rounds are left
// turn_counter();
////////////////////////////////////////////////////////////////////////////////

let reset_to_round_4 = {
  tony: true,
  eric: true,
  mom: true,
  dad: true,
};

let previous_in_a_row_wins = [];
/* for (let i = 0; i < 16; i++) {
  previous_in_a_row_wins[i] = 0;

}*/
let array_length;

let reset_button = document.getElementById("reset-button");
reset_button.addEventListener("click", function (event) {
  array_length = win_order.length;
  if (array_length > 0) {
    if (win_order[array_length - 1] === "t") {
      // resets money won
      money.tony -= win_prize[array_length];
      money.eric += win_prize[array_length] / 3;
      money.dad += win_prize[array_length] / 3;
      money.mom += win_prize[array_length] / 3;

      // redos highest win
      if (
        previous_highest_win.tony != highest_money_won.tony &&
        repeated_win_counter.tony != 1
      ) {
        document.getElementById("tony-highest-money-received").innerHTML =
          highest_money_won.tony - difference_from_previous_highest_win.tony;
      } else {
        document.getElementById("tony-highest-money-received").innerHTML =
          previous_highest_win.tony;
      }

      // minus wins
      wins.tony -= 1;
      document.getElementById("display-wins-tony").innerHTML = wins.tony;

      // undos money received chart
      if (win_prize[array_length] > 0) {
        money_won.tony -= win_prize[array_length];
        document.getElementById("tony-moneymade").innerHTML = money_won.tony;
      } else {
        money_won.eric += win_prize[array_length] / 3;
        money_won.mom += win_prize[array_length] / 3;
        money_won.dad += win_prize[array_length] / 3;
        document.getElementById("eric-moneymade").innerHTML = money_won.eric;
        document.getElementById("mom-moneymade").innerHTML = money_won.mom;
        document.getElementById("dad-moneymade").innerHTML = money_won.dad;
      }

      // removes highscore
      if (high_score_money_array[array_length - 1] > 0) {
        high_score_money.tony = money.tony;
        high_score_money.eric = money.eric;
        high_score_money.mom = money.mom;
        high_score_money.dad = money.dad;
        document.getElementById("tony-highscore").innerHTML =
          high_score_money.tony;
        document.getElementById("eric-highscore").innerHTML =
          high_score_money.eric;
        document.getElementById("mom-highscore").innerHTML =
          high_score_money.mom;
        document.getElementById("dad-highscore").innerHTML =
          high_score_money.dad;
      }

      // removes lowest score
      if (low_score_money_array[array_length - 1] < 100) {
        if (money.mom > low_score_money.mom) {
        low_score_money.mom = money.mom;
        document.getElementById("mom-lowscore").innerHTML = low_score_money.mom;
        }
        if (money.eric > low_score_money.eric) {
        low_score_money.eric = money.eric;
        document.getElementById("eric-lowscore").innerHTML = low_score_money.eric;
        }
        if (money.dad > low_score_money.dad){
        low_score_money.dad = money.dad;
        document.getElementById("dad-lowscore").innerHTML = low_score_money.dad;
        }
      }

      // resets prize won
      if (win_prize[array_length - 1] === 0 && turns_left === 16) {
        document.getElementById("tony-prize").innerHTML = 0;
        document.getElementById("eric-prize").innerHTML = 0;
        document.getElementById("mom-prize").innerHTML = 0;
        document.getElementById("dad-prize").innerHTML = 0;
      } else {
        document.getElementById("tony-prize").innerHTML =
          "+" + previous_highest_win.tony;
        document.getElementById("eric-prize").innerHTML =
          "-" + previous_highest_win.tony / 3;
        document.getElementById("mom-prize").innerHTML =
          "-" + previous_highest_win.tony / 3;
        document.getElementById("dad-prize").innerHTML =
          "-" + previous_highest_win.tony / 3;
      }
      // figures out how many turns are left and makes the red circle work

      //   position_tracker_with_rounds();

      // turn_counter();
      if (counter >= 2) {
        counter--;

        document.getElementById("tony-king").innerHTML = counter;
        document.getElementById("tony-king").style.visiblity = "visible";
        document.getElementById("tony-red").style.visiblity = "visible";
      } else if (counter === 1) {
        counter--;
        document.getElementById("tony-king").style.visibility = "hidden";
        document.getElementById("tony-red").style.visiblity = "visible";
      } else {
        if (turns_left != 16) {
          turns_left++;
          document.getElementById("turns-left").innerHTML = turns_left;
          document.getElementById("turns-left").style.visibility = "visible";
        }
        document.getElementById("tony-king").style.visibility = "hidden";
        document.getElementById("tony-red").style.visiblity = "hidden";

        if (round_counter === 1) {
          round_counter = 4;
        } else {
          round_counter--;
        }
        turn_counter();
        reset_to_last_round();
      }
    } else if (win_order[array_length - 1] === "e") {
      // resets money won
      money.eric -= win_prize[array_length];
      money.tony += win_prize[array_length] / 3;
      money.dad += win_prize[array_length] / 3;
      money.mom += win_prize[array_length] / 3;

      // redos highest win
      if (
        previous_highest_win.eric != highest_money_won.eric &&
        repeated_win_counter.eric != 1
      ) {
        document.getElementById("eric-highest-money-received").innerHTML =
          highest_money_won.eric - difference_from_previous_highest_win.eric;
      } else {
        document.getElementById("eric-highest-money-received").innerHTML =
          previous_highest_win.eric;
      }

      // minus wins
      wins.eric -= 1;
      document.getElementById("display-wins-eric").innerHTML = wins.eric;

      // undos money received chart
      if (win_prize[array_length] > 0) {
        money_won.eric -= win_prize[array_length];
        document.getElementById("eric-moneymade").innerHTML = money_won.eric;
      } else {
        money_won.tony += win_prize[array_length] / 3;
        money_won.mom += win_prize[array_length] / 3;
        money_won.dad += win_prize[array_length] / 3;
        document.getElementById("tony-moneymade").innerHTML = money_won.eric;
        document.getElementById("mom-moneymade").innerHTML = money_won.mom;
        document.getElementById("dad-moneymade").innerHTML = money_won.dad;
      }

      // removes highscore
      if (high_score_money_array[array_length - 1] > 0) {
        high_score_money.tony = money.tony;
        high_score_money.eric = money.eric;
        high_score_money.mom = money.mom;
        high_score_money.dad = money.dad;
        document.getElementById("tony-highscore").innerHTML =
          high_score_money.tony;
        document.getElementById("eric-highscore").innerHTML =
          high_score_money.eric;
        document.getElementById("mom-highscore").innerHTML =
          high_score_money.mom;
        document.getElementById("dad-highscore").innerHTML =
          high_score_money.dad;
      }

      // removes lowest score
      if (low_score_money_array[array_length - 1] < 100) {
        if (money.mom > low_score_money.mom) {
        low_score_money.mom = money.mom;
        document.getElementById("mom-lowscore").innerHTML = low_score_money.mom;
        }
        if (money.tony > low_score_money.tony) {
        low_score_money.tony = money.tony;
        document.getElementById("tony-lowscore").innerHTML = low_score_money.tony;
        }
        if (money.dad > low_score_money.dad){
        low_score_money.dad = money.dad;
        document.getElementById("dad-lowscore").innerHTML = low_score_money.dad;
        }
      }

      // resets prize won
      if (win_prize[array_length - 1] === 0 && turns_left === 16) {
        document.getElementById("tony-prize").innerHTML = 0;
        document.getElementById("eric-prize").innerHTML = 0;
        document.getElementById("mom-prize").innerHTML = 0;
        document.getElementById("dad-prize").innerHTML = 0;
      } else {
        document.getElementById("eric-prize").innerHTML =
          "+" + previous_highest_win.eric;
        document.getElementById("tony-prize").innerHTML =
          "-" + previous_highest_win.eric / 3;
        document.getElementById("mom-prize").innerHTML =
          "-" + previous_highest_win.eric / 3;
        document.getElementById("dad-prize").innerHTML =
          "-" + previous_highest_win.eric / 3;
      }
      // figures out how many turns are left and makes the red circle work

      //   position_tracker_with_rounds();

      // turn_counter();
      if (counter2 >= 2) {
        counter2--;

        document.getElementById("eric-king").innerHTML = counter2;
        document.getElementById("eric-king").style.visiblity = "visible";
        document.getElementById("eric-red").style.visiblity = "visible";
      } else if (counter2 === 1) {
        counter2--;
        document.getElementById("eric-king").style.visibility = "hidden";
        document.getElementById("eric-red").style.visiblity = "visible";
      } else {
        if (turns_left != 16) {
          turns_left++;
          document.getElementById("turns-left").innerHTML = turns_left;
          document.getElementById("turns-left").style.visibility = "visible";
        }
        document.getElementById("eric-king").style.visibility = "hidden";
        document.getElementById("eric-red").style.visiblity = "hidden";

        if (round_counter === 1) {
          round_counter = 4;
        } else {
          round_counter--;
        }
        turn_counter();
        reset_to_last_round();
      }
    } else if (win_order[array_length - 1] === "m") {
      // resets money won
      money.mom -= win_prize[array_length];
      money.eric += win_prize[array_length] / 3;
      money.dad += win_prize[array_length] / 3;
      money.tony += win_prize[array_length] / 3;

      // redos highest win
      if (
        previous_highest_win.mom != highest_money_won.mom &&
        repeated_win_counter.mom != 1
      ) {
        document.getElementById("mom-highest-money-received").innerHTML =
          highest_money_won.mom - difference_from_previous_highest_win.mom;
      } else {
        document.getElementById("mom-highest-money-received").innerHTML =
          previous_highest_win.mom;
      }
      // minus wins
      wins.mom -= 1;
      document.getElementById("display-wins-mom").innerHTML = wins.mom;

      // undos money received chart
      if (win_prize[array_length] > 0) {
        money_won.mom -= win_prize[array_length];
        document.getElementById("mom-moneymade").innerHTML = money_won.mom;
      } else {
        money_won.eric += win_prize[array_length] / 3;
        money_won.tony += win_prize[array_length] / 3;
        money_won.dad += win_prize[array_length] / 3;
        document.getElementById("eric-moneymade").innerHTML = money_won.eric;
        document.getElementById("tony-moneymade").innerHTML = money_won.tony;
        document.getElementById("dad-moneymade").innerHTML = money_won.dad;
      }

      // removes highscore
      if (high_score_money_array[array_length - 1] > 0) {
        high_score_money.tony = money.tony;
        high_score_money.eric = money.eric;
        high_score_money.mom = money.mom;
        high_score_money.dad = money.dad;
        document.getElementById("tony-highscore").innerHTML =
          high_score_money.tony;
        document.getElementById("eric-highscore").innerHTML =
          high_score_money.eric;
        document.getElementById("mom-highscore").innerHTML =
          high_score_money.mom;
        document.getElementById("dad-highscore").innerHTML =
          high_score_money.dad;
      }
      // removes lowest score
      if (low_score_money_array[array_length - 1] < 100) {
        if (money.tony > low_score_money.tony) {
        low_score_money.tony = money.tony;
        document.getElementById("tony-lowscore").innerHTML = low_score_money.tony;
        }
        if (money.eric > low_score_money.eric) {
        low_score_money.eric = money.eric;
        document.getElementById("eric-lowscore").innerHTML = low_score_money.eric;
        }
        if (money.dad > low_score_money.dad){
        low_score_money.dad = money.dad;
        document.getElementById("dad-lowscore").innerHTML = low_score_money.dad;
        }
      }

      // resets prize won
      if (win_prize[array_length - 1] === 0 && turns_left === 16) {
        document.getElementById("tony-prize").innerHTML = 0;
        document.getElementById("eric-prize").innerHTML = 0;
        document.getElementById("mom-prize").innerHTML = 0;
        document.getElementById("dad-prize").innerHTML = 0;
      } else {
        document.getElementById("mom-prize").innerHTML =
          "+" + previous_highest_win.mom;
        document.getElementById("eric-prize").innerHTML =
          "-" + previous_highest_win.mom / 3;
        document.getElementById("tony-prize").innerHTML =
          "-" + previous_highest_win.mom / 3;
        document.getElementById("dad-prize").innerHTML =
          "-" + previous_highest_win.mom / 3;
      }

      // figures out how many turns are left and makes the red circle work
      //   position_tracker_with_rounds();

      // turn_counter();
      if (counter3 >= 2) {
        counter3--;

        document.getElementById("mom-king").innerHTML = counter3;
        document.getElementById("mom-king").style.visiblity = "visible";
        document.getElementById("mom-red").style.visiblity = "visible";
      } else if (counter3 === 1) {
        counter3--;
        document.getElementById("mom-king").style.visibility = "hidden";
        document.getElementById("mom-red").style.visiblity = "visible";
      } else {
        if (turns_left != 16) {
          turns_left++;
          document.getElementById("turns-left").innerHTML = turns_left;
          document.getElementById("turns-left").style.visibility = "visible";
        }
        document.getElementById("mom-king").style.visibility = "hidden";
        document.getElementById("mom-red").style.visiblity = "hidden";

        if (round_counter === 1) {
          round_counter = 4;
        } else {
          round_counter--;
        }
        turn_counter();
        reset_to_last_round();
      }
    } else if (win_order[array_length - 1] === "d") {
      // resets money won
      money.dad -= win_prize[array_length];
      money.eric += win_prize[array_length] / 3;
      money.tony += win_prize[array_length] / 3;
      money.mom += win_prize[array_length] / 3;

      // redos highest win
      if (
        previous_highest_win.dad != highest_money_won.dad &&
        repeated_win_counter.dad != 1
      ) {
        document.getElementById("dad-highest-money-received").innerHTML =
          highest_money_won.dad - difference_from_previous_highest_win.dad;
      } else {
        document.getElementById("dad-highest-money-received").innerHTML =
          previous_highest_win.dad;
      }
      // minus wins
      wins.dad -= 1;
      document.getElementById("display-wins-dad").innerHTML = wins.dad;

      // undos money received chart
      if (win_prize[array_length] > 0) {
        money_won.dad -= win_prize[array_length];
        document.getElementById("dad-moneymade").innerHTML = money_won.dad;
      } else {
        money_won.eric += win_prize[array_length] / 3;
        money_won.mom += win_prize[array_length] / 3;
        money_won.tony += win_prize[array_length] / 3;
        document.getElementById("eric-moneymade").innerHTML = money_won.eric;
        document.getElementById("mom-moneymade").innerHTML = money_won.mom;
        document.getElementById("tony-moneymade").innerHTML = money_won.tony;
      }

      // removes highscore
      if (high_score_money_array[array_length - 1] > 0) {
        high_score_money.tony = money.tony;
        high_score_money.eric = money.eric;
        high_score_money.mom = money.mom;
        high_score_money.dad = money.dad;
        document.getElementById("tony-highscore").innerHTML =
          high_score_money.tony;
        document.getElementById("eric-highscore").innerHTML =
          high_score_money.eric;
        document.getElementById("mom-highscore").innerHTML =
          high_score_money.mom;
        document.getElementById("dad-highscore").innerHTML =
          high_score_money.dad;
      }

      // removes lowest score
      if (low_score_money_array[array_length - 1] < 100) {
        if (money.mom > low_score_money.mom) {
        low_score_money.mom = money.mom;
        document.getElementById("mom-lowscore").innerHTML = low_score_money.mom;
        }
        if (money.eric > low_score_money.eric) {
        low_score_money.eric = money.eric;
        document.getElementById("eric-lowscore").innerHTML = low_score_money.eric;
        }
        if (money.tony > low_score_money.tony){
        low_score_money.tony = money.tony;
        document.getElementById("tony-lowscore").innerHTML = low_score_money.tony;
        }
      }

      // resets prize won
      if (win_prize[array_length - 1] === 0 && turns_left === 16) {
        document.getElementById("tony-prize").innerHTML = 0;
        document.getElementById("eric-prize").innerHTML = 0;
        document.getElementById("mom-prize").innerHTML = 0;
        document.getElementById("dad-prize").innerHTML = 0;
      } else {
        document.getElementById("dad-prize").innerHTML =
          "+" + previous_highest_win.dad;
        document.getElementById("eric-prize").innerHTML =
          "-" + previous_highest_win.dad / 3;
        document.getElementById("mom-prize").innerHTML =
          "-" + previous_highest_win.dad / 3;
        document.getElementById("tony-prize").innerHTML =
          "-" + previous_highest_win.dad / 3;
      }

      // figures out how many turns are left and makes the red circle work
      //   position_tracker_with_rounds();

      // turn_counter();
      if (counter4 >= 2) {
        counter4--;

        document.getElementById("dad-king").innerHTML = counter4;
        document.getElementById("dad-king").style.visiblity = "visible";
        document.getElementById("dad-red").style.visiblity = "visible";
      } else if (counter4 === 1) {
        counter4--;
        document.getElementById("dad-king").style.visibility = "hidden";
        document.getElementById("dad-red").style.visiblity = "visible";
      } else {
        if (turns_left != 16) {
          turns_left++;
          document.getElementById("turns-left").innerHTML = turns_left;
          document.getElementById("turns-left").style.visibility = "visible";
        }
        document.getElementById("dad-king").style.visibility = "hidden";
        document.getElementById("dad-red").style.visiblity = "hidden";

        if (round_counter === 1) {
          round_counter = 4;
        } else {
          round_counter--;
        }
        turn_counter();
        reset_to_last_round();
      }
    }

    setMoney();
    win_order.pop();
    win_prize.pop();
  }
});

/*
let starting_position_board = {
  tony: 1,
  eric: 2,
  mom: 3,
  dad: 4,
}
let starting_position_board_names = {
1: 'tony',
2: 'eric',
3: 'mom',
4: 'dad'
}

*/
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//initialize the high score values
document.getElementById("tony-highscore").innerHTML = high_score_money.tony;
document.getElementById("eric-highscore").innerHTML = high_score_money.eric;
document.getElementById("dad-highscore").innerHTML = high_score_money.dad;
document.getElementById("mom-highscore").innerHTML = high_score_money.mom;

//initialize the low score values
document.getElementById("tony-lowscore").innerHTML = low_score_money.tony;
document.getElementById("eric-lowscore").innerHTML = low_score_money.eric;
document.getElementById("dad-lowscore").innerHTML = low_score_money.dad;
document.getElementById("mom-lowscore").innerHTML = low_score_money.mom;

// variables for event listeners
let ti = document.getElementById("ti");
let ei = document.getElementById("ei");
let mi = document.getElementById("mi");
let di = document.getElementById("di");

// variables for counting rounds and turns left
let turns_left = 16;
let round_counter = 1;

// function to update money
setMoney = () => {
  document.getElementById("tm").innerHTML = money.tony;
  document.getElementById("em").innerHTML = money.eric;
  document.getElementById("mm").innerHTML = money.mom;
  document.getElementById("dm").innerHTML = money.dad;
};

let high_score_money_array = [];
let low_score_money_array = [];
// function for high and low score
let high_and_low_score = (high_score_money, money) => {
  // sets highscore for money
  if (money.tony > high_score_money.tony) {
    high_score_money.tony = money.tony;
    document.getElementById("tony-highscore").innerHTML = high_score_money.tony;
    high_score_money_array.pop();
    high_score_money_array.push(high_score_money.tony);
  }
  if (money.eric > high_score_money.eric) {
    high_score_money.eric = money.eric;
    document.getElementById("eric-highscore").innerHTML = high_score_money.eric;
    high_score_money_array.pop();
    high_score_money_array.push(high_score_money.eric);
  }
  if (money.mom > high_score_money.mom) {
    high_score_money.mom = money.mom;
    document.getElementById("mom-highscore").innerHTML = high_score_money.mom;
    high_score_money_array.pop();
    high_score_money_array.push(high_score_money.mom);
  }
  if (money.dad > high_score_money.dad) {
    high_score_money.dad = money.dad;
    document.getElementById("dad-highscore").innerHTML = high_score_money.dad;
    high_score_money_array.pop();
    high_score_money_array.push(high_score_money.dad);
  }
  // sets lowest score for money
  if (money.tony < low_score_money.tony) {
    low_score_money.tony = money.tony;
    document.getElementById("tony-lowscore").innerHTML = low_score_money.tony;
    low_score_money_array.pop();
    low_score_money_array.push(low_score_money.tony);
  }
  if (money.eric < low_score_money.eric) {
    low_score_money.eric = money.eric;
    document.getElementById("eric-lowscore").innerHTML = low_score_money.eric;
    low_score_money_array.pop();
    low_score_money_array.push(low_score_money.eric);
  }
  if (money.mom < low_score_money.mom) {
    low_score_money.mom = money.mom;
    document.getElementById("mom-lowscore").innerHTML = low_score_money.mom;
    low_score_money_array.pop();
    low_score_money_array.push(low_score_money.mom);
  }
  if (money.dad < low_score_money.dad) {
    low_score_money.dad = money.dad;
    document.getElementById("dad-lowscore").innerHTML = low_score_money.dad;
    low_score_money_array.pop();
    low_score_money_array.push(low_score_money.dad);
  }
};
// changes the visibility for the red circle (finds out who current leader is)
// and how many times u won while being the leader
let set_visibility = () => {
  document.getElementById("tony-red").style.visibility = "hidden";
  document.getElementById("eric-red").style.visibility = "hidden";
  document.getElementById("dad-red").style.visibility = "hidden";
  document.getElementById("mom-red").style.visibility = "hidden";
  document.getElementById("eric-king").style.visibility = "hidden";
  document.getElementById("tony-king").style.visibility = "hidden";
  document.getElementById("mom-king").style.visibility = "hidden";
  document.getElementById("dad-king").style.visibility = "hidden";
};

// following code switches the order of the names from first to last (top to bottom)
// some trials work and some dont and this does not change the values next to it, too complicated
/*
let temp_count1234 = 0;
let name_array = [];
let incrementor = -1;
let i = 0;
let starting_position_array = [];
let name_switch_name_array = [];
let switch_name_positions = (name) => {

  temp_count1234++;
name_array.push(name);

console.log(name_array[temp_count1234-1])



let remove_switch_old_name = ()=> {
  console.log(starting_position_array[i])
  if (starting_position_array[i] === 1) {
 
    document.getElementById('tony-name').innerHTML = name_switch_name_array[i];
  }
  else if (starting_position_array[i] === 2){ 

    document.getElementById('eric-name').innerHTML = name_switch_name_array[i];
}
else if (starting_position_array[i] === 3){ 

  document.getElementById('mom-name').innerHTML = name_switch_name_array[i];
}
else if (starting_position_array[i] === 4){ 

 document.getElementById('dad-name').innerHTML = name_switch_name_array[i];
}
i++;
};

  if (temp_count1234 === 4) {
for (let x = 1; x <= 4; x++) {
  
  

if (position[name_array[x-1]] === 1) {

document.getElementById('tony-name').innerHTML = name_array[x-1].charAt(0).toUpperCase() + name_array[x-1].slice(1);
name_switch_name_array.push('Tony');

starting_position_array.push(starting_position_board[name_array[x-1]]);

remove_switch_old_name();

}
else if (position[name_array[x-1]] === 2 ) {
  document.getElementById('eric-name').innerHTML = name_array[x-1].charAt(0).toUpperCase() + name_array[x-1].slice(1);
  name_switch_name_array.push('Eric');
 
  starting_position_array.push(starting_position_board[name_array[x-1]]);
  console.log(starting_position_array[x-1])
  remove_switch_old_name();


}
else if (position[name_array[x-1]] === 3 ) {
  document.getElementById('mom-name').innerHTML = name_array[x-1].charAt(0).toUpperCase() + name_array[x-1].slice(1);
  name_switch_name_array.push('Mom');

  starting_position_array.push(starting_position_board[name_array[x-1]]);
  console.log(starting_position_array[x-1])
  remove_switch_old_name();
  
}
else if (position[name_array[x-1]] === 4 ) {
  document.getElementById('dad-name').innerHTML = name_array[x-1].charAt(0).toUpperCase() + name_array[x-1].slice(1);
  name_switch_name_array.push('Dad');
  
  starting_position_array.push(starting_position_board[name_array[x-1]]);
  console.log(starting_position_array[x-1])
  remove_switch_old_name();
  
}

}
}};
*/

// The following 4 event listener gets the user positions
let tony_position = document.getElementById("position-tony");
tony_position.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    tony_position.style.display = "none";
    position.tony = parseInt(tony_position.value);
    // switch_name_positions('tony');
  }
});

let eric_position = document.getElementById("position-eric");
eric_position.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    eric_position.style.display = "none";
    position.eric = parseInt(eric_position.value);
    //   switch_name_positions('eric' );
  }
});

let mom_position = document.getElementById("position-mom");
mom_position.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    mom_position.style.display = "none";
    position.mom = parseInt(mom_position.value);
    //  switch_name_positions('mom');
  }
});

let dad_position = document.getElementById("position-dad");
dad_position.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    dad_position.style.display = "none";
    position.dad = parseInt(dad_position.value);
    //    switch_name_positions('dad');
  }
});

// sets the beginning money every one has
setMoney();

// sets visibility to hidden
set_visibility();

let repeated_counter_tony = true;
let repeated_counter_eric = true;
let repeated_counter_mom = true;
let repeated_counter_dad = true;
let repeated_counter_restrictor = true;
let win_order = [];
let win_prize = [];
win_prize[0] = 0;

let how_many_rounds_passed = 0;
// tony's event listener
ti.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    let val = parseInt(ti.value);
    if (!isNaN(val)) {
      if (repeated_counter_tony === true) {
        how_many_rounds_passed++;

        repeated_counter_tony = false;
        repeated_counter_eric = true;
        repeated_counter_mom = true;
        repeated_counter_dad = true;
      }

      reset_to_round_4.eric = true;
      reset_to_round_4.mom = true;
      reset_to_round_4.dad = true;

      repeated_win_counter.mom = 1;
      repeated_win_counter.dad = 1;
      repeated_win_counter.eric = 1;

      money.tony += 3 * val;
      money.eric -= val;
      money.mom -= val;
      money.dad -= val;
      document.getElementById("history").innerHTML +=
        "<p>Tony won " + val + "</p>";

      // keeps track of wins and prize money for reset button
      win_order.push("t");
      win_prize.push(3 * val);
      high_score_money_array.push(0);
      //push k because the lowest amount of money can change
      low_score_money_array.push("k");
      if (val > 0) {
        wins.tony++;
        document.getElementById("display-wins-tony").innerHTML = wins.tony;
        document.getElementById("tony-prize").innerHTML = "+" + val * 3;
        document.getElementById("eric-prize").innerHTML = "-" + val;
        document.getElementById("mom-prize").innerHTML = "-" + val;
        document.getElementById("dad-prize").innerHTML = "-" + val;

        money_won.tony += 3 * val;
        document.getElementById("tony-moneymade").innerHTML = money_won.tony;

        if (val * 3 >= highest_money_won.tony) {
          difference_from_previous_highest_win.tony =
            val * 3 - highest_money_won.tony;
          previous_highest_win.tony = highest_money_won.tony;
          highest_money_won.tony = val * 3;
          document.getElementById("tony-highest-money-received").innerHTML =
            val * 3;

          repeated_win_counter.tony++;
        }
      } else if (val < 0) {
        wins.tony--;
        document.getElementById("display-wins-tony").innerHTML = wins.tony;
        document.getElementById("tony-prize").innerHTML = val * 3;
        document.getElementById("eric-prize").innerHTML = "+" + -1 * val;
        document.getElementById("mom-prize").innerHTML = "+" + -1 * val;
        document.getElementById("dad-prize").innerHTML = "+" + -1 * val;

        money_won.dad += -1 * val;
        money_won.eric += -1 * val;
        money_won.mom += -1 * val;
        document.getElementById("dad-moneymade").innerHTML = money_won.dad;
        document.getElementById("eric-moneymade").innerHTML = money_won.eric;
        document.getElementById("mom-moneymade").innerHTML = money_won.mom;
      }
    }
    // sets highest score and lowest score for money
    high_and_low_score(high_score_money, money);

    // changes the visibility
    set_visibility();

    // to add colour to the names
    document.getElementById("mom-name").style.color = "black";
    document.getElementById("dad-name").style.color = "black";
    document.getElementById("eric-name").style.color = "black";
    document.getElementById("tony-name").style.color = "red";

    // figures out how many turns are left
    if (position.tony === round_counter) {
      counter++;
      counter4 = 0;
      counter2 = 0;
      counter3 = 0;
      document.getElementById("turns-left").innerHTML = turns_left;
      document.getElementById("tony-king").innerHTML = counter;

      previous_in_a_row_wins[how_many_rounds_passed - 1] = counter;
      document.getElementById("tony-king").style.visibility = "visible";
    } else {
      if (round_counter < 4) {
        round_counter++;
      } else {
        round_counter = 1;
      }
      if (tony_boolean === false) {
        if (another_counter1 === 1) {
          another_counter1++;
          another_counter2 = 1;
          another_counter3 = 1;
          another_counter4 = 1;
          document.getElementById("turns-left").innerHTML = --turns_left;
        } else {
          document.getElementById("turns-left").innerHTML = turns_left;
        }
      } else {
        document.getElementById("turns-left").innerHTML = --turns_left;
      }
    }

    // shows whos the leader of the game
    position_tracker();
    // figures out how many rounds are left
    turn_counter();
    // resets the input value
    ti.value = "";

    // updates money balance
    setMoney();
    tony_boolean = true;
  }
});

// eric's event listener
ei.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    let val = parseInt(ei.value);
    if (!isNaN(val)) {
      if (repeated_counter_eric === true) {
        how_many_rounds_passed++;

        repeated_counter_eric = false;
        repeated_counter_tony = true;
        repeated_counter_mom = true;
        repeated_counter_dad = true;
      }
      reset_to_round_4.tony = true;
      reset_to_round_4.mom = true;
      reset_to_round_4.dad = true;

      repeated_win_counter.mom = 1;
      repeated_win_counter.dad = 1;
      repeated_win_counter.tony = 1;

      money.eric += 3 * val;
      money.tony -= val;
      money.mom -= val;
      money.dad -= val;
      document.getElementById("history").innerHTML +=
        "<p>Eric won " + val + "</p>";
      // keeps track of wins and prize money for reset button
      win_order.push("e");
      win_prize.push(3 * val);
      high_score_money_array.push(0);
      //push k because the lowest amount of money can change
      low_score_money_array.push("k");

      if (val > 0) {
        wins.eric++;
        document.getElementById("display-wins-eric").innerHTML = wins.eric;
        document.getElementById("eric-prize").innerHTML = "+" + val * 3;
        document.getElementById("tony-prize").innerHTML = "-" + val;
        document.getElementById("mom-prize").innerHTML = "-" + val;
        document.getElementById("dad-prize").innerHTML = "-" + val;

        money_won.eric += 3 * val;
        document.getElementById("eric-moneymade").innerHTML = money_won.eric;

        if (val * 3 >= highest_money_won.eric) {
          difference_from_previous_highest_win.eric =
            val * 3 - highest_money_won.eric;
          previous_highest_win.eric = highest_money_won.eric;
          highest_money_won.eric = val * 3;
          document.getElementById("eric-highest-money-received").innerHTML =
            val * 3;

          repeated_win_counter.eric++;
        }
      } else if (val < 0) {
        wins.eric++;
        document.getElementById("display-wins-eric").innerHTML = wins.eric;
        document.getElementById("eric-prize").innerHTML = val * 3;
        document.getElementById("tony-prize").innerHTML = "+" + -1 * val;
        document.getElementById("mom-prize").innerHTML = "+" + -1 * val;
        document.getElementById("dad-prize").innerHTML = "+" + -1 * val;

        money_won.dad += -1 * val;
        money_won.tony += -1 * val;
        money_won.mom += -1 * val;
        document.getElementById("mom-moneymade").innerHTML = money_won.dad;
        document.getElementById("tony-moneymade").innerHTML = money_won.tony;
        document.getElementById("mom-moneymade").innerHTML = money_won.mom;
      }
    }
    // sets highest score and lowest score for money
    high_and_low_score(high_score_money, money);

    // changes the visibility
    set_visibility();

    // to add colour to the names
    document.getElementById("tony-name").style.color = "black";
    document.getElementById("mom-name").style.color = "black";
    document.getElementById("dad-name").style.color = "black";
    document.getElementById("eric-name").style.color = "green";

    // figures out how many turns are left
    if (position.eric === round_counter) {
      counter2++;
      counter = 0;
      counter4 = 0;
      counter3 = 0;
      document.getElementById("turns-left").innerHTML = turns_left;
      document.getElementById("eric-king").innerHTML = counter2;

      previous_in_a_row_wins[how_many_rounds_passed - 1] = counter2;
      document.getElementById("eric-king").style.visibility = "visible";
    } else {
      if (round_counter < 4) {
        round_counter++;
      } else {
        round_counter = 1;
      }

      if (eric_boolean === false) {
        if (another_counter2 === 1) {
          another_counter2++;
          another_counter1 = 1;
          another_counter3 = 1;
          another_counter4 = 1;
          document.getElementById("turns-left").innerHTML = --turns_left;
        } else {
          document.getElementById("turns-left").innerHTML = turns_left;
        }
      } else {
        document.getElementById("turns-left").innerHTML = --turns_left;
      }
    }

    // shows whos the leader of the game
    position_tracker();
    // figures out how many rounds are left
    turn_counter();
    // resets input value
    ei.value = "";

    // updates money balance
    setMoney();
    eric_boolean = true;
  }
});

// mom's event listener
mi.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    let val = parseInt(mi.value);
    if (!isNaN(val)) {
      if (repeated_counter_mom === true) {
        how_many_rounds_passed++;

        repeated_counter_mom = false;
        repeated_counter_eric = true;
        repeated_counter_tony = true;
        repeated_counter_dad = true;
      }

      reset_to_round_4.eric = true;
      reset_to_round_4.tony = true;
      reset_to_round_4.dad = true;

      repeated_win_counter.eric = 1;
      repeated_win_counter.dad = 1;
      repeated_win_counter.tony = 1;

      money.mom += 3 * val;
      money.eric -= val;
      money.tony -= val;
      money.dad -= val;
      document.getElementById("history").innerHTML +=
        "<p>Mom won " + val + "</p>";

      // keeps track of wins and prize money for reset button
      win_order.push("m");
      win_prize.push(3 * val);
      high_score_money_array.push(0);
      //push k because the lowest amount of money can change
      low_score_money_array.push("k");
      if (val > 0) {
        wins.mom++;
        document.getElementById("display-wins-mom").innerHTML = wins.mom;
        document.getElementById("mom-prize").innerHTML = "+" + val * 3;
        document.getElementById("tony-prize").innerHTML = "-" + val;
        document.getElementById("eric-prize").innerHTML = "-" + val;
        document.getElementById("dad-prize").innerHTML = "-" + val;

        money_won.mom += 3 * val;
        document.getElementById("mom-moneymade").innerHTML = money_won.mom;

        if (val * 3 >= highest_money_won.mom) {
          difference_from_previous_highest_win.mom =
            val * 3 - highest_money_won.mom;
          previous_highest_win.mom = highest_money_won.mom;
          highest_money_won.mom = val * 3;
          document.getElementById("mom-highest-money-received").innerHTML =
            val * 3;

          repeated_win_counter.mom++;
        }
      } else if (val < 0) {
        wins.mom++;
        document.getElementById("display-wins-mom").innerHTML = wins.mom;
        document.getElementById("mom-prize").innerHTML = val * 3;
        document.getElementById("eric-prize").innerHTML = "+" + -1 * val;
        document.getElementById("tony-prize").innerHTML = "+" + -1 * val;
        document.getElementById("dad-prize").innerHTML = "+" + -1 * val;

        money_won.dad += -1 * val;
        money_won.tony += -1 * val;
        money_won.eric += -1 * val;
        document.getElementById("mom-moneymade").innerHTML = money_won.dad;
        document.getElementById("tony-moneymade").innerHTML = money_won.tony;
        document.getElementById("eric-moneymade").innerHTML = money_won.eric;
      }
    }
    // sets highest score and lowest score for money
    high_and_low_score(high_score_money, money);

    // changes the visibility
    set_visibility();

    // to add colour to the names
    document.getElementById("dad-name").style.color = "black";
    document.getElementById("tony-name").style.color = "black";
    document.getElementById("eric-name").style.color = "black";

    document.getElementById("mom-name").style.color = "purple";

    // figures out how many turns are left
    if (position.mom === round_counter) {
      counter3++;
      counter = 0;
      counter2 = 0;
      counter4 = 0;
      document.getElementById("turns-left").innerHTML = turns_left;
      document.getElementById("mom-king").innerHTML = counter3;

      previous_in_a_row_wins[how_many_rounds_passed - 1] = counter3;
      document.getElementById("mom-king").style.visibility = "visible";
    } else {
      if (round_counter < 4) {
        round_counter++;
      } else {
        round_counter = 1;
      }
      if (mom_boolean === false) {
        if (another_counter3 === 1) {
          another_counter3++;
          another_counter2 = 1;
          another_counter1 = 1;
          another_counter4 = 1;
          document.getElementById("turns-left").innerHTML = --turns_left;
        } else {
          document.getElementById("turns-left").innerHTML = turns_left;
        }
      } else {
        document.getElementById("turns-left").innerHTML = --turns_left;
      }
    }

    // shows whos the leader of the game
    position_tracker();
    // figures out how many rounds are left
    turn_counter();

    // resets input value
    mi.value = "";

    // updates money balance
    setMoney();
    mom_boolean = true;
  }
});

// dad's event listener
di.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    let val = parseInt(di.value);
    if (!isNaN(val)) {
      if (repeated_counter_dad === true) {
        how_many_rounds_passed++;

        repeated_counter_dad = false;
        repeated_counter_eric = true;
        repeated_counter_mom = true;
        repeated_counter_tony = true;
      }

      reset_to_round_4.eric = true;
      reset_to_round_4.mom = true;
      reset_to_round_4.tony = true;

      repeated_win_counter.mom = 1;
      repeated_win_counter.eric = 1;
      repeated_win_counter.tony = 1;

      money.dad += 3 * val;
      money.eric -= val;
      money.mom -= val;
      money.tony -= val;
      document.getElementById("history").innerHTML +=
        "<p>Dad won " + val + "</p>";

      // keeps track of wins and prize money for reset button
      win_order.push("d");
      win_prize.push(3 * val);
      high_score_money_array.push(0);
      //push k because the lowest amount of money can change
      low_score_money_array.push("k");
      if (val > 0) {
        wins.dad++;
        document.getElementById("display-wins-dad").innerHTML = wins.dad;
        document.getElementById("dad-prize").innerHTML = "+" + val * 3;
        document.getElementById("tony-prize").innerHTML = "-" + val;
        document.getElementById("mom-prize").innerHTML = "-" + val;
        document.getElementById("eric-prize").innerHTML = "-" + val;

        money_won.dad += 3 * val;
        document.getElementById("dad-moneymade").innerHTML = money_won.dad;

        if (val * 3 >= highest_money_won.dad) {
          difference_from_previous_highest_win.dad =
            val * 3 - highest_money_won.dad;
          previous_highest_win.dad = highest_money_won.dad;
          highest_money_won.dad = val * 3;
          document.getElementById("dad-highest-money-received").innerHTML =
            val * 3;

          repeated_win_counter.dad++;
        }
      } else if (val < 0) {
        wins.dad++;
        document.getElementById("display-wins-dad").innerHTML = wins.dad;
        document.getElementById("dad-prize").innerHTML = val * 3;
        document.getElementById("eric-prize").innerHTML = "+" + -1 * val;
        document.getElementById("mom-prize").innerHTML = "+" + -1 * val;
        document.getElementById("tony-prize").innerHTML = "+" + -1 * val;

        money_won.mom += -1 * val;
        money_won.tony += -1 * val;
        money_won.eric += -1 * val;
        document.getElementById("mom-moneymade").innerHTML = money_won.mom;
        document.getElementById("tony-moneymade").innerHTML = money_won.tony;
        document.getElementById("eric-moneymade").innerHTML = money_won.eric;
      }
    }

    // sets highest score and lowest score for money
    high_and_low_score(high_score_money, money);

    // changes the visibility
    set_visibility();

    // to add colour to the names
    document.getElementById("dad-name").style.color = "white";
    document.getElementById("tony-name").style.color = "black";
    document.getElementById("eric-name").style.color = "black";
    document.getElementById("mom-name").style.color = "black";

    // figures out how many turns are left
    if (position.dad === round_counter) {
      counter4++;
      counter = 0;
      counter2 = 0;
      counter3 = 0;
      document.getElementById("turns-left").innerHTML = turns_left;
      document.getElementById("dad-king").innerHTML = counter4;

      previous_in_a_row_wins[how_many_rounds_passed - 1] = counter4;
      document.getElementById("dad-king").style.visibility = "visible";
    } else {
      if (round_counter < 4) {
        round_counter++;
      } else {
        round_counter = 1;
      }
      if (dad_boolean === false) {
        if (another_counter4 === 1) {
          another_counter4++;
          another_counter2 = 1;
          another_counter3 = 1;
          another_counter1 = 1;
          document.getElementById("turns-left").innerHTML = --turns_left;
        } else {
          document.getElementById("turns-left").innerHTML = turns_left;
        }
      } else {
        document.getElementById("turns-left").innerHTML = --turns_left;
      }
    }

    // shows whos the leader of the game
    position_tracker();
    // figures out how many rounds are left
    turn_counter();

    // resets input value
    di.value = "";
    // updates money balance
    setMoney();
    dad_boolean = true;
  }
});
