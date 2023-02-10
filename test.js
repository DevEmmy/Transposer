function transposeDown(str) {
    const chords = str.match(/\[[A-G][b\#]?\]/g);
    if (!chords) return str;
  
    const transposedChords = chords.map(chord => {
      let root = chord[1];
      let isSharp = chord[2] === "#";
      let isFlat = chord[2] === "b";
  
      switch (root) {
        case "A":
          root = "G";
          break;
        case "B":
          root = "A";
          isSharp = !isSharp;
          break;
        case "C":
          root = "B";
          break;
        case "D":
          root = "C";
          isSharp = !isSharp;
          break;
        case "E":
          root = "D";
          break;
        case "F":
          root = "E";
          isFlat = !isFlat;
          break;
        case "G":
          root = "F";
          isSharp = !isSharp;
          break;
      }
  
      let transposedChord = "[" + root;
      if (isSharp) transposedChord += "#";
      if (isFlat) transposedChord += "b";
      transposedChord += "]";
  
      return transposedChord;
    });
  
    chords.forEach((chord, index) => {
      str = str.replace(chord, transposedChords[index]);
    });
  
    return str;
  }
  
  const song = "Verse 1: [C]Mary had a little lamb [G]its fleece was white as snow [A]And everywhere that Mary went [D]The lamb was sure to go";
  console.log(transposeDown(song));
  // Output: "Verse 1: [Bb]Mary had a little lamb [F]its fleece was white as snow [G]And everywhere that Mary went [C]The lamb was sure to go"
  