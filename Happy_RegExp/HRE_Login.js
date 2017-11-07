

export default {
  /*^             # Start of the line
   [a-z0-9_-\.]	  # Match characters and symbols in the list, a-z, 0-9 , underscore , hyphen, dot
   {3,n}          # Length at least 3 characters and maximum length of 15
   $              # End of the line */
  username: (min = 3,max = '', exp) => new RegExp(exp ? exp : `/^[a-z0-9_-\\.]{${min},${max}}$/`),
  
  password: {
    /*(			        # Start of group
     (?=.*\d)		    # must contains one digit from 0-9
     (?=.*[a-z])		# must contains one lowercase characters
     (?=.*[A-Z])		# must contains one uppercase characters
     (?=.*[@#$%])		# must contains one special symbols in the list "@#$%"
     .		          # match anything with previous condition checking
     {6,n}	        # length at least 8 characters and maximum of 20
     )			        # End of group */
    complex: (min = 6,max = '', exp)=> new RegExp(exp ? exp : `/((?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{${min},${max})/`),
    /*(			        # Start of group
     (?=.*\d)		    # must contains one digit from 0-9
     (?=.*[a-z])		# must contains one lowercase characters
     .		          # match anything with previous condition checking
     {6,n}	        # length at least 8 characters and maximum of 20
     )			        # End of group */
    simple: (min = 6,max = '', exp)=> new RegExp(exp ? exp : `/((?=.*\\d)(?=.*[a-z]).{${min},${max})/`)
  },
};
