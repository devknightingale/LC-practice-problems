public class Solution {
    public bool CheckIfPangram(string sentence) {

        HashSet<char> foundLetters = new HashSet<char>(); 
      
        foreach (char c in sentence) { 
            if (!foundLetters.Contains(c)) { 
                foundLetters.Add(c); 
            }
        }
        
        return (foundLetters.Count == 26);
        
    }
}
