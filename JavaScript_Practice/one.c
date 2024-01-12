#include <stdio.h>
#include <string.h> //Necessary Header files
#include <conio.h>
#include <ctype.h>
FILE *fp; //File pointer for accessing the file
char delim[14]={'','\t','\n',',',';','(',')','{','}','[',']','#','<','>'};
char oper[7]={'+','-','*','/','%','=','!'};//Array holding all the operators
/* Set of Keywords to check and list out */
char key[21][12]= {"int","float","char","double","bool","void","extern","unsigned","goto",
"static","class","struct","for","if","else","return","register","long","while","do"};
/*The Preprocessor directives*/
char predirect[2][12]={"include","define"};
/*The possible header files*/
char header[6][15]={"stdio.h","conio.h","malloc.h","process.h","string.h","ctype.h"};
void skipcomment(); //Function to skip comments.
void analyze(); //Function analyzing the input file
void check(char[]); //Function to check whether the string matches any of the keywords
int isdelim(char); //Function to check if the character retrieved from the file is a delimiter 
int isop(char); //Function to check if the character retrieved from the file is an operator 
int fop=0,numflag=0,f=0; //necessary flag values
char c,ch,sop; //necessary character variables to store the characters retrieved
void main() //Main Function
{
 char fname[12];
 clrscr();
 printf("\nEnter filename : ");
 scanf(“%s”,fname);
 fp=fopen(fname,"r"); //Opening the file
 if(fp==NULL) //Checking Existence of the File
 printf("\nThe file doesn’t exist.");
 else //If Check succeeds
 analyze();
printf(“\nEnd of file\n”);
 getch();
} //End of Main function
void analyze() //Analyse Function
{
 char token[50]; //Declare a token character array
 int j=0;
 while(!feof(fp)) //While the file is not over
 {
 c=getc(fp);
 if(c=='/') //checking for comments in the file
 {
 skipcomment(); //Function to skip comment statements
 }
 else if(c=="") //Skipping printf statements and other such display
 while((c=getc(fp))!="");
 else if(isalpha(c)) //checking if the character is an alphabet or not
 {
 if(numflag==1)
 {
 token[j]='\0';
 check(token);
 numflag=0;
 j=0;
 f=0;
 }
 else
 {
 token[j]=c; //Combining the characters to get the token
 j++;
 }
 if(f==0)
 f=1;
 }
 else if(isalnum(c))
 {
 if(numflag==0)
 numflag=1;
 token[j]=c;//combining the characters to get the token
 j++;
 }
 else
 {
 if(isdelim(c)) //Checking for delimiters.
 {
 if(numflag==1)
 {
 token[j]='\0';
 check(token);
 numflag=0;
 }
 if(f==1)
 {
 token[j]='\0';
 numflag=0;
 check(token);
 }
 j=0;
 f=0;
 printf("\nDelimitter\t %c",c);
 }
 else if(isop(c)) //Checking for operators
 {
 if(numflag==1)
 {
 token[j]='\0';
 check(token);
 numflag=0;
 j=0;
 f=0;
 }
 if(f==1)
 {
 token[j]='\0';
 j=0;
 f=0;
 numflag=0;
 check(token);
 }
 if(fop==1)
 {
 fop=0;
printf("\nOperator\t %c%c",c,sop); //In case the operator is like ‘++’or ‘--
 }
 else
 printf("\nOperator\t %c",c); //In other cases.
 }
 else if(c=='.')
 {
 token[j]=c;
 j++;
 }
 }
 }
}
int isdelim(char c) //Function to check if the character retrieved from the file is a delimiter.
{
 int i;
 for(i=0;i<14;i++)
 {
 if(c==delim[i])
 return 1;
 }
 return 0;
}
int isop(char c) //Function to check if the character retrieved from the file is an operator.
{
 int i,j;
 char ch;
 for(i=0;i<7;i++)
 {
 if(c==oper[i])
 {
 ch=getc(fp);
 for(j=0;j<6;j++) //In case the operator is like ‘++’ or ‘--’, etc.
 {
 if(ch==oper[j])
 {
 fop=1;
 sop=ch;
 return 1;
 }
 }
 getc(ch,fp);
 return 1;
 }
 }
 return 0;
}
void check(char t[]) //Function to check if the token is an identifier, keyword, header file name 
{
 int i;
 if(numflag==1)
 {
 printf("\nNumber\t\t %s",t);
 return;
 }
 for(i=0;i<2;i++)
 {
 if(strcmp(t,predirect[i])==0)
 {
 printf("\nPreprocessor directive %s",t);
 return;
17
 }
 }
 for(i=0;i<6;i++)
 {
 if(strcmp(t,header[i])==0)
 {
 printf("\nHeader file\t %s",t);
 return;
 }
 }
 for(i=0;i<21;i++)
 {
 if(strcmp(key[i],t)==0)
 {
 printf("\nKeyword\t\t %s",key[i]);
 return;
 }
 }
 printf("\nIdentifier\t %s",t);
}
void skipcomment() //Function to skip over the comment statements in the file.
{
 ch=getc(fp);
 if(ch=='/') //Checking single line comments
 {
 while((ch=getc(fp))!='\n');
 }
 else if(ch=='*') //Checking multiple line comments.
 {
 while(f==0)
 {
 ch=getc(fp);
 if(ch=='*')
 {
 c=getc(fp);
 if(c=='/')
 f=1;
 
}
 
}
 f=0;
 
}
}
