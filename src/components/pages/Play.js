import React, { Component } from "react";
import $ from "jquery";
import _ from "underscore";
import alanBtn from "@alan-ai/alan-sdk-web";
import beginSound from '../../sounds/pacman_beginning.wav';
import eatSound from '../../sounds/pacman_chomp.wav';
import deathSound from '../../sounds/pacman_death.wav';
import shoppingSound from '../../sounds/shopping.mp3';
import eatBigSound from '../../sounds/pacman_eatBig.wav';
import explosionSound from '../../sounds/pacman_explosion.mp3';
import gotSound from '../../sounds/GameofThrones.mp3';

class Play extends Component {
  constructor(props) {
    super(props);
    this.state = {
      started: false,
      fortune: this.props.fortune,
      age: this.props.age,
      health: 1,
      gameover: false,
      username: this.props.username,
      selectedOption: this.props.selectedOption,
      killer:""
    };
  }

  playBegin = () => {
    new Audio(beginSound).play();
  }

  playEatDot = () => {
    new Audio(eatSound).play();
  }

  playDeath = () => {
    new Audio(deathSound).play();
  }

  playShopping  = () => {
    new Audio(shoppingSound).play();
  }

  playEatBig  = () => {
    new Audio(eatBigSound).play();
  }

  playEnding = () => {
    new Audio(gotSound).play();
  }

  explosion

  playExplosion  = () => {
    this.explosion = new Audio(explosionSound);
    
    this.explosion.play();
  }

  startGameNow = () => {
    this.setState({started: true});
  }

  gameBackground = [
    7, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 8, 7, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 8,
    6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,12,12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6,
    6, 0, 7,11,11, 8, 0, 7,11,11,11, 8, 0,12,12, 0, 7,11,11,11, 8, 0, 7,11,11, 8, 0, 6,
    6, 3,12, 4, 4,12, 0,12, 4, 4, 4,12, 0,12,12, 0,12, 4, 4, 4,12, 0,12, 4, 4,12, 3, 6,
    6, 0, 9,11,11,10, 0, 9,11,11,11,10, 0, 9,10, 0, 9,11,11,11,10, 0, 9,11,11,10, 0, 6,
    6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6,
    6, 0, 7,11,11, 8, 0, 7, 8, 0, 7,11,11,11,11,11,11, 8, 0, 7, 8, 0, 7,11,11, 8, 0, 6,
    6, 0, 9,11,11,10, 0,12,12, 0, 9,11,11, 8, 7,11,11,10, 0,12,12, 0, 9,11,11,10, 0, 6,
    6, 0, 0, 0, 0, 0, 0,12,12, 0, 0, 0, 0,12,12, 0, 0, 0, 0,12,12, 0, 0, 0, 0, 0, 0, 6,
    9, 5, 5, 5, 5, 8, 0,12, 9,11,11, 8, 4,12,12, 4, 7,11,11,10,12, 0, 7, 5, 5, 5, 5,10,
    4, 4, 4, 4, 4, 6, 0,12, 7,11,11,10, 4, 9,10, 4, 9,11,11, 8,12, 0, 6, 4, 4, 4, 4, 4,
    4, 4, 4, 4, 4, 6, 0,12,12, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4,12,12, 0, 6, 4, 4, 4, 4, 4,
    4, 4, 4, 4, 4, 6, 0,12,12, 4, 7, 5, 5, 2, 2, 5, 5, 8, 4,12,12, 0, 6, 4, 4, 4, 4, 4,
    4, 5, 5, 5, 5,10, 0, 9,10, 4, 6, 6, 6, 2, 2, 6, 6, 6, 4, 9,10, 0, 9, 5, 5, 5, 5, 4,
    4, 4, 4, 4, 4, 4, 0, 4, 4, 4, 6, 6, 6, 2, 2, 6, 6, 6, 4, 4, 4, 0, 4, 4, 4, 4, 4, 4,
    4, 5, 5, 5, 5, 8, 0, 7, 8, 4, 9, 5, 5, 2, 2, 5, 5,10, 4, 7, 8, 0, 7, 5, 5, 5, 5, 4,
    4, 4, 4, 4, 4, 6, 0,12,12, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4,12,12, 0, 6, 4, 4, 4, 4, 4,
    4, 4, 4, 4, 4, 6, 0,12,12, 4, 7,11,11,11,11,11,11, 8, 4,12,12, 0, 6, 4, 4, 4, 4, 4,
    7, 5, 5, 5, 5,10, 0, 9,10, 4, 9,11,11, 8, 7,11,11,10, 4, 9,10, 0, 9, 5, 5, 5, 5, 8,
    6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,12,12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6,
    6, 0, 7,11,11, 8, 0, 7,11,11,11, 8, 0,12,12, 0, 7,11,11,11, 8, 0, 7,11,11, 8, 0, 6,
    6, 0, 9,11, 8,12, 0, 9,11,11,11,10, 0, 9,10, 0, 9,11,11,11,10, 0,12, 7,11,10, 0, 6,
    6, 3, 0, 0,12,12, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0,12,12, 0, 0, 3, 6,
    9, 5, 8, 0,12,12, 0, 7, 8, 0, 7,11,11,11,11,11,11, 8, 0, 7, 8, 0,12,12, 0, 7, 5,10,
    7, 5,10, 0, 9,10, 0,12,12, 0, 9,11,11, 8, 7,11,11,10, 0,12,12, 0, 9,10, 0, 9, 5, 8,
    6, 0, 0, 0, 0, 0, 0,12,12, 0, 0, 0, 0,12,12, 0, 0, 0, 0,12,12, 0, 0, 0, 0, 0, 0, 6,
    6, 0, 7,11,11,11,11,10, 9,11,11, 8, 0,12,12, 0, 7,11,11,10, 9,11,11,11,11, 8, 0, 6,
    6, 0, 9,11,11,11,11,11,11,11,11,10, 0, 9,10, 0, 9,11,11,11,11,11,11,11,11,10, 0, 6,
    6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6,
    9, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,10,
  ] 
  // 0 - pac-dots
  // 1 - none
  // 2 - enemy-cave
  // 3 - power-pellet
  // 4 - empty
  // 5 - outside wall horizontal
  // 6 - outside wall vertical
  // 7 - upleft corner
  // 8 - upright corner
  // 9 - bottomleft corner
  // 10 - bottomeright corner
  // 11 - innerwall horizontal
  // 12 - innerwall vertical

  componentDidMount() {
    const grids = [];

    //create game background
    const createGameBackground = () => {
      for (let i = 0; i < this.gameBackground.length; i++) {
        const grid = document.createElement('div')
        $('.gameBacgroundDiv').append(grid)
        grids.push(grid) 

        if(this.gameBackground[i] === 0) {
          grids[i].classList.add('pac-dot')
          grids[i].innerHTML = '.'
        } else if (this.gameBackground[i] === 1) {
          grids[i].classList.add('none')
        } else if (this.gameBackground[i] === 2) {
          grids[i].classList.add('enemy-cave')
        } else if (this.gameBackground[i] === 3) {
          grids[i].classList.add('power-pellet')
        } else if (this.gameBackground[i] === 4) {
          grids[i].classList.add('empty')
        } else if (this.gameBackground[i] === 5) {
          grids[i].classList.add('border-horizontal')
        } else if (this.gameBackground[i] === 6) {
          grids[i].classList.add('border-vertical')
        } else if (this.gameBackground[i] === 7) {
          grids[i].classList.add('border-upleft')
        } else if (this.gameBackground[i] === 8) {
          grids[i].classList.add('border-upright')
        } else if (this.gameBackground[i] === 9) {
          grids[i].classList.add('border-bottomleft')
        } else if (this.gameBackground[i] === 10) {
          grids[i].classList.add('border-bottomright')
        } else if (this.gameBackground[i] === 11) {
          grids[i].classList.add('inner-border-h')
        } else if (this.gameBackground[i] === 12) {
          grids[i].classList.add('inner-border-v')
        }
      }
    }
    createGameBackground();

    // pacman initial position and remove functions
    let pacmanCurrentIndex = 629
    $(grids[pacmanCurrentIndex])
                .addClass('pacman')
                .addClass('pacman-right-before-start');
    
    function removePacman() {
      $(grids[pacmanCurrentIndex])
                .removeClass('pacman')
                .removeClass('pacman-right')
                .removeClass('pacman-left')
                .removeClass('pacman-up')
                .removeClass('pacman-down')
    }

    // eat dots
    const eatDot = () =>  {
      if (grids[pacmanCurrentIndex].classList.contains('pac-dot')) {
        this.setState({fortune: this.state.fortune + 1});      
        grids[pacmanCurrentIndex].classList.remove('pac-dot')
        $(grids[pacmanCurrentIndex]).text('');
      }
      if (grids[pacmanCurrentIndex].classList.contains('power-pellet')) {
        this.playEatBig();
        // 42 is the purpose of the universe
        this.setState({fortune: this.state.fortune + 42});      
        grids[pacmanCurrentIndex].classList.remove('power-pellet')
        $(grids[pacmanCurrentIndex]).text('');
      }
    }

    // pacman move functions
    const pathes = ['pac-dot', 'empty', 'power-pellet', 'enemy-cave', 'pacman'];

    let moveRightIntervalId;
    let moveLeftIntervalId;
    let moveUpIntervalId;
    let moveDownIntervalId;

    const clearAllInterval = () => {
      clearInterval(moveLeftIntervalId);
      clearInterval(moveRightIntervalId);
      clearInterval(moveUpIntervalId);
      clearInterval(moveDownIntervalId);
    }
 
    const moveRight = () => {
      clearAllInterval();
      moveRightIntervalId = setInterval(()=>{
        if (pathes.some(p => grids[pacmanCurrentIndex+1].classList.contains(p))) {
          removePacman();
          if (pacmanCurrentIndex === 418) {
            pacmanCurrentIndex = 393;
          } else {
            pacmanCurrentIndex += 1;
          }
          eatDot();
          $(grids[pacmanCurrentIndex])
            .addClass('pacman')
            .addClass('pacman-right')
            .addClass('empty');
          this.playEatDot();
        }
      }, 500)
    }

    const moveLeft = () => {
      clearAllInterval();
      moveLeftIntervalId = setInterval(()=>{
        if (pathes.some(p => grids[pacmanCurrentIndex-1].classList.contains(p))) {
          removePacman();
          if (pacmanCurrentIndex === 393) {
            pacmanCurrentIndex = 418;
          } else {
            pacmanCurrentIndex -= 1;
          }
          eatDot();
          $(grids[pacmanCurrentIndex])
            .addClass('pacman')
            .addClass('pacman-left')
            .addClass('empty');
          this.playEatDot();
        }
      }, 500); 
    }

    const moveUp = () => {
      clearAllInterval();
      moveUpIntervalId = setInterval(()=>{
        if (pathes.some(p => grids[pacmanCurrentIndex-28].classList.contains(p))) {
          removePacman();
          pacmanCurrentIndex -= 28;
          eatDot();
          $(grids[pacmanCurrentIndex])
            .addClass('pacman')
            .addClass('pacman-up')
            .addClass('empty');
          this.playEatDot();
        }
      }, 500); 
    }

    const moveDown = () => {
      clearAllInterval();
      moveDownIntervalId = setInterval(()=>{
        if (pathes.some(p => grids[pacmanCurrentIndex+28].classList.contains(p))) {
          removePacman();
          pacmanCurrentIndex += 28;
          eatDot();
          $(grids[pacmanCurrentIndex])
            .addClass('pacman')
            .addClass('pacman-down')
            .addClass('empty');
          this.playEatDot();
        }
      }, 500); 
    }

    const shopping = () => {
      if (this.state.fortune>=10) {
        this.setState({fortune:this.state.fortune-10});
        this.setState({health:this.state.health+1});
        this.playShopping();
      }
    }

    $(window).on("keydown", (e) => {
      // console.log(pacmanCurrentIndex)
      if (this.state.started) {
        switch (e.key) {
          case "ArrowRight":
            moveRight();
            break;
          case "ArrowLeft":
            moveLeft();
            break;        
          case "ArrowUp":
            moveUp();
            break;
          case "ArrowDown":
            moveDown();
            break;
          case "s":
            shopping();
            break;
          default:
            break;
        }
      }
    }); 
    
    // generate enemies
    const enemiesTypes = ['accident', 'disease', 'poverty', 'loneliness'];
    // red: accident, pink: disease, yellow: poverty, blue: loneliness

    class Enemy {
      constructor(type, startIndex, speed = 500) {
        this.type = type
        this.startIndex = startIndex
        this.speed = speed
        this.currentIndex = startIndex
        this.timerId = NaN
      }
    }

    let enemies = [];

    function generateAllEnemies() {
      for (let i = 0; i < enemiesTypes.length; i++) {
        let enemy = _($('.enemy-cave').toArray()).sample();
        enemy.classList.add(`${enemiesTypes[i]}`);
        enemy.classList.add('enemy');
        enemies.push(new Enemy(`${enemiesTypes[i]}`, grids.indexOf(enemy), 500));
      }
    }

    // create enemies 
    let generateEnemyId;
    const generateEnemiesWithTimePassing = () => {
      generateAllEnemies();
      if (enemies.length<=16) {
        generateEnemyId = setInterval(generateAllEnemies, 10000)
      }
    }

    // how enemy move 
    function enemyMove(enemy) {
      const directions =  [+1, -1, +28, -28]
      let direction = _(directions).sample();

      enemy.timerId = setInterval(function() {
        if (pathes.some(p => grids[enemy.currentIndex + direction].classList.contains(p))) {
            grids[enemy.currentIndex].classList.remove(enemy.type)
            grids[enemy.currentIndex].classList.remove('enemy')
            
            enemy.currentIndex += direction
            grids[enemy.currentIndex].classList.add(enemy.type, 'enemy')
        
        } else {
          direction = _(directions).sample();
        }
      }, 300)
    }
        
    // timer
    let ageId;
    const getOld = () => {
      this.setState({age: this.state.age + 1});
    };

    function timePass() {
      ageId = setInterval(getOld, 1200);
    }

    //check for health when encounting enemy
    let healthId;
    let currentClassList;
    const checkForHealth = () => {
      if (grids[pacmanCurrentIndex].classList.contains('enemy')) {
        // always save a copy of global variables first
        let currentIndex = pacmanCurrentIndex;
        currentClassList=grids[currentIndex].classList;
        this.setState({health: this.state.health - 1});
        this.playExplosion();

        // explosion animation and sound effect
        grids[currentIndex].classList.add('explosion');
        const removeExplosion = () => {
          grids[currentIndex].classList.remove('explosion')
        }
        setTimeout(removeExplosion,1600);

        // enemy killed and disappeared
        setTimeout(()=>{
          grids[currentIndex].classList.remove('enemy');
          grids[currentIndex].classList.remove('accident');
          grids[currentIndex].classList.remove('disease');
          grids[currentIndex].classList.remove('poverty');
          grids[currentIndex].classList.remove('loneliness');
        }, 1000)
  
        // move enemy back to the cave after they're killed
        if(enemies.filter(e=>e.currentIndex===currentIndex)[0]){
          enemies.filter(e=>e.currentIndex===currentIndex)[0].currentIndex = _([405,406,377,378]).sample();
        }
      }
    }

    let startId;

    let enemyMoveId;

    // check game over
    const checkForGameOver = () => {
      if (this.state.health <= 0) {
        let currentIndex = pacmanCurrentIndex;
        this.setState({health: 0});
        $('.game-over-hide').addClass('hide');
        $('.game-over-show').removeClass('hide');
        removePacman();
        grids[currentIndex].classList.add('pacman-death');
        enemies.forEach(enemy => clearInterval(enemy.timerId));
        clearInterval(startId);
        clearInterval(healthId);
        clearInterval(ageId);
        clearInterval(enemyMoveId);
        clearInterval(generateEnemyId);
        clearAllInterval();

        // death animation
        setTimeout(() => {
          this.playDeath();
        }, 1950);

        //ending music
        setTimeout(() => {
          this.playEnding();
        }, 4950);

        if (currentClassList) {
          let killer = (currentClassList[0]==="empty" || currentClassList[0]==="pac-dot" || currentClassList[0]==="power-pellet")?currentClassList[1]:currentClassList[0];
          this.setState({killer:killer});
          setTimeout(()=>{$('.right-info').removeClass('hide')},500);
        } 
      }
    }
  
    this.startGame = () => {
      $('.left-info').removeClass('hide');
      this.playBegin();
      generateEnemiesWithTimePassing();
      setTimeout(()=>{
        $(grids[pacmanCurrentIndex])
          .removeClass('pacman-right-before-start')
          .addClass('pacman-right');
        startId = setInterval(checkForGameOver, 100);
        healthId = setInterval(checkForHealth, 100);

        // make newly generated batches of enemies move
        enemyMoveId = setInterval(()=>{
          enemies.forEach(enemy => {
            clearInterval(enemy.timerId);
            enemyMove(enemy);
          });
        }, 1000)
        enemies.forEach(enemy => enemyMove(enemy));
        timePass();

        // wait for playing the opening music
        this.setState({started: true});
      }, 4400)
    }

    // make a button to control game start
    const button = document.createElement('button')
    button.setAttribute("id", "start-btn");
    button.textContent = "Play Now";
    
    button.onclick = this.startGame;
    const buttonDiv = document.querySelector('.start-btn-div')
    buttonDiv.appendChild(button);


    // enable alan ai
    // if (this.state.selectedOption==="voiceControl") {
    //   console.log('hi');
    // }
    this.alanBtnInstance = alanBtn({ 
      key: 'YOURAPIKEY',
      onCommand: (commandData) => {
        if (commandData.command === 'move-left') {
          moveLeft();
        }
        if (commandData.command === 'move-right') {
          moveRight();
        }
        if (commandData.command === 'move-up') {
          moveUp();
        }
        if (commandData.command === 'move-down') {
          moveDown();
        }
        if (commandData.command === 'shopping') {
          shopping();
        }
      },
    });
  }

  render() {
    return (
      <div class="play-wrapper">
        <div className="play hide">
          <div className="flex-container">
            <div>
              <div id="cake"></div> <span id="age"> {`${this.state.age}`} </span> 
            </div>

            <div>
              <div id="money"></div> <span id="fortune">$ {`${this.state.fortune}`} </span>
            </div>

            <div>
              <div id="heart"></div> <span id="health"> {`${this.state.health}`} </span>
            </div>
          </div>
          <div className="left-info hide">
            <p className="vm">Valar morghulis</p>
            <p> </p>
            <p className="all-die">ALL MEN MUSt DIE</p>
            <p>.</p>
            <p>.</p>
            <p className="all-die game-over-hide">But...</p>
            <p className="not-today game-over-hide">Not Today!</p>
            <p className="all-die game-over-show hide">And...</p>
            <p className="it-is-today game-over-show hide">It's Today!</p>
            <p className="underline-1 game-over-show hide">_____________</p>
          </div>

          <div className="right-info hide">
            <div class="game-over-border-2">
              <div className="game-over-border">
                <p className="not-today" id="game-over-p">GAME OVER</p>
                <p className="underline">_______________</p>
                <p className="all-die">{this.state.username} died at age of</p>
                <p className="killer-name" id="age1">{this.state.age}</p>
                <p className="all-die">Killed by</p>
                <p className="killer-name">{this.state.killer}</p>
              </div>
            </div>
          </div>
          <div className="gameBacgroundDiv"></div>
          <div className="start-btn-div"></div>
        </div>
      </div> 
    );
  }
}

export default Play;
