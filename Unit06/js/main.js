let tellStory = () => {
    let nounArray = document.querySelector('#nouns').value
    nounArray = nounArray.toLowerCase().split(/\s+/)
    console.log(nounArray)
    
    let adjArray = document.querySelector('#adjectives').value
    adjArray = adjArray.toLowerCase().split(/\s+/)

    let verbArray = document.querySelector('#verbs').value
    verbArray = verbArray.toLowerCase().split(/\s+/)

    const myStory = `One <span>${adjArray[0]}</span> day in late autumn a family of Ants were bustling about in the <span>${adjArray[1]}</span> sunshine, drying out the <span>${nounArray[0]}</span> they had stored up during the summer, when a <span>${adjArray[2]}</span> Grasshopper, his <span>${nounArray[1]}</span> under his arm, came up to humbly <span>${verbArray[0]}</span> for a bite to <span>${verbArray[1]}</span>.
    'What!' cried the Ants in surprise, "haven't you stored anything away for the winter? What in the world were you doing all last summer?"
    "I didn't have time to store up any <span>${nounArray[2]}</span>," whined the Grasshopper; "I was so <span>${adjArray[3]}</span> making music that before I knew it the summer was gone."
    The Ants shrugged their shoulders in disgust.
    "Making music, were you?" they cried. "Very well; now <span>${verbArray[2]}</span>!" And they turned their backs on the Grasshopper and went on with their work.
    There's a time for work and a time for play.`

    let storyParagraph = document.querySelector('#storyParagraph')
    storyParagraph.innerHTML = myStory
}

