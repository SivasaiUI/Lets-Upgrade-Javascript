    /** Question 1---------------------------------------
      * Program to find particular character in a string */

    let str = "Lets Upgrade";
    console.log(str);
    console.log(str.indexOf("U"));


    /**Question 2 -------------------------------
    * Program to convert minutes to seconds */

    let minutes = 10;

    let seconds = minutes * 60;

    console.log("10  minutes into seconds is " + seconds);


    /**Question 3 ----------------------------------
    * Program to search element in a array of strings */

    let arr = ["siva", "prasad", "kamal", "kumar"];
    const result = arr[3]
    console.log("Result element : " + result);


    /**Question 4 ----------------------------------
    * Program to display only elements containing 'a' in the term of array */

    let arr2 = ["mouse", "keyboard", "monitor", "cpu", "headset"];
    let arrOfAelment = []

    for (let i = 0; i < arr2.length; i++) {
      if (arr2[i].includes("a")) {
        console.log(arr2[i]);

      }
    }

    /**Question 5 ----------------------------------
     * Print an array in reverse order */
    let fruits = ["Apple", "Orange", "bananna", "Mango"];
    const fruitsReverse = fruits.reverse();

    console.log(`Fruits reverse order: ${fruitsReverse}`);
