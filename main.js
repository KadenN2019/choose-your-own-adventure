
    var intersectionDecision = prompt("You are coming up to a yellow light. Do you try to 'beat it' or 'slow down' or quickly 'turn right'?");

    if(intersectionDecision == "beat it"){
        var beatIt = prompt("Some decides to pull out in front of you expecting you were going to stop at the light. Do you 'slam on your breaks' or 'swerve left' or 'swerve right'?");
        // Not enough Braking Room
        if(beatIt == "slam on your breaks"){
            alert("You don’t have enough time to break, so you slam into the back of them. And at this moment you remember that your vehicle had a recall for faulty airbags, that you should’ve went to go do but since you always put it off you die!");
        }
        // Swerve Left and Survive
        else if(beatIt == "swerve left"){
            prompt("You swerve  left and avoid the accident. Do you just 'pass him' and go on with your day or do you 'flip him off' and try to pass him?")
            if("pass him"){
                alert("Everyone is safe and no one has to die today.");
            }
            else if("flip him off"){
                alert("You flip him off, so he gets mad at you and rams into you making you go into on coming traffic and you get into a head on crash. But your vehicle had a recall for faulty airbags that you never got checked so you end up dieing for putting it off for so long");
            }
        }
        // Swerve Right and Hit a curb
        else if(beatIt == "swerve right"){
            alert("You over turn and hit the curb of the sidewalk which flips your car. And at this moment you remember that your vehicle had a recall for faulty airbags, that you should’ve went to go do but since you always put it off you die!");
        }
    }else if(intersectionDecision == "slow down"){
        var slowDown = prompt("You come to a stop but the person behind you wanted to beat it and decides to switch lanes and is beside you. He starts to yell at you. Do you roll down your window and try to 'calm him down' or keep your windows up and 'ignore him'?");
        if(slowDown == "calm him down"){
            var arguement = prompt("You try to calm him down. But he persists to tell you that you shouldve tried to beat the light. Do you 'argue with him' that even if you beat the light he wouldn't have made it or do you agree with him and 'say sorry'?");
            if(arguement == "argue with him"){
                var fight = prompt("The argument escaltes to him getting out of the car and trying to fight him do you fight him? 'yes' or 'no'");
                if(fight == "yes"){
                    var punch = prompt("You step out to fight and get a couple good punches to start but he also throws some back you think you can end the fight right now if you punch him in the head do you go for it? 'yes' or 'no'");
                        if (punch == "yes") {
                            alert("You try to punch him but you miss leaving yourself vunerable. He then takes the opportunity to punch you and knocks you out. You wake up in the hospital");
                        }
                        else if(punch == "no"){
                            alert("The fight continues until the cops show up and arrest both of you.");
                        }
                    }
                }else if(fight == "no"){
                    alert("Good a cop was a couple cars behind you and sees this and arrest him.");
                }
            else if(arguement == "say sorry"){
                alert("You say sorry and go you both go about your day.");
            }
        }
        else if(slowDown == "ignore him"){
            alert("You ignore him and he keeps yelling but nothing ever happens.");
        }
    }else if(intersectionDecision == "turn right"){
        alert("You turn and lose traction just enough to make it look like it was purposeful and you now feel like you are apart of the movie franchise fast and furious.");
    }else{
        alert("Then what are you doing?");
    }



