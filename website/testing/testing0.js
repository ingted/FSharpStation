(function()
{
 "use strict";
 var Global,FsRoot,Library,String,Array,SortWith,LibraryJS,Pojo,Date,REGEX,Msal,Policy,WebSharper,Obj,User,UserAgentApplication,ProzperClient,Templating,Msal$1,ModeloUI,EndPoint,Rpc,Refresh,VariousUI,CorreoElectronico,Telefono,Direccion,CuentaBancaria,TarjetaCredito,DatosPersonales,FormaRegistro,FormaDatos,FormaGenerica,FormaContactos,FormaAutorizacion,FormaFormasPago,RenderAliados,RenderAliado,ReporteConsolidado,Fila,TablaPagos,ListaDocs,Aliado,MainProgram,SC$1,testing_GeneratedPrintf,testing_Templates,testing_Router,Strings,Slice,Seq,Arrays,Unchecked,Char,List,IntelliFactory,Runtime,Utils,Concurrency,console,Prozper,TypesV0,Remoting,AjaxRemotingProvider,Monads,AsyncResultMAutoOpen,JSON,ClientSideJson,Provider,ProzperServer_JsonEncoder,ProzperServer_JsonDecoder,Rpc$1,ResultM,AsyncResultM,ResultMessage,UI,Doc,AttrProxy,Var$1,Templating$1,Runtime$1,Server,ProviderBuilder,Handler,TemplateInstance,View,CorreoElectronico$1,TipoTelefono,Telefono$1,TipoDireccion,Estado,Pais,ZonaPostal,Direccion$1,AttrModule,TipoCuenta,CuentaBancaria$1,TipoTarjeta,TarjetaCredito$1,Expiracion,ParseO,Genero,DatosPersonales$1,System,Guid,FromView,Aliado$1,Date$1,DateUtil,Collections,FSharpSet,Result,FormaPago,ProzperServer_GeneratedPrintf,Aliado$2,StatusAliado,$,AppFramework,PlugIn,Lazy,LayoutEngineModule,Client,Templates,Modelo,Router,Sitelets,RouterOperators;
 Global=self;
 FsRoot=Global.FsRoot=Global.FsRoot||{};
 Library=FsRoot.Library=FsRoot.Library||{};
 String=Library.String=Library.String||{};
 Array=Library.Array=Library.Array||{};
 SortWith=Library.SortWith=Library.SortWith||{};
 LibraryJS=FsRoot.LibraryJS=FsRoot.LibraryJS||{};
 Pojo=LibraryJS.Pojo=LibraryJS.Pojo||{};
 Date=LibraryJS.Date=LibraryJS.Date||{};
 REGEX=LibraryJS.REGEX=LibraryJS.REGEX||{};
 Msal=LibraryJS.Msal=LibraryJS.Msal||{};
 Policy=Msal.Policy=Msal.Policy||{};
 WebSharper=Global.WebSharper;
 Obj=WebSharper&&WebSharper.Obj;
 User=Msal.User=Msal.User||{};
 UserAgentApplication=Msal.UserAgentApplication=Msal.UserAgentApplication||{};
 ProzperClient=FsRoot.ProzperClient=FsRoot.ProzperClient||{};
 Templating=ProzperClient.Templating=ProzperClient.Templating||{};
 Msal$1=ProzperClient.Msal=ProzperClient.Msal||{};
 ModeloUI=ProzperClient.ModeloUI=ProzperClient.ModeloUI||{};
 EndPoint=ModeloUI.EndPoint=ModeloUI.EndPoint||{};
 Rpc=ModeloUI.Rpc=ModeloUI.Rpc||{};
 Refresh=ModeloUI.Refresh=ModeloUI.Refresh||{};
 VariousUI=ModeloUI.VariousUI=ModeloUI.VariousUI||{};
 CorreoElectronico=ModeloUI.CorreoElectronico=ModeloUI.CorreoElectronico||{};
 Telefono=ModeloUI.Telefono=ModeloUI.Telefono||{};
 Direccion=ModeloUI.Direccion=ModeloUI.Direccion||{};
 CuentaBancaria=ModeloUI.CuentaBancaria=ModeloUI.CuentaBancaria||{};
 TarjetaCredito=ModeloUI.TarjetaCredito=ModeloUI.TarjetaCredito||{};
 DatosPersonales=ModeloUI.DatosPersonales=ModeloUI.DatosPersonales||{};
 FormaRegistro=ModeloUI.FormaRegistro=ModeloUI.FormaRegistro||{};
 FormaDatos=ModeloUI.FormaDatos=ModeloUI.FormaDatos||{};
 FormaGenerica=ModeloUI.FormaGenerica=ModeloUI.FormaGenerica||{};
 FormaContactos=ModeloUI.FormaContactos=ModeloUI.FormaContactos||{};
 FormaAutorizacion=ModeloUI.FormaAutorizacion=ModeloUI.FormaAutorizacion||{};
 FormaFormasPago=ModeloUI.FormaFormasPago=ModeloUI.FormaFormasPago||{};
 RenderAliados=ModeloUI.RenderAliados=ModeloUI.RenderAliados||{};
 RenderAliado=ModeloUI.RenderAliado=ModeloUI.RenderAliado||{};
 ReporteConsolidado=ModeloUI.ReporteConsolidado=ModeloUI.ReporteConsolidado||{};
 Fila=ReporteConsolidado.Fila=ReporteConsolidado.Fila||{};
 TablaPagos=ModeloUI.TablaPagos=ModeloUI.TablaPagos||{};
 ListaDocs=ModeloUI.ListaDocs=ModeloUI.ListaDocs||{};
 Aliado=ModeloUI.Aliado=ModeloUI.Aliado||{};
 MainProgram=ProzperClient.MainProgram=ProzperClient.MainProgram||{};
 SC$1=Global.StartupCode$testing$testing=Global.StartupCode$testing$testing||{};
 testing_GeneratedPrintf=Global.testing_GeneratedPrintf=Global.testing_GeneratedPrintf||{};
 testing_Templates=Global.testing_Templates=Global.testing_Templates||{};
 testing_Router=Global.testing_Router=Global.testing_Router||{};
 Strings=WebSharper&&WebSharper.Strings;
 Slice=WebSharper&&WebSharper.Slice;
 Seq=WebSharper&&WebSharper.Seq;
 Arrays=WebSharper&&WebSharper.Arrays;
 Unchecked=WebSharper&&WebSharper.Unchecked;
 Char=WebSharper&&WebSharper.Char;
 List=WebSharper&&WebSharper.List;
 IntelliFactory=Global.IntelliFactory;
 Runtime=IntelliFactory&&IntelliFactory.Runtime;
 Utils=WebSharper&&WebSharper.Utils;
 Concurrency=WebSharper&&WebSharper.Concurrency;
 console=Global.console;
 Prozper=FsRoot&&FsRoot.Prozper;
 TypesV0=Prozper&&Prozper.TypesV0;
 Remoting=WebSharper&&WebSharper.Remoting;
 AjaxRemotingProvider=Remoting&&Remoting.AjaxRemotingProvider;
 Monads=Library&&Library.Monads;
 AsyncResultMAutoOpen=Monads&&Monads.AsyncResultMAutoOpen;
 JSON=Global.JSON;
 ClientSideJson=WebSharper&&WebSharper.ClientSideJson;
 Provider=ClientSideJson&&ClientSideJson.Provider;
 ProzperServer_JsonEncoder=Global.ProzperServer_JsonEncoder;
 ProzperServer_JsonDecoder=Global.ProzperServer_JsonDecoder;
 Rpc$1=Prozper&&Prozper.Rpc;
 ResultM=Monads&&Monads.ResultM;
 AsyncResultM=Monads&&Monads.AsyncResultM;
 ResultMessage=Library&&Library.ResultMessage;
 UI=WebSharper&&WebSharper.UI;
 Doc=UI&&UI.Doc;
 AttrProxy=UI&&UI.AttrProxy;
 Var$1=UI&&UI.Var$1;
 Templating$1=UI&&UI.Templating;
 Runtime$1=Templating$1&&Templating$1.Runtime;
 Server=Runtime$1&&Runtime$1.Server;
 ProviderBuilder=Server&&Server.ProviderBuilder;
 Handler=Server&&Server.Handler;
 TemplateInstance=Server&&Server.TemplateInstance;
 View=UI&&UI.View;
 CorreoElectronico$1=TypesV0&&TypesV0.CorreoElectronico;
 TipoTelefono=TypesV0&&TypesV0.TipoTelefono;
 Telefono$1=TypesV0&&TypesV0.Telefono;
 TipoDireccion=TypesV0&&TypesV0.TipoDireccion;
 Estado=TypesV0&&TypesV0.Estado;
 Pais=TypesV0&&TypesV0.Pais;
 ZonaPostal=TypesV0&&TypesV0.ZonaPostal;
 Direccion$1=TypesV0&&TypesV0.Direccion;
 AttrModule=UI&&UI.AttrModule;
 TipoCuenta=TypesV0&&TypesV0.TipoCuenta;
 CuentaBancaria$1=TypesV0&&TypesV0.CuentaBancaria;
 TipoTarjeta=TypesV0&&TypesV0.TipoTarjeta;
 TarjetaCredito$1=TypesV0&&TypesV0.TarjetaCredito;
 Expiracion=TypesV0&&TypesV0.Expiracion;
 ParseO=Library&&Library.ParseO;
 Genero=TypesV0&&TypesV0.Genero;
 DatosPersonales$1=TypesV0&&TypesV0.DatosPersonales;
 System=Global.System;
 Guid=System&&System.Guid;
 FromView=UI&&UI.FromView;
 Aliado$1=Prozper&&Prozper.Aliado;
 Date$1=Global.Date;
 DateUtil=WebSharper&&WebSharper.DateUtil;
 Collections=WebSharper&&WebSharper.Collections;
 FSharpSet=Collections&&Collections.FSharpSet;
 Result=WebSharper&&WebSharper.Result;
 FormaPago=TypesV0&&TypesV0.FormaPago;
 ProzperServer_GeneratedPrintf=Global.ProzperServer_GeneratedPrintf;
 Aliado$2=TypesV0&&TypesV0.Aliado;
 StatusAliado=TypesV0&&TypesV0.StatusAliado;
 $=Global.jQuery;
 AppFramework=LibraryJS&&LibraryJS.AppFramework;
 PlugIn=AppFramework&&AppFramework.PlugIn;
 Lazy=WebSharper&&WebSharper.Lazy;
 LayoutEngineModule=LibraryJS&&LibraryJS.LayoutEngineModule;
 Client=UI&&UI.Client;
 Templates=Client&&Client.Templates;
 Modelo=TypesV0&&TypesV0.Modelo;
 Router=UI&&UI.Router;
 Sitelets=WebSharper&&WebSharper.Sitelets;
 RouterOperators=Sitelets&&Sitelets.RouterOperators;
 String.EndsWith$1=function(ends,s)
 {
  return Strings.EndsWith(s,ends)?{
   $:1,
   $0:Slice.string(s,{
    $:1,
    $0:0
   },{
    $:1,
    $0:s.length-ends.length-1
   })
  }:null;
 };
 String.StartsWith$1=function(start,s)
 {
  return Strings.StartsWith(s,start)?{
   $:1,
   $0:Slice.string(s,{
    $:1,
    $0:start.length
   },null)
  }:null;
 };
 String.skipLastLine$1=function()
 {
  SC$1.$cctor();
  return SC$1.skipLastLine;
 };
 String.indentStr$1=function(i)
 {
  function f(s)
  {
   return String.indent$1(i,s);
  }
  function g(s)
  {
   return Strings.concat("\n",s);
  }
  return function(x)
  {
   return g(f(x));
  };
 };
 String.unindentStr$1=function()
 {
  SC$1.$cctor();
  return SC$1.unindentStr;
 };
 String.indent$1=function(n,s)
 {
  var x,x$1;
  x=Strings.SplitChars(s,["\n"],0);
  return Seq.map((x$1=Strings.replicate(n," "),function(y)
  {
   return x$1+y;
  }),x);
 };
 String.unindent$1=function(s)
 {
  var lines,n,o,o$1;
  lines=Strings.SplitChars(s,["\n"],0);
  n=(o=Seq.tryFindIndex(function(y)
  {
   return" "!==y;
  },(o$1=Seq.tryFind(function(l)
  {
   return Strings.Trim(l)!=="";
  },lines),o$1==null?"":o$1.$0)),o==null?0:o.$0);
  return Seq.filter(function(s$1)
  {
   return!Strings.StartsWith(s$1,"# 1 ");
  },Seq.map(function(l)
  {
   return l.length<=n?"":l.substring(n);
  },lines));
 };
 String.skipFirstLine$1=function(txt)
 {
  var i;
  i=txt.indexOf("\n");
  return i<0?"":Slice.string(txt,{
   $:1,
   $0:i+1
  },null);
 };
 String.append$1=function(a,b)
 {
  return a+b;
 };
 String.trim$1=function(s)
 {
  return Strings.Trim(s);
 };
 String.contains$1=function(sub,whole)
 {
  return whole.indexOf(sub)!=-1;
 };
 String.delimitedO$1=function(op,cl,txt)
 {
  var o,$1,bef,o$1,$2;
  o=String.splitInTwoO$1(op,txt);
  return o==null?null:($1=o.$0,(bef=$1[0],(o$1=String.splitInTwoO$1(cl,$1[1]),o$1==null?null:{
   $:1,
   $0:($2=o$1.$0,[bef,$2[0],$2[1]])
  })));
 };
 String.splitInTwoO$1=function(spl,txt)
 {
  var i;
  i=txt.indexOf(spl);
  return i===-1?null:{
   $:1,
   $0:[Library["String.Left$1"](txt,i),txt.substring(i+spl.length)]
  };
 };
 String.splitByChar$1=function(c,s)
 {
  return Strings.SplitChars(s,[c],0);
 };
 Array.remove=function(i,array)
 {
  return Arrays.ofSeq(Seq.delay(function()
  {
   return Seq.append(i>0?Slice.array(array,null,{
    $:1,
    $0:i-1
   }):[],Seq.delay(function()
   {
    return i<Arrays.length(array)?Slice.array(array,{
     $:1,
     $0:i+1
    },null):[];
   }));
  }));
 };
 Array.replace=function(i,item,array)
 {
  return Arrays.ofSeq(Seq.delay(function()
  {
   return Seq.append(i>0?Slice.array(array,null,{
    $:1,
    $0:i-1
   }):[],Seq.delay(function()
   {
    return Seq.append([item],Seq.delay(function()
    {
     return i<Arrays.length(array)?Slice.array(array,{
      $:1,
      $0:i+1
     },null):[];
    }));
   }));
  }));
 };
 SortWith.op_AmpGreater=function(c1,c2,a,b)
 {
  var m;
  m=c1(a,b);
  return m===0?c2(a,b):m;
 };
 SortWith.desc=function(f,a,b)
 {
  return Unchecked.Compare(f(b),f(a));
 };
 SortWith.asc=function(f,a,b)
 {
  return Unchecked.Compare(f(a),f(b));
 };
 Library["String.get_toUnderscore$1"]=function(_this,u)
 {
  return Arrays.ofSeq(Seq.collect(Global.id,Seq.mapi(function(i,c)
  {
   return i>0&&Char.IsUpper(c)?List.ofArray(["_",c]):List.ofArray([c]);
  },_this))).join("");
 };
 Library["String.Right$1"]=function(_this,n)
 {
  var a,b;
  return Library["String.Substring2$1"](_this,(a=0,(b=_this.length-n,Unchecked.Compare(a,b)===1?a:b)),_this.length);
 };
 Library["String.Left$1"]=function(_this,n)
 {
  return n<0?Library["String.Substring2$1"](_this,0,_this.length+n):Library["String.Substring2$1"](_this,0,n);
 };
 Library["String.Substring2$1"]=function(_this,from,n)
 {
  var from$1,b;
  while(true)
   {
    if(n<=0)
     return"";
    else
     if(from<0)
      {
       from$1=from;
       from=0;
       n=n+from$1;
      }
     else
      return from>=_this.length?"":Strings.Substring(_this,from,(b=_this.length-from,Unchecked.Compare(n,b)===-1?n:b));
   }
 };
 Library.Error$1=function(a)
 {
  return{
   $:1,
   $0:a
  };
 };
 Pojo.newPojoOpt=function(propOs)
 {
  function c(n,vO)
  {
   return vO==null?null:{
    $:1,
    $0:[n,vO.$0]
   };
  }
  return Pojo.newPojo(Seq.choose(function($1)
  {
   return c($1[0],$1[1]);
  },propOs));
 };
 Pojo.newPojo=function(props)
 {
  var pojo,f;
  function f$1(a,a$1)
  {
   return function(p)
   {
    return Pojo.addProp(a,a$1,p);
   };
  }
  function g(v)
  {
  }
  pojo={};
  Seq.iter((f=function(b)
  {
   return(function($1)
   {
    return f$1($1[0],$1[1]);
   }(b))(pojo);
  },function(x)
  {
   return g(f(x));
  }),props);
  return pojo;
 };
 Pojo.addProp=function(p,p$1,pojo)
 {
  pojo[p]=p$1;
  return pojo;
 };
 Date.toYYYYMMDD=function(sep,date)
 {
  return((((((Runtime.Curried(function($1,$2,$3,$4,$5,$6)
  {
   return $1(Global.String($2)+Utils.toSafe($3)+Utils.padNumLeft(Global.String($4),2)+Utils.toSafe($5)+Utils.padNumLeft(Global.String($6),2));
  },6))(Global.id))((new Global.Date(date)).getFullYear()))(sep))((new Global.Date(date)).getMonth()+1))(sep))((new Global.Date(date)).getDate());
 };
 REGEX.Identifier$1=function(a)
 {
  var $1,a$1,t;
  return(a$1=LibraryJS.REGEX$2("^[$a-zA-Z_][0-9a-zA-Z_\\.\\-$]*$","",a),a$1!=null&&a$1.$==1&&((t=a$1.$0,!Unchecked.Equals(t,null)&&t.length===1)&&($1=Arrays.get(a$1.$0,0),true)))?{
   $:1,
   $0:$1
  }:null;
 };
 REGEX.getEndWord$1=function(line,ch)
 {
  var a,t;
  a=LibraryJS.REGEX$2("^([a-zA-Z_]\\w*)","g",line.substring(ch));
  return a!=null&&a.$==1?(t=a.$0,!Unchecked.Equals(t,null)&&t.length===1)?Arrays.get(a.$0,0):"":"";
 };
 REGEX.getStartWord$1=function(line,ch)
 {
  var a,t;
  a=LibraryJS.REGEX$2("([a-zA-Z_]\\w*)$","g",Strings.Substring(line,0,ch));
  return a!=null&&a.$==1?(t=a.$0,!Unchecked.Equals(t,null)&&t.length===1)?Arrays.get(a.$0,0):"":"";
 };
 Policy=Msal.Policy=Runtime.Class({
  toString:function()
  {
   return Strings.ReplaceChar(Library["String.get_toUnderscore$1"]((function($1)
   {
    return function($2)
    {
     return $1(testing_GeneratedPrintf.p($2));
    };
   }(Global.id))(this)),"_"," ");
  }
 },null,Policy);
 Policy.ResetPassword=new Policy({
  $:3
 });
 Policy.EditProfile=new Policy({
  $:2
 });
 Policy.SignUp=new Policy({
  $:1
 });
 Policy.SignIn=new Policy({
  $:0
 });
 Policy.Parse=function(txt)
 {
  var m;
  m=Strings.Replace(txt," ","");
  return m==="SignUp"?Policy.SignUp:m==="EditProfile"?Policy.EditProfile:m==="ResetPassword"?Policy.ResetPassword:Policy.SignIn;
 };
 User=Msal.User=Runtime.Class({},Obj,User);
 User.New=Runtime.Ctor(function(displayableId,name,identityProvider,userIdentifier,idToken,sid)
 {
  Obj.New.call(this);
 },User);
 UserAgentApplication.Options=function(cacheLocation,isAngular,loadFrameTimeout,logger,navigateToLoginRequestUrl,postLogoutRedirectUri,protectedResourceMap,redirectUri,state,storeAuthStateInCookie,unprotectedResources,validateAuthority)
 {
  return Pojo.newPojoOpt([Msal.op_EqualsEqualsGreater("cacheLocation",cacheLocation),Msal.op_EqualsEqualsGreater("isAngular",isAngular),Msal.op_EqualsEqualsGreater("loadFrameTimeout",loadFrameTimeout),Msal.op_EqualsEqualsGreater("logger",logger),Msal.op_EqualsEqualsGreater("navigateToLoginRequestUrl",navigateToLoginRequestUrl),Msal.op_EqualsEqualsGreater("postLogoutRedirectUri",postLogoutRedirectUri),Msal.op_EqualsEqualsGreater("protectedResourceMap",protectedResourceMap),Msal.op_EqualsEqualsGreater("redirectUri",redirectUri),Msal.op_EqualsEqualsGreater("state",state),Msal.op_EqualsEqualsGreater("storeAuthStateInCookie",storeAuthStateInCookie),Msal.op_EqualsEqualsGreater("unprotectedResources",unprotectedResources),Msal.op_EqualsEqualsGreater("validateAuthority",validateAuthority)]);
 };
 Msal.op_EqualsEqualsGreater=function(n,vO)
 {
  return[n,vO==null?null:{
   $:1,
   $0:vO.$0
  }];
 };
 Msal.policies=function()
 {
  SC$1.$cctor();
  return SC$1.policies;
 };
 LibraryJS.rexEmail$1=function()
 {
  SC$1.$cctor();
  return SC$1.rexEmail;
 };
 LibraryJS.rexGuid$1=function()
 {
  SC$1.$cctor();
  return SC$1.rexGuid;
 };
 LibraryJS.REGEX$2=function(expr,opt,value)
 {
  var m;
  return value===null?null:(m=(new Global.String(value)).match(new Global.RegExp(expr,opt)),Unchecked.Equals(m,null)?null:!Unchecked.Equals(m,null)&&m.length===0?null:{
   $:1,
   $0:m
  });
 };
 Templating.LoginFileName=function()
 {
  SC$1.$cctor();
  return SC$1.LoginFileName;
 };
 Templating.TemplatesFileName=function()
 {
  SC$1.$cctor();
  return SC$1.TemplatesFileName;
 };
 Templating.rootdir=function()
 {
  SC$1.$cctor();
  return SC$1.rootdir;
 };
 Msal$1.logout=function()
 {
  Msal$1.executePolicy(true,Policy.SignIn);
 };
 Msal$1.checkUser=function()
 {
  var b;
  Concurrency.Start((b=null,Concurrency.Delay(function()
  {
   return Concurrency.Bind(Concurrency.Sleep(100),function()
   {
    return Concurrency.While(function()
    {
     return true;
    },Concurrency.Delay(function()
    {
     var newO,m;
     newO=(m=Msal$1.agent().getUser(),Unchecked.Equals(m,null)?null:{
      $:1,
      $0:m
     });
     return Concurrency.Combine(Msal$1.getId(newO)!==Msal$1.getId(Msal$1.userO().Get())?(Msal$1.userO().Set(newO),Concurrency.Zero()):Concurrency.Zero(),Concurrency.Delay(function()
     {
      return Concurrency.Combine(Unchecked.Equals(Msal$1.userO().Get(),null)?(Msal$1.executePolicy(false,Policy.SignIn),Concurrency.Zero()):Concurrency.Zero(),Concurrency.Delay(function()
      {
       return Concurrency.Bind(Concurrency.Sleep(9000),function()
       {
        return Concurrency.Return(null);
       });
      }));
     }));
    }));
   });
  })),null);
 };
 Msal$1.executePolicy=function(force,policy)
 {
  Msal$1.storeValue("forceLogin",force?"1":"0");
  Msal$1.storeValue("goInsideLink",self.location.href);
  Msal$1.storeValue("policyType",Global.String(policy));
  self.location.replace("blob/Msal.html");
 };
 Msal$1.claims=function(user)
 {
  var r;
  r=[["oid",user.idToken.oid],["city",user.idToken.city],["country",user.idToken.country],["extension_DateOfBirth",user.idToken.extension_DateOfBirth],["given_name",user.idToken.given_name],["postalCode",user.idToken.postalCode],["state",user.idToken.state],["streetAddress",user.idToken.streetAddress],["family_name",user.idToken.family_name],["emails",Arrays.get(user.idToken.emails,0)],["referidoPor",Msal$1.referidoPor()]];
  Msal$1.localStorage().setItem("referidoPor","");
  return r;
 };
 Msal$1.referidoPor=function()
 {
  return Msal$1.localStorage().getItem("referidoPor");
 };
 Msal$1.localStorage=function()
 {
  SC$1.$cctor();
  return SC$1.localStorage;
 };
 Msal$1.getId=function(userO)
 {
  var o;
  o=userO==null?null:{
   $:1,
   $0:userO.$0.idToken.oid
  };
  return o==null?"":o.$0;
 };
 Msal$1.agent=function()
 {
  SC$1.$cctor();
  return SC$1.agent;
 };
 Msal$1.userO=function()
 {
  SC$1.$cctor();
  return SC$1.userO;
 };
 Msal$1.authority=function()
 {
  SC$1.$cctor();
  return SC$1.authority;
 };
 Msal$1.getAuthority=function(tenantName,policyName)
 {
  return((((Runtime.Curried(function($1,$2,$3,$4)
  {
   return $1("https://"+Utils.toSafe($2)+".b2clogin.com/tfp/"+Utils.toSafe($3)+".onmicrosoft.com/"+Utils.toSafe($4));
  },4))(Global.id))(tenantName))(tenantName))(policyName);
 };
 Msal$1.policyType=function()
 {
  SC$1.$cctor();
  return SC$1.policyType;
 };
 Msal$1.resetPasswordPolicy=function()
 {
  SC$1.$cctor();
  return SC$1.resetPasswordPolicy;
 };
 Msal$1.editProfilePolicy=function()
 {
  SC$1.$cctor();
  return SC$1.editProfilePolicy;
 };
 Msal$1.signUpPolicy=function()
 {
  SC$1.$cctor();
  return SC$1.signUpPolicy;
 };
 Msal$1.signInPolicy=function()
 {
  SC$1.$cctor();
  return SC$1.signInPolicy;
 };
 Msal$1.forceLogin=function()
 {
  SC$1.$cctor();
  return SC$1.forceLogin;
 };
 Msal$1.createOnStart=function()
 {
  SC$1.$cctor();
  return SC$1.createOnStart;
 };
 Msal$1.refreshBefore=function()
 {
  SC$1.$cctor();
  return SC$1.refreshBefore;
 };
 Msal$1.extraQueryParms=function()
 {
  SC$1.$cctor();
  return SC$1.extraQueryParms;
 };
 Msal$1.ref=function()
 {
  SC$1.$cctor();
  return SC$1.ref;
 };
 Msal$1.tenantName=function()
 {
  SC$1.$cctor();
  return SC$1.tenantName;
 };
 Msal$1.applicationId=function()
 {
  SC$1.$cctor();
  return SC$1.applicationId;
 };
 Msal$1.storeValue=function(name,v)
 {
  Msal$1.storage().setItem(name,v);
  return v;
 };
 Msal$1.storage=function()
 {
  SC$1.$cctor();
  return SC$1.storage;
 };
 Msal$1.callback=function(errorDesc,token,error,tokenType,state)
 {
  ((function($1)
  {
   return function($2)
   {
    return $1("callback: "+("("+Utils.prettyPrint($2[0])+", "+Utils.prettyPrint($2[1])+", "+Utils.prettyPrint($2[2])+", "+Utils.prettyPrint($2[3])+", "+Utils.prettyPrint($2[4])+")"));
   };
  }(function(s)
  {
   console.log(s);
  }))([errorDesc,error,tokenType,token,state]));
 };
 EndPoint.PreRegister={
  $:2
 };
 EndPoint.NoUser={
  $:1
 };
 EndPoint.DefaultEP={
  $:0
 };
 Rpc.actualizarSubscripcion=function(p)
 {
  var f,i,b;
  f=(i=new TypesV0.IdAliado({
   $:0,
   $0:Aliado.get_LoggedId()
  }),function(i$1)
  {
   return(new AjaxRemotingProvider.New()).Async("ProzperServer:FsRoot.Prozper+Rpc.actualizarSubscripcion:808715793",[i,i$1]);
  });
  b=AsyncResultMAutoOpen.asyncResultM();
  return b.Run(b.Delay(function()
  {
   var a;
   a=Rpc.llamadas().Get()+1;
   Rpc.llamadas().Set(a);
   return b.TryFinally(b.Delay(function()
   {
    return b.ReturnFrom$4(f(p));
   }),function()
   {
    var a$1;
    a$1=Rpc.llamadas().Get()-1;
    Rpc.llamadas().Set(a$1);
   });
  }));
 };
 Rpc.obtenerEstadoParaUsuario=function(p)
 {
  var p$1,b;
  function f(i)
  {
   return(new AjaxRemotingProvider.New()).Async("ProzperServer:FsRoot.Prozper+Rpc.obtenerEstadoParaUsuario:-1569835008",[i]);
  }
  p$1=new TypesV0.IdAliado({
   $:0,
   $0:Aliado.get_LoggedId()
  });
  b=AsyncResultMAutoOpen.asyncResultM();
  return b.Run(b.Delay(function()
  {
   var a;
   a=Rpc.llamadas().Get()+1;
   Rpc.llamadas().Set(a);
   return b.TryFinally(b.Delay(function()
   {
    return b.ReturnFrom$4(f(p$1));
   }),function()
   {
    var a$1;
    a$1=Rpc.llamadas().Get()-1;
    Rpc.llamadas().Set(a$1);
   });
  }));
 };
 Rpc.obtenerListaDocs=function()
 {
  var f,fname,b;
  function serializeP(p)
  {
   return JSON.stringify(((Provider.Id())())(p));
  }
  function serializeR(p)
  {
   return JSON.stringify((ProzperServer_JsonEncoder.j$47())(p));
  }
  function deserializeP(s)
  {
   return((Provider.Id())())(JSON.parse(s));
  }
  function deserializeR(s)
  {
   return(ProzperServer_JsonDecoder.j$47())(JSON.parse(s));
  }
  f=(fname="obtenerListaDocs",[function(idAliado)
  {
   var f$1,g,f$2;
   function g$1(p)
   {
    return Rpc$1.invoke(fname,idAliado,p);
   }
   function f$3(r)
   {
    return ResultM.bind(deserializeR,r);
   }
   function g$2(v)
   {
    return Concurrency.Return(v);
   }
   f$1=function(x)
   {
    return g$1(serializeP(x));
   };
   g=(f$2=function(x)
   {
    return g$2(f$3(x));
   },function(v)
   {
    return Concurrency.Bind(v,f$2);
   });
   return function(x)
   {
    return g(f$1(x));
   };
  },function(f$1)
  {
   Rpc$1.registroRpcs().Add(fname,function(c)
   {
    return function(js)
    {
     var b$1;
     function g(v)
     {
      return Concurrency.Return(v);
     }
     return Concurrency.Bind((b$1=AsyncResultMAutoOpen.asyncResultM(),b$1.Run(b$1.Delay(function()
     {
      var p;
      p=deserializeP(js);
      return b$1.Bind$4((f$1(c))(p),function(a)
      {
       return b$1.Return(a);
      });
     }))),function(x)
     {
      return g(serializeR(x));
     });
    };
   });
  }])[0](Aliado.get_LoggedId());
  b=AsyncResultMAutoOpen.asyncResultM();
  return b.Run(b.Delay(function()
  {
   var a;
   a=Rpc.llamadas().Get()+1;
   Rpc.llamadas().Set(a);
   return b.TryFinally(b.Delay(function()
   {
    return b.ReturnFrom$4(f(void 0));
   }),function()
   {
    var a$1;
    a$1=Rpc.llamadas().Get()-1;
    Rpc.llamadas().Set(a$1);
   });
  }));
 };
 Rpc.obtenerFormasDePagoPara=function(p)
 {
  var f,fname,b;
  function serializeP(p$1)
  {
   return JSON.stringify(((Provider.EncodeArray(ProzperServer_JsonEncoder.j$22))())(p$1));
  }
  function serializeR(p$1)
  {
   return JSON.stringify((ProzperServer_JsonEncoder.j$46())(p$1));
  }
  function deserializeP(s)
  {
   return((Provider.DecodeArray(ProzperServer_JsonDecoder.j$22))())(JSON.parse(s));
  }
  function deserializeR(s)
  {
   return(ProzperServer_JsonDecoder.j$46())(JSON.parse(s));
  }
  f=(fname="obtenerFormasDePagoPara",[function(idAliado)
  {
   var f$1,g,f$2;
   function g$1(p$1)
   {
    return Rpc$1.invoke(fname,idAliado,p$1);
   }
   function f$3(r)
   {
    return ResultM.bind(deserializeR,r);
   }
   function g$2(v)
   {
    return Concurrency.Return(v);
   }
   f$1=function(x)
   {
    return g$1(serializeP(x));
   };
   g=(f$2=function(x)
   {
    return g$2(f$3(x));
   },function(v)
   {
    return Concurrency.Bind(v,f$2);
   });
   return function(x)
   {
    return g(f$1(x));
   };
  },function(f$1)
  {
   Rpc$1.registroRpcs().Add(fname,function(c)
   {
    return function(js)
    {
     var b$1;
     function g(v)
     {
      return Concurrency.Return(v);
     }
     return Concurrency.Bind((b$1=AsyncResultMAutoOpen.asyncResultM(),b$1.Run(b$1.Delay(function()
     {
      var p$1;
      p$1=deserializeP(js);
      return b$1.Bind$4((f$1(c))(p$1),function(a)
      {
       return b$1.Return(a);
      });
     }))),function(x)
     {
      return g(serializeR(x));
     });
    };
   });
  }])[0](Aliado.get_LoggedId());
  b=AsyncResultMAutoOpen.asyncResultM();
  return b.Run(b.Delay(function()
  {
   var a;
   a=Rpc.llamadas().Get()+1;
   Rpc.llamadas().Set(a);
   return b.TryFinally(b.Delay(function()
   {
    return b.ReturnFrom$4(f(p));
   }),function()
   {
    var a$1;
    a$1=Rpc.llamadas().Get()-1;
    Rpc.llamadas().Set(a$1);
   });
  }));
 };
 Rpc.borrarFormaPago=function(p)
 {
  var f,fname,b;
  function serializeP(p$1)
  {
   return JSON.stringify((ProzperServer_JsonEncoder.j$34())(p$1));
  }
  function serializeR(p$1)
  {
   return JSON.stringify((ProzperServer_JsonEncoder.j$45())(p$1));
  }
  function deserializeP(s)
  {
   return(ProzperServer_JsonDecoder.j$34())(JSON.parse(s));
  }
  function deserializeR(s)
  {
   return(ProzperServer_JsonDecoder.j$45())(JSON.parse(s));
  }
  f=(fname="borrarFormaPago",[function(idAliado)
  {
   var f$1,g,f$2;
   function g$1(p$1)
   {
    return Rpc$1.invoke(fname,idAliado,p$1);
   }
   function f$3(r)
   {
    return ResultM.bind(deserializeR,r);
   }
   function g$2(v)
   {
    return Concurrency.Return(v);
   }
   f$1=function(x)
   {
    return g$1(serializeP(x));
   };
   g=(f$2=function(x)
   {
    return g$2(f$3(x));
   },function(v)
   {
    return Concurrency.Bind(v,f$2);
   });
   return function(x)
   {
    return g(f$1(x));
   };
  },function(f$1)
  {
   Rpc$1.registroRpcs().Add(fname,function(c)
   {
    return function(js)
    {
     var b$1;
     function g(v)
     {
      return Concurrency.Return(v);
     }
     return Concurrency.Bind((b$1=AsyncResultMAutoOpen.asyncResultM(),b$1.Run(b$1.Delay(function()
     {
      var p$1;
      p$1=deserializeP(js);
      return b$1.Bind$4((f$1(c))(p$1),function(a)
      {
       return b$1.Return(a);
      });
     }))),function(x)
     {
      return g(serializeR(x));
     });
    };
   });
  }])[0](Aliado.get_LoggedId());
  b=AsyncResultMAutoOpen.asyncResultM();
  return b.Run(b.Delay(function()
  {
   var a;
   a=Rpc.llamadas().Get()+1;
   Rpc.llamadas().Set(a);
   return b.TryFinally(b.Delay(function()
   {
    return b.ReturnFrom$4(f(p));
   }),function()
   {
    var a$1;
    a$1=Rpc.llamadas().Get()-1;
    Rpc.llamadas().Set(a$1);
   });
  }));
 };
 Rpc.validarFormaPago=function(p)
 {
  var f,fname,b;
  function serializeP(p$1)
  {
   return JSON.stringify((ProzperServer_JsonEncoder.j$34())(p$1));
  }
  function serializeR(p$1)
  {
   return JSON.stringify((ProzperServer_JsonEncoder.j$45())(p$1));
  }
  function deserializeP(s)
  {
   return(ProzperServer_JsonDecoder.j$34())(JSON.parse(s));
  }
  function deserializeR(s)
  {
   return(ProzperServer_JsonDecoder.j$45())(JSON.parse(s));
  }
  f=(fname="validarFormaPago",[function(idAliado)
  {
   var f$1,g,f$2;
   function g$1(p$1)
   {
    return Rpc$1.invoke(fname,idAliado,p$1);
   }
   function f$3(r)
   {
    return ResultM.bind(deserializeR,r);
   }
   function g$2(v)
   {
    return Concurrency.Return(v);
   }
   f$1=function(x)
   {
    return g$1(serializeP(x));
   };
   g=(f$2=function(x)
   {
    return g$2(f$3(x));
   },function(v)
   {
    return Concurrency.Bind(v,f$2);
   });
   return function(x)
   {
    return g(f$1(x));
   };
  },function(f$1)
  {
   Rpc$1.registroRpcs().Add(fname,function(c)
   {
    return function(js)
    {
     var b$1;
     function g(v)
     {
      return Concurrency.Return(v);
     }
     return Concurrency.Bind((b$1=AsyncResultMAutoOpen.asyncResultM(),b$1.Run(b$1.Delay(function()
     {
      var p$1;
      p$1=deserializeP(js);
      return b$1.Bind$4((f$1(c))(p$1),function(a)
      {
       return b$1.Return(a);
      });
     }))),function(x)
     {
      return g(serializeR(x));
     });
    };
   });
  }])[0](Aliado.get_LoggedId());
  b=AsyncResultMAutoOpen.asyncResultM();
  return b.Run(b.Delay(function()
  {
   var a;
   a=Rpc.llamadas().Get()+1;
   Rpc.llamadas().Set(a);
   return b.TryFinally(b.Delay(function()
   {
    return b.ReturnFrom$4(f(p));
   }),function()
   {
    var a$1;
    a$1=Rpc.llamadas().Get()-1;
    Rpc.llamadas().Set(a$1);
   });
  }));
 };
 Rpc.registrarCuenta=function(p)
 {
  var f,fname,b;
  function serializeP(p$1)
  {
   return JSON.stringify((ProzperServer_JsonEncoder.j$41())(p$1));
  }
  function serializeR(p$1)
  {
   return JSON.stringify((ProzperServer_JsonEncoder.j$45())(p$1));
  }
  function deserializeP(s)
  {
   return(ProzperServer_JsonDecoder.j$41())(JSON.parse(s));
  }
  function deserializeR(s)
  {
   return(ProzperServer_JsonDecoder.j$45())(JSON.parse(s));
  }
  f=(fname="registrarCuenta",[function(idAliado)
  {
   var f$1,g,f$2;
   function g$1(p$1)
   {
    return Rpc$1.invoke(fname,idAliado,p$1);
   }
   function f$3(r)
   {
    return ResultM.bind(deserializeR,r);
   }
   function g$2(v)
   {
    return Concurrency.Return(v);
   }
   f$1=function(x)
   {
    return g$1(serializeP(x));
   };
   g=(f$2=function(x)
   {
    return g$2(f$3(x));
   },function(v)
   {
    return Concurrency.Bind(v,f$2);
   });
   return function(x)
   {
    return g(f$1(x));
   };
  },function(f$1)
  {
   Rpc$1.registroRpcs().Add(fname,function(c)
   {
    return function(js)
    {
     var b$1;
     function g(v)
     {
      return Concurrency.Return(v);
     }
     return Concurrency.Bind((b$1=AsyncResultMAutoOpen.asyncResultM(),b$1.Run(b$1.Delay(function()
     {
      var p$1;
      p$1=deserializeP(js);
      return b$1.Bind$4((f$1(c))(p$1),function(a)
      {
       return b$1.Return(a);
      });
     }))),function(x)
     {
      return g(serializeR(x));
     });
    };
   });
  }])[0](Aliado.get_LoggedId());
  b=AsyncResultMAutoOpen.asyncResultM();
  return b.Run(b.Delay(function()
  {
   var a;
   a=Rpc.llamadas().Get()+1;
   Rpc.llamadas().Set(a);
   return b.TryFinally(b.Delay(function()
   {
    return b.ReturnFrom$4(f(p));
   }),function()
   {
    var a$1;
    a$1=Rpc.llamadas().Get()-1;
    Rpc.llamadas().Set(a$1);
   });
  }));
 };
 Rpc.registrarTarjeta=function(p)
 {
  var f,fname,b;
  function serializeP(p$1)
  {
   return JSON.stringify((ProzperServer_JsonEncoder.j$36())(p$1));
  }
  function serializeR(p$1)
  {
   return JSON.stringify((ProzperServer_JsonEncoder.j$45())(p$1));
  }
  function deserializeP(s)
  {
   return(ProzperServer_JsonDecoder.j$36())(JSON.parse(s));
  }
  function deserializeR(s)
  {
   return(ProzperServer_JsonDecoder.j$45())(JSON.parse(s));
  }
  f=(fname="registrarTarjeta",[function(idAliado)
  {
   var f$1,g,f$2;
   function g$1(p$1)
   {
    return Rpc$1.invoke(fname,idAliado,p$1);
   }
   function f$3(r)
   {
    return ResultM.bind(deserializeR,r);
   }
   function g$2(v)
   {
    return Concurrency.Return(v);
   }
   f$1=function(x)
   {
    return g$1(serializeP(x));
   };
   g=(f$2=function(x)
   {
    return g$2(f$3(x));
   },function(v)
   {
    return Concurrency.Bind(v,f$2);
   });
   return function(x)
   {
    return g(f$1(x));
   };
  },function(f$1)
  {
   Rpc$1.registroRpcs().Add(fname,function(c)
   {
    return function(js)
    {
     var b$1;
     function g(v)
     {
      return Concurrency.Return(v);
     }
     return Concurrency.Bind((b$1=AsyncResultMAutoOpen.asyncResultM(),b$1.Run(b$1.Delay(function()
     {
      var p$1;
      p$1=deserializeP(js);
      return b$1.Bind$4((f$1(c))(p$1),function(a)
      {
       return b$1.Return(a);
      });
     }))),function(x)
     {
      return g(serializeR(x));
     });
    };
   });
  }])[0](Aliado.get_LoggedId());
  b=AsyncResultMAutoOpen.asyncResultM();
  return b.Run(b.Delay(function()
  {
   var a;
   a=Rpc.llamadas().Get()+1;
   Rpc.llamadas().Set(a);
   return b.TryFinally(b.Delay(function()
   {
    return b.ReturnFrom$4(f(p));
   }),function()
   {
    var a$1;
    a$1=Rpc.llamadas().Get()-1;
    Rpc.llamadas().Set(a$1);
   });
  }));
 };
 Rpc.obtenerFormasDePago=function()
 {
  var f,fname,b;
  function serializeP(p)
  {
   return JSON.stringify(((Provider.Id())())(p));
  }
  function serializeR(p)
  {
   return JSON.stringify((ProzperServer_JsonEncoder.j$31())(p));
  }
  function deserializeP(s)
  {
   return((Provider.Id())())(JSON.parse(s));
  }
  function deserializeR(s)
  {
   return(ProzperServer_JsonDecoder.j$31())(JSON.parse(s));
  }
  f=(fname="obtenerFormasDePago",[function(idAliado)
  {
   var f$1,g,f$2;
   function g$1(p)
   {
    return Rpc$1.invoke(fname,idAliado,p);
   }
   function f$3(r)
   {
    return ResultM.bind(deserializeR,r);
   }
   function g$2(v)
   {
    return Concurrency.Return(v);
   }
   f$1=function(x)
   {
    return g$1(serializeP(x));
   };
   g=(f$2=function(x)
   {
    return g$2(f$3(x));
   },function(v)
   {
    return Concurrency.Bind(v,f$2);
   });
   return function(x)
   {
    return g(f$1(x));
   };
  },function(f$1)
  {
   Rpc$1.registroRpcs().Add(fname,function(c)
   {
    return function(js)
    {
     var b$1;
     function g(v)
     {
      return Concurrency.Return(v);
     }
     return Concurrency.Bind((b$1=AsyncResultMAutoOpen.asyncResultM(),b$1.Run(b$1.Delay(function()
     {
      var p;
      p=deserializeP(js);
      return b$1.Bind$4((f$1(c))(p),function(a)
      {
       return b$1.Return(a);
      });
     }))),function(x)
     {
      return g(serializeR(x));
     });
    };
   });
  }])[0](Aliado.get_LoggedId());
  b=AsyncResultMAutoOpen.asyncResultM();
  return b.Run(b.Delay(function()
  {
   var a;
   a=Rpc.llamadas().Get()+1;
   Rpc.llamadas().Set(a);
   return b.TryFinally(b.Delay(function()
   {
    return b.ReturnFrom$4(f(void 0));
   }),function()
   {
    var a$1;
    a$1=Rpc.llamadas().Get()-1;
    Rpc.llamadas().Set(a$1);
   });
  }));
 };
 Rpc.enviarCorreosInvitacion=function(p,p$1,p$2)
 {
  var f,fname,p$3,b;
  function serializeP(p$4)
  {
   return JSON.stringify(((Provider.EncodeTuple([Provider.Id(),ProzperServer_JsonEncoder.j$7,Provider.EncodeArray(Provider.Id())]))())(p$4));
  }
  function serializeR(p$4)
  {
   return JSON.stringify((ProzperServer_JsonEncoder.j$30())(p$4));
  }
  function deserializeP(s)
  {
   return((Provider.DecodeTuple([Provider.Id(),ProzperServer_JsonDecoder.j$7,Provider.DecodeArray(Provider.Id())]))())(JSON.parse(s));
  }
  function deserializeR(s)
  {
   return(ProzperServer_JsonDecoder.j$30())(JSON.parse(s));
  }
  f=(fname="enviarCorreosInvitacion",[function(idAliado)
  {
   var f$1,g,f$2;
   function g$1(p$4)
   {
    return Rpc$1.invoke(fname,idAliado,p$4);
   }
   function f$3(r)
   {
    return ResultM.bind(deserializeR,r);
   }
   function g$2(v)
   {
    return Concurrency.Return(v);
   }
   f$1=function(x)
   {
    return g$1(serializeP(x));
   };
   g=(f$2=function(x)
   {
    return g$2(f$3(x));
   },function(v)
   {
    return Concurrency.Bind(v,f$2);
   });
   return function(x)
   {
    return g(f$1(x));
   };
  },function(f$1)
  {
   Rpc$1.registroRpcs().Add(fname,function(c)
   {
    return function(js)
    {
     var b$1;
     function g(v)
     {
      return Concurrency.Return(v);
     }
     return Concurrency.Bind((b$1=AsyncResultMAutoOpen.asyncResultM(),b$1.Run(b$1.Delay(function()
     {
      var p$4;
      p$4=deserializeP(js);
      return b$1.Bind$4((f$1(c))(p$4),function(a)
      {
       return b$1.Return(a);
      });
     }))),function(x)
     {
      return g(serializeR(x));
     });
    };
   });
  }])[0](Aliado.get_LoggedId());
  p$3=[p,p$1,p$2];
  b=AsyncResultMAutoOpen.asyncResultM();
  return b.Run(b.Delay(function()
  {
   var a;
   a=Rpc.llamadas().Get()+1;
   Rpc.llamadas().Set(a);
   return b.TryFinally(b.Delay(function()
   {
    return b.ReturnFrom$4(f(p$3));
   }),function()
   {
    var a$1;
    a$1=Rpc.llamadas().Get()-1;
    Rpc.llamadas().Set(a$1);
   });
  }));
 };
 Rpc.ejecutarDataEventoNuevo=function(p)
 {
  var f,fname,b;
  function serializeP(p$1)
  {
   return JSON.stringify((ProzperServer_JsonEncoder.j$4())(p$1));
  }
  function serializeR(p$1)
  {
   return JSON.stringify((ProzperServer_JsonEncoder.j$1())(p$1));
  }
  function deserializeP(s)
  {
   return(ProzperServer_JsonDecoder.j$4())(JSON.parse(s));
  }
  function deserializeR(s)
  {
   return(ProzperServer_JsonDecoder.j$1())(JSON.parse(s));
  }
  f=(fname="ejecutarDataEventoNuevo",[function(idAliado)
  {
   var f$1,g,f$2;
   function g$1(p$1)
   {
    return Rpc$1.invoke(fname,idAliado,p$1);
   }
   function f$3(r)
   {
    return ResultM.bind(deserializeR,r);
   }
   function g$2(v)
   {
    return Concurrency.Return(v);
   }
   f$1=function(x)
   {
    return g$1(serializeP(x));
   };
   g=(f$2=function(x)
   {
    return g$2(f$3(x));
   },function(v)
   {
    return Concurrency.Bind(v,f$2);
   });
   return function(x)
   {
    return g(f$1(x));
   };
  },function(f$1)
  {
   Rpc$1.registroRpcs().Add(fname,function(c)
   {
    return function(js)
    {
     var b$1;
     function g(v)
     {
      return Concurrency.Return(v);
     }
     return Concurrency.Bind((b$1=AsyncResultMAutoOpen.asyncResultM(),b$1.Run(b$1.Delay(function()
     {
      var p$1;
      p$1=deserializeP(js);
      return b$1.Bind$4((f$1(c))(p$1),function(a)
      {
       return b$1.Return(a);
      });
     }))),function(x)
     {
      return g(serializeR(x));
     });
    };
   });
  }])[0](Aliado.get_LoggedId());
  b=AsyncResultMAutoOpen.asyncResultM();
  return b.Run(b.Delay(function()
  {
   var a;
   a=Rpc.llamadas().Get()+1;
   Rpc.llamadas().Set(a);
   return b.TryFinally(b.Delay(function()
   {
    return b.ReturnFrom$4(f(p));
   }),function()
   {
    var a$1;
    a$1=Rpc.llamadas().Get()-1;
    Rpc.llamadas().Set(a$1);
   });
  }));
 };
 Rpc.obtenerUnions=function()
 {
  var b;
  function f()
  {
   return(new AjaxRemotingProvider.New()).Async("ProzperServer:FsRoot.Prozper+Rpc.obtenerUnions:1790054391",[]);
  }
  b=AsyncResultMAutoOpen.asyncResultM();
  return b.Run(b.Delay(function()
  {
   var a;
   a=Rpc.llamadas().Get()+1;
   Rpc.llamadas().Set(a);
   return b.TryFinally(b.Delay(function()
   {
    return b.ReturnFrom$4(f(void 0));
   }),function()
   {
    var a$1;
    a$1=Rpc.llamadas().Get()-1;
    Rpc.llamadas().Set(a$1);
   });
  }));
 };
 Rpc.agregarUsuarioSiEsNuevo=function(p)
 {
  var f,fname,b;
  function serializeP(p$1)
  {
   return JSON.stringify(((Provider.EncodeArray(Provider.EncodeTuple([Provider.Id(),Provider.Id()])))())(p$1));
  }
  function serializeR(p$1)
  {
   return JSON.stringify((ProzperServer_JsonEncoder.j$30())(p$1));
  }
  function deserializeP(s)
  {
   return((Provider.DecodeArray(Provider.DecodeTuple([Provider.Id(),Provider.Id()])))())(JSON.parse(s));
  }
  function deserializeR(s)
  {
   return(ProzperServer_JsonDecoder.j$30())(JSON.parse(s));
  }
  f=(fname="agregarUsuarioSiEsNuevo",[function(idAliado)
  {
   var f$1,g,f$2;
   function g$1(p$1)
   {
    return Rpc$1.invoke(fname,idAliado,p$1);
   }
   function f$3(r)
   {
    return ResultM.bind(deserializeR,r);
   }
   function g$2(v)
   {
    return Concurrency.Return(v);
   }
   f$1=function(x)
   {
    return g$1(serializeP(x));
   };
   g=(f$2=function(x)
   {
    return g$2(f$3(x));
   },function(v)
   {
    return Concurrency.Bind(v,f$2);
   });
   return function(x)
   {
    return g(f$1(x));
   };
  },function(f$1)
  {
   Rpc$1.registroRpcs().Add(fname,function(c)
   {
    return function(js)
    {
     var b$1;
     function g(v)
     {
      return Concurrency.Return(v);
     }
     return Concurrency.Bind((b$1=AsyncResultMAutoOpen.asyncResultM(),b$1.Run(b$1.Delay(function()
     {
      var p$1;
      p$1=deserializeP(js);
      return b$1.Bind$4((f$1(c))(p$1),function(a)
      {
       return b$1.Return(a);
      });
     }))),function(x)
     {
      return g(serializeR(x));
     });
    };
   });
  }])[0](Aliado.get_LoggedId());
  b=AsyncResultMAutoOpen.asyncResultM();
  return b.Run(b.Delay(function()
  {
   var a;
   a=Rpc.llamadas().Get()+1;
   Rpc.llamadas().Set(a);
   return b.TryFinally(b.Delay(function()
   {
    return b.ReturnFrom$4(f(p));
   }),function()
   {
    var a$1;
    a$1=Rpc.llamadas().Get()-1;
    Rpc.llamadas().Set(a$1);
   });
  }));
 };
 Rpc.iterA=function(arm)
 {
  function g(a)
  {
   Global.alert(a);
  }
  AsyncResultM.iterA(function(x)
  {
   return g(ResultMessage.summarized(x));
  },Global.ignore,arm);
 };
 Rpc.llamadas=function()
 {
  SC$1.$cctor();
  return SC$1.llamadas;
 };
 Refresh.refrescarData=function(force)
 {
  var m,user,b;
  force?Refresh.set_shouldRefresh(true):void 0;
  m=Msal$1.userO().Get();
  m!=null&&m.$==1?(user=m.$0,Rpc.iterA((b=AsyncResultMAutoOpen.asyncResultM(),b.Run(b.Delay(function()
  {
   return b.Combine$1(Msal$1.referidoPor()!==""?b.Bind$4(Rpc.agregarUsuarioSiEsNuevo(Msal$1.claims(user)),function()
   {
    return b.Return();
   }):b.Zero(),b.Delay(function()
   {
    return!self.document.hidden?Refresh.shouldRefresh()?b.Bind$4(Rpc.obtenerEstadoParaUsuario(),function(a)
    {
     Refresh.set_shouldRefresh(false);
     return!Unchecked.Equals(ModeloUI.modeloV().Get(),a)?(ModeloUI.modeloV().Set(a),b.Zero()):b.Zero();
    }):b.Zero():b.Zero();
   }));
  }))))):ModeloUI.modeloV().Set(TypesV0.modeloVacio());
 };
 Refresh.shouldRefresh=function()
 {
  SC$1.$cctor();
  return SC$1.shouldRefresh;
 };
 Refresh.set_shouldRefresh=function($1)
 {
  SC$1.$cctor();
  SC$1.shouldRefresh=$1;
 };
 VariousUI.removeButton=function(f,doc)
 {
  return Doc.Element("form",[AttrProxy.Create("class","mui-panel")],[doc,Doc.Button("borrar",[AttrProxy.Create("title","borrar")],f)]);
 };
 VariousUI.crearOptions2=function(nvs)
 {
  return Doc.Concat(Seq.map(function($1)
  {
   return VariousUI.crearOption2($1[0],$1[1]);
  },nvs));
 };
 VariousUI.crearOptions=function(ns)
 {
  return Doc.Concat(Seq.map(VariousUI.crearOption,ns));
 };
 VariousUI.crearOption2=function(n,v)
 {
  return Doc.Element("option",[AttrProxy.Create("value",v)],[Doc.TextNode(n)]);
 };
 VariousUI.crearOption=function(n)
 {
  return Doc.Element("option",[],[Doc.TextNode(n)]);
 };
 VariousUI.mesesV=function()
 {
  SC$1.$cctor();
  return SC$1.mesesV;
 };
 VariousUI.aniosV=function()
 {
  SC$1.$cctor();
  return SC$1.aniosV;
 };
 VariousUI.statuses=function()
 {
  SC$1.$cctor();
  return SC$1.statuses;
 };
 VariousUI.tiposTar=function()
 {
  SC$1.$cctor();
  return SC$1.tiposTar;
 };
 VariousUI.tiposCta=function()
 {
  SC$1.$cctor();
  return SC$1.tiposCta;
 };
 VariousUI.generos=function()
 {
  SC$1.$cctor();
  return SC$1.generos;
 };
 VariousUI.tiposTel=function()
 {
  SC$1.$cctor();
  return SC$1.tiposTel;
 };
 VariousUI.tiposDir=function()
 {
  SC$1.$cctor();
  return SC$1.tiposDir;
 };
 VariousUI.estados=function()
 {
  SC$1.$cctor();
  return SC$1.estados;
 };
 VariousUI.paises=function()
 {
  SC$1.$cctor();
  return SC$1.paises;
 };
 VariousUI.alertIfNone=function(name,vO,f)
 {
  return vO!=null&&vO.$==1?f(vO.$0):(Global.alert("Error not caught: "+name),null);
 };
 VariousUI.thr3=function(a,a$1,v)
 {
  return v;
 };
 VariousUI.snd3=function(a,v,a$1)
 {
  return v;
 };
 VariousUI.fst3=Global.id;
 CorreoElectronico.formaDoc=function(corV)
 {
  var mensaje,forma,b,p,i,m,requeridosW;
  mensaje=Var$1.Create$1("");
  forma=(b=ProviderBuilder.Make().WithHole({
   $:2,
   $0:"mensaje",
   $1:mensaje.get_View()
  }),(p=Handler.CompleteHoles(b.k,b.h,[["correo",0],["confirmarcorreo",0]]),(i=new TemplateInstance.New(p[1],testing_Templates.correo(p[0])),(b.i=i,i))));
  m=corV.Get();
  m!=null&&m.$==1?forma.Hole("confirmarcorreo").Set(Global.String(m.$0)):void 0;
  View.Sink(function(a)
  {
   mensaje.Set(a);
  },View.Apply(View.Apply(View.Map2(function($1,$2)
  {
   return function($3)
   {
    return function($4)
    {
     return Strings.Trim($1)===""||Strings.Trim($2)===""||Strings.Trim($3)===Strings.Trim($4)?"":"Correos no son iguales";
    };
   };
  },forma.Hole("correo").get_View(),forma.Hole("confirmarcorreo").get_View()),forma.Hole("correo").get_View()),forma.Hole("confirmarcorreo").get_View()));
  View.Sink(function(a)
  {
   if(a!=null&&a.$==1)
    forma.Hole("correo").Set(a.$0.email);
  },corV.get_View());
  requeridosW=View.Apply(View.Apply(View.Map2(function($1,$2)
  {
   return function($3)
   {
    return function($4)
    {
     return Seq.map(function(t)
     {
      return t[1];
     },Seq.filter(function(t)
     {
      return t[0];
     },List.ofArray([[Strings.Trim($1)==="","Correo"],[Strings.Trim($2)==="","ConfirmarCorreo"],[$3!=="",$4]])));
    };
   };
  },forma.Hole("correo").get_View(),forma.Hole("confirmarcorreo").get_View()),mensaje.get_View()),mensaje.get_View());
  View.Sink(function(v)
  {
   if(!Unchecked.Equals(corV.Get(),v))
    corV.Set(v);
  },View.Map2(function($1,$2)
  {
   var o,x,i$1,v;
   return!Seq.isEmpty($1)?null:(o=(x=corV.Get(),(i$1={
    $:1,
    $0:TypesV0.correoVacio()
   },x==null?i$1:x)),o==null?null:{
    $:1,
    $0:(v=o.$0,CorreoElectronico$1.New($2,v.enviado,v.recibido))
   });
  },requeridosW,forma.Hole("correo").get_View()));
  return[requeridosW,forma.get_Doc()];
 };
 Telefono.formaDoc=function(telOV)
 {
  var forma,b,T,p,i,requeridosW;
  forma=(b=(T=Doc.EmbedView(View.Map(VariousUI.crearOptions,VariousUI.tiposTel().get_View())),ProviderBuilder.Make().WithHole({
   $:0,
   $0:"tipos",
   $1:T
  })),(p=Handler.CompleteHoles(b.k,b.h,[["tipotelefono",0],["codigopais",0],["codigoarea",0],["telefono",0],["extension",0]]),(i=new TemplateInstance.New(p[1],testing_Templates.telefono(p[0])),(b.i=i,i))));
  View.Sink(function(a)
  {
   var tel;
   if(a!=null&&a.$==1)
    {
     tel=a.$0;
     forma.Hole("codigoarea").Set(tel.codigoArea);
     forma.Hole("codigopais").Set(tel.codigoPais);
     forma.Hole("telefono").Set(tel.numero);
     forma.Hole("extension").Set(tel.extension);
     forma.Hole("tipotelefono").Set((function($1)
     {
      return function($2)
      {
       return $1(Global.String($2));
      };
     }(Global.id))(tel.tipoTelefono));
    }
  },telOV.get_View());
  requeridosW=View.Apply(View.Map2(function($1,$2)
  {
   return function($3)
   {
    return Seq.map(function(t)
    {
     return t[1];
    },Seq.filter(function(t)
    {
     return t[0];
    },List.ofArray([[Strings.Trim($1)==="","CodigoPais"],[Strings.Trim($2)==="","Telefono"],[Strings.Trim($3)==="","TipoTelefono"]])));
   };
  },forma.Hole("codigopais").get_View(),forma.Hole("telefono").get_View()),forma.Hole("tipotelefono").get_View());
  View.Sink(function(v)
  {
   if(!Unchecked.Equals(telOV.Get(),v))
    telOV.Set(v);
  },View.Apply(View.Apply(View.Apply(View.Apply(View.Map2(function($1,$2)
  {
   return Runtime.Curried(function($3,$4,$5,$6)
   {
    return!Seq.isEmpty($1)?null:VariousUI.alertIfNone("TipoTelefono",(TipoTelefono.get_tryParse())(Strings.Trim($2)),function(tipo)
    {
     var c;
     return{
      $:1,
      $0:(c=Strings.Trim($3),Telefono$1.New(tipo,Strings.Trim($4),c,Strings.Trim($5),Strings.Trim($6),false))
     };
    });
   },4);
  },requeridosW,forma.Hole("tipotelefono").get_View()),forma.Hole("codigoarea").get_View()),forma.Hole("codigopais").get_View()),forma.Hole("telefono").get_View()),forma.Hole("extension").get_View()));
  return[requeridosW,forma.get_Doc()];
 };
 Direccion.formaDoc=function(dirV)
 {
  var forma,b,T,E,P,p,i,requeridosW;
  forma=(b=(T=Doc.EmbedView(View.Map(VariousUI.crearOptions,VariousUI.tiposDir().get_View())),(E=Doc.EmbedView(View.Map(VariousUI.crearOptions,VariousUI.estados().get_View())),(P=Doc.EmbedView(View.Map(VariousUI.crearOptions,VariousUI.paises().get_View())),ProviderBuilder.Make().WithHole({
   $:0,
   $0:"paises",
   $1:P
  })).WithHole({
   $:0,
   $0:"estados",
   $1:E
  })).WithHole({
   $:0,
   $0:"tipos",
   $1:T
  })),(p=Handler.CompleteHoles(b.k,b.h,[["tipodireccion",0],["direccion1",0],["direccion2",0],["ciudad",0],["estado",0],["codigopostal",0],["pais",0]]),(i=new TemplateInstance.New(p[1],testing_Templates.direccion(p[0])),(b.i=i,i))));
  View.Sink(function(a)
  {
   var dir;
   if(a!=null&&a.$==1)
    {
     dir=a.$0;
     forma.Hole("direccion1").Set(dir.linea1);
     forma.Hole("direccion2").Set(dir.linea2);
     forma.Hole("ciudad").Set(dir.ciudad);
     forma.Hole("estado").Set((function($1)
     {
      return function($2)
      {
       return $1(Global.String($2));
      };
     }(Global.id))(dir.estado));
     forma.Hole("pais").Set((function($1)
     {
      return function($2)
      {
       return $1(Global.String($2));
      };
     }(Global.id))(dir.pais));
     forma.Hole("codigopostal").Set((function($1)
     {
      return function($2)
      {
       return $1(Global.String($2));
      };
     }(Global.id))(dir.zonaPostal));
     forma.Hole("tipodireccion").Set((function($1)
     {
      return function($2)
      {
       return $1(Global.String($2));
      };
     }(Global.id))(dir.tipoDireccion));
    }
  },dirV.get_View());
  requeridosW=View.Apply(View.Apply(View.Apply(View.Apply(View.Map2(function($1,$2)
  {
   return Runtime.Curried(function($3,$4,$5,$6)
   {
    return Seq.map(function(t)
    {
     return t[1];
    },Seq.filter(function(t)
    {
     return t[0];
    },List.ofArray([[Strings.Trim($1)==="","Direccion1"],[Strings.Trim($2)==="","Ciudad"],[Strings.Trim($3)==="","Estado"],[Strings.Trim($4)==="","Pais"],[Strings.Trim($5)==="","CodigoPostal"],[Strings.Trim($6)==="","TipoDireccion"]])));
   },4);
  },forma.Hole("direccion1").get_View(),forma.Hole("ciudad").get_View()),forma.Hole("estado").get_View()),forma.Hole("pais").get_View()),forma.Hole("codigopostal").get_View()),forma.Hole("tipodireccion").get_View());
  View.Sink(function(v)
  {
   if(!Unchecked.Equals(dirV.Get(),v))
    dirV.Set(v);
  },View.Apply(View.Apply(View.Apply(View.Apply(View.Apply(View.Apply(View.Apply(View.Map2(function($1,$2)
  {
   return Runtime.Curried(function($3,$4,$5,$6,$7,$8,$9)
   {
    return!Seq.isEmpty($1)?null:VariousUI.alertIfNone("TipoDireccion",TipoDireccion.tryParse(Strings.Trim($2)),function(tipo)
    {
     return VariousUI.alertIfNone("Estado",Estado.tryParse(Strings.Trim($3)),function(estado)
     {
      return VariousUI.alertIfNone("Pais",Pais.tryParse(Strings.Trim($4)),function(pais)
      {
       return VariousUI.alertIfNone("CodigoPostal",ZonaPostal.tryParse(Strings.Trim($5)),function(codigo)
       {
        var o;
        return{
         $:1,
         $0:Direccion$1.New((o=$9==null?null:{
          $:1,
          $0:$9.$0.authorizeIdR
         },o==null?Library.Error(""):o.$0),tipo,Strings.Trim($6),Strings.Trim($7),Strings.Trim($8),estado,pais,codigo)
        };
       });
      });
     });
    });
   },7);
  },requeridosW,forma.Hole("tipodireccion").get_View()),forma.Hole("estado").get_View()),forma.Hole("pais").get_View()),forma.Hole("codigopostal").get_View()),forma.Hole("direccion1").get_View()),forma.Hole("direccion2").get_View()),forma.Hole("ciudad").get_View()),dirV.get_View()));
  return[requeridosW,forma.get_Doc()];
 };
 CuentaBancaria.formaDocO=function(ctaOV)
 {
  var v;
  return CuentaBancaria.formaDoc(Var$1.Lens(ctaOV,(v=[TypesV0.ctaVacio(),"",false],function(o)
  {
   return o==null?v:o.$0;
  }),function(a,v$1)
  {
   return{
    $:1,
    $0:v$1
   };
  }));
 };
 CuentaBancaria.formaDoc=function(ctaV)
 {
  var disabledW,forma,b,D,D$1,D$2,D$3,D$4,T,p,i,requeridosW;
  function a(cta,a$1,a$2)
  {
   forma.Hole("titular").Set(cta.titular);
   forma.Hole("banco").Set(cta.banco);
   forma.Hole("tipocuenta").Set((function($1)
   {
    return function($2)
    {
     return $1(Global.String($2));
    };
   }(Global.id))(cta.tipo));
   forma.Hole("numero").Set(cta.numero.$0);
   forma.Hole("routing").Set(cta.routing.$0);
  }
  disabledW=View.Map(function($1)
  {
   return VariousUI.thr3($1[0],$1[1],$1[2]);
  },ctaV.get_View());
  forma=(b=(D=AttrModule.DynamicPred("disabled",disabledW,View.Const("")),(D$1=AttrModule.DynamicPred("disabled",disabledW,View.Const("")),(D$2=AttrModule.DynamicPred("disabled",disabledW,View.Const("")),(D$3=AttrModule.DynamicPred("disabled",disabledW,View.Const("")),(D$4=AttrModule.DynamicPred("disabled",disabledW,View.Const("")),(T=Doc.EmbedView(View.Map(VariousUI.crearOptions,VariousUI.tiposCta().get_View())),ProviderBuilder.Make().WithHole({
   $:0,
   $0:"tiposcuenta",
   $1:T
  })).WithHole({
   $:2,
   $0:"mensaje",
   $1:View.Map(function($1)
   {
    return VariousUI.snd3($1[0],$1[1],$1[2]);
   },ctaV.get_View())
  }).WithHole({
   $:3,
   $0:"disabled1",
   $1:D$4
  })).WithHole({
   $:3,
   $0:"disabled2",
   $1:D$3
  })).WithHole({
   $:3,
   $0:"disabled3",
   $1:D$2
  })).WithHole({
   $:3,
   $0:"disabled4",
   $1:D$1
  })).WithHole({
   $:3,
   $0:"disabled5",
   $1:D
  })),(p=Handler.CompleteHoles(b.k,b.h,[["tipocuenta",0],["titular",0],["numero",0],["banco",0],["routing",0]]),(i=new TemplateInstance.New(p[1],testing_Templates.cuentabancaria(p[0])),(b.i=i,i))));
  View.Sink(function($1)
  {
   return a($1[0],$1[1],$1[2]);
  },ctaV.get_View());
  requeridosW=View.Apply(View.Apply(View.Map2(function($1,$2)
  {
   return function($3)
   {
    return function($4)
    {
     return Seq.map(function(t)
     {
      return t[1];
     },Seq.filter(function(t)
     {
      return t[0];
     },List.ofArray([[Strings.Trim($1)==="","Titular"],[Strings.Trim($2)==="","Banco"],[Strings.Trim($3)==="","Numero de Cuenta"],[Strings.Trim($4)==="","ABA/Routing Number"]])));
    };
   };
  },forma.Hole("titular").get_View(),forma.Hole("banco").get_View()),forma.Hole("numero").get_View()),forma.Hole("routing").get_View());
  View.Sink(function(a$1)
  {
   var v,t;
   if(a$1!=null&&a$1.$==1)
    {
     v=a$1.$0;
     !Unchecked.Equals((t=ctaV.Get(),VariousUI.fst3(t[0],t[1],t[2])),v)?ctaV.Set([v,"",false]):void 0;
    }
  },View.Apply(View.Apply(View.Apply(View.Apply(View.Map2(function($1,$2)
  {
   return Runtime.Curried(function($3,$4,$5,$6)
   {
    return!Seq.isEmpty($1)?null:VariousUI.alertIfNone("TipoCuenta",TipoCuenta.tryParse(Strings.Trim($2)),function(tipoCta)
    {
     var b$1;
     return{
      $:1,
      $0:(b$1=Strings.Trim($3),CuentaBancaria$1.New(Strings.Trim($4),b$1,tipoCta,new TypesV0.NumeroCuenta({
       $:0,
       $0:Strings.Trim($5)
      }),new TypesV0.RoutingNumber({
       $:0,
       $0:Strings.Trim($6)
      })))
     };
    });
   },4);
  },requeridosW,forma.Hole("tipocuenta").get_View()),forma.Hole("banco").get_View()),forma.Hole("titular").get_View()),forma.Hole("numero").get_View()),forma.Hole("routing").get_View()));
  return[requeridosW,forma.get_Doc()];
 };
 TarjetaCredito.formaDocO=function(tarOV)
 {
  var v;
  return TarjetaCredito.formaDoc(Var$1.Lens(tarOV,(v=[TypesV0.tarVacio(),"",false],function(o)
  {
   return o==null?v:o.$0;
  }),function(a,v$1)
  {
   return{
    $:1,
    $0:v$1
   };
  }));
 };
 TarjetaCredito.formaDoc=function(tarV)
 {
  var disabledW,forma,b,D,D$1,D$2,D$3,D$4,M,A,T,p,i,requeridosW;
  function a(tar,mensaje,validated)
  {
   var m;
   forma.Hole("titular").Set(tar.titular);
   forma.Hole("tipotarjeta").Set((function($1)
   {
    return function($2)
    {
     return $1(Global.String($2));
    };
   }(Global.id))(tar.tipoTarjeta));
   forma.Hole("numero").Set(tar.numero.$0);
   forma.Hole("aniovenc").Set((function($1)
   {
    return function($2)
    {
     return $1(Utils.padNumLeft(Global.String($2),4));
    };
   }(Global.id))(tar.expiracion.anio));
   forma.Hole("mesvenc").Set((m=tar.expiracion.mes,m===1?"Enero":m===2?"Febrero":m===3?"Marzo":m===4?"Abril":m===5?"Mayo":m===6?"Junio":m===7?"Julio":m===8?"Agosto":m===9?"Septiembre":m===10?"Octubre":m===11?"Noviembre":m===12?"Diciembre":"XX"));
  }
  disabledW=View.Map(function($1)
  {
   return VariousUI.thr3($1[0],$1[1],$1[2]);
  },tarV.get_View());
  forma=(b=(D=AttrModule.DynamicPred("disabled",disabledW,View.Const("")),(D$1=AttrModule.DynamicPred("disabled",disabledW,View.Const("")),(D$2=AttrModule.DynamicPred("disabled",disabledW,View.Const("")),(D$3=AttrModule.DynamicPred("disabled",disabledW,View.Const("")),(D$4=AttrModule.DynamicPred("disabled",disabledW,View.Const("")),(M=Doc.EmbedView(View.Map(function($1)
  {
   return VariousUI.crearOptions(Seq.map(Global.String,$1));
  },VariousUI.mesesV().get_View())),(A=Doc.EmbedView(View.Map(function($1)
  {
   return VariousUI.crearOptions(Seq.map(Global.String,$1));
  },VariousUI.aniosV().get_View())),(T=Doc.EmbedView(View.Map(VariousUI.crearOptions,VariousUI.tiposTar().get_View())),ProviderBuilder.Make().WithHole({
   $:0,
   $0:"tipostarjeta",
   $1:T
  })).WithHole({
   $:2,
   $0:"mensaje",
   $1:View.Map(function($1)
   {
    return VariousUI.snd3($1[0],$1[1],$1[2]);
   },tarV.get_View())
  }).WithHole({
   $:0,
   $0:"anios",
   $1:A
  })).WithHole({
   $:0,
   $0:"meses",
   $1:M
  })).WithHole({
   $:3,
   $0:"disabled1",
   $1:D$4
  })).WithHole({
   $:3,
   $0:"disabled2",
   $1:D$3
  })).WithHole({
   $:3,
   $0:"disabled3",
   $1:D$2
  })).WithHole({
   $:3,
   $0:"disabled4",
   $1:D$1
  })).WithHole({
   $:3,
   $0:"disabled5",
   $1:D
  })),(p=Handler.CompleteHoles(b.k,b.h,[["tipotarjeta",0],["titular",0],["numero",0],["aniovenc",0],["mesvenc",0]]),(i=new TemplateInstance.New(p[1],testing_Templates.tarjetacredito(p[0])),(b.i=i,i))));
  View.Sink(function($1)
  {
   return a($1[0],$1[1],$1[2]);
  },tarV.get_View());
  requeridosW=View.Apply(View.Apply(View.Apply(View.Map2(function($1,$2)
  {
   return Runtime.Curried3(function($3,$4,$5)
   {
    return Seq.map(function(t)
    {
     return t[1];
    },Seq.filter(function(t)
    {
     return t[0];
    },List.ofArray([[Strings.Trim($1)==="","Titular"],[Strings.Trim($2)==="","TipoTarjeta"],[Strings.Trim($3)==="","Numero"],[Strings.Trim($4)==="","Ano de Vencimiento"],[Strings.Trim($5)==="","Mes de Vencimiento"]])));
   });
  },forma.Hole("titular").get_View(),forma.Hole("tipotarjeta").get_View()),forma.Hole("numero").get_View()),forma.Hole("aniovenc").get_View()),forma.Hole("mesvenc").get_View());
  View.Sink(function(a$1)
  {
   var v,t;
   if(a$1!=null&&a$1.$==1)
    {
     v=a$1.$0;
     !Unchecked.Equals((t=tarV.Get(),VariousUI.fst3(t[0],t[1],t[2])),v)?tarV.Set([v,"",false]):void 0;
    }
  },View.Apply(View.Apply(View.Apply(View.Apply(View.Map2(function($1,$2)
  {
   return Runtime.Curried(function($3,$4,$5,$6)
   {
    return!Seq.isEmpty($1)?null:VariousUI.alertIfNone("Tipo Tarjeta",TipoTarjeta.tryParse(Strings.Trim($2)),function(tipoTar)
    {
     var o,x,a$1;
     return{
      $:1,
      $0:TarjetaCredito$1.New(Strings.Trim($3),tipoTar,new TypesV0.NumeroTarjeta({
       $:0,
       $0:Strings.Trim($4)
      }),Expiracion.New((o=(x=Strings.Trim($5),(ParseO.parseIntO())(x)),o==null?0:o.$0),(a$1=Strings.Trim($6),a$1==="Febrero"?2:a$1==="Marzo"?3:a$1==="Abril"?4:a$1==="Mayo"?5:a$1==="Junio"?6:a$1==="Julio"?7:a$1==="Agosto"?8:a$1==="Septiembre"?9:a$1==="Octubre"?10:a$1==="Noviembre"?11:a$1==="Diciembre"?12:1)))
     };
    });
   },4);
  },requeridosW,forma.Hole("tipotarjeta").get_View()),forma.Hole("titular").get_View()),forma.Hole("numero").get_View()),forma.Hole("aniovenc").get_View()),forma.Hole("mesvenc").get_View()));
  return[requeridosW,forma.get_Doc()];
 };
 DatosPersonales.formaDoc=function(datosV)
 {
  var forma,b,G,p,i,requeridosW;
  forma=(b=(G=Doc.EmbedView(View.Map(VariousUI.crearOptions,VariousUI.generos().get_View())),ProviderBuilder.Make().WithHole({
   $:0,
   $0:"generos",
   $1:G
  })),(p=Handler.CompleteHoles(b.k,b.h,[["nombres",0],["apellidos",0],["fechanacimiento",0],["genero",0]]),(i=new TemplateInstance.New(p[1],testing_Templates.datospersonales(p[0])),(b.i=i,i))));
  View.Sink(function(a)
  {
   var dat;
   if(a!=null&&a.$==1)
    {
     dat=a.$0;
     forma.Hole("nombres").Set(Strings.Trim(dat.nombre1+" "+dat.nombre2));
     forma.Hole("apellidos").Set(Strings.Trim(dat.apellido1+" "+dat.apellido2));
     forma.Hole("fechanacimiento").Set(Date.toYYYYMMDD("-",dat.fechaNacimiento));
     forma.Hole("genero").Set((function($1)
     {
      return function($2)
      {
       return $1(testing_GeneratedPrintf.p$1($2));
      };
     }(Global.id))(dat.genero));
    }
  },datosV.get_View());
  requeridosW=View.Apply(View.Apply(View.Map2(function($1,$2)
  {
   return function($3)
   {
    return function($4)
    {
     return Seq.map(function(t)
     {
      return t[1];
     },Seq.filter(function(t)
     {
      return t[0];
     },List.ofArray([[Strings.Trim($1)==="","Nombres"],[Strings.Trim($2)==="","Apellidos"],[Strings.Trim($3)==="","Fecha de Nacimiento"],[Strings.Trim($4)==="","Genero"]])));
    };
   };
  },forma.Hole("nombres").get_View(),forma.Hole("apellidos").get_View()),forma.Hole("fechanacimiento").get_View()),forma.Hole("genero").get_View());
  View.Sink(function(v)
  {
   if(!Unchecked.Equals(datosV.Get(),v))
    datosV.Set(v);
  },View.Apply(View.Apply(View.Apply(View.Apply(View.Apply(View.Map2(function($1,$2)
  {
   return Runtime.Curried(function($3,$4,$5,$6,$7)
   {
    return!Seq.isEmpty($1)?null:VariousUI.alertIfNone("Genero",Genero.tryParse($2),function(genero)
    {
     return VariousUI.alertIfNone("Fecha incorrecta",(ParseO.parseDateO2())($3),function(fecha)
     {
      return{
       $:1,
       $0:DatosPersonales$1.New(null,Arrays.get(Strings.SplitChars(Strings.Trim($4),[" "],0),0),Strings.concat(" ",Slice.array(Strings.SplitChars(Strings.Trim($5),[" "],0),{
        $:1,
        $0:1
       },null)),Arrays.get(Strings.SplitChars(Strings.Trim($6),[" "],0),0),Strings.concat(" ",Slice.array(Strings.SplitChars(Strings.Trim($7),[" "],0),{
        $:1,
        $0:1
       },null)),new Pais({
        $:3,
        $0:""
       }),genero,fecha)
      };
     });
    });
   },5);
  },requeridosW,forma.Hole("genero").get_View()),forma.Hole("fechanacimiento").get_View()),forma.Hole("nombres").get_View()),forma.Hole("nombres").get_View()),forma.Hole("apellidos").get_View()),forma.Hole("apellidos").get_View()));
  return[requeridosW,forma.get_Doc()];
 };
 FormaRegistro.formaDoc$993$41=function(mostrar,mensajes,datosOV,correoOV,telefonoOV,direccionOV)
 {
  return function()
  {
   var m,$1,$2,$3,$4,$5,correo,datos,direccion,telefono,b;
   function g(a)
   {
    Global.alert(a);
   }
   mostrar.Set(true);
   m=mensajes.Get();
   Strings.Trim(m)!==""?Global.alert(m):($1=datosOV.Get(),$2=correoOV.Get(),$3=telefonoOV.Get(),$4=direccionOV.Get(),$1!=null&&$1.$==1&&($2!=null&&$2.$==1&&($3!=null&&$3.$==1&&($4!=null&&$4.$==1&&($5=[$2.$0,$1.$0,$4.$0,$3.$0],true))))?(correo=$5[0],datos=$5[1],direccion=$5[2],telefono=$5[3],AsyncResultM.iterA(function(x)
   {
    return g(ResultMessage.summarized(x));
   },Global.ignore,(b=AsyncResultMAutoOpen.asyncResultM(),b.Run(b.Delay(function()
   {
    var c;
    return b.Bind$4(Rpc.ejecutarDataEventoNuevo({
     $:3,
     $0:[new TypesV0.IdAliado({
      $:0,
      $0:Strings.Substring(Strings.Replace((c=Guid.NewGuid(),Global.String(c)),"-",""),0,20)
     }),datos,{
      $:1,
      $0:ModeloUI.modeloV().Get().idAliado
     },[{
      $:1,
      $0:correo
     },{
      $:2,
      $0:telefono
     },{
      $:0,
      $0:direccion
     }]]
    }),function(a)
    {
     Refresh.refrescarData(true);
     Global.alert((function($6)
     {
      return function($7)
      {
       return $6(testing_GeneratedPrintf.p$2($7));
      };
     }(Global.id))(a));
     return b.Zero();
    });
   }))))):Global.alert("Error not caught FormaRegistro"));
  };
 };
 FormaRegistro.formaDoc=function()
 {
  var mensajes,mostrar,datosOV,correoOV,telefonoOV,direccionOV,p,p$1,p$2,p$3,forma,b,t,p$4,i;
  mensajes=Var$1.Create$1("");
  mostrar=Var$1.Create$1(false);
  datosOV=Var$1.Create$1(null);
  correoOV=Var$1.Create$1(null);
  telefonoOV=Var$1.Create$1(null);
  direccionOV=Var$1.Create$1(null);
  p=DatosPersonales.formaDoc(datosOV);
  p$1=CorreoElectronico.formaDoc(correoOV);
  p$2=Telefono.formaDoc(telefonoOV);
  p$3=Direccion.formaDoc(direccionOV);
  forma=(b=(t=ProviderBuilder.Make().WithHole({
   $:2,
   $0:"mensajes",
   $1:View.Map2(function($1,$2)
   {
    return $1?$2:"";
   },mostrar.get_View(),mensajes.get_View())
  }).WithHole({
   $:0,
   $0:"datospersonales",
   $1:p[1]
  }).WithHole({
   $:0,
   $0:"correo",
   $1:p$1[1]
  }).WithHole({
   $:0,
   $0:"telefono",
   $1:p$2[1]
  }).WithHole({
   $:0,
   $0:"direccion",
   $1:p$3[1]
  }),t.WithHole(Handler.EventQ2(t.k,"registrarse",function()
  {
   return t.i;
  },function()
  {
   var m,$1,$2,$3,$4,$5,correo,datos,direccion,telefono,b$1;
   function g(a)
   {
    Global.alert(a);
   }
   mostrar.Set(true);
   m=mensajes.Get();
   Strings.Trim(m)!==""?Global.alert(m):($1=datosOV.Get(),$2=correoOV.Get(),$3=telefonoOV.Get(),$4=direccionOV.Get(),$1!=null&&$1.$==1&&($2!=null&&$2.$==1&&($3!=null&&$3.$==1&&($4!=null&&$4.$==1&&($5=[$2.$0,$1.$0,$4.$0,$3.$0],true))))?(correo=$5[0],datos=$5[1],direccion=$5[2],telefono=$5[3],AsyncResultM.iterA(function(x)
   {
    return g(ResultMessage.summarized(x));
   },Global.ignore,(b$1=AsyncResultMAutoOpen.asyncResultM(),b$1.Run(b$1.Delay(function()
   {
    var c;
    return b$1.Bind$4(Rpc.ejecutarDataEventoNuevo({
     $:3,
     $0:[new TypesV0.IdAliado({
      $:0,
      $0:Strings.Substring(Strings.Replace((c=Guid.NewGuid(),Global.String(c)),"-",""),0,20)
     }),datos,{
      $:1,
      $0:ModeloUI.modeloV().Get().idAliado
     },[{
      $:1,
      $0:correo
     },{
      $:2,
      $0:telefono
     },{
      $:0,
      $0:direccion
     }]]
    }),function(a)
    {
     Refresh.refrescarData(true);
     Global.alert((function($6)
     {
      return function($7)
      {
       return $6(testing_GeneratedPrintf.p$2($7));
      };
     }(Global.id))(a));
     return b$1.Zero();
    });
   }))))):Global.alert("Error not caught FormaRegistro"));
  }))),(p$4=Handler.CompleteHoles(b.k,b.h,[]),(i=new TemplateInstance.New(p$4[1],testing_Templates.formaregistro(p$4[0])),(b.i=i,i))));
  View.Sink(function(a)
  {
   mensajes.Set(a);
  },View.Apply(View.Apply(View.Map2(function($1,$2)
  {
   return function($3)
   {
    return function($4)
    {
     var es;
     es=Strings.concat(", ",Seq.delay(function()
     {
      return Seq.append($1,Seq.delay(function()
      {
       return Seq.append($2,Seq.delay(function()
       {
        return Seq.append($3,Seq.delay(function()
        {
         return $4;
        }));
       }));
      }));
     }));
     return es!==""?"Campos requeridos: "+es:"";
    };
   };
  },p[0],p$1[0]),p$2[0]),p$3[0]));
  return forma.get_Doc();
 };
 FormaDatos.formaDoc=function()
 {
  return ModeloUI.aliadoIdDoc(FormaDatos.formaAliado);
 };
 FormaDatos.formaAliado$1046$36=function(mostrar,mensajes,datosOV,aliadoW)
 {
  return function()
  {
   var m,$1,$2,$3,al,datos,b;
   function g(a)
   {
    Global.alert(a);
   }
   mostrar.Set(true);
   m=mensajes.Get();
   Strings.Trim(m)!==""?Global.alert(m):($1=datosOV.Get(),$2=View.TryGet(aliadoW),$1!=null&&$1.$==1&&($2!=null&&$2.$==1&&($3=[$2.$0,$1.$0],true))?(al=$3[0],datos=$3[1],AsyncResultM.iterA(function(x)
   {
    return g(ResultMessage.summarized(x));
   },Global.ignore,(b=AsyncResultMAutoOpen.asyncResultM(),b.Run(b.Delay(function()
   {
    return b.Bind$4(Rpc.ejecutarDataEventoNuevo({
     $:4,
     $0:[al.id,datos]
    }),function(a)
    {
     Refresh.refrescarData(true);
     Global.alert((function($4)
     {
      return function($5)
      {
       return $4(testing_GeneratedPrintf.p$2($5));
      };
     }(Global.id))(a));
     return b.Zero();
    });
   }))))):Global.alert("Error not caught FormaDatos"));
  };
 };
 FormaDatos.formaAliado=function(aliadoW)
 {
  var mensajes,mostrar,datosOV,p,forma,b,t,p$1,i;
  function f(a)
  {
   return{
    $:1,
    $0:a
   };
  }
  function g(a)
  {
   datosOV.Set(a);
  }
  mensajes=Var$1.Create$1("");
  mostrar=Var$1.Create$1(false);
  datosOV=Var$1.Create$1(null);
  View.Sink(function(x)
  {
   return g(f(x));
  },View.Map(function(a)
  {
   return a.datosPersonales;
  },aliadoW));
  p=DatosPersonales.formaDoc(datosOV);
  forma=(b=(t=ProviderBuilder.Make().WithHole({
   $:2,
   $0:"mensajes",
   $1:View.Map2(function($1,$2)
   {
    return $1?$2:"";
   },mostrar.get_View(),mensajes.get_View())
  }).WithHole({
   $:2,
   $0:"changed",
   $1:View.Map2(function($1,$2)
   {
    return Unchecked.Equals({
     $:1,
     $0:$1.datosPersonales
    },$2)?"":"mui-btn--primary";
   },aliadoW,datosOV.get_View())
  }).WithHole({
   $:0,
   $0:"datospersonales",
   $1:p[1]
  }),t.WithHole(Handler.EventQ2(t.k,"salvar",function()
  {
   return t.i;
  },function()
  {
   var m,$1,$2,$3,al,datos,b$1;
   function g$1(a)
   {
    Global.alert(a);
   }
   mostrar.Set(true);
   m=mensajes.Get();
   Strings.Trim(m)!==""?Global.alert(m):($1=datosOV.Get(),$2=View.TryGet(aliadoW),$1!=null&&$1.$==1&&($2!=null&&$2.$==1&&($3=[$2.$0,$1.$0],true))?(al=$3[0],datos=$3[1],AsyncResultM.iterA(function(x)
   {
    return g$1(ResultMessage.summarized(x));
   },Global.ignore,(b$1=AsyncResultMAutoOpen.asyncResultM(),b$1.Run(b$1.Delay(function()
   {
    return b$1.Bind$4(Rpc.ejecutarDataEventoNuevo({
     $:4,
     $0:[al.id,datos]
    }),function(a)
    {
     Refresh.refrescarData(true);
     Global.alert((function($4)
     {
      return function($5)
      {
       return $4(testing_GeneratedPrintf.p$2($5));
      };
     }(Global.id))(a));
     return b$1.Zero();
    });
   }))))):Global.alert("Error not caught FormaDatos"));
  }))),(p$1=Handler.CompleteHoles(b.k,b.h,[]),(i=new TemplateInstance.New(p$1[1],testing_Templates.formadatospersonales(p$1[0])),(b.i=i,i))));
  View.Sink(function(a)
  {
   mensajes.Set(a);
  },View.Map(function($1)
  {
   var es;
   es=Strings.concat(", ",Seq.delay(function()
   {
    return $1;
   }));
   return es!==""?"Campos requeridos: "+es:"";
  },p[0]));
  return forma.get_Doc();
 };
 FormaGenerica.forma$1082$38=function(salvar)
 {
  return function()
  {
   salvar();
  };
 };
 FormaGenerica.forma=function(mensajeW,cambioW,contenido,salvar)
 {
  var mostrar,b,t,p,i;
  Var$1.Create$1("");
  mostrar=Var$1.Create$1(false);
  return(b=(t=ProviderBuilder.Make().WithHole({
   $:2,
   $0:"mensajes",
   $1:View.Map2(function($1,$2)
   {
    return $1?$2:"";
   },mostrar.get_View(),mensajeW)
  }).WithHole({
   $:2,
   $0:"changed",
   $1:View.Map(function($1)
   {
    return $1?"":"mui-btn--primary";
   },cambioW)
  }).WithHole({
   $:0,
   $0:"content",
   $1:contenido
  }),t.WithHole(Handler.EventQ2(t.k,"salvar",function()
  {
   return t.i;
  },function()
  {
   salvar();
  }))),(p=Handler.CompleteHoles(b.k,b.h,[]),(i=new TemplateInstance.New(p[1],testing_Templates.formagenerica(p[0])),(b.i=i,i)))).get_Doc();
 };
 FormaContactos.formaDoc=function()
 {
  return ModeloUI.aliadoIdDoc(FormaContactos.formaContactos);
 };
 FormaContactos.formaContactos$1155$36=function(mostrar,mensajes,aliadoW,contactosV)
 {
  return function()
  {
   var m,m$1,al,b;
   function g(a)
   {
    Global.alert(a);
   }
   mostrar.Set(true);
   m=mensajes.Get();
   Strings.Trim(m)!==""?Global.alert(m):(m$1=View.TryGet(aliadoW),m$1!=null&&m$1.$==1?(al=m$1.$0,AsyncResultM.iterA(function(x)
   {
    return g(ResultMessage.summarized(x));
   },Global.ignore,(b=AsyncResultMAutoOpen.asyncResultM(),b.Run(b.Delay(function()
   {
    return b.Bind$4(Rpc.ejecutarDataEventoNuevo({
     $:5,
     $0:[al.id,contactosV.Get()]
    }),function(a)
    {
     Refresh.refrescarData(true);
     Global.alert((function($1)
     {
      return function($2)
      {
       return $1(testing_GeneratedPrintf.p$2($2));
      };
     }(Global.id))(a));
     return b.Zero();
    });
   }))))):Global.alert("Error not caught FormaDatos"));
  };
 };
 FormaContactos.formaContactos$1154$42=function(contactosV)
 {
  return function()
  {
   contactosV.Set(contactosV.Get().concat([{
    $:0,
    $0:TypesV0.dirVacio()
   }]));
  };
 };
 FormaContactos.formaContactos$1153$42=function(contactosV)
 {
  return function()
  {
   contactosV.Set(contactosV.Get().concat([{
    $:1,
    $0:TypesV0.correoVacio()
   }]));
  };
 };
 FormaContactos.formaContactos$1152$42=function(contactosV)
 {
  return function()
  {
   contactosV.Set(contactosV.Get().concat([{
    $:2,
    $0:TypesV0.telVacio()
   }]));
  };
 };
 FormaContactos.formaContactos=function(aliadoW)
 {
  var mensajes,mostrar,contactosV,contactosIV,ftel,fcor,fdir,tels,cors,dirs,telDocs,corDocs,dirDocs,b,t,t$1,t$2,t$3,p,i;
  function makeVar(f,fr)
  {
   return function(i$1)
   {
    return new FromView.New(View.Map(function($1)
    {
     var o;
     o=Seq.tryItem(i$1,$1);
     return o==null?null:f(o.$0);
    },contactosV.get_View()),function(a)
    {
     if(a!=null&&a.$==1)
      contactosV.Set(Array.replace(i$1,fr(a.$0),contactosV.Get()));
    });
   };
  }
  mensajes=Var$1.Create$1("");
  mostrar=Var$1.Create$1(false);
  contactosV=Var$1.Create$1([]);
  View.Sink(function(a)
  {
   contactosV.Set(a);
  },View.Map(function(a)
  {
   return a.contactos;
  },aliadoW));
  contactosIV=View.Map(Seq.indexed,contactosV.get_View());
  ftel=[function(a)
  {
   return a.$==2?{
    $:1,
    $0:a.$0
   }:null;
  },function(a)
  {
   return{
    $:2,
    $0:a
   };
  }];
  fcor=[function(a)
  {
   return a.$==1?{
    $:1,
    $0:a.$0
   }:null;
  },function(a)
  {
   return{
    $:1,
    $0:a
   };
  }];
  fdir=[function(a)
  {
   return a.$==0?{
    $:1,
    $0:a.$0
   }:null;
  },function(a)
  {
   return{
    $:0,
    $0:a
   };
  }];
  tels=View.Map(function($1)
  {
   function c(i$1,c$1)
   {
    return ftel[0](c$1)==null?null:{
     $:1,
     $0:i$1
    };
   }
   return Seq.choose(function($2)
   {
    return c($2[0],$2[1]);
   },$1);
  },contactosIV);
  cors=View.Map(function($1)
  {
   function c(i$1,c$1)
   {
    return fcor[0](c$1)==null?null:{
     $:1,
     $0:i$1
    };
   }
   return Seq.choose(function($2)
   {
    return c($2[0],$2[1]);
   },$1);
  },contactosIV);
  dirs=View.Map(function($1)
  {
   function c(i$1,c$1)
   {
    return fdir[0](c$1)==null?null:{
     $:1,
     $0:i$1
    };
   }
   return Seq.choose(function($2)
   {
    return c($2[0],$2[1]);
   },$1);
  },contactosIV);
  telDocs=Doc.ConvertBy(Global.id,function(i$1)
  {
   return VariousUI.removeButton(function()
   {
    contactosV.Set(Array.remove(i$1,contactosV.Get()));
   },(Telefono.formaDoc((function($1)
   {
    return makeVar($1[0],$1[1]);
   }(ftel))(i$1)))[1]);
  },tels);
  corDocs=Doc.ConvertBy(Global.id,function(i$1)
  {
   return VariousUI.removeButton(function()
   {
    contactosV.Set(Array.remove(i$1,contactosV.Get()));
   },(CorreoElectronico.formaDoc((function($1)
   {
    return makeVar($1[0],$1[1]);
   }(fcor))(i$1)))[1]);
  },cors);
  dirDocs=Doc.ConvertBy(Global.id,function(i$1)
  {
   return VariousUI.removeButton(function()
   {
    contactosV.Set(Array.remove(i$1,contactosV.Get()));
   },(Direccion.formaDoc((function($1)
   {
    return makeVar($1[0],$1[1]);
   }(fdir))(i$1)))[1]);
  },dirs);
  return(b=(t=(t$1=(t$2=(t$3=ProviderBuilder.Make().WithHole({
   $:2,
   $0:"mensajes",
   $1:View.Map2(function($1,$2)
   {
    return $1?$2:"";
   },mostrar.get_View(),mensajes.get_View())
  }).WithHole({
   $:2,
   $0:"changed",
   $1:View.Map2(function($1,$2)
   {
    return Unchecked.Equals($1.contactos,$2)?"":"mui-btn--primary";
   },aliadoW,contactosV.get_View())
  }).WithHole({
   $:0,
   $0:"telefonos",
   $1:telDocs
  }).WithHole({
   $:0,
   $0:"correos",
   $1:corDocs
  }).WithHole({
   $:0,
   $0:"direcciones",
   $1:dirDocs
  }),t$3.WithHole(Handler.EventQ2(t$3.k,"mastelefono",function()
  {
   return t$3.i;
  },function()
  {
   contactosV.Set(contactosV.Get().concat([{
    $:2,
    $0:TypesV0.telVacio()
   }]));
  }))),t$2.WithHole(Handler.EventQ2(t$2.k,"mascorreo",function()
  {
   return t$2.i;
  },function()
  {
   contactosV.Set(contactosV.Get().concat([{
    $:1,
    $0:TypesV0.correoVacio()
   }]));
  }))),t$1.WithHole(Handler.EventQ2(t$1.k,"masdireccion",function()
  {
   return t$1.i;
  },function()
  {
   contactosV.Set(contactosV.Get().concat([{
    $:0,
    $0:TypesV0.dirVacio()
   }]));
  }))),t.WithHole(Handler.EventQ2(t.k,"salvar",function()
  {
   return t.i;
  },function()
  {
   var m,m$1,al,b$1;
   function g(a)
   {
    Global.alert(a);
   }
   mostrar.Set(true);
   m=mensajes.Get();
   Strings.Trim(m)!==""?Global.alert(m):(m$1=View.TryGet(aliadoW),m$1!=null&&m$1.$==1?(al=m$1.$0,AsyncResultM.iterA(function(x)
   {
    return g(ResultMessage.summarized(x));
   },Global.ignore,(b$1=AsyncResultMAutoOpen.asyncResultM(),b$1.Run(b$1.Delay(function()
   {
    return b$1.Bind$4(Rpc.ejecutarDataEventoNuevo({
     $:5,
     $0:[al.id,contactosV.Get()]
    }),function(a)
    {
     Refresh.refrescarData(true);
     Global.alert((function($1)
     {
      return function($2)
      {
       return $1(testing_GeneratedPrintf.p$2($2));
      };
     }(Global.id))(a));
     return b$1.Zero();
    });
   }))))):Global.alert("Error not caught FormaDatos"));
  }))),(p=Handler.CompleteHoles(b.k,b.h,[]),(i=new TemplateInstance.New(p[1],testing_Templates.formacontactos(p[0])),(b.i=i,i)))).get_Doc();
 };
 FormaContactos.formaTelefonos=function(aliadoW)
 {
  var contactosV,contactosIV,tels,cors,dirs,f,f$1,f$2,f$3,f$4,f$5;
  function makeVar(f$6,fr)
  {
   return function(i)
   {
    return new FromView.New(View.Map(function($1)
    {
     var o;
     o=Seq.tryItem(i,$1);
     return o==null?null:f$6(o.$0);
    },contactosV.get_View()),function(a)
    {
     if(a!=null&&a.$==1)
      contactosV.Set(Array.replace(i,fr(a.$0),contactosV.Get()));
    });
   };
  }
  function g(t)
  {
   return t[1];
  }
  function g$1(t)
  {
   return t[1];
  }
  function g$2(t)
  {
   return t[1];
  }
  contactosV=Var$1.Create$1([]);
  View.Sink(function(a)
  {
   contactosV.Set(a);
  },View.Map(function(a)
  {
   return a.contactos;
  },aliadoW));
  contactosIV=View.Map(Seq.indexed,contactosV.get_View());
  tels=View.Map(function($1)
  {
   function c(i,c$1)
   {
    return(FormaContactos.ftel())[0](c$1)==null?null:{
     $:1,
     $0:i
    };
   }
   return Seq.choose(function($2)
   {
    return c($2[0],$2[1]);
   },$1);
  },contactosIV);
  cors=View.Map(function($1)
  {
   function c(i,c$1)
   {
    return(FormaContactos.fcor())[0](c$1)==null?null:{
     $:1,
     $0:i
    };
   }
   return Seq.choose(function($2)
   {
    return c($2[0],$2[1]);
   },$1);
  },contactosIV);
  dirs=View.Map(function($1)
  {
   function c(i,c$1)
   {
    return(FormaContactos.fdir())[0](c$1)==null?null:{
     $:1,
     $0:i
    };
   }
   return Seq.choose(function($2)
   {
    return c($2[0],$2[1]);
   },$1);
  },contactosIV);
  Doc.ConvertBy(Global.id,(f=(f$1=makeVar.apply(null,FormaContactos.ftel()),function(x)
  {
   return Telefono.formaDoc(f$1(x));
  }),function(x)
  {
   return g(f(x));
  }),tels);
  Doc.ConvertBy(Global.id,(f$2=(f$3=makeVar.apply(null,FormaContactos.fcor()),function(x)
  {
   return CorreoElectronico.formaDoc(f$3(x));
  }),function(x)
  {
   return g$1(f$2(x));
  }),cors);
  Doc.ConvertBy(Global.id,(f$4=(f$5=makeVar.apply(null,FormaContactos.fdir()),function(x)
  {
   return Direccion.formaDoc(f$5(x));
  }),function(x)
  {
   return g$2(f$4(x));
  }),dirs);
  return Runtime.Curried(FormaGenerica.forma,4);
 };
 FormaContactos.fdir=function()
 {
  SC$1.$cctor();
  return SC$1.fdir;
 };
 FormaContactos.fcor=function()
 {
  SC$1.$cctor();
  return SC$1.fcor;
 };
 FormaContactos.ftel=function()
 {
  SC$1.$cctor();
  return SC$1.ftel;
 };
 FormaAutorizacion.formaAutorizacion$1190$48=function(mensajes)
 {
  return function()
  {
   function g(a)
   {
    Global.alert(a);
   }
   if(mensajes.Get()!=="")
    Global.alert(mensajes.Get());
   else
    {
     AsyncResultM.iterA(function(x)
     {
      return g(ResultMessage.summarized(x));
     },function(a)
     {
      Global.alert(a);
     },Rpc.actualizarSubscripcion(FormaAutorizacion.pid()));
    }
  };
 };
 FormaAutorizacion.formaAutorizacion=function()
 {
  var mensajes,nombreW,forma,b,t,C,p,i;
  function ymd(f)
  {
   return(new Global.Date(f)).getFullYear()*10000+((new Global.Date(f)).getMonth()+1)*100+(new Global.Date(f)).getDate();
  }
  mensajes=Var$1.Create$1("");
  nombreW=View.Map(function($1)
  {
   return Aliado$1.nombre2($1.datosPersonales);
  },ModeloUI.aliadoW());
  forma=(b=(t=(C=Doc.EmbedView(FormaAutorizacion.cuentaAutorizar().get_View()),ProviderBuilder.Make().WithHole({
   $:2,
   $0:"afiliado",
   $1:nombreW
  }).WithHole({
   $:2,
   $0:"montoafiliacion",
   $1:View.Map(function($1)
   {
    return(function($2)
    {
     return function($3)
     {
      return $2("$"+Global.String($3)+".00");
     };
    }(Global.id))($1.premisas.montoAfiliacion);
   },ModeloUI.modeloV().get_View())
  }).WithHole({
   $:2,
   $0:"dia",
   $1:View.Map(function($1)
   {
    return Global.String(Aliado$1.dia($1.diaPago));
   },ModeloUI.aliadoW())
  }).WithHole({
   $:0,
   $0:"cuentadebitar",
   $1:C
  })).WithHole({
   $:2,
   $0:"firmarclass",
   $1:View.Map(function($1)
   {
    return $1===""?"mui-btn--primary":"";
   },mensajes.get_View())
  }),t.WithHole(Handler.EventQ2(t.k,"firmar",function()
  {
   return t.i;
  },function()
  {
   function g(a)
   {
    Global.alert(a);
   }
   if(mensajes.Get()!=="")
    Global.alert(mensajes.Get());
   else
    {
     AsyncResultM.iterA(function(x)
     {
      return g(ResultMessage.summarized(x));
     },function(a)
     {
      Global.alert(a);
     },Rpc.actualizarSubscripcion(FormaAutorizacion.pid()));
    }
  }))),(p=Handler.CompleteHoles(b.k,b.h,[["titular",0],["fecha",0]]),(i=new TemplateInstance.New(p[1],testing_Templates.autorizacion(p[0])),(b.i=i,i))));
  View.Sink(function(a)
  {
   mensajes.Set(a);
  },View.Apply(View.Map2(function($1,$2)
  {
   return function($3)
   {
    var o,c;
    return Strings.concat(", ",Seq.map(function(t$1)
    {
     return t$1[1];
    },Seq.filter(function(t$1)
    {
     return t$1[0];
    },List.ofArray([[Strings.Trim($1).toLowerCase()!==$2.toLowerCase(),"Nombre del titular debe coincidir"],[!Unchecked.Equals((o=(ParseO.parseDateO())($3),o==null?null:{
     $:1,
     $0:ymd(o.$0)
    }),{
     $:1,
     $0:ymd((c=Date$1.now(),DateUtil.DatePortion(c)))
    }),"Introduzca fecha de hoy"]]))));
   };
  },forma.Hole("titular").get_View(),nombreW),forma.Hole("fecha").get_View()));
  return forma.get_Doc();
 };
 FormaAutorizacion.pid=function()
 {
  SC$1.$cctor();
  return SC$1.pid;
 };
 FormaAutorizacion.set_pid=function($1)
 {
  SC$1.$cctor();
  SC$1.pid=$1;
 };
 FormaAutorizacion.cuentaAutorizar=function()
 {
  SC$1.$cctor();
  return SC$1.cuentaAutorizar;
 };
 FormaFormasPago.formaDoc=function()
 {
  return ModeloUI.aliadoIdDoc(FormaFormasPago.formaFormasPago);
 };
 FormaFormasPago.formaFormasPago$1291$36=function(mostrar,mensajes,aliadoW,fpIds,formasPagoV)
 {
  return function()
  {
   var m,m$1,b;
   function g(a)
   {
    Global.alert(a);
   }
   mostrar.Set(true);
   m=mensajes.Get();
   Strings.Trim(m)!==""?Global.alert(m):(m$1=View.TryGet(aliadoW),m$1!=null&&m$1.$==1?AsyncResultM.iterA(function(x)
   {
    return g(ResultMessage.summarized(x));
   },Global.ignore,(b=AsyncResultMAutoOpen.asyncResultM(),b.Run(b.Delay(function()
   {
    return b.Combine$1(b.For(FSharpSet.op_Subtraction(fpIds(ModeloUI.formasPagoAliadoV().Get()),fpIds(formasPagoV.Get())),function(a)
    {
     return b.Bind$4(Rpc.borrarFormaPago(a),function(a$1)
     {
      return b.Bind$2(new ResultMessage({
       $:3,
       $0:a$1
      }),function()
      {
       return b.Return();
      });
     });
    }),b.Delay(function()
    {
     return b.Combine$1(b.For(formasPagoV.Get(),function(a)
     {
      var callO,m$2,$1,$2;
      callO=(m$2=a.cuentaPago,m$2.$==1&&(!(m$2.$0.numero.get_Id().indexOf("X")!=-1)&&($1=m$2.$0,true))?{
       $:1,
       $0:Rpc.registrarTarjeta($1)
      }:m$2.$==0&&(!(m$2.$0.numero.get_Id().indexOf("X")!=-1)&&($2=m$2.$0,true))?{
       $:1,
       $0:Rpc.registrarCuenta($2)
      }:null);
      return callO!=null&&callO.$==1?b.Bind$4(callO.$0,function(a$1)
      {
       return b.Bind$2(new ResultMessage({
        $:3,
        $0:a$1
       }),function()
       {
        return b.Return();
       });
      }):b.Zero();
     }),b.Delay(function()
     {
      FormaFormasPago.refrescarFormasPago();
      return b.Zero();
     }));
    }));
   })))):Global.alert("Error not caught FormaDatos"));
  };
 };
 FormaFormasPago.formaFormasPago$1289$42=function(formasPagoV,fp)
 {
  return function()
  {
   formasPagoV.Set(formasPagoV.Get().concat([fp({
    $:0,
    $0:TypesV0.ctaVacio()
   })]));
  };
 };
 FormaFormasPago.formaFormasPago$1288$42=function(formasPagoV,fp)
 {
  return function()
  {
   formasPagoV.Set(formasPagoV.Get().concat([fp({
    $:1,
    $0:TypesV0.tarVacio()
   })]));
  };
 };
 FormaFormasPago.formaFormasPago=function(aliadoW)
 {
  var mensajes,mostrar,formasPagoV,formasPagoIW,tars,ctas,tarDocs,ctaDocs,b,t,t$1,t$2,p,i;
  function makeVar(f,fr)
  {
   return function(i$1)
   {
    return new FromView.New(View.Map(function($1)
    {
     var o;
     o=Seq.tryItem(i$1,$1);
     return o==null?null:f(o.$0);
    },formasPagoV.get_View()),function(a)
    {
     var nv;
     if(a!=null&&a.$==1)
      {
       nv=a.$0;
       formasPagoV.Set(Array.replace(i$1,(fr(Arrays.get(formasPagoV.Get(),i$1)))(VariousUI.fst3(nv[0],nv[1],nv[2])),formasPagoV.Get()));
      }
    });
   };
  }
  function validar(fp$1)
  {
   var b$1;
   function g(a)
   {
    Global.alert(a);
   }
   AsyncResultM.iterA(function(x)
   {
    return g(ResultMessage.summarized(x));
   },function(a)
   {
    Global.alert(a);
   },(b$1=AsyncResultMAutoOpen.asyncResultM(),b$1.Run(b$1.Delay(function()
   {
    return b$1.Bind$1(ResultM.ofResult(Result.MapError(function(a)
    {
     return new ResultMessage({
      $:1,
      $0:a
     });
    },fp$1.authorizeIdR)),function(a)
    {
     return b$1.Bind$4(Rpc.validarFormaPago(a),function(a$1)
     {
      return b$1.Return(a$1);
     });
    });
   }))));
  }
  function otherButtons(i$1,docF)
  {
   return VariousUI.removeButton(function()
   {
    formasPagoV.Set(Array.remove(i$1,formasPagoV.Get()));
   },Doc.Concat(List.ofSeq(Seq.delay(function()
   {
    return Seq.append([Doc.Button("AUTORIZAR DEBITO",[AttrProxy.Create("title","Autorizar pago recurrente"),AttrModule.Dynamic("style",View.Map(function($1)
    {
     return Arrays.get($1,i$1).authorizeIdR.$==0?"":"display:None";
    },formasPagoV.get_View()))],function()
    {
     var m,a;
     m=Arrays.get(formasPagoV.Get(),i$1).authorizeIdR;
     m.$==0?(a=docF(),FormaAutorizacion.cuentaAutorizar().Set(a),FormaAutorizacion.set_pid(m.$0),ModeloUI.endPointV().Set({
      $:3,
      $0:"ProzperLyt.cntAutorizacion"
     })):Global.alert("Pago no está verificado en Authorize: "+m.$0);
    })],Seq.delay(function()
    {
     return Seq.append([Doc.Element("br",[],[])],Seq.delay(function()
     {
      return Seq.append([docF()],Seq.delay(function()
      {
       return[Doc.Button("validar",[AttrProxy.Create("title","validar forma de pago"),AttrModule.Dynamic("style",View.Map(function($1)
       {
        return Arrays.get($1,i$1).authorizeIdR.$==0?"":"display:None";
       },formasPagoV.get_View()))],function()
       {
        validar(Arrays.get(formasPagoV.Get(),i$1));
       })];
      }));
     }));
    }));
   }))));
  }
  function fp(cp)
  {
   return FormaPago.New("",Library.Error(""),cp);
  }
  function fpIds(fps)
  {
   return new FSharpSet.New(Seq.choose(function(fp$1)
   {
    var m;
    m=fp$1.authorizeIdR;
    return m.$==0?{
     $:1,
     $0:m.$0
    }:null;
   },fps));
  }
  mensajes=Var$1.Create$1("");
  mostrar=Var$1.Create$1(false);
  formasPagoV=Var$1.Create$1([]);
  View.Sink(function(a)
  {
   formasPagoV.Set(a);
  },ModeloUI.formasPagoAliadoV().get_View());
  FormaFormasPago.refrescarFormasPago();
  formasPagoIW=View.Map(Seq.indexed,formasPagoV.get_View());
  tars=View.Map(function($1)
  {
   function c(i$1,c$1)
   {
    return(FormaFormasPago.ftar())[0](c$1)==null?null:{
     $:1,
     $0:i$1
    };
   }
   return Seq.choose(function($2)
   {
    return c($2[0],$2[1]);
   },$1);
  },formasPagoIW);
  ctas=View.Map(function($1)
  {
   function c(i$1,c$1)
   {
    return(FormaFormasPago.fcta())[0](c$1)==null?null:{
     $:1,
     $0:i$1
    };
   }
   return Seq.choose(function($2)
   {
    return c($2[0],$2[1]);
   },$1);
  },formasPagoIW);
  tarDocs=Doc.ConvertBy(Global.id,function(i$1)
  {
   var v;
   return otherButtons(i$1,(v=(function($1)
   {
    return makeVar($1[0],$1[1]);
   }(FormaFormasPago.ftar()))(i$1),function()
   {
    return(TarjetaCredito.formaDocO(v))[1];
   }));
  },tars);
  ctaDocs=Doc.ConvertBy(Global.id,function(i$1)
  {
   var v;
   return otherButtons(i$1,(v=(function($1)
   {
    return makeVar($1[0],$1[1]);
   }(FormaFormasPago.fcta()))(i$1),function()
   {
    return(CuentaBancaria.formaDocO(v))[1];
   }));
  },ctas);
  return(b=(t=(t$1=(t$2=ProviderBuilder.Make().WithHole({
   $:2,
   $0:"mensajes",
   $1:View.Map2(function($1,$2)
   {
    return $1?$2:"";
   },mostrar.get_View(),mensajes.get_View())
  }).WithHole({
   $:0,
   $0:"tarjetas",
   $1:tarDocs
  }).WithHole({
   $:0,
   $0:"cuentas",
   $1:ctaDocs
  }),t$2.WithHole(Handler.EventQ2(t$2.k,"mastarjeta",function()
  {
   return t$2.i;
  },function()
  {
   formasPagoV.Set(formasPagoV.Get().concat([fp({
    $:1,
    $0:TypesV0.tarVacio()
   })]));
  }))),t$1.WithHole(Handler.EventQ2(t$1.k,"mascuenta",function()
  {
   return t$1.i;
  },function()
  {
   formasPagoV.Set(formasPagoV.Get().concat([fp({
    $:0,
    $0:TypesV0.ctaVacio()
   })]));
  }))).WithHole({
   $:2,
   $0:"changed",
   $1:View.Map2(function($1,$2)
   {
    return Unchecked.Equals($1,$2)?"":"mui-btn--primary";
   },ModeloUI.formasPagoAliadoV().get_View(),formasPagoV.get_View())
  }),t.WithHole(Handler.EventQ2(t.k,"salvar",function()
  {
   return t.i;
  },function()
  {
   var m,m$1,b$1;
   function g(a)
   {
    Global.alert(a);
   }
   mostrar.Set(true);
   m=mensajes.Get();
   Strings.Trim(m)!==""?Global.alert(m):(m$1=View.TryGet(aliadoW),m$1!=null&&m$1.$==1?AsyncResultM.iterA(function(x)
   {
    return g(ResultMessage.summarized(x));
   },Global.ignore,(b$1=AsyncResultMAutoOpen.asyncResultM(),b$1.Run(b$1.Delay(function()
   {
    return b$1.Combine$1(b$1.For(FSharpSet.op_Subtraction(fpIds(ModeloUI.formasPagoAliadoV().Get()),fpIds(formasPagoV.Get())),function(a)
    {
     return b$1.Bind$4(Rpc.borrarFormaPago(a),function(a$1)
     {
      return b$1.Bind$2(new ResultMessage({
       $:3,
       $0:a$1
      }),function()
      {
       return b$1.Return();
      });
     });
    }),b$1.Delay(function()
    {
     return b$1.Combine$1(b$1.For(formasPagoV.Get(),function(a)
     {
      var callO,m$2,$1,$2;
      callO=(m$2=a.cuentaPago,m$2.$==1&&(!(m$2.$0.numero.get_Id().indexOf("X")!=-1)&&($1=m$2.$0,true))?{
       $:1,
       $0:Rpc.registrarTarjeta($1)
      }:m$2.$==0&&(!(m$2.$0.numero.get_Id().indexOf("X")!=-1)&&($2=m$2.$0,true))?{
       $:1,
       $0:Rpc.registrarCuenta($2)
      }:null);
      return callO!=null&&callO.$==1?b$1.Bind$4(callO.$0,function(a$1)
      {
       return b$1.Bind$2(new ResultMessage({
        $:3,
        $0:a$1
       }),function()
       {
        return b$1.Return();
       });
      }):b$1.Zero();
     }),b$1.Delay(function()
     {
      FormaFormasPago.refrescarFormasPago();
      return b$1.Zero();
     }));
    }));
   })))):Global.alert("Error not caught FormaDatos"));
  }))),(p=Handler.CompleteHoles(b.k,b.h,[]),(i=new TemplateInstance.New(p[1],testing_Templates.formacuentas(p[0])),(b.i=i,i)))).get_Doc();
 };
 FormaFormasPago.refrescarFormasPago=function()
 {
  AsyncResultM.iterpA(function(a)
  {
   ModeloUI.formasPagoAliadoV().Set(a);
  },Rpc.obtenerFormasDePago());
 };
 FormaFormasPago.fcta=function()
 {
  SC$1.$cctor();
  return SC$1.fcta;
 };
 FormaFormasPago.ftar=function()
 {
  SC$1.$cctor();
  return SC$1.ftar;
 };
 FormaFormasPago.msg=function(a)
 {
  var idR;
  idR=a.authorizeIdR;
  return idR.$==0?(function($1)
  {
   return function($2)
   {
    return $1("Cuenta verificada: "+testing_GeneratedPrintf.p$3($2));
   };
  }(Global.id))(idR.$0):idR.$0===""?"La cuenta aun no ha sido verificada":idR.$0;
 };
 RenderAliados.aliados$1392$49=function(seleccionar,alid)
 {
  return function()
  {
   seleccionar(alid);
  };
 };
 RenderAliados.aliados$1390$49=function(expandir,alid)
 {
  return function()
  {
   expandir(alid);
  };
 };
 RenderAliados.aliados=function()
 {
  var expandidos,hijosDeO,b,T,x,p,i;
  function hijosDe(id)
  {
   var o,o$1;
   o=(o$1=hijosDeO.Get(),o$1==null?null:{
    $:1,
    $0:o$1.$0(id)
   });
   return o==null?[]:o.$0;
  }
  function referidos(al)
  {
   return al.nReferidos===0?"-":(((Runtime.Curried3(function($1,$2,$3)
   {
    return $1(Global.String($2)+"/"+Global.String($3));
   }))(Global.id))(al.nRefActivos))(al.nReferidos);
  }
  function descendientes(al)
  {
   return al.nDescendientes===0?"-":(((Runtime.Curried3(function($1,$2,$3)
   {
    return $1(Global.String($2)+"/"+Global.String($3));
   }))(Global.id))(al.nDescActivos))(al.nDescendientes);
  }
  function comision(v)
  {
   return v===0?"-":ModeloUI.money(v);
  }
  function expandido(id)
  {
   return View.Map(function(exp)
   {
    return Seq.isEmpty(hijosDe(id))?"":Unchecked.Equals(exp==null?null:{
     $:1,
     $0:exp.$0.Contains(id)
    },{
     $:1,
     $0:true
    })?"Expandido":"Colapsado";
   },expandidos.get_View());
  }
  function expandir(id)
  {
   var o,x$1,v;
   expandidos.Set({
    $:1,
    $0:((Unchecked.Equals((o=expandidos.Get(),o==null?null:{
     $:1,
     $0:o.$0.Contains(id)
    }),{
     $:1,
     $0:true
    })?function(v$1)
    {
     return function(s)
     {
      return s.Remove(v$1);
     };
    }:function(v$1)
    {
     return function(s)
     {
      return s.Add(v$1);
     };
    })(id))((x$1=expandidos.Get(),(v=new FSharpSet.New$1(null),x$1==null?v:x$1.$0)))
   });
  }
  function seleccionar(id)
  {
   ModeloUI.selAliadoIdOV().Set({
    $:1,
    $0:id
   });
  }
  function sortAliados(als)
  {
   var c,c$1,c$2,c$3,c$4,c$5,c$6,c$7,c$8,$1,nivel,raiz,o,als$1,buscar;
   function f(al)
   {
    return al.comision;
   }
   function f$1(al)
   {
    return al.status;
   }
   function f$2(al)
   {
    return[al.nRefActivos,al.nReferidos];
   }
   function f$3(al)
   {
    return[al.nDescActivos,al.nDescendientes];
   }
   function f$4(al)
   {
    return Aliado$1.nombre(al.datosPersonales);
   }
   function buscarExpandidos(al)
   {
    return Seq.delay(function()
    {
     return Seq.append([al],Seq.delay(function()
     {
      var o$1,o$2;
      return(o$1=(o$2=expandidos.Get(),o$2==null?null:{
       $:1,
       $0:o$2.$0.Contains(al.id)
      }),o$1==null?false:o$1.$0)?Seq.collect(buscarExpandidos,buscar.hijos(al)):[];
     }));
    });
   }
   als$1=(c=(c$1=(c$2=(c$3=(c$4=(Runtime.Curried3(SortWith.desc))(f),c$5=(Runtime.Curried3(SortWith.asc))(f$1),Runtime.Curried(SortWith.op_AmpGreater,2,[function($2,$3)
   {
    return(c$4($2))($3);
   },function($2,$3)
   {
    return(c$5($2))($3);
   }])),c$6=(Runtime.Curried3(SortWith.desc))(f$2),Runtime.Curried(SortWith.op_AmpGreater,2,[function($2,$3)
   {
    return(c$3($2))($3);
   },function($2,$3)
   {
    return(c$6($2))($3);
   }])),c$7=(Runtime.Curried3(SortWith.desc))(f$3),Runtime.Curried(SortWith.op_AmpGreater,2,[function($2,$3)
   {
    return(c$2($2))($3);
   },function($2,$3)
   {
    return(c$7($2))($3);
   }])),c$8=(Runtime.Curried3(SortWith.asc))(f$4),Runtime.Curried(SortWith.op_AmpGreater,2,[function($2,$3)
   {
    return(c$1($2))($3);
   },function($2,$3)
   {
    return(c$8($2))($3);
   }])),Seq.sortWith(function($2,$3)
   {
    return(c($2))($3);
   },als));
   buscar=Aliado$1.busqueda(als$1);
   hijosDeO.Set({
    $:1,
    $0:buscar.hijosDe
   });
   try
   {
    nivel=Seq.min(Seq.map(function(al)
    {
     return al.nivel;
    },als$1));
   }
   catch(m)
   {
    nivel=1;
   }
   raiz=Seq.filter(function(al)
   {
    return al.nivel===nivel;
   },als$1);
   Seq.isEmpty(raiz)?expandidos.Set(null):expandidos.Get()==null?(expandidos.Set({
    $:1,
    $0:new FSharpSet.New(Seq.map(function(al)
    {
     return al.id;
    },raiz))
   }),o=Seq.tryHead(Seq.map(function(al)
   {
    return al.id;
   },raiz)),o==null?void 0:seleccionar(o.$0)):void 0;
   return Seq.delay(function()
   {
    return Seq.collect(buscarExpandidos,raiz);
   });
  }
  function a(alid,alv)
  {
   var b$1,t,t$1,e,p$1,i$1;
   return(b$1=(t=(t$1=(e=expandido(alid),ProviderBuilder.Make().WithHole({
    $:2,
    $0:"nombre",
    $1:View.Map(function($1)
    {
     return Aliado$1.nombre($1.datosPersonales);
    },alv)
   }).WithHole({
    $:2,
    $0:"status",
    $1:View.Map(function($1)
    {
     return(function($2)
     {
      return function($3)
      {
       return $2(ProzperServer_GeneratedPrintf.p($3));
      };
     }(Global.id))($1.status);
    },alv)
   }).WithHole({
    $:2,
    $0:"tipo",
    $1:View.Map(function($1)
    {
     return(function($2)
     {
      return function($3)
      {
       return $2(ProzperServer_GeneratedPrintf.p$1($3));
      };
     }(Global.id))($1.tipo);
    },alv)
   }).WithHole({
    $:2,
    $0:"nivel",
    $1:View.Map(function($1)
    {
     return Global.String($1.nivel);
    },alv)
   }).WithHole({
    $:2,
    $0:"referidos",
    $1:View.Map(referidos,alv)
   }).WithHole({
    $:2,
    $0:"descendientes",
    $1:View.Map(descendientes,alv)
   }).WithHole({
    $:2,
    $0:"comision",
    $1:View.Map(function($1)
    {
     return comision($1.comision);
    },alv)
   }).WithHole({
    $:2,
    $0:"expandido",
    $1:e
   })),t$1.WithHole(Handler.EventQ2(t$1.k,"expandir",function()
   {
    return t$1.i;
   },function()
   {
    expandir(alid);
   }))).WithHole({
    $:2,
    $0:"seleccionado",
    $1:View.Map(function($1)
    {
     return Unchecked.Equals({
      $:1,
      $0:alid
     },$1)?"seleccionado":"";
    },ModeloUI.selAliadoIdOV().get_View())
   }),t.WithHole(Handler.EventQ2(t.k,"seleccionar",function()
   {
    return t.i;
   },function()
   {
    seleccionar(alid);
   }))),(p$1=Handler.CompleteHoles(b$1.k,b$1.h,[]),(i$1=new TemplateInstance.New(p$1[1],testing_Templates.filaaliado(p$1[0])),(b$1.i=i$1,i$1)))).get_Doc();
  }
  expandidos=Var$1.Create$1(null);
  hijosDeO=Var$1.Create$1(null);
  return(b=(T=Doc.ConvertSeqBy(function(al)
  {
   return al.id;
  },function($1)
  {
   return function($2)
   {
    return a($1,$2);
   };
  },(x=View.Map(function($1)
  {
   return $1.aliados;
  },ModeloUI.modeloV().get_View()),View.Map2(function(a$1,a$2)
  {
   return sortAliados(a$2);
  },expandidos.get_View(),x))),ProviderBuilder.Make().WithHole({
   $:0,
   $0:"tbody",
   $1:T
  })),(p=Handler.CompleteHoles(b.k,b.h,[]),(i=new TemplateInstance.New(p[1],testing_Templates.tablaaliados(p[0])),(b.i=i,i)))).get_Doc();
 };
 RenderAliado.aliado=function()
 {
  function correo(al)
  {
   var o;
   o=Seq.tryPick(function(a)
   {
    return a.$==1?{
     $:1,
     $0:a.$0.email
    }:null;
   },al.contactos);
   return o==null?"correo no encontrado!":o.$0;
  }
  return ModeloUI.selAliadoIdDoc(function(alv)
  {
   var b,C,p,i;
   return(b=(C=RenderAliado.calculo(),ProviderBuilder.Make().WithHole({
    $:2,
    $0:"nombre",
    $1:View.Map(function($1)
    {
     return Aliado$1.nombre2($1.datosPersonales);
    },alv)
   }).WithHole({
    $:2,
    $0:"status",
    $1:View.Map(function($1)
    {
     return(function($2)
     {
      return function($3)
      {
       return $2(ProzperServer_GeneratedPrintf.p($3));
      };
     }(Global.id))($1.status);
    },alv)
   }).WithHole({
    $:2,
    $0:"tipo",
    $1:View.Map(function($1)
    {
     return(function($2)
     {
      return function($3)
      {
       return $2(ProzperServer_GeneratedPrintf.p$1($3));
      };
     }(Global.id))($1.tipo);
    },alv)
   }).WithHole({
    $:2,
    $0:"contacto",
    $1:View.Map(correo,alv)
   }).WithHole({
    $:0,
    $0:"calculo",
    $1:C
   })),(p=Handler.CompleteHoles(b.k,b.h,[]),(i=new TemplateInstance.New(p[1],testing_Templates.aliado(p[0])),(b.i=i,i)))).get_Doc();
  });
 };
 RenderAliado.calculo=function()
 {
  var prem,aliados;
  prem=View.Map(function($1)
  {
   return $1.premisas;
  },ModeloUI.modeloV().get_View());
  aliados=View.Map(function($1)
  {
   return $1.aliados;
  },ModeloUI.modeloV().get_View());
  View.Map2(function($1,$2)
  {
   return Seq.tryFind(function(al)
   {
    return Unchecked.Equals(al.id,$1);
   },$2);
  },View.Map(function($1)
  {
   return $1.idAliado;
  },ModeloUI.modeloV().get_View()),aliados);
  return ModeloUI.selAliadoIdDoc(function(alv)
  {
   var comisionV,premisasV,b,p,i;
   comisionV=View.Map2(Aliado$1.comision,prem,alv);
   premisasV=View.Map2(Aliado$1.premisas,prem,alv);
   return(b=ProviderBuilder.Make().WithHole({
    $:2,
    $0:"referidos",
    $1:View.Map(function($1)
    {
     return(function($2)
     {
      return function($3)
      {
       return $2(Global.String($3));
      };
     }(Global.id))($1.nReferidos);
    },alv)
   }).WithHole({
    $:2,
    $0:"refactivos",
    $1:View.Map(function($1)
    {
     return(function($2)
     {
      return function($3)
      {
       return $2(Global.String($3));
      };
     }(Global.id))($1.nRefActivos);
    },alv)
   }).WithHole({
    $:2,
    $0:"comreferido",
    $1:View.Map(function($1)
    {
     return(function($2)
     {
      return function($3)
      {
       return $2(Global.String($3));
      };
     }(Global.id))($1.nRefActivos);
    },alv)
   }).WithHole({
    $:2,
    $0:"descendientes",
    $1:View.Map(function($1)
    {
     return(function($2)
     {
      return function($3)
      {
       return $2(Global.String($3));
      };
     }(Global.id))($1.nDescendientes);
    },alv)
   }).WithHole({
    $:2,
    $0:"desactivos",
    $1:View.Map(function($1)
    {
     return(function($2)
     {
      return function($3)
      {
       return $2(Global.String($3));
      };
     }(Global.id))($1.nDescActivos);
    },alv)
   }).WithHole({
    $:2,
    $0:"comision",
    $1:View.Map(function($1)
    {
     return ModeloUI.money($1[0]+$1[1]);
    },comisionV)
   }).WithHole({
    $:2,
    $0:"comreferido",
    $1:View.Map(function($1)
    {
     return ModeloUI.money($1[0]);
    },comisionV)
   }).WithHole({
    $:2,
    $0:"comdescendiente",
    $1:View.Map(function($1)
    {
     return ModeloUI.money($1[1]);
    },comisionV)
   }).WithHole({
    $:2,
    $0:"porreferido",
    $1:View.Map(function($1)
    {
     return ModeloUI.money($1[0]);
    },premisasV)
   }).WithHole({
    $:2,
    $0:"pordescendiente",
    $1:View.Map(function($1)
    {
     return ModeloUI.money($1[1]);
    },premisasV)
   }),(p=Handler.CompleteHoles(b.k,b.h,[]),(i=new TemplateInstance.New(p[1],testing_Templates.calculo(p[0])),(b.i=i,i)))).get_Doc();
  });
 };
 Fila.New=function(nombre,status,influyente,tipo,referido,nivel,referidos,descendientes,comision,diaPago,desde,Id)
 {
  return{
   nombre:nombre,
   status:status,
   influyente:influyente,
   tipo:tipo,
   referido:referido,
   nivel:nivel,
   referidos:referidos,
   descendientes:descendientes,
   comision:comision,
   diaPago:diaPago,
   desde:desde,
   Id:Id
  };
 };
 ReporteConsolidado.consolidado$1631$45=function(toggle,ordenV)
 {
  return function()
  {
   toggle(ordenV.Get().Id);
  };
 };
 ReporteConsolidado.consolidado$1630$45=function(toggle,ordenV)
 {
  return function()
  {
   toggle(ordenV.Get().desde);
  };
 };
 ReporteConsolidado.consolidado$1629$45=function(toggle,ordenV)
 {
  return function()
  {
   toggle(ordenV.Get().diaPago);
  };
 };
 ReporteConsolidado.consolidado$1628$45=function(toggle,ordenV)
 {
  return function()
  {
   toggle(ordenV.Get().comision);
  };
 };
 ReporteConsolidado.consolidado$1627$45=function(toggle,ordenV)
 {
  return function()
  {
   toggle(ordenV.Get().descendientes);
  };
 };
 ReporteConsolidado.consolidado$1626$45=function(toggle,ordenV)
 {
  return function()
  {
   toggle(ordenV.Get().referidos);
  };
 };
 ReporteConsolidado.consolidado$1625$45=function(toggle,ordenV)
 {
  return function()
  {
   toggle(ordenV.Get().nivel);
  };
 };
 ReporteConsolidado.consolidado$1624$45=function(toggle,ordenV)
 {
  return function()
  {
   toggle(ordenV.Get().referido);
  };
 };
 ReporteConsolidado.consolidado$1623$45=function(toggle,ordenV)
 {
  return function()
  {
   toggle(ordenV.Get().tipo);
  };
 };
 ReporteConsolidado.consolidado$1622$45=function(toggle,ordenV)
 {
  return function()
  {
   toggle(ordenV.Get().influyente);
  };
 };
 ReporteConsolidado.consolidado$1621$45=function(toggle,ordenV)
 {
  return function()
  {
   toggle(ordenV.Get().status);
  };
 };
 ReporteConsolidado.consolidado$1620$45=function(toggle,ordenV)
 {
  return function()
  {
   toggle(ordenV.Get().nombre);
  };
 };
 ReporteConsolidado.consolidado$1616$45=function(aliadosV)
 {
  return function()
  {
   aliadosV.Set(ModeloUI.modeloV().Get().aliados);
  };
 };
 ReporteConsolidado.consolidado$1615$45=function(salvar)
 {
  return function()
  {
   salvar();
  };
 };
 ReporteConsolidado.consolidado=function()
 {
  var aliadosV,ordenV,filtroV,referidores,b,T,t,t$1,t$2,t$3,t$4,t$5,t$6,t$7,t$8,t$9,t$10,t$11,t$12,t$13,p,i;
  function referidos(al)
  {
   return al.nReferidos===0?"-":(((Runtime.Curried3(function($1,$2,$3)
   {
    return $1(Global.String($2)+"/"+Global.String($3));
   }))(Global.id))(al.nRefActivos))(al.nReferidos);
  }
  function descendientes(al)
  {
   return al.nDescendientes===0?"-":(((Runtime.Curried3(function($1,$2,$3)
   {
    return $1(Global.String($2)+"/"+Global.String($3));
   }))(Global.id))(al.nDescActivos))(al.nDescendientes);
  }
  function comision(v)
  {
   return v===0?"-":ModeloUI.money(v);
  }
  function nombreReferidor(idO)
  {
   var o,o$1,id;
   o=(o$1=idO==null?null:(id=idO.$0,Seq.tryFind(function(al)
   {
    return Unchecked.Equals(al.id,id);
   },ModeloUI.modeloV().Get().aliados)),o$1==null?null:{
    $:1,
    $0:Aliado$1.nombre(o$1.$0.datosPersonales)
   });
   return o==null?"-":o.$0;
  }
  function aliado2Fila(al)
  {
   var o;
   return Fila.New(Aliado$1.nombre(al.datosPersonales),(function($1)
   {
    return function($2)
    {
     return $1(ProzperServer_GeneratedPrintf.p($2));
    };
   }(Global.id))(al.status),(o=al.influyente,o==null?"":o.$0),(function($1)
   {
    return function($2)
    {
     return $1(ProzperServer_GeneratedPrintf.p$1($2));
    };
   }(Global.id))(al.tipo),nombreReferidor(al.idPadreO),(function($1)
   {
    return function($2)
    {
     return $1(Strings.PadLeft(Global.String($2),9));
    };
   }(Global.id))(al.nivel),(function($1)
   {
    return function($2)
    {
     return $1(Strings.PadLeft(Utils.toSafe($2),9));
    };
   }(Global.id))(referidos(al)),(function($1)
   {
    return function($2)
    {
     return $1(Strings.PadLeft(Utils.toSafe($2),9));
    };
   }(Global.id))(descendientes(al)),(function($1)
   {
    return function($2)
    {
     return $1(Strings.PadLeft(Utils.toSafe($2),9));
    };
   }(Global.id))(comision(al.comision)),Library["String.Right"]((function($1)
   {
    return function($2)
    {
     return $1(testing_GeneratedPrintf.p$4($2));
    };
   }(Global.id))(al.diaPago),2),Date.toYYYYMMDD("-",al.fechaRegistro),(function($1)
   {
    return function($2)
    {
     return $1(Utils.toSafe($2));
    };
   }(Global.id))(al.id.get_Id()));
  }
  function campos(orden)
  {
   return[orden.nombre,orden.status,orden.influyente,orden.tipo,orden.referido,orden.nivel,orden.referidos,orden.descendientes,orden.comision,orden.diaPago,orden.desde,orden.Id];
  }
  function newOrden(n,a$1,a$2)
  {
   return function(t$14)
   {
    var no;
    no=t$14[0];
    return[no===n?1:no<n?no+1:no,n===no&&n===1?!t$14[1]:t$14[1],t$14[2]];
   };
  }
  function toggle(v)
  {
   ordenV.Set(Fila.New((function($1)
   {
    return newOrden($1[0],$1[1],$1[2]);
   }(v))(ordenV.Get().nombre),(function($1)
   {
    return newOrden($1[0],$1[1],$1[2]);
   }(v))(ordenV.Get().status),(function($1)
   {
    return newOrden($1[0],$1[1],$1[2]);
   }(v))(ordenV.Get().influyente),(function($1)
   {
    return newOrden($1[0],$1[1],$1[2]);
   }(v))(ordenV.Get().tipo),(function($1)
   {
    return newOrden($1[0],$1[1],$1[2]);
   }(v))(ordenV.Get().referido),(function($1)
   {
    return newOrden($1[0],$1[1],$1[2]);
   }(v))(ordenV.Get().nivel),(function($1)
   {
    return newOrden($1[0],$1[1],$1[2]);
   }(v))(ordenV.Get().referidos),(function($1)
   {
    return newOrden($1[0],$1[1],$1[2]);
   }(v))(ordenV.Get().descendientes),(function($1)
   {
    return newOrden($1[0],$1[1],$1[2]);
   }(v))(ordenV.Get().comision),(function($1)
   {
    return newOrden($1[0],$1[1],$1[2]);
   }(v))(ordenV.Get().diaPago),(function($1)
   {
    return newOrden($1[0],$1[1],$1[2]);
   }(v))(ordenV.Get().desde),(function($1)
   {
    return newOrden($1[0],$1[1],$1[2]);
   }(v))(ordenV.Get().Id)));
  }
  function setAliado(id,f)
  {
   return aliadosV.Set(Arrays.map(function(al)
   {
    return Unchecked.Equals(al.id,id)?f(al):al;
   },aliadosV.Get()));
  }
  function setStatus(id,v)
  {
   return setAliado(id,function(al)
   {
    return Aliado$2.New(al.id,al.idPadreO,al.idForAuthorize,al.influyente,al.datosPersonales,al.contactos,al.identificacion,al.isInternal,StatusAliado.tryParse(v),al.diaPago,al.tipo,al.fechaRegistro,al.fechaStatus,al.nReferidos,al.nRefActivos,al.nDescendientes,al.nDescActivos,al.comision,al.nivel);
   });
  }
  function setInfluyente(id,v)
  {
   return setAliado(id,function(al)
   {
    return Aliado$2.New(al.id,al.idPadreO,al.idForAuthorize,Strings.Trim(v)===""?null:{
     $:1,
     $0:Strings.Trim(v)
    },al.datosPersonales,al.contactos,al.identificacion,al.isInternal,al.status,al.diaPago,al.tipo,al.fechaRegistro,al.fechaStatus,al.nReferidos,al.nRefActivos,al.nDescendientes,al.nDescActivos,al.comision,al.nivel);
   });
  }
  function setPadre(id,v)
  {
   var padre;
   padre=v===""?null:{
    $:1,
    $0:new TypesV0.IdAliado({
     $:0,
     $0:v
    })
   };
   return setAliado(id,function(al)
   {
    return Aliado$2.New(al.id,padre,al.idForAuthorize,al.influyente,al.datosPersonales,al.contactos,al.identificacion,al.isInternal,al.status,al.diaPago,al.tipo,al.fechaRegistro,al.fechaStatus,al.nReferidos,al.nRefActivos,al.nDescendientes,al.nDescActivos,al.comision,al.nivel);
   });
  }
  function obtenerAliado(alid)
  {
   return Seq.tryFind(function(al)
   {
    return Unchecked.Equals(al.id,alid);
   },ModeloUI.modeloV().Get().aliados);
  }
  function salvar()
  {
   var b$1;
   function g(a$1)
   {
    Global.alert(a$1);
   }
   AsyncResultM.iterA(function(x)
   {
    return g(ResultMessage.summarized(x));
   },Global.ignore,(b$1=AsyncResultMAutoOpen.asyncResultM(),b$1.Run(b$1.Delay(function()
   {
    return b$1.Combine$1(b$1.For(aliadosV.Get(),function(a$1)
    {
     var m,al2;
     m=obtenerAliado(a$1.id);
     return m!=null&&m.$==1?(al2=m.$0,!Unchecked.Equals(a$1.status,al2.status)||!Unchecked.Equals(a$1.idPadreO,al2.idPadreO)||!Unchecked.Equals(a$1.influyente,al2.influyente)?b$1.Bind$4(Rpc.ejecutarDataEventoNuevo({
      $:8,
      $0:[a$1.id,a$1.status,a$1.idPadreO,a$1.influyente]
     }),function(a$2)
     {
      return b$1.Bind$2(new ResultMessage({
       $:3,
       $0:(function($1)
       {
        return function($2)
        {
         return $1(testing_GeneratedPrintf.p$2($2));
        };
       }(Global.id))(a$2)
      }),function()
      {
       return b$1.Return();
      });
     }):b$1.Zero()):b$1.Zero();
    }),b$1.Delay(function()
    {
     Refresh.refrescarData(true);
     return b$1.Zero();
    }));
   }))));
  }
  function a(alid,fW)
  {
   var b$1,S,i$1,$1,s,$2,r,$3,p$1,i$2;
   return(b$1=(S=Doc.BindView(VariousUI.crearOptions,VariousUI.statuses().get_View()),(i$1=new FromView.New(View.Map(function($4)
   {
    return $4.influyente;
   },fW),($1=new TypesV0.IdAliado({
    $:0,
    $0:alid
   }),function($4)
   {
    return setInfluyente($1,$4);
   })),(s=new FromView.New(View.Map(function($4)
   {
    return $4.status;
   },fW),($2=new TypesV0.IdAliado({
    $:0,
    $0:alid
   }),function($4)
   {
    return setStatus($2,$4);
   })),(r=new FromView.New(View.Map(function($4)
   {
    return $4.referido;
   },fW),($3=new TypesV0.IdAliado({
    $:0,
    $0:alid
   }),function($4)
   {
    return setPadre($3,$4);
   })),ProviderBuilder.Make().WithHole({
    $:2,
    $0:"nombre",
    $1:View.Map(function($4)
    {
     return $4.nombre;
    },fW)
   }).WithHole({
    $:2,
    $0:"tipo",
    $1:View.Map(function($4)
    {
     return $4.tipo;
    },fW)
   }).WithHole({
    $:8,
    $0:"referido",
    $1:r
   })).WithHole({
    $:8,
    $0:"status",
    $1:s
   })).WithHole({
    $:8,
    $0:"influyente",
    $1:i$1
   })).WithHole({
    $:0,
    $0:"statuses",
    $1:S
   })).WithHole({
    $:2,
    $0:"nivel",
    $1:View.Map(function($4)
    {
     return $4.nivel;
    },fW)
   }).WithHole({
    $:2,
    $0:"referidos",
    $1:View.Map(function($4)
    {
     return $4.referidos;
    },fW)
   }).WithHole({
    $:2,
    $0:"descendientes",
    $1:View.Map(function($4)
    {
     return $4.descendientes;
    },fW)
   }).WithHole({
    $:2,
    $0:"comision",
    $1:View.Map(function($4)
    {
     return $4.comision;
    },fW)
   }).WithHole({
    $:2,
    $0:"diapago",
    $1:View.Map(function($4)
    {
     return $4.diaPago;
    },fW)
   }).WithHole({
    $:2,
    $0:"desde",
    $1:View.Map(function($4)
    {
     return $4.desde;
    },fW)
   }).WithHole({
    $:2,
    $0:"id",
    $1:View.Map(function($4)
    {
     return $4.Id;
    },fW)
   }),(p$1=Handler.CompleteHoles(b$1.k,b$1.h,[["influyente",0],["status",0],["referido",0]]),(i$2=new TemplateInstance.New(p$1[1],testing_Templates.filaconsolidado(p$1[0])),(b$1.i=i$2,i$2)))).get_Doc();
  }
  aliadosV=Var$1.Create$1([]);
  View.Sink(function(a$1)
  {
   aliadosV.Set(a$1);
  },View.Map(function($1)
  {
   return $1.aliados;
  },ModeloUI.modeloV().get_View()));
  ordenV=Var$1.Create$1(Fila.New([2,true,function(d)
  {
   return d.nombre.toUpperCase();
  }],[3,true,function(d)
  {
   return d.status.toUpperCase();
  }],[4,false,function(d)
  {
   return d.influyente.toUpperCase();
  }],[5,true,function(d)
  {
   return d.tipo.toUpperCase();
  }],[6,true,function(d)
  {
   return d.referido.toUpperCase();
  }],[7,true,function(d)
  {
   return d.nivel.toUpperCase();
  }],[8,true,function(d)
  {
   return d.referidos.toUpperCase();
  }],[1,false,function(d)
  {
   return d.descendientes.toUpperCase();
  }],[9,true,function(d)
  {
   return d.comision.toUpperCase();
  }],[10,true,function(d)
  {
   return d.diaPago.toUpperCase();
  }],[11,true,function(d)
  {
   return d.desde.toUpperCase();
  }],[12,true,function(d)
  {
   return d.Id.toUpperCase();
  }]));
  filtroV=Var$1.Create$1("");
  referidores=Doc.BindView(function(m)
  {
   return VariousUI.crearOptions2(Seq.map(function(al)
   {
    return[Aliado$1.nombre2(al.datosPersonales),al.id.get_Id()];
   },m.aliados));
  },ModeloUI.modeloV().get_View());
  return(b=(T=Doc.ConvertSeqBy(function(al)
  {
   return al.Id;
  },function($1)
  {
   return function($2)
   {
    return a($1,$2);
   };
  },View.Map3(function(als,orden,filtro)
  {
   var vt,filtros,comparar;
   function m(a$1,a$2,f)
   {
    return f;
   }
   function r(c,c$1,a$1,b$1)
   {
    return SortWith.op_AmpGreater(function($1,$2)
    {
     return(c($1))($2);
    },function($1,$2)
    {
     return(c$1($1))($2);
    },a$1,b$1);
   }
   function m$1(n,a$1,f)
   {
    return(a$1?Runtime.Curried3(SortWith.asc):Runtime.Curried3(SortWith.desc))(f);
   }
   vt=Strings.Trim(filtro).toUpperCase();
   filtros=Arrays.map(function($1)
   {
    return m($1[0],$1[1],$1[2]);
   },campos(orden));
   comparar=Arrays.reduce(function($1,$2)
   {
    return Runtime.Curried(r,2,[$1,$2]);
   },Arrays.map(function($1)
   {
    return m$1($1[0],$1[1],$1[2]);
   },Arrays.sortBy(function($1)
   {
    return Global.id($1[0],$1[1],$1[2]);
   },campos(orden))));
   return Seq.sortWith(function($1,$2)
   {
    return(comparar($1))($2);
   },Seq.filter(function(fila)
   {
    return vt===""||Seq.exists(function(f)
    {
     return f(fila).indexOf(vt)!=-1;
    },filtros);
   },Seq.map(aliado2Fila,als)));
  },View.Map(function($1)
  {
   return $1.aliados;
  },ModeloUI.modeloV().get_View()),ordenV.get_View(),filtroV.get_View())),(t=(t$1=(t$2=(t$3=(t$4=(t$5=(t$6=(t$7=(t$8=(t$9=(t$10=(t$11=(t$12=(t$13=ProviderBuilder.Make(),t$13.WithHole(Handler.EventQ2(t$13.k,"salvar",function()
  {
   return t$13.i;
  },function()
  {
   salvar();
  }))),t$12.WithHole(Handler.EventQ2(t$12.k,"cancelar",function()
  {
   return t$12.i;
  },function()
  {
   aliadosV.Set(ModeloUI.modeloV().Get().aliados);
  }))).WithHole({
   $:2,
   $0:"changed",
   $1:View.Map2(function($1,$2)
   {
    return Unchecked.Equals($1.aliados,$2)?"":"mui-btn--primary";
   },ModeloUI.modeloV().get_View(),aliadosV.get_View())
  }).WithHole({
   $:8,
   $0:"filtro",
   $1:filtroV
  }).WithHole({
   $:0,
   $0:"referidores",
   $1:referidores
  }),t$11.WithHole(Handler.EventQ2(t$11.k,"sort_nombre",function()
  {
   return t$11.i;
  },function()
  {
   toggle(ordenV.Get().nombre);
  }))),t$10.WithHole(Handler.EventQ2(t$10.k,"sort_status",function()
  {
   return t$10.i;
  },function()
  {
   toggle(ordenV.Get().status);
  }))),t$9.WithHole(Handler.EventQ2(t$9.k,"sort_influyente",function()
  {
   return t$9.i;
  },function()
  {
   toggle(ordenV.Get().influyente);
  }))),t$8.WithHole(Handler.EventQ2(t$8.k,"sort_tipo",function()
  {
   return t$8.i;
  },function()
  {
   toggle(ordenV.Get().tipo);
  }))),t$7.WithHole(Handler.EventQ2(t$7.k,"sort_referido",function()
  {
   return t$7.i;
  },function()
  {
   toggle(ordenV.Get().referido);
  }))),t$6.WithHole(Handler.EventQ2(t$6.k,"sort_nivel",function()
  {
   return t$6.i;
  },function()
  {
   toggle(ordenV.Get().nivel);
  }))),t$5.WithHole(Handler.EventQ2(t$5.k,"sort_referidos",function()
  {
   return t$5.i;
  },function()
  {
   toggle(ordenV.Get().referidos);
  }))),t$4.WithHole(Handler.EventQ2(t$4.k,"sort_descendientes",function()
  {
   return t$4.i;
  },function()
  {
   toggle(ordenV.Get().descendientes);
  }))),t$3.WithHole(Handler.EventQ2(t$3.k,"sort_comision",function()
  {
   return t$3.i;
  },function()
  {
   toggle(ordenV.Get().comision);
  }))),t$2.WithHole(Handler.EventQ2(t$2.k,"sort_diapago",function()
  {
   return t$2.i;
  },function()
  {
   toggle(ordenV.Get().diaPago);
  }))),t$1.WithHole(Handler.EventQ2(t$1.k,"sort_desde",function()
  {
   return t$1.i;
  },function()
  {
   toggle(ordenV.Get().desde);
  }))),t.WithHole(Handler.EventQ2(t.k,"sort_id",function()
  {
   return t.i;
  },function()
  {
   toggle(ordenV.Get().Id);
  }))).WithHole({
   $:0,
   $0:"tbody",
   $1:T
  })),(p=Handler.CompleteHoles(b.k,b.h,[["filtro",0]]),(i=new TemplateInstance.New(p[1],testing_Templates.consolidado(p[0])),(b.i=i,i)))).get_Doc();
 };
 TablaPagos.comisiones$1713$37=function(saveAs)
 {
  return function()
  {
   saveAs();
  };
 };
 TablaPagos.comisiones=function()
 {
  var pagosW,b,T,b$1,p,i,b$2,p$1,i$1,t,p$2,i$2;
  function def(d,v)
  {
   return v===""?d:v;
  }
  function saveAs()
  {
   var b$3;
   Concurrency.Start((b$3=null,Concurrency.Delay(function()
   {
    return Concurrency.Bind(View.GetAsync(pagosW),function(a$2)
    {
     Global.saveAs(new Global.Blob([Strings.concat("\r\n",Seq.map(function(alfpW)
     {
      var alW,ctaW;
      alW=alfpW[0];
      ctaW=alfpW[1];
      return(((((((Runtime.Curried(function($1,$2,$3,$4,$5,$6,$7)
      {
       return $1(Utils.toSafe($2)+","+Utils.toSafe($3)+","+Utils.toSafe($4)+","+Utils.toSafe($5)+","+Utils.prettyPrint($6)+","+Utils.prettyPrint($7));
      },7))(Global.id))("22"))(def("----------",ctaW.numero.get_Id())))(def("----------",ctaW.routing.get_Id())))((function($1)
      {
       return function($2)
       {
        return $1(Global.String($2)+".00");
       };
      }(Global.id))(alW.comision)))("----------"))(ctaW.titular===""?Aliado$1.nombre2(alW.datosPersonales):ctaW.titular);
     },a$2))],{
      type:"text/plain;charset=utf-8"
     }),"pagos.csv");
     return Concurrency.Zero();
    });
   })),null);
  }
  function a(al,a$2)
  {
   return al.id;
  }
  function a$1(alid,alfpW)
  {
   var alW,ctaW,b$3,p$3,i$3;
   alW=View.Map(function($1)
   {
    return $1[0];
   },alfpW);
   ctaW=View.Map(function($1)
   {
    return $1[1];
   },alfpW);
   return(b$3=ProviderBuilder.Make().WithHole({
    $:1,
    $0:"codigo",
    $1:"22"
   }).WithHole({
    $:2,
    $0:"cuenta",
    $1:View.Map(function($1)
    {
     return def("----------",$1.numero.get_Id());
    },ctaW)
   }).WithHole({
    $:2,
    $0:"aba",
    $1:View.Map(function($1)
    {
     return def("----------",$1.routing.get_Id());
    },ctaW)
   }).WithHole({
    $:2,
    $0:"monto",
    $1:View.Map(function($1)
    {
     return(function($2)
     {
      return function($3)
      {
       return $2(Global.String($3)+".00");
      };
     }(Global.id))($1.comision);
    },alW)
   }).WithHole({
    $:1,
    $0:"identificacion",
    $1:"---------"
   }).WithHole({
    $:2,
    $0:"nombre",
    $1:View.Map2(function($1,$2)
    {
     return def(Aliado$1.nombre2($1.datosPersonales),$2.titular);
    },alW,ctaW)
   }),(p$3=Handler.CompleteHoles(b$3.k,b$3.h,[]),(i$3=new TemplateInstance.New(p$3[1],testing_Templates.filapago(p$3[0])),(b$3.i=i$3,i$3)))).get_Doc();
  }
  pagosW=View.MapAsync(function(als)
  {
   var b$3,f,d;
   function g(v)
   {
    return Concurrency.Return(v);
   }
   return Concurrency.Bind((b$3=AsyncResultMAutoOpen.asyncResultM(),b$3.Run(b$3.Delay(function()
   {
    var alsf;
    alsf=Seq.filter(function(al)
    {
     return al.comision>0;
    },als);
    return b$3.Bind$4(Rpc.obtenerFormasDePagoPara(Arrays.ofSeq(alsf)),function(a$2)
    {
     function c(al,a$3)
     {
      return Unchecked.Equals(al.id,a$3[0].id)?{
       $:1,
       $0:[al,a$3[1]]
      }:null;
     }
     function m(id,fps)
     {
      var o,v;
      return[id,(o=Seq.tryPick(function(fp)
      {
       var m$1;
       m$1=fp.cuentaPago;
       return m$1.$==0?{
        $:1,
        $0:m$1.$0
       }:null;
      },fps),(v=TypesV0.ctaVacio(),o==null?v:o.$0))];
     }
     return b$3.Return(Seq.choose(function($1)
     {
      return c($1[0],$1[1]);
     },Seq.zip(alsf,Seq.map(function($1)
     {
      return m($1[0],$1[1]);
     },a$2))));
    });
   }))),(f=(d=[],function(r)
   {
    return ResultM.defaultValue(d,r);
   }),function(x)
   {
    return g(f(x));
   }));
  },View.Map(function($1)
  {
   return $1.aliados;
  },ModeloUI.modeloV().get_View()));
  return(b=(T=List.ofArray([(b$1=ProviderBuilder.Make().WithHole({
   $:2,
   $0:"codigo",
   $1:View.Map(function($1)
   {
    return(function($2)
    {
     return function($3)
     {
      return $2(Global.String($3));
     };
    }(Global.id))(Seq.length($1));
   },pagosW)
  }).WithHole({
   $:1,
   $0:"cuenta",
   $1:""
  }).WithHole({
   $:1,
   $0:"aba",
   $1:""
  }).WithHole({
   $:2,
   $0:"monto",
   $1:View.Map(function($1)
   {
    function p$3(pg,a$2)
    {
     return pg.comision;
    }
    return(function($2)
    {
     return function($3)
     {
      return $2(Global.String($3)+".00");
     };
    }(Global.id))(Seq.sumBy(function($2)
    {
     return p$3($2[0],$2[1]);
    },$1));
   },pagosW)
  }).WithHole({
   $:1,
   $0:"identificacion",
   $1:""
  }).WithHole({
   $:1,
   $0:"nombre",
   $1:""
  }),(p=Handler.CompleteHoles(b$1.k,b$1.h,[]),(i=new TemplateInstance.New(p[1],testing_Templates.filapago(p[0])),(b$1.i=i,i)))).get_Doc(),(b$2=ProviderBuilder.Make().WithHole({
   $:1,
   $0:"codigo",
   $1:""
  }).WithHole({
   $:1,
   $0:"cuenta",
   $1:""
  }).WithHole({
   $:1,
   $0:"aba",
   $1:""
  }).WithHole({
   $:1,
   $0:"monto",
   $1:"--------------------"
  }).WithHole({
   $:1,
   $0:"identificacion",
   $1:""
  }).WithHole({
   $:1,
   $0:"nombre",
   $1:""
  }),(p$1=Handler.CompleteHoles(b$2.k,b$2.h,[]),(i$1=new TemplateInstance.New(p$1[1],testing_Templates.filapago(p$1[0])),(b$2.i=i$1,i$1)))).get_Doc(),Doc.ConvertSeqBy(function($1)
  {
   return a($1[0],$1[1]);
  },function($1)
  {
   return function($2)
   {
    return a$1($1,$2);
   };
  },pagosW)]),(t=ProviderBuilder.Make(),t.WithHole(Handler.EventQ2(t.k,"exportar",function()
  {
   return t.i;
  },function()
  {
   saveAs();
  }))).WithHole({
   $:0,
   $0:"tbody",
   $1:Doc.Concat(T)
  })),(p$2=Handler.CompleteHoles(b.k,b.h,[]),(i$2=new TemplateInstance.New(p$2[1],testing_Templates.tablapagos(p$2[0])),(b.i=i$2,i$2)))).get_Doc();
 };
 ListaDocs.listaDocs$1795$32=function()
 {
  return function(e)
  {
   var o;
   o=View.TryGet(ModeloUI.aliadoW());
   o==null?void 0:ListaDocs.subir(e.Event,o.$0.id.get_Id());
  };
 };
 ListaDocs.listaDocs=function()
 {
  var b,t,T,p,i;
  function a(docName,docNameW)
  {
   var b$1,i$1,p$1,i$2;
   return(b$1=(i$1=View.Map(function($1)
   {
    return $1.id.get_Id();
   },ModeloUI.aliadoW()),ProviderBuilder.Make().WithHole({
    $:2,
    $0:"nombre",
    $1:docNameW
   }).WithHole({
    $:2,
    $0:"idaliado",
    $1:i$1
   })),(p$1=Handler.CompleteHoles(b$1.k,b$1.h,[]),(i$2=new TemplateInstance.New(p$1[1],testing_Templates.filadocs(p$1[0])),(b$1.i=i$2,i$2)))).get_Doc();
  }
  ListaDocs.refrescarListaDocs();
  return(b=(t=(T=Doc.ConvertSeqBy(Global.id,function($1)
  {
   return function($2)
   {
    return a($1,$2);
   };
  },ListaDocs.docsV().get_View()),ProviderBuilder.Make().WithHole({
   $:0,
   $0:"tbody",
   $1:T
  })),t.WithHole(Handler.EventQ2(t.k,"subir",function()
  {
   return t.i;
  },function(e)
  {
   var o;
   o=View.TryGet(ModeloUI.aliadoW());
   o==null?void 0:ListaDocs.subir(e.Event,o.$0.id.get_Id());
  }))),(p=Handler.CompleteHoles(b.k,b.h,[]),(i=new TemplateInstance.New(p[1],testing_Templates.subirdocumentos(p[0])),(b.i=i,i)))).get_Doc();
 };
 ListaDocs.subir=function(e,id)
 {
  var $1,file,filename,r,form,fd,a,i,$2,x;
  e.preventDefault();
  form=Global.jQuery("#SubirDocumentos");
  fd=new Global.FormData();
  a=form.serializeArray();
  for(i=0,$2=a.length-1;i<=$2;i++){
   x=Arrays.get(a,i);
   fd.append(x.name,x.value);
  }
  file=form.children("input[type=file]").first().get(0).files.item(0);
  filename=file.name;
  fd.append("file",file);
  $.ajax((r={},r.type="POST",r.url="/api/subir/"+id+"/"+filename,r.data=fd,r.contentType=false,r.processData=false,r.success=ListaDocs.uploaded(),r));
 };
 ListaDocs.uploaded=function()
 {
  SC$1.$cctor();
  return SC$1.uploaded;
 };
 ListaDocs.refrescarListaDocs=function()
 {
  AsyncResultM.iterpA(function(a)
  {
   ListaDocs.docsV().Set(a);
  },Rpc.obtenerListaDocs());
 };
 ListaDocs.docsV=function()
 {
  SC$1.$cctor();
  return SC$1.docsV;
 };
 Aliado.get_LoggedId=function()
 {
  var o,o$1;
  o=(o$1=Msal$1.userO().Get(),o$1==null?null:{
   $:1,
   $0:o$1.$0.idToken.oid
  });
  return o==null?"":o.$0;
 };
 ModeloUI.selAliadoIdDoc=function(fDoc)
 {
  var b;
  return Doc.BindView(Global.id,(b=View.get_Do(),View.Bind(function(a)
  {
   return View.Bind(function(a$1)
   {
    var aliadoO,aid;
    aliadoO=a$1==null?null:(aid=a$1.$0,Seq.tryFind(function(al)
    {
     return Unchecked.Equals(al.id,aid);
    },a.aliados));
    return View.Const(aliadoO!=null&&aliadoO.$==1?fDoc(View.Const(aliadoO.$0)):Doc.get_Empty());
   },ModeloUI.selAliadoIdOV().get_View());
  },ModeloUI.modeloV().get_View())));
 };
 ModeloUI.aliadoW=function()
 {
  SC$1.$cctor();
  return SC$1.aliadoW;
 };
 ModeloUI.aliadoIdDoc=function(fDoc)
 {
  var b;
  return Doc.BindView(Global.id,(b=View.get_Do(),View.Bind(function(a)
  {
   var aid,aliadoO;
   aid=a.idAliado;
   aliadoO=Seq.tryFind(function(al)
   {
    return Unchecked.Equals(al.id,aid);
   },a.aliados);
   return View.Const(aliadoO!=null&&aliadoO.$==1?fDoc(View.Const(aliadoO.$0)):Doc.get_Empty());
  },ModeloUI.modeloV().get_View())));
 };
 ModeloUI.contentVar=function()
 {
  SC$1.$cctor();
  return SC$1.contentVar;
 };
 ModeloUI.endPointV=function()
 {
  SC$1.$cctor();
  return SC$1.endPointV;
 };
 ModeloUI.money=function(m)
 {
  return"$"+ModeloUI.separate(Global.String(m),List.T.Empty);
 };
 ModeloUI.separate=function(s,parts)
 {
  var s$1;
  while(true)
   if(s==="")
    return(function(s$2)
    {
     return function(s$3)
     {
      return Strings.concat(s$2,s$3);
     };
    }(","))(parts);
   else
    {
     s$1=s;
     s=Library["String.Left"](s$1,-3);
     parts=new List.T({
      $:1,
      $0:Library["String.Right"](s$1,3),
      $1:parts
     });
    }
 };
 ModeloUI.refAliadoIdOV=function()
 {
  SC$1.$cctor();
  return SC$1.refAliadoIdOV;
 };
 ModeloUI.selAliadoIdOV=function()
 {
  SC$1.$cctor();
  return SC$1.selAliadoIdOV;
 };
 ModeloUI.invitacionesDisabledW=function()
 {
  SC$1.$cctor();
  return SC$1.invitacionesDisabledW;
 };
 ModeloUI.emailsInvitarW=function()
 {
  SC$1.$cctor();
  return SC$1.emailsInvitarW;
 };
 ModeloUI.invitacionesV=function()
 {
  SC$1.$cctor();
  return SC$1.invitacionesV;
 };
 ModeloUI.formasPagoAliadoV=function()
 {
  SC$1.$cctor();
  return SC$1.formasPagoAliadoV;
 };
 ModeloUI.modeloV=function()
 {
  SC$1.$cctor();
  return SC$1.modeloV;
 };
 MainProgram.mainProgramLoggedOff=function(refId)
 {
  ModeloUI.refAliadoIdOV().Set({
   $:1,
   $0:refId
  });
  MainProgram.mainProgram();
 };
 MainProgram.mainProgram$2062$36=function()
 {
  return function()
  {
   MainProgram.logout();
  };
 };
 MainProgram.mainProgram=function()
 {
  var titleV,mesActualW,anoActualW,nombreAliadoW,idAliadoW,statusAliadoW,comisionAliadoW,datosAliadoW,l,m,a,o,v,b,t,h,M,M$1,p;
  titleV=Var$1.Create$1(MainProgram.appName());
  mesActualW=View.Map(function($1)
  {
   return MainProgram.mesToString($1.periodoActual);
  },ModeloUI.modeloV().get_View());
  anoActualW=View.Map(function($1)
  {
   return Global.String($1.anoActual);
  },ModeloUI.modeloV().get_View());
  nombreAliadoW=View.Map(function($1)
  {
   return Aliado$1.nombre2($1.datosPersonales);
  },ModeloUI.aliadoW());
  idAliadoW=View.Map(function($1)
  {
   return $1.id.get_Id();
  },ModeloUI.aliadoW());
  statusAliadoW=View.Map(function($1)
  {
   return Global.String($1.status);
  },ModeloUI.aliadoW());
  comisionAliadoW=View.Map(function($1)
  {
   return Global.String($1.comision);
  },ModeloUI.aliadoW());
  datosAliadoW=View.Map(function($1)
  {
   return Global.String($1.nReferidos);
  },ModeloUI.aliadoW());
  AppFramework.addPlugIn(PlugIn.New(MainProgram.appName(),[AppFramework.newVar("title",titleV),AppFramework.newVar("contentVar",ModeloUI.contentVar()),AppFramework.newVar("invitaciones",ModeloUI.invitacionesV()),AppFramework.newVar("influencer",MainProgram.influencerV())],[AppFramework.newViw("mesActual",mesActualW),AppFramework.newViw("anoActual",anoActualW),AppFramework.newViw("aliado",nombreAliadoW),AppFramework.newViw("idAliado",idAliadoW),AppFramework.newViw("status",statusAliadoW),AppFramework.newViw("comision",comisionAliadoW),AppFramework.newViw("datos",datosAliadoW),AppFramework.newViw("emailsInvitar",ModeloUI.emailsInvitarW()),AppFramework.newViw("invitacionesDisabled",ModeloUI.invitacionesDisabledW()),AppFramework.newViw("VideoW",View.Map(function($1)
  {
   return $1.$==5?$1.$0:"";
  },ModeloUI.endPointV().get_View())),AppFramework.newViw("influencerClassW",MainProgram.influencerClassW())],[AppFramework.newDoc("Aliados",Lazy.Create(RenderAliados.aliados)),AppFramework.newDoc("Aliado",Lazy.Create(RenderAliado.aliado)),AppFramework.newDoc("Calculo",Lazy.Create(RenderAliado.calculo)),AppFramework.newDoc("FormaRegistro",Lazy.Create(FormaRegistro.formaDoc)),AppFramework.newDoc("FormaDatos",Lazy.Create(FormaDatos.formaDoc)),AppFramework.newDoc("FormaContactos",Lazy.Create(FormaContactos.formaDoc)),AppFramework.newDoc("FormaFormasPago",Lazy.Create(FormaFormasPago.formaDoc)),AppFramework.newDoc("contentDoc",Lazy.Create(MainProgram.getContentDoc)),AppFramework.newDoc("ReporteConsolidado",Lazy.Create(ReporteConsolidado.consolidado)),AppFramework.newDoc("TablaPagos",Lazy.Create(TablaPagos.comisiones)),AppFramework.newDoc("ListaDocs",Lazy.Create(ListaDocs.listaDocs)),AppFramework.newDoc("FormaAutorizacion",Lazy.Create(FormaAutorizacion.formaAutorizacion))],[AppFramework.newAct("Logout",function()
  {
   MainProgram.logout();
  }),AppFramework.newAct("LogIn",function()
  {
   MainProgram.login();
  }),AppFramework.newAct("enviarInvitaciones",function()
  {
   MainProgram.enviarCorreosInvitacion();
  }),AppFramework.newAct("gotoInfluencer",function()
  {
   MainProgram.gotoInfluencer();
  })],[]));
  LayoutEngineModule.addLayout((l=(m=self.document.getElementById("GlobalLayout"),Unchecked.Equals(m,null)?"\r\n                        menuEditor layout\r\n                        |          main\r\n        \r\n                        main div \"\"\r\n                        :                 template  header     \"id=header\"           brand  brandV   logout \"@{Prozper.Logout}\" afiliado \"@{Prozper.aliado}\"\r\n                        :                 Doc       Prozper.contentDoc\r\n                        :                 template  sidedrawer \"id=sidedrawer\"       brand  brandV   idaliado \"@{Prozper.idAliado}\" \r\n                        :                 template  footer     \"id=footer\"           brand  brandV   madeby \"CIPHER Bsc\" madebylink \"www.cipherbsc.com\"\r\n         \r\n                        mainContent          template  content    \"id=content-wrapper\"  content aliados                  fecha \"@{Prozper.mesActual} @{Prozper.anoActual}\" idaliado \"@{Prozper.aliado}\"\r\n                        cntFormaRegistro     template  content    \"id=content-wrapper\"  content Prozper.FormaRegistro    titulo \"Referido por: @{Prozper.aliado}\"  \r\n                        cntFormaDatos        template  content    \"id=content-wrapper\"  content Prozper.FormaDatos       titulo \" \"\r\n                        cntFormaContactos    template  content    \"id=content-wrapper\"  content Prozper.FormaContactos   titulo \" \" \r\n                        cntFormaFormasPago   template  content    \"id=content-wrapper\"  content Prozper.FormaFormasPago  titulo \" \" \r\n                        cntFormaCuentas      template  content    \"id=content-wrapper\"  content ProzperLyt.FormaCuentas  titulo \" \"  \r\n                        cntFormaDocumentos   template  content    \"id=content-wrapper\"  content Prozper.FormaDocumentos  titulo \" \"  \r\n                        cntFormaNoUser       template  content    \"id=content-wrapper\"  content botonLogin               titulo \" \"  \r\n                        cntFormaInvitaciones template  content    \"id=content-wrapper\"  content invitaciones             titulo \" \"  \r\n        \r\n                        aliados          div       \"class=row\"\r\n                        :                div       \"class=mui-col-md-6\"\r\n                        ::               div       \"class=mui-panel mui--z5 scrollbar;max-height:550px;overflow:auto\" Prozper.Aliados\r\n                        :                div       \"class=mui-col-md-6\"\r\n                        ::               div       \"class=mui-panel mui--z5 scrollbar;max-height:550px;overflow:auto\" Aliado Comisiones\r\n                        brandV           Var       \"Prozper\"\r\n        \r\n                        botonLogin       div       \"class=row\"\r\n                        :                div       \"class=mui-col-md-6\"\r\n                        ::               div       \"class=mui-panel mui--z5 scrollbar;max-height:550px;overflow:auto\" \r\n                        :::              button    Prozper.LogIn \"class=mui-btn mui-btn--primary\" \"Ingresar al Sistema\"\r\n        \r\n                        invitaciones     div       \"class=row\"\r\n                        :                div       \"class=mui-col-md-6 mui-col-md-offset-1\"\r\n                        ::               div       \"class=mui-panel mui--z5 scrollbar; max-height:550px ; overflow:auto\" \r\n                        :::              h1        \"\" \"Enviar Invitaciones\"\r\n                        :::              textarea  Prozper.invitaciones  \"width:100% ; height:30rem; placeholder=Copie aqui las direcciones de correo electronico\" \r\n                        :                div       \"white-space: pre-wrap\" \"@{Prozper.emailsInvitar}\"\r\n                        :                button    Prozper.enviarInvitaciones \"class=mui-btn mui-btn--raised mui-btn--primary;@{Prozper.invitacionesDisabled}\" \"Enviar\"\r\n        \r\n                        Aliado           div       \"class=mui-col-md-8\"\r\n                        :                Doc Prozper.Aliado\r\n        \r\n                        Comisiones       template    tablacomisiones \"class=mui-col-md-3\"  tbody filasComisiones\r\n                        filasComisiones  concat      \"\"\r\n                        :                template    filacomision    \"\"  periodo \"Ene 2018\" comision \"$1,000\"\r\n                        :                template    filacomision    \"\"  periodo \"Feb 2018\" comision \"$1,000\"\r\n                        :                template    filacomision    \"\"  periodo \"Mar 2018\" comision \"$1,000\"\r\n                        :                template    filacomision    \"\"  periodo \"Abr 2018\" comision \"$1,000\"\r\n                        :                template    filacomision    \"\"  periodo \"May 2018\" comision \"$1,000\"\r\n                        :                template    filacomision    \"\"  periodo \"Jun 2018\" comision \"$1,000\"\r\n                        :                template    filacomision    \"\"  periodo \"Jul 2018\" comision \"$1,000\"\r\n                        :                template    filacomision    \"\"  periodo \"Ago 2018\" comision \"$1,000\"\r\n                        :                template    filacomision    \"\"  periodo \"Sep 2018\" comision \"$1,000\"\r\n                        :                template    filacomision    \"\"  periodo \"Oct 2018\" comision \"$1,000\"\r\n                        :                template    filacomision    \"\"  periodo \"Nov 2018\" comision \"$1,000\"\r\n                        :                template    filacomision    \"\"  periodo \"Dec 2018\" comision \"$1,000\"\r\n                \r\n                        menuEditorx      horizontal  65          menuLogo                  editorMessages\r\n                        double           horizontal  0-50-100    AppFramework.AppFwkClient menuEditor\r\n                        menuLogo         vertical    350         logo                      menu\r\n                        logo             span       \"margin:0;   color:gray; font-size: 55px; font-weight:530\" \"StackOverflow\"\r\n                        editorMessages   horizontal  10-83-100   editorButtons             messages\r\n                        messages         vertical    0-50-100    messagesLeft              messagesRight\r\n                        editorButtons    vertical    150 buttons snippetsSnippet \r\n                        snippetsSnippet  vertical    0-20-100    snippets                  editorProperties\r\n                        snippets         horizontal  20          \"@{FSharpStation.CurrentPath}\" tblDimensions2\r\n                        editorProperties vertical    0-100-100   snippet                   properties\r\n                        properties       div        \"\"           FSharpStation.Properties\r\n                        snippet          horizontal  35          Name                      FSharpStation.editor\r\n                        menu             span       \"display: grid; grid-template-columns: 30% 20% 20% 10%; grid-gap: 25px; margin:5px; grid-template-rows:50px\" inpServer btnLoad btnSaveAs\r\n                         \r\n                        severalTabs      wcomp-tabstrip  \"\" \r\n                        :                div \"tabname=Dimensions\" \r\n                        ::               div \"\" btnAddDimension RuleEditor.Dimensions\r\n                        :                div \"tabname=Cubes\"\r\n                        :                div \"tabname=Global Definitions\" RuleEditor.globalDefs\r\n                \r\n                        btnSaveAs        button RuleEditor.SaveAs         \"class=btn @{RuleEditor.SaveNeeded}\" \"Save as...    \"\r\n                        btnAddDimension  button RuleEditor.AddDimension      \"\"                  \"new dim...\"\r\n                        btnDeleteSnippet button FSharpStation.RemoveSnippet  \"\"                  \"Delete Snippet\"\r\n                        btnIndentIn      button FSharpStation.IndentIn       \"\"                  \"Indent In  >> \"\r\n                        btnIndentOut     button FSharpStation.IndentOut      \"\"                  \"Indent Out << \"\r\n                        btnRunFS         button FSharpStation.RunFS          \"\"                  \"Run F#        \"\r\n                        btnAbortFsi      button FSharpStation.AbortFsi       \"\"                  \"Abort Fsi     \"\r\n                \r\n                        messagesLeft     wcomp-tabstrip                      \"\"                  Output FsCode\r\n                        messagesRight    wcomp-tabstrip                      \"\"                  Parser\r\n                \r\n                        buttons          div \"overflow: hidden; display: grid; grid-template-columns: 100%; grid-template-rows: repeat(15, calc(100% / 15)); bxackground-color: #eee; box-sizing: border-box; padding : 5px; grid-gap: 5px; margin-right: 21px\"\r\n                        :                button RuleEditor.AddCalculation    \"\"                 \"Add Calculation\"\r\n                        :                button RuleEditor.AddTotal          \"\"                 \"Add Total\"\r\n                        :                Doc       none x\r\n                        :                button RuleEditor.IndentIn          \"\"                  \"Indent In  >> \"\r\n                        :                button RuleEditor.IndentOut         \"\"                  \"Indent Out << \"\r\n                \r\n                        Output           textarea  RuleEditor.Output         \"tabname=Output ; placeholder=Output messages ; spellcheck=false\" \r\n                        FsCode           textarea  RuleEditor.CodeFS         \"tabname=F# Code; placeholder=F# Code         ; spellcheck=false\" \r\n                        Parser           textarea  RuleEditor.Parser         \"tabname=Parser ; placeholder=Parser messages; dblclick=@{FSharpStation.JumpTo} ; spellcheck=false\" \r\n                        Name             Doc       InputLabel                \"\"     \"Name:\"        FSharpStation.SnippetName\r\n                        inpServer        Doc       InputLabel                \"\"     \"Server:\"      RuleEditor.Server\r\n                        btnLoad          Doc       InputFile                 \"\"     \"Load File...\" RuleEditor.LoadFile  FileName\r\n                        btnImport        Doc       InputFile                 \"\"     \"Import...\"    FSharpStation.Import    \"\"\r\n                        FileName         div                                 \"class=form-control\"  RuleEditor.fileName\r\n        \r\n                   ":m.textContent),LayoutEngineModule.newLyt(MainProgram.layoutName(),l)));
  a=(o=null,(v=MainProgram.layoutName(),o==null?v:o.$0));
  AppFramework.mainDocV().Set(a);
  Doc.BindView(function(al)
  {
   var b$1,p$1,i;
   return Unchecked.Equals(al.id,Aliado$1.empty().id)?(b$1=ProviderBuilder.Make(),(p$1=Handler.CompleteHoles(b$1.k,b$1.h,[]),(i=new TemplateInstance.New(p$1[1],testing_Templates.opcionesadministrador(p$1[0])),(b$1.i=i,i)))).get_Doc():Doc.get_Empty();
  },ModeloUI.aliadoW());
  b=(t=(h=MainProgram.getDocView(MainProgram.layoutName(),"headerCenter"),(M=MainProgram.getMenuDoc(),(M$1=MainProgram.getContentDoc(),ProviderBuilder.Make().WithHole({
   $:0,
   $0:"maincontent",
   $1:M$1
  })).WithHole({
   $:0,
   $0:"menu",
   $1:M
  })).WithHole({
   $:0,
   $0:"headercenter",
   $1:h
  })),t.WithHole(Handler.EventQ2(t.k,"logout",function()
  {
   return t.i;
  },function()
  {
   MainProgram.logout();
  }))).WithHole({
   $:2,
   $0:"cortina",
   $1:View.Map(function($1)
   {
    return $1>0?"mui-overlay":"not-mui-overlay";
   },Rpc.llamadas().get_View())
  });
  p=Handler.CompleteHoles(b.k,b.h,[]);
  b.i=new TemplateInstance.New(p[1],Templates.RunFullDocTemplate(p[0]));
  View.Sink(function(t$1)
  {
   self.document.title=t$1;
  },titleV.get_View());
 };
 MainProgram.gotoInfluencer=function()
 {
  var b;
  Concurrency.Start((b=null,Concurrency.Delay(function()
  {
   return Concurrency.Bind((new AjaxRemotingProvider.New()).Async("ProzperServer:FsRoot.Prozper+Rpc.obtenerIdInfluyente:42009634",[MainProgram.influencerV().Get()]),function(a)
   {
    return Monads.OkM(a).$==0?(self.location.href="/Register/"+MainProgram.influencerV().Get(),Concurrency.Zero()):(self.alert("Código inválido:"+MainProgram.influencerV().Get()),Concurrency.Zero());
   });
  })),null);
 };
 MainProgram.influencerClassW=function()
 {
  SC$1.$cctor();
  return SC$1.influencerClassW;
 };
 MainProgram.influencerV=function()
 {
  SC$1.$cctor();
  return SC$1.influencerV;
 };
 MainProgram.getMenuDoc=function()
 {
  return Doc.EmbedView(View.Map2(function($1,$2)
  {
   var d;
   d=$1!=null&&$1.$==1?Unchecked.Equals($2.id,Aliado$1.empty().id)?"ProzperLyt.mnuAdministrador":"ProzperLyt.mnuUsuario":"ProzperLyt.mnuNoUsuario";
   return MainProgram.getDoc(MainProgram.appName(),d);
  },Msal$1.userO().get_View(),ModeloUI.aliadoW()));
 };
 MainProgram.getContentDoc=function()
 {
  return Doc.EmbedView(View.Map(function(d)
  {
   return MainProgram.getDoc(MainProgram.appName(),d);
  },ModeloUI.contentVar().get_View()));
 };
 MainProgram.getDocView=function(appName,docName)
 {
  return LayoutEngineModule.turnToView(function()
  {
   return MainProgram.getDoc(appName,docName);
  });
 };
 MainProgram.getDoc=function(appName,docName)
 {
  var o,o$1,t;
  o=(o$1=(t=((LayoutEngineModule.splitName())(appName))(docName),AppFramework.tryGetDoc(t[0],t[1])),o$1==null?null:{
   $:1,
   $0:LayoutEngineModule.getDocFinal(List.T.Empty,o$1.$0)
  });
  return o==null?LayoutEngineModule.errDoc((function($1)
  {
   return function($2)
   {
    return $1("Doc not found "+Utils.toSafe($2));
   };
  }(Global.id))(docName)):o.$0;
 };
 MainProgram.enviarCorreosInvitacion=function()
 {
  var b;
  AsyncResultM.iterA(function(v)
  {
   Library.print(v);
  },Global.ignore,(b=AsyncResultMAutoOpen.asyncResultM(),b.Run(b.Delay(function()
  {
   return AsyncResultMAutoOpen["AsyncResultMBuilder.Bind"](b,View.GetAsync(ModeloUI.emailsInvitarW()),function(a)
   {
    return AsyncResultMAutoOpen["AsyncResultMBuilder.Bind"](b,View.GetAsync(View.Map(function($1)
    {
     return $1.id.get_Id();
    },ModeloUI.aliadoW())),function(a$1)
    {
     var emails;
     emails=Arrays.filter(function(s)
     {
      return Strings.Trim(s)!=="";
     },Strings.SplitChars(a,["\n"],0));
     return b.Bind$4(Rpc.enviarCorreosInvitacion("Invitacion a Prozper",new TypesV0.IdAliado({
      $:0,
      $0:a$1
     }),emails),function()
     {
      var m;
      m=Arrays.length(emails);
      return m===0?(Global.alert("Ningun correo valido ha sido encontrado"),b.Zero()):m===1?(Global.alert("Invitacion ha sido enviada"),b.Zero()):(Global.alert("Invitaciones han sido enviadas"),b.Zero());
     });
    });
   });
  }))));
 };
 MainProgram.login=function()
 {
  Msal$1.logout();
 };
 MainProgram.logout=function()
 {
  Msal$1.logout();
 };
 MainProgram.mesToString=function(a)
 {
  return a===1?"Ene":a===2?"Feb":a===3?"Mar":a===4?"Abr":a===5?"May":a===6?"Jun":a===7?"Jul":a===8?"Ago":a===9?"Sep":a===10?"Oct":a===11?"Nov":a===12?"Dic":"---";
 };
 MainProgram.scrollToBottom=function(e,a)
 {
  var b;
  Concurrency.Start((b=null,Concurrency.Delay(function()
  {
   return Concurrency.Bind(Concurrency.Sleep(100),function()
   {
    e.scrollTop=e.scrollHeight;
    return Concurrency.Zero();
   });
  })),null);
 };
 MainProgram.appName=function()
 {
  SC$1.$cctor();
  return SC$1.appName;
 };
 MainProgram.layoutName=function()
 {
  SC$1.$cctor();
  return SC$1.layoutName;
 };
 SC$1.$cctor=function()
 {
  var f,m,$1,clientId,authority,options,c,c$1,b,b$1,b$2;
  SC$1.$cctor=Global.ignore;
  function g(s)
  {
   return Strings.concat("\n",s);
  }
  function f$1(s)
  {
   return String.splitByChar$1("\n",s);
  }
  function g$1(s)
  {
   var a,b$3;
   return Slice.array(s,{
    $:1,
    $0:0
   },{
    $:1,
    $0:(a=0,(b$3=Arrays.length(s)-2,Unchecked.Compare(a,b$3)===1?a:b$3))
   });
  }
  function g$2(s)
  {
   return Strings.concat("\n",s);
  }
  function tokenReceivedCallback(e,t,e$1,t$1,s)
  {
   Msal$1.callback(e,t,e$1,t$1,s);
  }
  function f$2(a)
  {
   return a==="ProzperLyt.mainContent"?EndPoint.DefaultEP:{
    $:3,
    $0:a
   };
  }
  function g$3(v)
  {
   if(!Unchecked.Equals(ModeloUI.endPointV().Get(),v))
    ModeloUI.endPointV().Set(v);
  }
  SC$1.unindentStr=function(x)
  {
   return g(String.unindent$1(x));
  };
  SC$1.skipLastLine=(f=function(x)
  {
   return g$1(f$1(x));
  },function(x)
  {
   return g$2(f(x));
  });
  SC$1.rexGuid="([0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12})";
  SC$1.rexEmail="(([^<>()\\[\\]\\\\.,;:\\s@\"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@[*[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+]*";
  SC$1.policies=List.ofArray([Policy.SignIn,Policy.SignUp,Policy.EditProfile,Policy.ResetPassword]);
  SC$1.rootdir="D:\\Abe\\CIPHERWorkspace\\FSharpStation\\projects\\ProzperClient\\website";
  SC$1.TemplatesFileName="D:\\Abe\\CIPHERWorkspace\\FSharpStation\\projects\\ProzperClient\\website"+"\\index.html";
  SC$1.LoginFileName="D:\\Abe\\CIPHERWorkspace\\FSharpStation\\projects\\ProzperClient\\website"+"\\Login.html";
  ((function($2)
  {
   return function($3)
   {
    return $2(Utils.toSafe($3));
   };
  }(function(s)
  {
   console.log(s);
  }))("D:\\Abe\\CIPHERWorkspace\\FSharpStation\\projects\\ProzperClient\\website\\index.html"));
  SC$1.storage=self.localStorage;
  SC$1.applicationId=Msal$1.storeValue("applicationId","70ad4f9b-9a2b-409e-9c1e-d04dbb2e7cf2");
  SC$1.tenantName=Msal$1.storeValue("tenantName","prozper");
  SC$1.ref=Msal$1.storeValue("ref","");
  SC$1.extraQueryParms=Msal$1.storeValue("extraQueryParms","mkt=es-us");
  SC$1.refreshBefore=Msal$1.storeValue("refreshBefore","0");
  SC$1.createOnStart=Msal$1.storeValue("createOnStart","1");
  SC$1.forceLogin=Msal$1.storeValue("forceLogin","1");
  SC$1.signInPolicy=Msal$1.storeValue("signInPolicy","B2C_1_SignIn");
  SC$1.signUpPolicy=Msal$1.storeValue("signUpPolicy","B2C_1_Registrarse");
  SC$1.editProfilePolicy=Msal$1.storeValue("editProfilePolicy","B2C_1_EditarPerfil");
  SC$1.resetPasswordPolicy=Msal$1.storeValue("resetPasswordPolicy","B2C_1_PasswordReset");
  SC$1.policyType=Msal$1.storeValue("policyType","SignIn");
  m=Msal$1.storage().getItem("preambleState");
  m==="InPreamble"||(m===""||m===null)?void Msal$1.storeValue("preambleState","GoToSignIn"):null;
  SC$1.authority=Msal$1.getAuthority(Msal$1.tenantName(),Msal$1.signInPolicy());
  SC$1.userO=Var$1.Create$1(null);
  SC$1.agent=(clientId=Msal$1.applicationId(),(authority=Msal$1.authority(),(options=UserAgentApplication.Options(null,null,null,null,null,null,null,null,null,{
   $:1,
   $0:false
  },null,{
   $:1,
   $0:false
  }),new self.Msal.UserAgentApplication(clientId,authority,function($2)
  {
   return tokenReceivedCallback($2[0],$2[1],$2[2],$2[3],$2[4]);
  },options))));
  SC$1.localStorage=self.localStorage;
  SC$1.modeloV=Var$1.Create$1(Modelo.New(new TypesV0.IdAliado({
   $:0,
   $0:":"
  }),[],(c=Date$1.now(),(new Date$1(c)).getFullYear()),(c$1=Date$1.now(),(new Date$1(c$1)).getMonth()+1),TypesV0.premisasCalculo(),-2));
  SC$1.formasPagoAliadoV=Var$1.Create$1([]);
  SC$1.invitacionesV=Var$1.Create$1("");
  SC$1.emailsInvitarW=View.Map(function($2)
  {
   var a;
   return Strings.concat("\n",Seq.sort(Seq.distinct((a=LibraryJS.REGEX$1(LibraryJS.rexEmail(),"gi",$2),a!=null&&a.$==1?a.$0:[]))));
  },ModeloUI.invitacionesV().get_View());
  SC$1.invitacionesDisabledW=View.Map(function($2)
  {
   return $2===""?"disabled":"";
  },ModeloUI.emailsInvitarW());
  SC$1.selAliadoIdOV=Var$1.Create$1(null);
  SC$1.refAliadoIdOV=Var$1.Create$1(null);
  SC$1.endPointV=Router.InstallHash(EndPoint.DefaultEP,testing_Router.r());
  View.Sink(function(a)
  {
   if(a.$==1)
    ;
   else
    if(a.$==2)
     ;
    else
     if(a.$==4)
      Global.showPDF(a.$0);
     else
      if(a.$==5)
       Global.playVideo();
      else
       Msal$1.checkUser();
  },ModeloUI.endPointV().get_View());
  SC$1.contentVar=new FromView.New(View.Map2(function(a,a$1)
  {
   var $2,$3;
   return a$1.$==0&&!Unchecked.Equals(Msal$1.userO().Get(),null)?"ProzperLyt.mainContent":a$1.$==3&&(!Unchecked.Equals(Msal$1.userO().Get(),null)&&($3=a$1.$0,true))?$3:a$1.$==2?"ProzperLyt.cntPreRegister":a$1.$==4?"ProzperLyt.cntPDF":a$1.$==5?"ProzperLyt.cntVideo":"ProzperLyt.cntFormaNoUser";
  },Msal$1.userO().get_View(),ModeloUI.endPointV().get_View()),function(x)
  {
   return g$3(f$2(x));
  });
  SC$1.aliadoW=(b=View.get_Do(),View.Bind(function(a)
  {
   var aid,aliadoO;
   aid=a.idAliado;
   aliadoO=Seq.tryFind(function(al)
   {
    return Unchecked.Equals(al.id,aid);
   },a.aliados);
   return View.Const(aliadoO!=null&&aliadoO.$==1?aliadoO.$0:Aliado$1.empty());
  },ModeloUI.modeloV().get_View()));
  SC$1.llamadas=Var$1.Create$1(0);
  Remoting.set_EndPoint(Rpc$1.serverEndPoint().f()+"rpc/rpc");
  SC$1.shouldRefresh=true;
  View.Sink(function()
  {
   Refresh.refrescarData(true);
  },Msal$1.userO().get_View());
  Concurrency.StartImmediateAsTask((b$1=null,Concurrency.Delay(function()
  {
   return Concurrency.While(function()
   {
    return true;
   },Concurrency.Delay(function()
   {
    return Concurrency.Bind(Concurrency.Sleep(5*60*1000),function()
    {
     return Concurrency.Return(null);
    });
   }));
  })),null);
  try
  {
   self.document.addEventListener("visibilityChange",function()
   {
    return null;
   },false);
  }
  catch(m$1)
  {
   null;
  }
  SC$1.paises=Var$1.Create$1([]);
  SC$1.estados=Var$1.Create$1([]);
  SC$1.tiposDir=Var$1.Create$1([]);
  SC$1.tiposTel=Var$1.Create$1([]);
  SC$1.generos=Var$1.Create$1([]);
  SC$1.tiposCta=Var$1.Create$1([]);
  SC$1.tiposTar=Var$1.Create$1([]);
  SC$1.statuses=Var$1.Create$1([]);
  SC$1.aniosV=Var$1.Create$1([]);
  SC$1.mesesV=Var$1.Create$1([]);
  Rpc.iterA((b$2=AsyncResultMAutoOpen.asyncResultM(),b$2.Run(b$2.Delay(function()
  {
   return b$2.Bind$4(Rpc.obtenerUnions(),function(a)
   {
    VariousUI.paises().Set(a[0]);
    VariousUI.estados().Set(a[1]);
    VariousUI.tiposDir().Set(a[2]);
    VariousUI.tiposTel().Set(a[3]);
    VariousUI.generos().Set(a[4]);
    VariousUI.tiposCta().Set(a[5]);
    VariousUI.tiposTar().Set(a[6]);
    VariousUI.statuses().Set(a[7]);
    VariousUI.aniosV().Set(a[9]);
    VariousUI.mesesV().Set(a[8]);
    return b$2.Zero();
   });
  }))));
  SC$1.ftel=[function(a)
  {
   return a.$==2?{
    $:1,
    $0:a.$0
   }:null;
  },function(a)
  {
   return{
    $:2,
    $0:a
   };
  }];
  SC$1.fcor=[function(a)
  {
   return a.$==1?{
    $:1,
    $0:a.$0
   }:null;
  },function(a)
  {
   return{
    $:1,
    $0:a
   };
  }];
  SC$1.fdir=[function(a)
  {
   return a.$==0?{
    $:1,
    $0:a.$0
   }:null;
  },function(a)
  {
   return{
    $:0,
    $0:a
   };
  }];
  SC$1.cuentaAutorizar=Var$1.Create$1(Doc.TextNode("No hay cuenta seleccionada"));
  SC$1.pid=new TypesV0.IdPayment({
   $:0,
   $0:""
  });
  SC$1.ftar=[function(cp)
  {
   var m$2;
   m$2=cp.cuentaPago;
   return m$2.$==1?{
    $:1,
    $0:[m$2.$0,FormaFormasPago.msg(cp),cp.authorizeIdR.$==0]
   }:null;
  },function(fp)
  {
   return function(v)
   {
    return FormaPago.New(fp.nombre,Library.Error(""),{
     $:1,
     $0:v
    });
   };
  }];
  SC$1.fcta=[function(cp)
  {
   var m$2;
   m$2=cp.cuentaPago;
   return m$2.$==0?{
    $:1,
    $0:[m$2.$0,FormaFormasPago.msg(cp),cp.authorizeIdR.$==0]
   }:null;
  },function(fp)
  {
   return function(v)
   {
    return FormaPago.New(fp.nombre,Library.Error(""),{
     $:0,
     $0:v
    });
   };
  }];
  SC$1.docsV=Var$1.Create$1([]);
  SC$1.uploaded=function(a,b$3)
  {
   ListaDocs.refrescarListaDocs();
   return Global.alert(b$3);
  };
  SC$1.layoutName="ProzperLyt";
  SC$1.appName="Prozper";
  SC$1.influencerV=Var$1.Create$1("");
  SC$1.influencerClassW=View.MapAsync(function(inf)
  {
   var b$3;
   b$3=null;
   return Concurrency.Delay(function()
   {
    return Concurrency.Bind((new AjaxRemotingProvider.New()).Async("ProzperServer:FsRoot.Prozper+Rpc.obtenerIdInfluyente:42009634",[inf]),function(a)
    {
     return Monads.OkM(a).$==0?Concurrency.Return("mui-btn--primary"):Concurrency.Return("");
    });
   });
  },MainProgram.influencerV().get_View());
 };
 testing_GeneratedPrintf.p=function($1)
 {
  return $1.$==3?"ResetPassword":$1.$==2?"EditProfile":$1.$==1?"SignUp":"SignIn";
 };
 testing_Templates.correo=function(h)
 {
  Templates.LoadLocalTemplates("index");
  return h?Templates.NamedTemplate("index",{
   $:1,
   $0:"correo"
  },h):void 0;
 };
 testing_Templates.telefono=function(h)
 {
  Templates.LoadLocalTemplates("index");
  return h?Templates.NamedTemplate("index",{
   $:1,
   $0:"telefono"
  },h):void 0;
 };
 testing_Templates.direccion=function(h)
 {
  Templates.LoadLocalTemplates("index");
  return h?Templates.NamedTemplate("index",{
   $:1,
   $0:"direccion"
  },h):void 0;
 };
 testing_Templates.cuentabancaria=function(h)
 {
  Templates.LoadLocalTemplates("index");
  return h?Templates.NamedTemplate("index",{
   $:1,
   $0:"cuentabancaria"
  },h):void 0;
 };
 testing_Templates.tarjetacredito=function(h)
 {
  Templates.LoadLocalTemplates("index");
  return h?Templates.NamedTemplate("index",{
   $:1,
   $0:"tarjetacredito"
  },h):void 0;
 };
 testing_Templates.datospersonales=function(h)
 {
  Templates.LoadLocalTemplates("index");
  return h?Templates.NamedTemplate("index",{
   $:1,
   $0:"datospersonales"
  },h):void 0;
 };
 testing_GeneratedPrintf.p$1=function($1)
 {
  return $1.$==2?"Empresa":$1.$==1?"Femenino":"Masculino";
 };
 testing_GeneratedPrintf.p$2=function($1)
 {
  return $1.$==2?"Mensaje "+Utils.prettyPrint($1.$0):$1.$==1?"NuevoRegistro "+Utils.prettyPrint($1.$0):"ROk";
 };
 testing_Templates.formaregistro=function(h)
 {
  Templates.LoadLocalTemplates("index");
  return h?Templates.NamedTemplate("index",{
   $:1,
   $0:"formaregistro"
  },h):void 0;
 };
 testing_Templates.formadatospersonales=function(h)
 {
  Templates.LoadLocalTemplates("index");
  return h?Templates.NamedTemplate("index",{
   $:1,
   $0:"formadatospersonales"
  },h):void 0;
 };
 testing_Templates.formagenerica=function(h)
 {
  Templates.LoadLocalTemplates("index");
  return h?Templates.NamedTemplate("index",{
   $:1,
   $0:"formagenerica"
  },h):void 0;
 };
 testing_Templates.formacontactos=function(h)
 {
  Templates.LoadLocalTemplates("index");
  return h?Templates.NamedTemplate("index",{
   $:1,
   $0:"formacontactos"
  },h):void 0;
 };
 testing_Templates.autorizacion=function(h)
 {
  Templates.LoadLocalTemplates("index");
  return h?Templates.NamedTemplate("index",{
   $:1,
   $0:"autorizacion"
  },h):void 0;
 };
 testing_Templates.formacuentas=function(h)
 {
  Templates.LoadLocalTemplates("index");
  return h?Templates.NamedTemplate("index",{
   $:1,
   $0:"formacuentas"
  },h):void 0;
 };
 testing_GeneratedPrintf.p$3=function($1)
 {
  return"IdPayment "+Utils.prettyPrint($1.$0);
 };
 testing_Templates.tablaaliados=function(h)
 {
  Templates.LoadLocalTemplates("index");
  return h?Templates.NamedTemplate("index",{
   $:1,
   $0:"tablaaliados"
  },h):void 0;
 };
 testing_Templates.filaaliado=function(h)
 {
  Templates.LoadLocalTemplates("index");
  return h?Templates.NamedTemplate("index",{
   $:1,
   $0:"filaaliado"
  },h):void 0;
 };
 testing_Templates.aliado=function(h)
 {
  Templates.LoadLocalTemplates("index");
  return h?Templates.NamedTemplate("index",{
   $:1,
   $0:"aliado"
  },h):void 0;
 };
 testing_Templates.calculo=function(h)
 {
  Templates.LoadLocalTemplates("index");
  return h?Templates.NamedTemplate("index",{
   $:1,
   $0:"calculo"
  },h):void 0;
 };
 testing_GeneratedPrintf.p$4=function($1)
 {
  return $1.$==5?"Dia25":$1.$==4?"Dia20":$1.$==3?"Dia15":$1.$==2?"Dia10":$1.$==1?"Dia05":"Dia01";
 };
 testing_Templates.consolidado=function(h)
 {
  Templates.LoadLocalTemplates("index");
  return h?Templates.NamedTemplate("index",{
   $:1,
   $0:"consolidado"
  },h):void 0;
 };
 testing_Templates.filaconsolidado=function(h)
 {
  Templates.LoadLocalTemplates("index");
  return h?Templates.NamedTemplate("index",{
   $:1,
   $0:"filaconsolidado"
  },h):void 0;
 };
 testing_Templates.tablapagos=function(h)
 {
  Templates.LoadLocalTemplates("index");
  return h?Templates.NamedTemplate("index",{
   $:1,
   $0:"tablapagos"
  },h):void 0;
 };
 testing_Templates.filapago=function(h)
 {
  Templates.LoadLocalTemplates("index");
  return h?Templates.NamedTemplate("index",{
   $:1,
   $0:"filapago"
  },h):void 0;
 };
 testing_Templates.subirdocumentos=function(h)
 {
  Templates.LoadLocalTemplates("index");
  return h?Templates.NamedTemplate("index",{
   $:1,
   $0:"subirdocumentos"
  },h):void 0;
 };
 testing_Templates.filadocs=function(h)
 {
  Templates.LoadLocalTemplates("index");
  return h?Templates.NamedTemplate("index",{
   $:1,
   $0:"filadocs"
  },h):void 0;
 };
 testing_Templates.opcionesadministrador=function(h)
 {
  Templates.LoadLocalTemplates("index");
  return h?Templates.NamedTemplate("index",{
   $:1,
   $0:"opcionesadministrador"
  },h):void 0;
 };
 testing_Router.r=function()
 {
  return RouterOperators.JSUnion(void 0,[[null,[[null,[]]],[]],[null,[[null,["NoUser"]]],[]],[null,[[null,["PreRegister"]]],[]],[null,[[null,["Content"]]],[RouterOperators.rString()]],[null,[[null,["Pdf"]]],[RouterOperators.rWildcard()]],[null,[[null,["Video"]]],[RouterOperators.rWildcard()]]]);
 };
 Runtime.OnLoad(function()
 {
  MainProgram.mainProgram();
 });
}());
