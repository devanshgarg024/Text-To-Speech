const synth =window.speechSynthesis;
let voicesSelect=document.querySelector("select");
let speech=new SpeechSynthesisUtterance();
let voices=[];

function loadVoices(){
    
    voices=synth.getVoices();
    for(let i=0;i<voices.length;i++){
        
        let optionElement = document.createElement('option');
        optionElement.textContent = `${voices[i].name} (${voices[i].lang})`;
        optionElement.value = i;
        voicesSelect.appendChild(optionElement);
        }
        }
        if ("onvoiceschanged" in synth) {
            synth.onvoiceschanged = loadVoices;
            // speech.voices=voices[0];

            } else {
                loadVoices();
                }
                var tex=document.querySelector("textarea");
                
                let bo=true;
                function pause(){
                    document.getElementById("pausespeaking").innerHTML="Resume";
                    synth.pause();
                bo=false;
                }
                function resume(){
                    document.getElementById("pausespeaking").innerHTML="pause";
                    synth.resume();
                bo=true;
                }
                voicesSelect.addEventListener("change", ()=>{
                    speech.voice=voices[voicesSelect.value];
                    });
                document.getElementById("startspeaking").addEventListener("click", ()=>{
                    if(synth.speaking){
                        synth.cancel();
                        }
                        else{
                            
                            speech.text=tex.value;
                            synth.speak(speech);
                            resume();
                            
                            }
                            
                            });
                            bo=true;
                            document.getElementById("pausespeaking").addEventListener("click", ()=>{
                            if(bo){
                                pause();
    
                            }
                            else{
                                resume();
                            }
                       });
