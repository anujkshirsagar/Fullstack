//classes it is used so that we dont need to define foe each object we can use the same function for every object
class animal{
    constructor(name,legcount,speaks){
    this.speak=speaks;
    this.name=name;
    this.legcounts=legcount;

}
speaks()
{
    console.log("hi there"+this.speak);

}
name(){
    console.log("name of this is"+this.name);
}
legcount()
{
    console.log("legcount of this is"+this.legcounts);
}
}
let dog=new animal("dog",4,"bhaw bhaw");
let cat=new animal("cat",4,"meow meow");
cat.speaks();