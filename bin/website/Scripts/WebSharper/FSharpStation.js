(function()
{
 "use strict";
 var Global,FSSGlobal,Useful,Async,KeyVal,String,Option,WebSharper,Obj,ExceptionThrown,ErrOptionIsNone,ErrSimple,Result,ropBuilder,Seq,ResultS,Wrap,Builder,Seq$1,List,ResultWrap,Mailbox,FoldNShare,Dict,ResetableMemoize,PreproDirective,FsStationShared,CodeSnippetId,CodeSnippet,FSMessage,FSSeverity,WSMessagingBroker,Address,BrokerRequest,MessageType,BrokerMessage,Replier,MessageGeneric,ClientTypeFSharp,ClientTypeFSStation,ClientTypeJScript,ErrBroker,WSMessagingClient,FsStationClientErr,FStationMessaging,FSAutoCompleteIntermediary,CommTypes,ResponseError,Location,CompletionResponse,OverloadDescription,OverloadParameter,Overload,Parameter,SignatureData,MethodResponse,SymbolUseRange,SymbolUseResponse,HelpTextResponse,CompilerLocationResponse,FSharpErrorInfo,ErrorResponse,Colorization,Declaration,DeclarationResponse,OpenNamespace,QualifySymbol,ResolveNamespaceResponse,UnionCaseResponse,ACMessage,FSAutoCompleteIntermediaryClient,FsEvaluator,Evaluator,FsTranslator,HtmlNode,Val,Var,ListModel,HelperType,valBuilder,HtmlNode$1,LoadFiles,Template,Button,Input,Hoverable,Panel,TextArea,CodeMirrorPos,CodeMirrorEditor,CodeMirror,Hint,HintResponse,HintOptions,LintResponse,SplitterBar,SectionType,Grid,TabStrip,MenuEntry,MenuNode,Menu,Action,GuiPart,HtmlNodeFable,LayoutDescriptionFable,GuiPartSourceId,Layout,RunCode,RunNode,FSharpStation,FsGlobal,Position,ErrCompiler,KeyMapAutoComplete,UI,Var$1,Property,PropValue,CodeSnippet$1,FableModule,Babel,Fable,SC$1,FSharpStation_GeneratedPrintf,FSharpStation_JsonEncoder,FSharpStation_JsonDecoder,GeneratedPrintf,Concurrency,Seq$2,Unchecked,Slice,Strings,IntelliFactory,Runtime,Utils,Enumerator,Arrays,console,List$1,Control,MailboxProcessor,Collections,Dictionary,CancellationTokenSource,System,Guid,Option$1,JSON,TimeoutException,ClientSideJson,Provider,Owin,WebSocket,Client,WithEncoding,Endpoint,location,Map,FSharpMap,Remoting,AjaxRemotingProvider,View,FromView,Doc,Operators,AttrModule,AttrProxy,Input$1,Mouse,FSharpSet,BalancedTree,MatchFailureException,Object,Fable$1,Babel$1,HashSet,JavaScript,JSModule,Lazy,$,Date,ListModel$1;
 Global=window;
 FSSGlobal=Global.FSSGlobal=Global.FSSGlobal||{};
 Useful=FSSGlobal.Useful=FSSGlobal.Useful||{};
 Async=Useful.Async=Useful.Async||{};
 KeyVal=Useful.KeyVal=Useful.KeyVal||{};
 String=Useful.String=Useful.String||{};
 Option=Useful.Option=Useful.Option||{};
 WebSharper=Global.WebSharper;
 Obj=WebSharper&&WebSharper.Obj;
 ExceptionThrown=Useful.ExceptionThrown=Useful.ExceptionThrown||{};
 ErrOptionIsNone=Useful.ErrOptionIsNone=Useful.ErrOptionIsNone||{};
 ErrSimple=Useful.ErrSimple=Useful.ErrSimple||{};
 Result=Useful.Result=Useful.Result||{};
 ropBuilder=Result.ropBuilder=Result.ropBuilder||{};
 Seq=Result.Seq=Result.Seq||{};
 ResultS=Useful.ResultS=Useful.ResultS||{};
 Wrap=Useful.Wrap=Useful.Wrap||{};
 Builder=Wrap.Builder=Wrap.Builder||{};
 Seq$1=Wrap.Seq=Wrap.Seq||{};
 List=Useful.List=Useful.List||{};
 ResultWrap=Useful.ResultWrap=Useful.ResultWrap||{};
 Mailbox=Useful.Mailbox=Useful.Mailbox||{};
 FoldNShare=Mailbox.FoldNShare=Mailbox.FoldNShare||{};
 Dict=Useful.Dict=Useful.Dict||{};
 ResetableMemoize=Useful.ResetableMemoize=Useful.ResetableMemoize||{};
 PreproDirective=Useful.PreproDirective=Useful.PreproDirective||{};
 FsStationShared=FSSGlobal.FsStationShared=FSSGlobal.FsStationShared||{};
 CodeSnippetId=FsStationShared.CodeSnippetId=FsStationShared.CodeSnippetId||{};
 CodeSnippet=FsStationShared.CodeSnippet=FsStationShared.CodeSnippet||{};
 FSMessage=FsStationShared.FSMessage=FsStationShared.FSMessage||{};
 FSSeverity=FsStationShared.FSSeverity=FsStationShared.FSSeverity||{};
 WSMessagingBroker=FSSGlobal.WSMessagingBroker=FSSGlobal.WSMessagingBroker||{};
 Address=WSMessagingBroker.Address=WSMessagingBroker.Address||{};
 BrokerRequest=WSMessagingBroker.BrokerRequest=WSMessagingBroker.BrokerRequest||{};
 MessageType=WSMessagingBroker.MessageType=WSMessagingBroker.MessageType||{};
 BrokerMessage=WSMessagingBroker.BrokerMessage=WSMessagingBroker.BrokerMessage||{};
 Replier=WSMessagingBroker.Replier=WSMessagingBroker.Replier||{};
 MessageGeneric=WSMessagingBroker.MessageGeneric=WSMessagingBroker.MessageGeneric||{};
 ClientTypeFSharp=WSMessagingBroker.ClientTypeFSharp=WSMessagingBroker.ClientTypeFSharp||{};
 ClientTypeFSStation=WSMessagingBroker.ClientTypeFSStation=WSMessagingBroker.ClientTypeFSStation||{};
 ClientTypeJScript=WSMessagingBroker.ClientTypeJScript=WSMessagingBroker.ClientTypeJScript||{};
 ErrBroker=WSMessagingBroker.ErrBroker=WSMessagingBroker.ErrBroker||{};
 WSMessagingClient=WSMessagingBroker.WSMessagingClient=WSMessagingBroker.WSMessagingClient||{};
 FsStationClientErr=WSMessagingBroker.FsStationClientErr=WSMessagingBroker.FsStationClientErr||{};
 FStationMessaging=WSMessagingBroker.FStationMessaging=WSMessagingBroker.FStationMessaging||{};
 FSAutoCompleteIntermediary=FSSGlobal.FSAutoCompleteIntermediary=FSSGlobal.FSAutoCompleteIntermediary||{};
 CommTypes=FSAutoCompleteIntermediary.CommTypes=FSAutoCompleteIntermediary.CommTypes||{};
 ResponseError=CommTypes.ResponseError=CommTypes.ResponseError||{};
 Location=CommTypes.Location=CommTypes.Location||{};
 CompletionResponse=CommTypes.CompletionResponse=CommTypes.CompletionResponse||{};
 OverloadDescription=CommTypes.OverloadDescription=CommTypes.OverloadDescription||{};
 OverloadParameter=CommTypes.OverloadParameter=CommTypes.OverloadParameter||{};
 Overload=CommTypes.Overload=CommTypes.Overload||{};
 Parameter=CommTypes.Parameter=CommTypes.Parameter||{};
 SignatureData=CommTypes.SignatureData=CommTypes.SignatureData||{};
 MethodResponse=CommTypes.MethodResponse=CommTypes.MethodResponse||{};
 SymbolUseRange=CommTypes.SymbolUseRange=CommTypes.SymbolUseRange||{};
 SymbolUseResponse=CommTypes.SymbolUseResponse=CommTypes.SymbolUseResponse||{};
 HelpTextResponse=CommTypes.HelpTextResponse=CommTypes.HelpTextResponse||{};
 CompilerLocationResponse=CommTypes.CompilerLocationResponse=CommTypes.CompilerLocationResponse||{};
 FSharpErrorInfo=CommTypes.FSharpErrorInfo=CommTypes.FSharpErrorInfo||{};
 ErrorResponse=CommTypes.ErrorResponse=CommTypes.ErrorResponse||{};
 Colorization=CommTypes.Colorization=CommTypes.Colorization||{};
 Declaration=CommTypes.Declaration=CommTypes.Declaration||{};
 DeclarationResponse=CommTypes.DeclarationResponse=CommTypes.DeclarationResponse||{};
 OpenNamespace=CommTypes.OpenNamespace=CommTypes.OpenNamespace||{};
 QualifySymbol=CommTypes.QualifySymbol=CommTypes.QualifySymbol||{};
 ResolveNamespaceResponse=CommTypes.ResolveNamespaceResponse=CommTypes.ResolveNamespaceResponse||{};
 UnionCaseResponse=CommTypes.UnionCaseResponse=CommTypes.UnionCaseResponse||{};
 ACMessage=CommTypes.ACMessage=CommTypes.ACMessage||{};
 FSAutoCompleteIntermediaryClient=FSAutoCompleteIntermediary.FSAutoCompleteIntermediaryClient=FSAutoCompleteIntermediary.FSAutoCompleteIntermediaryClient||{};
 FsEvaluator=FSSGlobal.FsEvaluator=FSSGlobal.FsEvaluator||{};
 Evaluator=FsEvaluator.Evaluator=FsEvaluator.Evaluator||{};
 FsTranslator=FSSGlobal.FsTranslator=FSSGlobal.FsTranslator||{};
 HtmlNode=FSSGlobal.HtmlNode=FSSGlobal.HtmlNode||{};
 Val=HtmlNode.Val=HtmlNode.Val||{};
 Var=HtmlNode.Var=HtmlNode.Var||{};
 ListModel=HtmlNode.ListModel=HtmlNode.ListModel||{};
 HelperType=Val.HelperType=Val.HelperType||{};
 valBuilder=Val.valBuilder=Val.valBuilder||{};
 HtmlNode$1=HtmlNode.HtmlNode=HtmlNode.HtmlNode||{};
 LoadFiles=HtmlNode.LoadFiles=HtmlNode.LoadFiles||{};
 Template=FSSGlobal.Template=FSSGlobal.Template||{};
 Button=Template.Button=Template.Button||{};
 Input=Template.Input=Template.Input||{};
 Hoverable=Template.Hoverable=Template.Hoverable||{};
 Panel=Template.Panel=Template.Panel||{};
 TextArea=Template.TextArea=Template.TextArea||{};
 CodeMirrorPos=Template.CodeMirrorPos=Template.CodeMirrorPos||{};
 CodeMirrorEditor=Template.CodeMirrorEditor=Template.CodeMirrorEditor||{};
 CodeMirror=Template.CodeMirror=Template.CodeMirror||{};
 Hint=Template.Hint=Template.Hint||{};
 HintResponse=Template.HintResponse=Template.HintResponse||{};
 HintOptions=Template.HintOptions=Template.HintOptions||{};
 LintResponse=Template.LintResponse=Template.LintResponse||{};
 SplitterBar=Template.SplitterBar=Template.SplitterBar||{};
 SectionType=Template.SectionType=Template.SectionType||{};
 Grid=Template.Grid=Template.Grid||{};
 TabStrip=Template.TabStrip=Template.TabStrip||{};
 MenuEntry=Template.MenuEntry=Template.MenuEntry||{};
 MenuNode=Template.MenuNode=Template.MenuNode||{};
 Menu=Template.Menu=Template.Menu||{};
 Action=Template.Action=Template.Action||{};
 GuiPart=Template.GuiPart=Template.GuiPart||{};
 HtmlNodeFable=Template.HtmlNodeFable=Template.HtmlNodeFable||{};
 LayoutDescriptionFable=Template.LayoutDescriptionFable=Template.LayoutDescriptionFable||{};
 GuiPartSourceId=Template.GuiPartSourceId=Template.GuiPartSourceId||{};
 Layout=Template.Layout=Template.Layout||{};
 RunCode=FSSGlobal.RunCode=FSSGlobal.RunCode||{};
 RunNode=RunCode.RunNode=RunCode.RunNode||{};
 FSharpStation=FSSGlobal.FSharpStation=FSSGlobal.FSharpStation||{};
 FsGlobal=FSharpStation.FsGlobal=FSharpStation.FsGlobal||{};
 Position=FsGlobal.Position=FsGlobal.Position||{};
 ErrCompiler=FsGlobal.ErrCompiler=FsGlobal.ErrCompiler||{};
 KeyMapAutoComplete=FsGlobal.KeyMapAutoComplete=FsGlobal.KeyMapAutoComplete||{};
 UI=WebSharper&&WebSharper.UI;
 Var$1=UI&&UI.Var;
 Property=FsGlobal.Property=FsGlobal.Property||{};
 PropValue=FsGlobal.PropValue=FsGlobal.PropValue||{};
 CodeSnippet$1=FsGlobal.CodeSnippet=FsGlobal.CodeSnippet||{};
 FableModule=FSharpStation.FableModule=FSharpStation.FableModule||{};
 Babel=FableModule.Babel=FableModule.Babel||{};
 Fable=FableModule.Fable=FableModule.Fable||{};
 SC$1=Global.StartupCode$FSharpStation$FSharpStation=Global.StartupCode$FSharpStation$FSharpStation||{};
 FSharpStation_GeneratedPrintf=Global.FSharpStation_GeneratedPrintf=Global.FSharpStation_GeneratedPrintf||{};
 FSharpStation_JsonEncoder=Global.FSharpStation_JsonEncoder=Global.FSharpStation_JsonEncoder||{};
 FSharpStation_JsonDecoder=Global.FSharpStation_JsonDecoder=Global.FSharpStation_JsonDecoder||{};
 GeneratedPrintf=Global.GeneratedPrintf=Global.GeneratedPrintf||{};
 Concurrency=WebSharper&&WebSharper.Concurrency;
 Seq$2=WebSharper&&WebSharper.Seq;
 Unchecked=WebSharper&&WebSharper.Unchecked;
 Slice=WebSharper&&WebSharper.Slice;
 Strings=WebSharper&&WebSharper.Strings;
 IntelliFactory=Global.IntelliFactory;
 Runtime=IntelliFactory&&IntelliFactory.Runtime;
 Utils=WebSharper&&WebSharper.Utils;
 Enumerator=WebSharper&&WebSharper.Enumerator;
 Arrays=WebSharper&&WebSharper.Arrays;
 console=Global.console;
 List$1=WebSharper&&WebSharper.List;
 Control=WebSharper&&WebSharper.Control;
 MailboxProcessor=Control&&Control.MailboxProcessor;
 Collections=WebSharper&&WebSharper.Collections;
 Dictionary=Collections&&Collections.Dictionary;
 CancellationTokenSource=WebSharper&&WebSharper.CancellationTokenSource;
 System=Global.System;
 Guid=System&&System.Guid;
 Option$1=WebSharper&&WebSharper.Option;
 JSON=Global.JSON;
 TimeoutException=WebSharper&&WebSharper.TimeoutException;
 ClientSideJson=WebSharper&&WebSharper.ClientSideJson;
 Provider=ClientSideJson&&ClientSideJson.Provider;
 Owin=WebSharper&&WebSharper.Owin;
 WebSocket=Owin&&Owin.WebSocket;
 Client=WebSocket&&WebSocket.Client;
 WithEncoding=Client&&Client.WithEncoding;
 Endpoint=WebSocket&&WebSocket.Endpoint;
 location=Global.location;
 Map=Collections&&Collections.Map;
 FSharpMap=Collections&&Collections.FSharpMap;
 Remoting=WebSharper&&WebSharper.Remoting;
 AjaxRemotingProvider=Remoting&&Remoting.AjaxRemotingProvider;
 View=UI&&UI.View;
 FromView=UI&&UI.FromView;
 Doc=UI&&UI.Doc;
 Operators=WebSharper&&WebSharper.Operators;
 AttrModule=UI&&UI.AttrModule;
 AttrProxy=UI&&UI.AttrProxy;
 Input$1=UI&&UI.Input;
 Mouse=Input$1&&Input$1.Mouse;
 FSharpSet=Collections&&Collections.FSharpSet;
 BalancedTree=Collections&&Collections.BalancedTree;
 MatchFailureException=WebSharper&&WebSharper.MatchFailureException;
 Object=Global.Object;
 Fable$1=Global.Fable;
 Babel$1=Global.Babel;
 HashSet=Collections&&Collections.HashSet;
 JavaScript=WebSharper&&WebSharper.JavaScript;
 JSModule=JavaScript&&JavaScript.JSModule;
 Lazy=WebSharper&&WebSharper.Lazy;
 $=Global.jQuery;
 Date=Global.Date;
 ListModel$1=UI&&UI.ListModel;
 Async.sleepThen=function(f,milliseconds)
 {
  var b;
  b=null;
  return Concurrency.Delay(function()
  {
   return Concurrency.Bind(Concurrency.Sleep(milliseconds),function()
   {
    f();
    return Concurrency.Zero();
   });
  });
 };
 Async.bind=function(f,va)
 {
  return Concurrency.Bind(va,f);
 };
 Async.apply=function(fAsync,xAsync)
 {
  var b;
  b=null;
  return Concurrency.Delay(function()
  {
   return Concurrency.Bind(Concurrency.StartChild(fAsync,null),function(a)
   {
    return Concurrency.Bind(Concurrency.StartChild(xAsync,null),function(a$1)
    {
     return Concurrency.Bind(a,function(a$2)
     {
      return Concurrency.Bind(a$1,function(a$3)
      {
       return Concurrency.Return(a$2(a$3));
      });
     });
    });
   });
  });
 };
 Async.retn=function(x)
 {
  return Concurrency.Return(x);
 };
 Async.iter=function(f,va)
 {
  var b;
  b=null;
  return Concurrency.Delay(function()
  {
   return Concurrency.Bind(va,function(a)
   {
    f(a);
    return Concurrency.Zero();
   });
  });
 };
 Async.map=function(f,va)
 {
  var b;
  b=null;
  return Concurrency.Delay(function()
  {
   return Concurrency.Bind(va,function(a)
   {
    return Concurrency.Return(f(a));
   });
  });
 };
 KeyVal.tryGetValue=function(key,dict)
 {
  return Seq$2.tryPick(function(kp)
  {
   return Unchecked.Equals(kp.K,key)?{
    $:1,
    $0:kp.V
   }:null;
  },dict);
 };
 String.skipFirstLine=function(txt)
 {
  var i;
  i=txt.indexOf("\n");
  return i<0?"":Slice.string(txt,{
   $:1,
   $0:i+1
  },null);
 };
 String.append=function(a,b)
 {
  return a+b;
 };
 String.trim=function(s)
 {
  return Strings.Trim(s);
 };
 String.splitByChar=function(c,s)
 {
  return Strings.SplitChars(s,[c],0);
 };
 Option.modify=function(modifier)
 {
  var g;
  function f(o)
  {
   return o==null?null:{
    $:1,
    $0:modifier(o.$0)
   };
  }
  g=function(a)
  {
   return Option.defaultValue(Global.id,a);
  };
  return function(x)
  {
   return g(f(x));
  };
 };
 Option.join=function(vOO)
 {
  return vOO!=null&&vOO.$==1?vOO.$0:null;
 };
 Option.apply=function(fO,vO)
 {
  var $1;
  return fO!=null&&fO.$==1&&(vO!=null&&vO.$==1&&($1=[fO.$0,vO.$0],true))?{
   $:1,
   $0:$1[0]($1[1])
  }:null;
 };
 Option.iterFO=function(vO,fO)
 {
  if(vO!=null&&vO.$==1)
   if(fO!=null&&fO.$==1)
    fO.$0(vO.$0);
 };
 Option.iterF=function(v,a)
 {
  if(a!=null&&a.$==1)
   a.$0(v);
 };
 Option.call=function(v,a)
 {
  return a!=null&&a.$==1?{
   $:1,
   $0:a.$0(v)
  }:null;
 };
 Option.defaultWith=function(f,a)
 {
  return a==null?f():a.$0;
 };
 Option.defaultValue=function(v,a)
 {
  return a==null?v:a.$0;
 };
 ExceptionThrown=Useful.ExceptionThrown=Runtime.Class({
  toString:function()
  {
   return this.FSSGlobal_Useful_ErrMsg$get_ErrMsg();
  },
  FSSGlobal_Useful_ErrMsg$get_IsWarning:function()
  {
   return false;
  },
  FSSGlobal_Useful_ErrMsg$get_ErrMsg:function()
  {
   return(function($1)
   {
    return function($2)
    {
     return $1(Utils.prettyPrint($2));
    };
   }(Global.id))(this.exn);
  }
 },Obj,ExceptionThrown);
 ExceptionThrown.New=Runtime.Ctor(function(exn)
 {
  this.exn=exn;
 },ExceptionThrown);
 ErrOptionIsNone=Useful.ErrOptionIsNone=Runtime.Class({
  toString:function()
  {
   return this.FSSGlobal_Useful_ErrMsg$get_ErrMsg();
  },
  FSSGlobal_Useful_ErrMsg$get_IsWarning:function()
  {
   return false;
  },
  FSSGlobal_Useful_ErrMsg$get_ErrMsg:function()
  {
   return"Option is None";
  }
 },Obj,ErrOptionIsNone);
 ErrOptionIsNone.New=Runtime.Ctor(function()
 {
 },ErrOptionIsNone);
 ErrSimple=Useful.ErrSimple=Runtime.Class({
  toString:function()
  {
   return this.FSSGlobal_Useful_ErrMsg$get_ErrMsg();
  },
  FSSGlobal_Useful_ErrMsg$get_IsWarning:function()
  {
   return this.warning;
  },
  FSSGlobal_Useful_ErrMsg$get_ErrMsg:function()
  {
   return this.msg;
  }
 },Obj,ErrSimple);
 ErrSimple.New=Runtime.Ctor(function(msg,warning)
 {
  this.msg=msg;
  this.warning=warning;
 },ErrSimple);
 ropBuilder=Result.ropBuilder=Runtime.Class({
  For:function(sequence,body)
  {
   var $this;
   $this=this;
   return this.Using(Enumerator.Get(sequence),function(_enum)
   {
    return $this.While(function()
    {
     return _enum.MoveNext();
    },$this.Delay(function()
    {
     return body(_enum.Current());
    }));
   });
  },
  Using:function(disposable,body)
  {
   return this.TryFinally(function()
   {
    return body(disposable);
   },function()
   {
    if(!Unchecked.Equals(disposable,null))
     disposable.Dispose();
   });
  },
  TryFinally:function(body,compensation)
  {
   try
   {
    return this.ReturnFrom(body());
   }
   finally
   {
    compensation();
   }
  },
  TryWith:function(body,handler)
  {
   try
   {
    return this.ReturnFrom(body());
   }
   catch(e)
   {
    return handler(e);
   }
  },
  While:function(guard,body)
  {
   var $this;
   $this=this;
   return!guard()?this.Zero():this.Bind(body(),function()
   {
    return $this.While(guard,body);
   });
  },
  Run:function(f)
  {
   return Result.bind(f,Result.succeed());
  },
  Combine:function(a,b)
  {
   return Result.combine(a,b);
  },
  Delay:Global.id,
  Zero:function()
  {
   return Result.succeed();
  },
  Bind:function(w,r)
  {
   return Result.bind(r,w);
  },
  ReturnFrom:Global.id,
  Return:function(x)
  {
   return Result.succeed(x);
  }
 },Obj,ropBuilder);
 ropBuilder.New=Runtime.Ctor(function()
 {
 },ropBuilder);
 Seq.sequenceA=function(x)
 {
  return Seq.traverseA(Global.id,x);
 };
 Seq.traverseA=function(f,sequ)
 {
  return Seq$2.fold(function(tail,head)
  {
   return Result.apply(Result.apply(Result.succeed(function(h)
   {
    return function(t)
    {
     return Seq.cons(h,t);
    };
   }),f(head)),tail);
  },Result.succeed([]),sequ);
 };
 Seq.sequenceM=function(x)
 {
  return Seq.traverseM(Global.id,x);
 };
 Seq.traverseM=function(f,sequ)
 {
  function _(v,f$1)
  {
   return Result.bind(f$1,v);
  }
  return Seq$2.fold(function(tail,head)
  {
   return _(f(head),function(h)
   {
    return _(tail,function(t)
    {
     return Result.succeed(Seq.cons(h,t));
    });
   });
  },Result.succeed([]),sequ);
 };
 Seq.cons=function(h,t)
 {
  return Seq$2.append(t,[h]);
 };
 Result.toResultS=function(a)
 {
  return{
   $:0,
   $0:a.$0,
   $1:Arrays.map(function(m)
   {
    return new ErrSimple.New(m.FSSGlobal_Useful_ErrMsg$get_ErrMsg(),m.FSSGlobal_Useful_ErrMsg$get_IsWarning());
   },a.$1)
  };
 };
 Result.fromResultS=function(a)
 {
  return{
   $:0,
   $0:a.$0,
   $1:Arrays.map(Global.id,a.$1)
  };
 };
 Result.result2String=function(res)
 {
  return Strings.concat("\n",[Option.defaultValue("Failed: ",res.$0)].concat(Result.msgs2String(res.$1)));
 };
 Result.countMessages=function(ms)
 {
  var $1,$2,$3,errors,warnings,$4,$5;
  if(Unchecked.Equals(ms,[]))
   return"";
  else
   {
    errors=Arrays.filter(function(m)
    {
     return!m.FSSGlobal_Useful_ErrMsg$get_IsWarning();
    },ms);
    warnings=Arrays.filter(function(m)
    {
     return m.FSSGlobal_Useful_ErrMsg$get_IsWarning();
    },ms);
    $4=Arrays.length(errors);
    $5=Arrays.length(warnings);
    switch($4===0?$5===0?0:$5===1?2:5:$4===1?$5===0?1:$5===1?3:($1=[$4,$5],6):$5===0?4:($1=[$4,$5],6))
    {
     case 0:
      $3=function($6)
      {
       return function($7)
       {
        return $6(Utils.toSafe($7));
       };
      }(Global.id);
      break;
     case 1:
      $3=function($6)
      {
       return function($7)
       {
        return $6(Utils.toSafe($7));
       };
      }(Global.id);
      break;
     case 2:
      $3=function($6)
      {
       return function($7)
       {
        return $6(Utils.toSafe($7));
       };
      }(Global.id);
      break;
     case 3:
      $3=function($6)
      {
       return function($7)
       {
        return $6("1 error, 1 warning\n"+Utils.toSafe($7));
       };
      }(Global.id);
      break;
     case 4:
      $3=((Runtime.Curried3(function($6,$7,$8)
      {
       return $6(Global.String($7)+" errors\n"+Utils.toSafe($8));
      }))(Global.id))($4);
      break;
     case 5:
      $3=((Runtime.Curried3(function($6,$7,$8)
      {
       return $6(Global.String($7)+" warnings\n"+Utils.toSafe($8));
      }))(Global.id))($5);
      break;
     case 6:
      $3=(((Runtime.Curried(function($6,$7,$8,$9)
      {
       return $6(Global.String($7)+" errors, "+Global.String($8)+" warnings\n"+Utils.toSafe($9));
      },4))(Global.id))($1[0]))($1[1]);
      break;
    }
    return $3(Result.getMessages(ms));
   }
 };
 Result.getMessages=function(ms)
 {
  return Strings.concat("\n",Result.msgs2String(ms));
 };
 Result.msgs2String=function(ms)
 {
  return Arrays.map(function(m)
  {
   return m.FSSGlobal_Useful_ErrMsg$get_ErrMsg();
  },ms);
 };
 Result.withError=function(f,a)
 {
  var ms;
  ms=a.$1;
  return Option.defaultWith(function()
  {
   return f(ms);
  },a.$0);
 };
 Result.ifError=function(def,a)
 {
  return Option.defaultValue(def,a.$0);
 };
 Result.failIfTrue=function(m,v)
 {
  return v?Result.fail(m):Result.succeed();
 };
 Result.failIfFalse=function(m,v)
 {
  return v?Result.succeed():Result.fail(m);
 };
 Result.tryProtection=function()
 {
  return Result.succeed();
 };
 Result.toOptionMs=function(a)
 {
  return[a.$0,a.$1];
 };
 Result.toOption=function(a)
 {
  return a.$0;
 };
 Result.toResultStr=function(r)
 {
  function f(s)
  {
   return Seq$2.map(Global.String,s);
  }
  function g(s)
  {
   return Strings.concat("\n",s);
  }
  return Result.toResult(function($1,$2)
  {
   return[$1,$2][0];
  },function(x)
  {
   return g(f(x));
  },r);
 };
 Result.toResult=function(fv,fe,r)
 {
  return r.$0==null?{
   $:1,
   $0:fe(r.$1)
  }:{
   $:0,
   $0:fv(r.$0.$0,r.$1)
  };
 };
 Result.fromOptionW=function(m,a)
 {
  return a!=null&&a.$==1?Result.succeed(a.$0):Result.fail(m());
 };
 Result.fromOption=function(m,a)
 {
  return a!=null&&a.$==1?Result.succeed(a.$0):Result.fail(m);
 };
 Result.fromChoice=function(c)
 {
  return c.$==1?Result.fail(c.$0):Result.succeed(c.$0);
 };
 Result.fromResult=function(c)
 {
  return c.$==1?Result.fail(new ErrSimple.New(c.$0,false)):Result.succeed(c.$0);
 };
 Result.result=function()
 {
  SC$1.$cctor();
  return SC$1.result;
 };
 Result.tryCall=function(f,v)
 {
  try
  {
   return f(v);
  }
  catch(e)
  {
   return Result.fail(Result.failException(e));
  }
 };
 Result.Success=function(a)
 {
  return a.$0==null?{
   $:1,
   $0:a.$1
  }:{
   $:0,
   $0:[a.$0.$0,a.$1]
  };
 };
 Result.isGood=function(a)
 {
  return a.$0!=null;
 };
 Result.isError=function(a)
 {
  return a.$0==null;
 };
 Result.failSimpleWarning=function(m)
 {
  return Result.fail(new ErrSimple.New(m,true));
 };
 Result.failSimpleError=function(m)
 {
  return Result.fail(new ErrSimple.New(m,false));
 };
 Result.map2=function(f,a1,a2)
 {
  return Result.apply(Result.apply(Result.succeed(f),a1),a2);
 };
 Result.apply=function(fr,ar)
 {
  return Result.applyMap(function(f)
  {
   return function(a)
   {
    return Result.map(f,a);
   };
  },fr,ar);
 };
 Result.apply0=function(fr,ar)
 {
  return Result.applyMap(function(f)
  {
   return function(a)
   {
    return Result.map0(f,a);
   };
  },fr,ar);
 };
 Result.applyMap=function(mapF,a,aR)
 {
  var fO;
  fO=a.$0;
  return fO!=null&&fO.$==1?(mapF(fO.$0))(aR):Result.failWithMsgs(a.$1.concat(Result.getMsgs(aR)));
 };
 Result.bind=function(f,ar)
 {
  return Result.join(Result.map(f,ar));
 };
 Result.bind0=function(f,ar)
 {
  return Result.join(Result.map0(f,ar));
 };
 Result.join=function(arr)
 {
  var $1;
  return($1=arr.$0,$1!=null&&$1.$==1)?{
   $:0,
   $0:arr.$0.$0.$0,
   $1:arr.$1.concat(arr.$0.$0.$1)
  }:{
   $:0,
   $0:null,
   $1:arr.$1
  };
 };
 Result.combine=function(a,rb)
 {
  var ms;
  ms=a.$1;
  return Option.defaultValue({
   $:0,
   $0:null,
   $1:ms
  },a.$0==null?null:{
   $:1,
   $0:Result.mergeMsgs(ms,rb())
  });
 };
 Result.mergeMsgs=function(ms,r)
 {
  var t;
  t=Result.mapMsgs(function(a)
  {
   return ms.concat(a);
  },r);
  return{
   $:0,
   $0:t[0],
   $1:t[1]
  };
 };
 Result.getMsgs=function(a)
 {
  return a.$1;
 };
 Result.getOption=function(a)
 {
  return a.$0;
 };
 Result.mapMsgs=function(f,a)
 {
  return[a.$0,f(a.$1)];
 };
 Result.mapMsg=function(f,a)
 {
  return[a.$0,Arrays.map(f,a.$1)];
 };
 Result.mapErr=function(f,a)
 {
  return{
   $:0,
   $0:a.$0,
   $1:Arrays.map(f,a.$1)
  };
 };
 Result.map=function(f,a)
 {
  var o;
  try
  {
   return{
    $:0,
    $0:(o=a.$0,o==null?null:{
     $:1,
     $0:f(o.$0)
    }),
    $1:a.$1
   };
  }
  catch(e)
  {
   return Result.fail(Result.failException(e));
  }
 };
 Result.map0=function(f,a)
 {
  var o;
  return{
   $:0,
   $0:(o=a.$0,o==null?null:{
    $:1,
    $0:f(o.$0)
   }),
   $1:a.$1
  };
 };
 Result.failException=function(e)
 {
  return new ExceptionThrown.New(e);
 };
 Result.failWithMsgs=function(ms)
 {
  return{
   $:0,
   $0:null,
   $1:ms
  };
 };
 Result.fail=function(m)
 {
  return{
   $:0,
   $0:null,
   $1:[m]
  };
 };
 Result.succeedWithMsgs=function(x,ms)
 {
  return{
   $:0,
   $0:{
    $:1,
    $0:x
   },
   $1:ms
  };
 };
 Result.succeedWithMsg=function(x,m)
 {
  return{
   $:0,
   $0:{
    $:1,
    $0:x
   },
   $1:[m]
  };
 };
 Result.succeed=function(x)
 {
  return{
   $:0,
   $0:{
    $:1,
    $0:x
   },
   $1:[]
  };
 };
 ResultS.toResult=function()
 {
  SC$1.$cctor();
  return SC$1.toResult;
 };
 ResultS.fromResult=function()
 {
  SC$1.$cctor();
  return SC$1.fromResult;
 };
 Wrap.WNone={
  $:4
 };
 Wrap.StartAsTask=function(w,options,cancToken)
 {
  return Concurrency.StartAsTask(Wrap.getAsyncR(w),cancToken);
 };
 Wrap.Start=function(w,cancToken)
 {
  Concurrency.Start(Wrap.getAsync(w),cancToken);
 };
 Builder=Wrap.Builder=Runtime.Class({
  For:function(sequence,body)
  {
   var $this;
   $this=this;
   return this.Using(Enumerator.Get(sequence),function(_enum)
   {
    return $this.While(function()
    {
     return _enum.MoveNext();
    },$this.Delay(function()
    {
     return body(_enum.Current());
    }));
   });
  },
  Using:function(disposable,body)
  {
   return this.TryFinally(function()
   {
    return body(disposable);
   },function()
   {
    if(!Unchecked.Equals(disposable,null))
     disposable.Dispose();
   });
  },
  TryFinally:function(body,compensation)
  {
   return Wrap.tryFinally(compensation,body);
  },
  TryWith:function(body,handler)
  {
   return Wrap.tryWith(handler,body);
  },
  While:function(guard,body)
  {
   return Wrap.whileLoop(guard,body);
  },
  Combine:function(a,b)
  {
   return Wrap.combine(Wrap.errOptionIsNone(),a,b);
  },
  Run:function(f)
  {
   return f();
  },
  Delay:Global.id,
  ReturnFrom:Global.id,
  Return:function(x)
  {
   return{
    $:3,
    $0:x
   };
  },
  Zero:function()
  {
   return{
    $:3,
    $0:null
   };
  },
  Bind:function(wrapped,restOfCExpr)
  {
   return Wrap.bind(restOfCExpr,Option.defaultValue(Wrap.WNone,wrapped==null?null:{
    $:1,
    $0:{
     $:3,
     $0:wrapped.$0
    }
   }));
  },
  Bind$1:function(wrapped,restOfCExpr)
  {
   var $1,$2,t,t$1;
   switch(wrapped.$0==null?(t=wrapped.$1,!Unchecked.Equals(t,null)&&t.length===0)?1:2:(t$1=wrapped.$1,!Unchecked.Equals(t$1,null)&&t$1.length===0)?($2=wrapped.$0.$0,0):2)
   {
    case 0:
     $1={
      $:3,
      $0:$2
     };
     break;
    case 1:
     $1=Wrap.WNone;
     break;
    case 2:
     $1={
      $:0,
      $0:wrapped
     };
     break;
   }
   return Wrap.bind(restOfCExpr,$1);
  },
  Bind$2:function(wrapped,restOfCExpr)
  {
   return Wrap.bind(restOfCExpr,{
    $:1,
    $0:wrapped
   });
  },
  Bind$3:function(wrapped,restOfCExpr)
  {
   return Wrap.bind(restOfCExpr,wrapped);
  }
 },Obj,Builder);
 Builder.New=Runtime.Ctor(function()
 {
 },Builder);
 Seq$1.sequenceA=function(x)
 {
  return Seq$1.traverseA(Global.id,x);
 };
 Seq$1.traverseA=function(f,sequ)
 {
  return Seq$2.fold(function(tail,head)
  {
   return Wrap.apply(Wrap.apply(Wrap.Return(function(h)
   {
    return function(t)
    {
     return Seq$1.cons(h,t);
    };
   }),f(head)),tail);
  },Wrap.Return([]),sequ);
 };
 Seq$1.sequenceM=function(x)
 {
  return Seq$1.traverseM(Global.id,x);
 };
 Seq$1.traverseM=function(f,sequ)
 {
  function _(v,f$1)
  {
   return Wrap.bind(f$1,v);
  }
  return Seq$2.fold(function(tail,head)
  {
   return _(f(head),function(h)
   {
    return _(tail,function(t)
    {
     return Wrap.Return(Seq$1.cons(h,t));
    });
   });
  },Wrap.Return([]),sequ);
 };
 Seq$1.cons=function(h,t)
 {
  return Seq$2.append(t,[h]);
 };
 Wrap.runSynchronouslyS=function(count,w)
 {
  var a;
  a=Wrap.runSynchronouslyO(count,w);
  return a[0]==null?(function($1)
  {
   return function($2)
   {
    return $1("Failed!\n"+Utils.toSafe($2));
   };
  }(Global.id))(a[1]):(((Runtime.Curried3(function($1,$2,$3)
  {
   return $1(Global.String($2)+"\n"+Utils.toSafe($3));
  }))(Global.id))(a[0].$0))(a[1]);
 };
 Wrap.runSynchronouslyO=function(count,w)
 {
  return Result.mapMsgs(count?Result.countMessages:Result.getMessages,console.log("runSynchronously should not be used in Javascript"));
 };
 Wrap.getResult=function(callback,wb)
 {
  if(wb.$==4)
   callback(Result.fail(Wrap.errOptionIsNone()));
  else
   if(wb.$==0)
    callback(wb.$0);
   else
    if(wb.$==1)
     Concurrency.StartWithContinuations(wb.$0,function(v)
     {
      callback(Result.succeed(v));
     },function(exc)
     {
      callback(Result.fail(Result.failException(exc)));
     },function(can)
     {
      callback(Result.fail(Result.failException(can)));
     },null);
    else
     if(wb.$==2)
      Concurrency.StartWithContinuations(wb.$0,callback,function(exc)
      {
       callback(Result.fail(Result.failException(exc)));
      },function(can)
      {
       callback(Result.fail(Result.failException(can)));
      },null);
     else
      callback(Result.succeed(wb.$0));
 };
 Wrap.wrapper=function()
 {
  SC$1.$cctor();
  return SC$1.wrapper;
 };
 Wrap.wrap=function()
 {
  SC$1.$cctor();
  return SC$1.wrap;
 };
 Wrap.tryFinally=function(compensation,body)
 {
  var b;
  return{
   $:2,
   $0:(b=null,Concurrency.Delay(function()
   {
    return Concurrency.Bind(Concurrency.Catch(Wrap.toAsyncResult(body())),function(a)
    {
     var $1,$2;
     compensation();
     if(a.$==1)
      throw a.$0;
     else
      $2=a.$0;
     return Concurrency.Return($2);
    });
   }))
  };
 };
 Wrap.tryWith=function(handler,body)
 {
  var b;
  return{
   $:2,
   $0:(b=null,Concurrency.Delay(function()
   {
    return Concurrency.Bind(Concurrency.Catch(Wrap.toAsyncResult(body())),function(a)
    {
     return a.$==1?Wrap.toAsyncResult(handler(a.$0)):Concurrency.Return(a.$0);
    });
   }))
  };
 };
 Wrap.whileLoop=function(pred,body)
 {
  return pred()?Wrap.bind(function()
  {
   return Wrap.whileLoop(pred,body);
  },body()):{
   $:3,
   $0:null
  };
 };
 Wrap.combine=function(errOptionIsNone,wa,wb)
 {
  var $1,t,b,b$1;
  switch(wa.$==0?wa.$0.$0==null?($1=wa.$0.$1,5):(t=wa.$0.$1,!Unchecked.Equals(t,null)&&t.length===0?0:($1=wa.$0.$1,1)):wa.$==1?($1=wa.$0,2):wa.$==2?($1=wa.$0,3):wa.$==4?4:0)
  {
   case 0:
    return wb();
    break;
   case 1:
    return Wrap.addMsgs(errOptionIsNone,$1,wb());
    break;
   case 2:
    return{
     $:2,
     $0:(b=null,Concurrency.Delay(function()
     {
      return Concurrency.Bind($1,function()
      {
       return Concurrency.Bind(Wrap.toAsyncResult(wb()),function(a)
       {
        return Concurrency.Return(a);
       });
      });
     }))
    };
    break;
   case 3:
    return{
     $:2,
     $0:(b$1=null,Concurrency.Delay(function()
     {
      return Concurrency.Bind($1,function(a)
      {
       var a$1,ms;
       a$1=Result.Success(a);
       return a$1.$==0?(ms=a$1.$0[1],Concurrency.Bind(Wrap.toAsyncResult(wb()),function(a$2)
       {
        return Concurrency.Return(Result.mergeMsgs(ms,a$2));
       })):Concurrency.Return(Result.failWithMsgs(a$1.$0));
      });
     }))
    };
    break;
   case 4:
    return Wrap.WNone;
    break;
   case 5:
    return{
     $:0,
     $0:Result.failWithMsgs($1)
    };
    break;
  }
 };
 Wrap.addMsgs=function(errOptionIsNone,ms,wb)
 {
  var va,b,vra,b$1;
  return Unchecked.Equals(ms,[])?wb:wb.$==4?{
   $:0,
   $0:Result.mergeMsgs(ms,Result.fail(errOptionIsNone))
  }:wb.$==0?{
   $:0,
   $0:Result.mergeMsgs(ms,wb.$0)
  }:wb.$==1?(va=wb.$0,{
   $:2,
   $0:(b=null,Concurrency.Delay(function()
   {
    return Concurrency.Bind(va,function(a)
    {
     return Concurrency.Return(Result.succeedWithMsgs(a,ms));
    });
   }))
  }):wb.$==2?(vra=wb.$0,{
   $:2,
   $0:(b$1=null,Concurrency.Delay(function()
   {
    return Concurrency.Bind(vra,function(a)
    {
     return Concurrency.Return(Result.mergeMsgs(ms,a));
    });
   }))
  }):{
   $:0,
   $0:Result.succeedWithMsgs(wb.$0,ms)
  };
 };
 Wrap.wrapper2Async=function(f,a)
 {
  var $1,wb,ab,b;
  wb=Wrap.tryCall(f,a);
  switch(wb.$==3?0:wb.$==0?1:wb.$==1?2:wb.$==2?3:0)
  {
   case 0:
    return Wrap.wb2arb([],wb);
    break;
   case 1:
    return Wrap.wb2arb(wb.$0.$1,wb);
    break;
   case 2:
    ab=wb.$0;
    b=null;
    return Concurrency.Delay(function()
    {
     return Concurrency.Bind(ab,function(a$1)
     {
      return Concurrency.Return(Result.succeed(a$1));
     });
    });
    break;
   case 3:
    return wb.$0;
    break;
  }
 };
 Wrap.start=function(printMsg,w)
 {
  Wrap.startV(function(a)
  {
   if(a[0]==null)
    printMsg("Failed!\n"+a[1]);
   else
    printMsg(a[1]);
  },w);
 };
 Wrap.startV=function(processVal,w)
 {
  var f,f$1,f$2,f$3;
  function f$4(a)
  {
   return Result.mapMsgs(Result.getMessages,a);
  }
  function g(m)
  {
   return[null,m];
  }
  function g$1(m)
  {
   return[null,m];
  }
  Concurrency.StartWithContinuations(Wrap.getAsyncR(w),function(x)
  {
   return processVal(f$4(x));
  },(f=(f$1=function($1)
  {
   return function($2)
   {
    return $1(Global.String($2));
   };
  }(Global.id),function(x)
  {
   return g(f$1(x));
  }),function(x)
  {
   return processVal(f(x));
  }),(f$2=(f$3=function($1)
  {
   return function($2)
   {
    return $1(Global.String($2));
   };
  }(Global.id),function(x)
  {
   return g$1(f$3(x));
  }),function(x)
  {
   return processVal(f$2(x));
  }),null);
 };
 Wrap.toAsyncWithDefault=function(w)
 {
  return function(w$1)
  {
   return Wrap.getAsyncWithDefault(w,w$1);
  };
 };
 Wrap.toAsyncOptionMs=function(w)
 {
  return Async.map(Result.toOptionMs,Wrap.getAsyncR(w));
 };
 Wrap.toAsyncOption=function(w)
 {
  return Async.map(Result.toOption,Wrap.getAsyncR(w));
 };
 Wrap.toAsyncResultStr=function(w)
 {
  return Async.map(Result.toResultStr,Wrap.getAsyncR(w));
 };
 Wrap.toAsyncResult=function(w)
 {
  return Wrap.getAsyncR(w);
 };
 Wrap.toAsync=function(w)
 {
  return Wrap.getAsync(w);
 };
 Wrap.fromAsyncResultStr=function(a)
 {
  return{
   $:2,
   $0:Async.map(Result.fromResult,a)
  };
 };
 Wrap.getAsync=function(w)
 {
  return Wrap.getAsyncWithDefault(function(ms)
  {
   throw Global.Error(Result.getMessages(ms));
  },w);
 };
 Wrap.getAsyncWithDefault=function(f,w)
 {
  return Async.map(function(a)
  {
   return Result.withError(f,a);
  },Wrap.getAsyncR(w));
 };
 Wrap.getResultW=function(w)
 {
  return{
   $:1,
   $0:Wrap.getAsyncR(w)
  };
 };
 Wrap.getAsyncR=function(wb)
 {
  var va,b;
  return wb.$==3?Concurrency.Return(Result.succeed(wb.$0)):wb.$==4?Concurrency.Return(Result.fail(Wrap.errOptionIsNone())):wb.$==0?Concurrency.Return(wb.$0):wb.$==2?wb.$0:(va=wb.$0,(b=null,Concurrency.Delay(function()
  {
   return Concurrency.Bind(va,function(a)
   {
    return Concurrency.Return(Result.succeed(a));
   });
  })));
 };
 Wrap.apply=function(fw,aw)
 {
  return Wrap.bind(function(b)
  {
   return Wrap.map(b,aw);
  },fw);
 };
 Wrap.apply0=function(fw,aw)
 {
  return Wrap.bind0(function(b)
  {
   return Wrap.map0(b,aw);
  },fw);
 };
 Wrap.bind=function(f,aw)
 {
  return Wrap.join(Wrap.map(f,aw));
 };
 Wrap.bind0=function(f,aw)
 {
  return Wrap.join(Wrap.map0(f,aw));
 };
 Wrap.join=function(aww)
 {
  var $1,awa,b,awra,b$1;
  return aww.$==4?Wrap.WNone:aww.$==0?($1=aww.$0.$0,$1!=null&&$1.$==1)?aww.$0.$0.$0:{
   $:0,
   $0:{
    $:0,
    $0:null,
    $1:aww.$0.$1
   }
  }:aww.$==1?(awa=aww.$0,{
   $:2,
   $0:(b=null,Concurrency.Delay(function()
   {
    return Concurrency.Bind(awa,function(a)
    {
     return a.$==3?Concurrency.Return(Result.succeed(a.$0)):a.$==0?Concurrency.Return(a.$0):a.$==1?Concurrency.Bind(a.$0,function(a$1)
     {
      return Concurrency.Return(Result.succeed(a$1));
     }):a.$==2?Concurrency.Bind(a.$0,function(a$1)
     {
      return Concurrency.Return(a$1);
     }):Concurrency.Return(Result.fail(Wrap.errOptionIsNone()));
    });
   }))
  }):aww.$==2?(awra=aww.$0,{
   $:2,
   $0:(b$1=null,Concurrency.Delay(function()
   {
    return Concurrency.Bind(awra,function(a)
    {
     var $2,ms,aw;
     return($2=a.$0,$2!=null&&$2.$==1)?(ms=a.$1,(aw=a.$0.$0,aw.$==3?Concurrency.Return(Result.succeedWithMsgs(aw.$0,ms)):aw.$==0?Concurrency.Return(Result.mergeMsgs(ms,aw.$0)):aw.$==1?Concurrency.Bind(aw.$0,function(a$1)
     {
      return Concurrency.Return(Result.succeedWithMsgs(a$1,ms));
     }):aw.$==2?Concurrency.Bind(aw.$0,function(a$1)
     {
      return Concurrency.Return(Result.mergeMsgs(ms,a$1));
     }):Concurrency.Return(Result.failWithMsgs(ms.concat([Wrap.errOptionIsNone()]))))):Concurrency.Return(Result.failWithMsgs(a.$1));
    });
   }))
  }):aww.$0;
 };
 Wrap.map=function(f,aw)
 {
  var aa,b,ara,b$1;
  if(aw.$==3)
   try
   {
    return{
     $:3,
     $0:f(aw.$0)
    };
   }
   catch(e)
   {
    return{
     $:0,
     $0:Result.fail(Result.failException(e))
    };
   }
  else
   return aw.$==0?{
    $:0,
    $0:Result.map(f,aw.$0)
   }:aw.$==1?(aa=aw.$0,{
    $:2,
    $0:(b=null,Concurrency.Delay(function()
    {
     return Concurrency.Bind(aa,function(a)
     {
      var $1;
      try
      {
       $1=Result.succeed(f(a));
      }
      catch(e$1)
      {
       $1=Result.fail(Result.failException(e$1));
      }
      return Concurrency.Return($1);
     });
    }))
   }):aw.$==2?(ara=aw.$0,{
    $:2,
    $0:(b$1=null,Concurrency.Delay(function()
    {
     return Concurrency.Bind(ara,function(a)
     {
      return Concurrency.Return(Result.map(f,a));
     });
    }))
   }):Wrap.WNone;
 };
 Wrap.map0=function(f,aw)
 {
  var aa,b,ara,b$1;
  return aw.$==3?{
   $:3,
   $0:f(aw.$0)
  }:aw.$==0?{
   $:0,
   $0:Result.map(f,aw.$0)
  }:aw.$==1?(aa=aw.$0,{
   $:1,
   $0:(b=null,Concurrency.Delay(function()
   {
    return Concurrency.Bind(aa,function(a)
    {
     return Concurrency.Return(f(a));
    });
   }))
  }):aw.$==2?(ara=aw.$0,{
   $:2,
   $0:(b$1=null,Concurrency.Delay(function()
   {
    return Concurrency.Bind(ara,function(a)
    {
     return Concurrency.Return(Result.map(f,a));
    });
   }))
  }):Wrap.WNone;
 };
 Wrap.Return=function(v)
 {
  return{
   $:3,
   $0:v
  };
 };
 Wrap["bind0'"]=function(f,wa)
 {
  var $1,a,t,ms,a$1,a$2,t$1,ab,b,arb,b$1,b$2,b$3;
  switch(wa.$==0?(a=Result.Success(wa.$0),a.$==1?($1=a.$0,2):(t=a.$0[1],!Unchecked.Equals(t,null)&&t.length===0?($1=a.$0[0],0):($1=[a.$0[0],a.$0[1]],3))):wa.$==4?1:wa.$==1?($1=wa.$0,4):wa.$==2?($1=wa.$0,5):($1=wa.$0,0))
  {
   case 0:
    return Wrap.tryCall(f,$1);
    break;
   case 1:
    return Wrap.WNone;
    break;
   case 2:
    return{
     $:0,
     $0:Result.failWithMsgs($1)
    };
    break;
   case 3:
    ms=$1[1];
    a$1=Wrap.tryCall(f,$1[0]);
    return a$1.$==4?{
     $:0,
     $0:Result.failWithMsgs(ms.concat([Wrap.errOptionIsNone()]))
    }:a$1.$==0?(a$2=Result.Success(a$1.$0),a$2.$==1?{
     $:0,
     $0:Result.failWithMsgs(ms.concat(a$2.$0))
    }:(t$1=a$2.$0[1],!Unchecked.Equals(t$1,null)&&t$1.length===0?{
     $:0,
     $0:Result.succeedWithMsgs(a$2.$0[0],ms)
    }:{
     $:0,
     $0:Result.succeedWithMsgs(a$2.$0[0],ms.concat(a$2.$0[1]))
    })):a$1.$==1?(ab=a$1.$0,{
     $:2,
     $0:(b=null,Concurrency.Delay(function()
     {
      return Concurrency.Bind(ab,function(a$3)
      {
       return Concurrency.Return(Result.succeedWithMsgs(a$3,ms));
      });
     }))
    }):a$1.$==2?(arb=a$1.$0,{
     $:2,
     $0:(b$1=null,Concurrency.Delay(function()
     {
      return Concurrency.Bind(arb,function(a$3)
      {
       return Concurrency.Return(Result.mergeMsgs(ms,a$3));
      });
     }))
    }):{
     $:0,
     $0:Result.succeedWithMsgs(a$1.$0,ms)
    };
    break;
   case 4:
    return{
     $:2,
     $0:(b$2=null,Concurrency.Delay(function()
     {
      return Concurrency.Bind($1,function(a$3)
      {
       return Wrap.wb2arb([],Wrap.tryCall(f,a$3));
      });
     }))
    };
    break;
   case 5:
    return{
     $:2,
     $0:(b$3=null,Concurrency.Delay(function()
     {
      return Concurrency.Bind($1,function(a$3)
      {
       var a$4,ms$1,b$4;
       a$4=Result.Success(a$3);
       return a$4.$==1?(ms$1=a$4.$0,b$4=null,Concurrency.Delay(function()
       {
        return Concurrency.Return(Result.failWithMsgs(ms$1));
       })):Wrap.wb2arb(a$4.$0[1],Wrap.tryCall(f,a$4.$0[0]));
      });
     }))
    };
    break;
  }
 };
 Wrap.tryCall=function(f,a)
 {
  try
  {
   return f(a);
  }
  catch(e)
  {
   return{
    $:0,
    $0:Result.fail(Result.failException(e))
   };
  }
 };
 Wrap.wb2arb=function(ms,a)
 {
  var arb,b,rb,b$1,b$2,b$3,b$4,ab,b$5;
  return a.$==2?(arb=a.$0,(b=null,Concurrency.Delay(function()
  {
   return Concurrency.Bind(arb,function(a$1)
   {
    return Concurrency.Return(Result.mergeMsgs(ms,a$1));
   });
  }))):a.$==0?(rb=a.$0,(b$1=null,Concurrency.Delay(function()
  {
   return Concurrency.Return(Result.mergeMsgs(ms,rb));
  }))):a.$==3?(b$2=a.$0,(b$3=null,Concurrency.Delay(function()
  {
   return Concurrency.Return(Result.succeedWithMsgs(b$2,ms));
  }))):a.$==4?(b$4=null,Concurrency.Delay(function()
  {
   return Concurrency.Return(Result.failWithMsgs(ms.concat([Wrap.errOptionIsNone()])));
  })):(ab=a.$0,(b$5=null,Concurrency.Delay(function()
  {
   return Concurrency.Bind(ab,function(a$1)
   {
    return Concurrency.Return(Result.succeedWithMsgs(a$1,ms));
   });
  })));
 };
 Wrap.errOptionIsNone=function()
 {
  SC$1.$cctor();
  return SC$1.errOptionIsNone;
 };
 List.sequenceResultA=function(x)
 {
  return List.traverseResultA(Global.id,x);
 };
 List.traverseResultA=function(f,list)
 {
  return List$1.foldBack(function(head,tail)
  {
   return Result.apply(Result.apply(Result.succeed(function(h)
   {
    return function(t)
    {
     return Useful.cons(h,t);
    };
   }),f(head)),tail);
  },list,Result.succeed(List$1.T.Empty));
 };
 List.sequenceWrapA=function(x)
 {
  return List.traverseWrapA(Global.id,x);
 };
 List.traverseWrapA=function(f,list)
 {
  function retn(a)
  {
   return{
    $:3,
    $0:a
   };
  }
  return List$1.foldBack(function(head,tail)
  {
   return Wrap.apply(Wrap.apply(retn(function(h)
   {
    return function(t)
    {
     return Useful.cons(h,t);
    };
   }),f(head)),tail);
  },list,retn(List$1.T.Empty));
 };
 List.sequenceWrapM=function(x)
 {
  return List.traverseWrapM(Global.id,x);
 };
 List.traverseWrapM=function(f,list)
 {
  function _(x,f$1)
  {
   return Wrap.bind(f$1,x);
  }
  return List$1.foldBack(function(head,tail)
  {
   return _(f(head),function(h)
   {
    return _(tail,function(t)
    {
     return Wrap.Return(Useful.cons(h,t));
    });
   });
  },list,Wrap.Return(List$1.T.Empty));
 };
 ResultWrap.wrap=function()
 {
  SC$1.$cctor();
  return SC$1.wrap$1;
 };
 ResultWrap.result=function()
 {
  SC$1.$cctor();
  return SC$1.result$1;
 };
 FoldNShare=Mailbox.FoldNShare=Runtime.Class({
  get_Agent:function()
  {
   return this.agent;
  },
  get_State:function()
  {
   return this.share;
  },
  get_Post:function()
  {
   var o;
   o=this.agent;
   return function(a)
   {
    o.mailbox.AddLast(a);
    o.resume();
   };
  }
 },Obj,FoldNShare);
 FoldNShare.New=Runtime.Ctor(function(f,initState)
 {
  var $this;
  $this=this;
  this.share=initState;
  this.agent=MailboxProcessor.Start(function(inbox)
  {
   function loop(state)
   {
    var b;
    b=null;
    return Concurrency.Delay(function()
    {
     return Concurrency.TryWith(Concurrency.Delay(function()
     {
      return Concurrency.Bind(inbox.Receive(null),function(a)
      {
       return Concurrency.Bind(f(state,a),function(a$1)
       {
        $this.share=a$1;
        return loop(a$1);
       });
      });
     }),function(a)
     {
      ((function($1)
      {
       return function($2)
       {
        return $1(Utils.prettyPrint($2));
       };
      }(function(s)
      {
       console.log(s);
      }))(a));
      return loop(state);
     });
    });
   }
   return loop(initState);
  },null);
 },FoldNShare);
 Mailbox.foldNShare=function(f,initState)
 {
  return new FoldNShare.New(f,initState);
 };
 Mailbox.fold=function(f,initState)
 {
  return Mailbox.foldA(function($1,$2)
  {
   var b;
   b=null;
   return Concurrency.Delay(function()
   {
    return Concurrency.Return(f($1,$2));
   });
  },initState);
 };
 Mailbox.foldA=function(f,initState)
 {
  return MailboxProcessor.Start(function(inbox)
  {
   function loop(state)
   {
    var b;
    b=null;
    return Concurrency.Delay(function()
    {
     return Concurrency.TryWith(Concurrency.Delay(function()
     {
      return Concurrency.Bind(inbox.Receive(null),function(a)
      {
       return Concurrency.Bind(f(state,a),function(a$1)
       {
        return loop(a$1);
       });
      });
     }),function(a)
     {
      ((function($1)
      {
       return function($2)
       {
        return $1(Utils.prettyPrint($2));
       };
      }(function(s)
      {
       console.log(s);
      }))(a));
      return loop(state);
     });
    });
   }
   return loop(initState);
  },null);
 };
 Mailbox.call=function(f)
 {
  return Mailbox.callA(function(msg)
  {
   var b;
   b=null;
   return Concurrency.Delay(function()
   {
    return Concurrency.Return(f(msg));
   });
  });
 };
 Mailbox.callA=function(f)
 {
  return Mailbox.iterA(function(t)
  {
   var replyChannel,msg,b;
   replyChannel=t[0];
   msg=t[1];
   b=null;
   return Concurrency.Delay(function()
   {
    return Concurrency.Bind(f(msg),function(a)
    {
     replyChannel(a);
     return Concurrency.Zero();
    });
   });
  });
 };
 Mailbox.iter=function(f)
 {
  return Mailbox.iterA(function(msg)
  {
   var b;
   b=null;
   return Concurrency.Delay(function()
   {
    f(msg);
    return Concurrency.Zero();
   });
  });
 };
 Mailbox.iterA=function(f)
 {
  return MailboxProcessor.Start(function(inbox)
  {
   var b;
   b=null;
   return Concurrency.Delay(function()
   {
    return Concurrency.While(function()
    {
     return true;
    },Concurrency.Delay(function()
    {
     return Concurrency.TryWith(Concurrency.Delay(function()
     {
      return Concurrency.Bind(inbox.Receive(null),function(a)
      {
       return Concurrency.Bind(f(a),function()
       {
        return Concurrency.Return(null);
       });
      });
     }),function(a)
     {
      ((function($1)
      {
       return function($2)
       {
        return $1(Utils.prettyPrint($2));
       };
      }(function(s)
      {
       console.log(s);
      }))(a));
      return Concurrency.Zero();
     });
    }));
   });
  },null);
 };
 Dict.add=function(key,v,dict)
 {
  if(dict.ContainsKey(key))
   dict.set_Item(key,v);
  else
   dict.Add(key,v);
 };
 ResetableMemoize=Useful.ResetableMemoize=Runtime.Class({
  ClearCache:function()
  {
   this.cache.Clear();
  }
 },Obj,ResetableMemoize);
 ResetableMemoize.New=Runtime.Ctor(function(f)
 {
  this.f=f;
  this.cache=new Dictionary.New$5();
 },ResetableMemoize);
 PreproDirective.NoPrepo={
  $:11
 };
 PreproDirective.PrepoEndIf={
  $:8
 };
 PreproDirective.PrepoElse={
  $:7
 };
 Useful.asyncStartCancelling=function()
 {
  var tokenSource;
  tokenSource=null;
  return function(a)
  {
   var newTokenSource;
   tokenSource==null?void 0:tokenSource.$0.Cancel$1();
   newTokenSource=new CancellationTokenSource.New();
   Concurrency.Start(a,{
    $:1,
    $0:newTokenSource
   });
   tokenSource={
    $:1,
    $0:newTokenSource
   };
  };
 };
 Useful.separateDirectives=function(fsNass)
 {
  var assembs,defines,prepoIs,nowarns;
  function f(t)
  {
   return t[1];
  }
  function g(a)
  {
   return a.$==0?{
    $:1,
    $0:a.$0
   }:null;
  }
  function f$1(t)
  {
   return t[1];
  }
  function g$1(a)
  {
   return a.$==1?{
    $:1,
    $0:a.$0
   }:null;
  }
  function f$2(t)
  {
   return t[1];
  }
  function g$2(a)
  {
   return a.$==5?{
    $:1,
    $0:a.$0
   }:null;
  }
  function f$3(t)
  {
   return t[1];
  }
  function g$3(a)
  {
   return a.$==4?{
    $:1,
    $0:a.$0
   }:null;
  }
  assembs=Arrays.ofSeq(Seq$2.distinct(Seq$2.choose(function(x)
  {
   return g(f(x));
  },fsNass)));
  defines=Arrays.ofSeq(Seq$2.distinct(Seq$2.choose(function(x)
  {
   return g$1(f$1(x));
  },fsNass)));
  prepoIs=Arrays.ofSeq(Seq$2.distinct(Seq$2.choose(function(x)
  {
   return g$2(f$2(x));
  },fsNass)));
  nowarns=Arrays.ofSeq(Seq$2.distinct(Seq$2.choose(function(x)
  {
   return g$3(f$3(x));
  },fsNass)));
  return[Arrays.ofSeq(Seq$2.map(function(t)
  {
   return t[0];
  },fsNass)),assembs,defines,prepoIs,nowarns];
 };
 Useful.separatePrepros=function(removePrepoLine,code)
 {
  var preL;
  function quoted(line)
  {
   return Option.defaultValue(line,Seq$2.tryLast(Strings.SplitStrings(Strings.Trim(line),["\""],1)));
  }
  function define(line)
  {
   return Option.defaultValue("",Seq$2.tryHead(Strings.SplitStrings(Strings.Trim(line),["#define "],1)));
  }
  function comment(y)
  {
   return"//"+y;
  }
  preL=removePrepoLine?comment:Global.id;
  return Arrays.map(function(line)
  {
   var m,$1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12;
   m=true;
   return m&&Strings.StartsWith(line,"#define")?[comment(line),{
    $:1,
    $0:define(line)
   }]:m&&Strings.StartsWith(line,"#r")?[comment(line),{
    $:0,
    $0:quoted(line)
   }]:m&&Strings.StartsWith(line,"#load")?[comment(line),{
    $:2,
    $0:quoted(line)
   }]:m&&Strings.StartsWith(line,"#nowarn")?[comment(line),{
    $:4,
    $0:quoted(line)
   }]:m&&Strings.StartsWith(line,"# ")?[preL(line),{
    $:3,
    $0:quoted(line)
   }]:m&&Strings.StartsWith(line,"#line")?[preL(line),{
    $:3,
    $0:quoted(line)
   }]:m&&Strings.StartsWith(line,"#I")?[comment(line),{
    $:5,
    $0:quoted(line)
   }]:m&&Strings.StartsWith(line,"#if")?[line,{
    $:6,
    $0:line
   }]:m&&Strings.StartsWith(line,"#else")?[line,PreproDirective.PrepoElse]:m&&Strings.StartsWith(line,"#endif")?[line,PreproDirective.PrepoEndIf]:m&&Strings.StartsWith(line,"#light")?[line,{
    $:9,
    $0:false
   }]:m&&Strings.StartsWith(line,"#")?[comment(line),{
    $:10,
    $0:line
   }]:[line,PreproDirective.NoPrepo];
  },code);
 };
 Useful.mapPrint=function(v)
 {
  Useful.print(v);
  return v;
 };
 Useful.print=function(v)
 {
  ((function($1)
  {
   return function($2)
   {
    return $1(Utils.prettyPrint($2));
   };
  }(function(s)
  {
   console.log(s);
  }))(v));
 };
 Useful.printoutfn=function(out,fmt)
 {
  return fmt(function(s)
  {
   return out(s+"\n");
  });
 };
 Useful.dprintfn=function(fmt)
 {
  return fmt(Global.ignore);
 };
 Useful.rexGuid=function()
 {
  SC$1.$cctor();
  return SC$1.rexGuid;
 };
 Useful.REGEX=function(expr,opt,value)
 {
  var m;
  if(value===null)
   return null;
  else
   try
   {
    m=(new Global.String(value)).match(new Global.RegExp(expr,opt));
    return Unchecked.Equals(m,null)?null:!Unchecked.Equals(m,null)&&m.length===0?null:{
     $:1,
     $0:m
    };
   }
   catch(e)
   {
    return null;
   }
 };
 Useful.cons=function(head,tail)
 {
  return new List$1.T({
   $:1,
   $0:head,
   $1:tail
  });
 };
 Useful.errSimple=function(msg)
 {
  return new ErrSimple.New(msg,false);
 };
 Useful.extract=function(n,s)
 {
  var b;
  return Strings.Substring(s,0,(b=s.length,Unchecked.Compare(n,b)===-1?n:b));
 };
 CodeSnippetId=FsStationShared.CodeSnippetId=Runtime.Class({
  get_Text:function()
  {
   return Global.String(this.$0);
  }
 },null,CodeSnippetId);
 CodeSnippetId.get_New=function()
 {
  return new CodeSnippetId({
   $:0,
   $0:Guid.NewGuid()
  });
 };
 CodeSnippet=FsStationShared.CodeSnippet=Runtime.Class({
  SeparateCode:function(addLinePrepos)
  {
   var noLinePre,indent,p,p$1,a,code;
   function m(l,pr)
   {
    return[Strings.replicate(indent," ")+l,pr];
   }
   noLinePre=!addLinePrepos||this.properties.ContainsKey("NoLinePre");
   indent=this.levelCode*2;
   p=indent===0?[Global.id,""]:[function(a$1)
   {
    return Arrays.map(function($1)
    {
     return m($1[0],$1[1]);
    },a$1);
   },(function($1)
   {
    return function($2)
    {
     return $1("("+Global.String($2)+")");
    };
   }(Global.id))(indent)];
   p$1=Useful.separateDirectives(p[0](Useful.separatePrepros(!addLinePrepos,(noLinePre?Global.id:(a=[(((Runtime.Curried3(function($1,$2,$3)
   {
    return $1("# 1 @\""+Utils.toSafe($2)+Utils.toSafe($3)+"\"");
   }))(Global.id))(p[1]))(this.get_NameSanitized())],function(a$1)
   {
    return a.concat(a$1);
   }))(Strings.SplitChars(this.content,["\n"],0)))));
   code=p$1[0];
   return[[[this.get_NameSanitized(),Arrays.length(code),indent]],code,p$1[1],p$1[2],p$1[3],p$1[4]];
  },
  UniquePredecessors:function(fetcher)
  {
   return FsStationShared.predsL(fetcher,List$1.ofArray([this.id]));
  },
  get_NameSanitized:function()
  {
   return this.id.get_Text()+" "+FsStationShared.sanitize(this.get_Name())+".fsx";
  },
  get_Name:function()
  {
   return FsStationShared.snippetName(this.name,this.content);
  }
 },null,CodeSnippet);
 CodeSnippet.CodeFsx=function(addLinePrepos,snps)
 {
  return(CodeSnippet.CodeAndStarts(addLinePrepos,snps))[0];
 };
 CodeSnippet.CodeAndStarts=function(addLinePrepos,snippets)
 {
  var t;
  t=CodeSnippet.ReducedCode(addLinePrepos,snippets);
  return CodeSnippet.FinishCode(addLinePrepos,t[0],t[1],t[2],t[3],t[4],t[5]);
 };
 CodeSnippet.FinishCode=function(addLinePrepos,lines,code,assembs,defines,prepIs,nowarns)
 {
  var config,part1;
  config=Strings.concat(" ",Seq$2.map(function(y)
  {
   return"-d:"+y;
  },Seq$2.sort(defines)));
  part1=List$1.ofSeq(Seq$2.delay(function()
  {
   return Seq$2.append(config!==""?["////"+config]:[],Seq$2.delay(function()
   {
    return Seq$2.append(Seq$2.map(function($1)
    {
     return function($2)
     {
      return $1("#I @\""+Utils.toSafe($2)+"\"");
     };
    }(Global.id),prepIs),Seq$2.delay(function()
    {
     return Seq$2.append(Seq$2.map(function($1)
     {
      return function($2)
      {
       return $1("#r @\""+Utils.toSafe($2)+"\"");
      };
     }(Global.id),assembs),Seq$2.delay(function()
     {
      return Seq$2.append(addLinePrepos&&!Seq$2.isEmpty(nowarns)?["# 1 \"required for nowarns to work\""]:[],Seq$2.delay(function()
      {
       return Seq$2.map(function($1)
       {
        return function($2)
        {
         return $1("#nowarn \""+Utils.toSafe($2)+"\"");
        };
       }(Global.id),nowarns);
      }));
     }));
    }));
   }));
  }));
  return[Strings.concat("\n",Seq$2.append(part1,code)),Arrays.ofSeq((Seq$2.mapFold(function(firstLine,t)
  {
   var len;
   len=t[1];
   return[[t[0],[t[2],firstLine,firstLine+len]],firstLine+len];
  },part1.get_Length(),lines))[0])];
 };
 CodeSnippet.ReducedCode=function(addLinePrepos,snippets)
 {
  var t,snps;
  function r(a,a$1,a$2,a$3,a$4,a$5)
  {
   return function(t$1)
   {
    return CodeSnippet.AddSeps(a,a$1,a$2,a$3,a$4,a$5,t$1[0],t$1[1],t$1[2],t$1[3],t$1[4],t$1[5]);
   };
  }
  t=Seq$2.reduce(function($1,$2)
  {
   return(function($3)
   {
    return r($3[0],$3[1],$3[2],$3[3],$3[4],$3[5]);
   }($1))($2);
  },(snps=Seq$2.map(function(snp)
  {
   return snp.SeparateCode(addLinePrepos);
  },snippets),Seq$2.isEmpty(snps)?[[[],[],[],[],[],[]]]:snps));
  return[t[0],[Strings.concat("\n",t[1])],t[2],t[3],t[4],t[5]];
 };
 CodeSnippet.AddSeps=function(lines1,code1,assembs1,defines1,prepIs1,nowarns1,lines2,code2,assembs2,defines2,prepIs2,nowarns2)
 {
  return[lines1.concat(lines2),code1.concat(code2),Arrays.ofSeq(Seq$2.distinct(Seq$2.append(assembs1,assembs2))),Arrays.ofSeq(Seq$2.distinct(Seq$2.append(defines1,defines2))),Arrays.ofSeq(Seq$2.distinct(Seq$2.append(prepIs1,prepIs2))),Arrays.ofSeq(Seq$2.distinct(Seq$2.append(nowarns1,nowarns2)))];
 };
 CodeSnippet.TryFindByKey=function(snps,key)
 {
  return Seq$2.tryFind(function(snp)
  {
   return Unchecked.Equals(snp.id,key);
  },snps);
 };
 CodeSnippet.New=function(name,content,parent,predecessors,id,expanded,level,levelCode,properties)
 {
  return new CodeSnippet({
   name:name,
   content:content,
   parent:parent,
   predecessors:predecessors,
   id:id,
   expanded:expanded,
   level:level,
   levelCode:levelCode,
   properties:properties
  });
 };
 FSMessage.GetWholeFile={
  $:11
 };
 FSMessage.GetIdentification={
  $:0
 };
 FSSeverity.FSInfor={
  $:2
 };
 FSSeverity.FSWarning={
  $:1
 };
 FSSeverity.FSError={
  $:0
 };
 FsStationShared.predsL=function(fetcher,ins)
 {
  var ins$1,outs;
  ins$1=ins;
  outs=List$1.T.Empty;
  while(!(ins$1.$==0))
   (function()
   {
    var rest,hd;
    return ins$1.$==1?(rest=ins$1.$1,(hd=ins$1.$0,Seq$2.contains(hd,outs)?void(ins$1=rest):(ins$1=List$1.collect(Global.id,List$1.ofArray([rest,List$1.collect(function(s)
    {
     return List$1.append(Option$1.toList(s.parent),s.predecessors);
    },Option$1.toList(fetcher(hd)))])),void(outs=new List$1.T({
     $:1,
     $0:hd,
     $1:outs
    }))))):null;
   }());
  return outs;
 };
 FsStationShared.preds=function(fetcher,outs,ins)
 {
  var hd,x;
  return ins.$==1?(hd=ins.$0,(x=List$1.collect(Global.id,List$1.ofArray([ins.$1,List$1.collect(function(s)
  {
   return List$1.append(Option$1.toList(s.parent),s.predecessors);
  },Option$1.toList(fetcher(hd)))])),FsStationShared.preds(fetcher,Seq$2.contains(hd,outs)?outs:new List$1.T({
   $:1,
   $0:hd,
   $1:outs
  }),x))):outs;
 };
 FsStationShared.sanitize=function(n)
 {
  var illegal;
  illegal=["\"","<",">","|","\u0000","\u0001","\u0002","\u0003","\u0004","\u0005","\u0006","\u0007","\u0008","\u0009","\n","\u000b","\u000c","\r","\u000e","\u000f","\u0010","\u0011","\u0012","\u0013","\u0014","\u0015","\u0016","\u0017","\u0018","\u0019","\u001a","\u001b","\u001c","\u001d","\u001e","\u001f",":","*","?","\\","/"];
  return Strings.Filter(function(c)
  {
   return!Arrays.contains(c,illegal);
  },n);
 };
 FsStationShared.snippetName=function(name,content)
 {
  return name!==""?name:Option.defaultValue("<empty>",Seq$2.tryHead(Seq$2.filter(function(l)
  {
   return!(Strings.StartsWith(l,"#")||Strings.StartsWith(l,"[<")||Strings.StartsWith(l,"//"));
  },Seq$2.map(Strings.Trim,Strings.SplitChars(content,["\n"],1)))));
 };
 Address=WSMessagingBroker.Address=Runtime.Class({
  get_txt:function()
  {
   return this.$0;
  }
 },null,Address);
 BrokerRequest.BRGetConnections={
  $:0
 };
 MessageType.MsgRequestForEcho={
  $:5
 };
 MessageType.MsgRequestForId={
  $:4
 };
 MessageType.MsgFromBroker={
  $:3
 };
 MessageType.MsgReply={
  $:2
 };
 MessageType.MsgRequest={
  $:1
 };
 MessageType.MsgInformation={
  $:0
 };
 BrokerMessage.BMReceiverCantReply={
  $:4
 };
 BrokerMessage.BMOnlyBrokerShouldUse={
  $:1
 };
 BrokerMessage.BMOk={
  $:0
 };
 Replier.Receiver={
  $:2
 };
 Replier.Broker={
  $:1
 };
 Replier.NoReply={
  $:0
 };
 MessageGeneric.New=function(from,destination,msgType,subtype,id,payload,replier)
 {
  return{
   from:from,
   destination:destination,
   msgType:msgType,
   subtype:subtype,
   id:id,
   payload:payload,
   replier:replier
  };
 };
 ClientTypeFSharp.FSharp={
  $:0
 };
 ClientTypeFSStation.FSStation={
  $:0
 };
 ClientTypeJScript.JScript={
  $:0
 };
 ErrBroker=WSMessagingBroker.ErrBroker=Runtime.Class({
  FSSGlobal_Useful_ErrMsg$get_IsWarning:function()
  {
   return false;
  },
  FSSGlobal_Useful_ErrMsg$get_ErrMsg:function()
  {
   return(function($1)
   {
    return function($2)
    {
     return $1(FSharpStation_GeneratedPrintf.p($2));
    };
   }(Global.id))(this.bm);
  }
 },Obj,ErrBroker);
 ErrBroker.New=Runtime.Ctor(function(bm)
 {
  this.bm=bm;
 },ErrBroker);
 WSMessagingClient=WSMessagingBroker.WSMessagingClient=Runtime.Class({
  sendMsg:function(msg)
  {
   var $this,b;
   $this=this;
   b=Wrap.wrap();
   return b.Run(b.Delay(function()
   {
    return msg.replier.$===0?b.Bind$3($this.sendAndForget(msg),function()
    {
     return b.Return("");
    }):b.ReturnFrom($this.sendGetReply(msg));
   }));
  },
  getListeners:function()
  {
   var $this,b;
   $this=this;
   b=Wrap.wrap();
   return b.Run(b.Delay(function()
   {
    var dst,p;
    return b.Bind$3($this.sendGetReply((dst=WSMessagingBroker.MessageBrokerAddress(),(p=JSON.stringify((FSharpStation_JsonEncoder.j$10())(BrokerRequest.BRGetConnections)),MessageGeneric.New(new Address({
     $:0,
     $0:""
    }),dst,MessageType.MsgRequest,"",Guid.NewGuid(),p,Replier.NoReply)))),function(a)
    {
     return b.Return((FSharpStation_JsonDecoder.j$10())(JSON.parse(a)).$0);
    });
   }));
  },
  sendGetReply:function(msg)
  {
   var $this,b;
   $this=this;
   b=Wrap.wrap();
   return b.Run(b.Delay(function()
   {
    return b.Bind$3($this.sendAndReply(Replier.Receiver,msg),function(a)
    {
     var m;
     return b.Bind$1((m=a.msgType,m.$==2?Result.succeed(a.payload):m.$==3?Result.fail(new ErrBroker.New((FSharpStation_JsonDecoder.j$11())(JSON.parse(a.payload)))):Result.fail(new ErrBroker.New({
      $:5,
      $0:a.msgType
     }))),function(a$1)
     {
      return b.Return(a$1);
     });
    });
   }));
  },
  sendAndVerify:function(msg)
  {
   var $this,b;
   $this=this;
   b=Wrap.wrap();
   return b.Run(b.Delay(function()
   {
    return b.Bind$3($this.sendAndReply(Replier.Broker,msg),function(a)
    {
     var bm;
     return b.Bind$1(a.msgType.$==3?(bm=(FSharpStation_JsonDecoder.j$11())(JSON.parse(a.payload)),bm.$===0?Result.succeed():Result.fail(new ErrBroker.New(bm))):Result.fail(new ErrBroker.New({
      $:5,
      $0:a.msgType
     })),function()
     {
      return b.Return();
     });
    });
   }));
  },
  sendAndReply:function(rpl,msg)
  {
   var $this,b;
   $this=this;
   b=Wrap.wrap();
   return b.Run(b.Delay(function()
   {
    return b.Bind$3($this.getServer(),function(a)
    {
     return b.Bind$2(Concurrency.FromContinuations(function($1,$2,$3)
     {
      var o,b$1;
      o=$this.waiting;
      o.mailbox.AddLast({
       $:0,
       $0:msg.id,
       $1:[$1,$2,$3]
      });
      o.resume();
      $this.postR(a,rpl,msg);
      return $this.wsTimeout>0?Concurrency.Start((b$1=null,Concurrency.Delay(function()
      {
       return Concurrency.Bind(Concurrency.Sleep($this.wsTimeout),function()
       {
        var o$1;
        o$1=$this.waiting;
        o$1.mailbox.AddLast({
         $:2,
         $0:msg.id,
         $1:function()
         {
          return new TimeoutException.New$1((((Runtime.Curried3(function($4,$5,$6)
          {
           return $4("Did not receive reply in "+Global.String($5)+" seconds for Message: "+GeneratedPrintf.p$23($6));
          }))(Global.id))($this.wsTimeout/1000>>0))(msg));
         }
        });
        o$1.resume();
        return Concurrency.Zero();
       });
      })),null):null;
     }),function(a$1)
     {
      return b.Return(a$1);
     });
    });
   }));
  },
  sendAndForget:function(msg)
  {
   var $this,b;
   $this=this;
   b=Wrap.wrap();
   return b.Run(b.Delay(function()
   {
    return b.Bind$3($this.getServer(),function(a)
    {
     $this.postR(a,Replier.NoReply,msg);
     return b.Zero();
    });
   }));
  },
  postR:function(server,rpl,msg)
  {
   try
   {
    server.FSSGlobal_WSMessagingBroker_IServer$Post(WSMessagingBroker.replier(rpl,WSMessagingBroker.from(this.clientAddress,msg)));
   }
   catch(e)
   {
    this.serverO=null;
    throw e;
   }
  },
  getServer:function()
  {
   var $this,b;
   $this=this;
   b=Wrap.wrap();
   return b.Run(b.Delay(function()
   {
    return b.Bind$2($this.checkServer.PostAndAsyncReply(function(reply)
    {
     return[reply,null];
    },null),function(a)
    {
     return b.Bind$1(a,function(a$1)
     {
      return b.Return(a$1);
     });
    });
   }));
  },
  connectToWebSocketServer:function()
  {
   var $this,b;
   $this=this;
   Useful.dprintfn(function($1)
   {
    return $1("in connectToWebSocketServer");
   });
   b=null;
   return Concurrency.Delay(function()
   {
    return Concurrency.Bind((($this.connectStateful($this.wsEndPoint))($this.clientId))(function(server)
    {
     var b$1;
     b$1=null;
     return Concurrency.Delay(function()
     {
      return Concurrency.Return([0,function(state)
      {
       return function(wsmsg)
       {
        var b$2;
        b$2=null;
        return Concurrency.Delay(function()
        {
         return Concurrency.Combine(Concurrency.TryWith(Concurrency.Delay(function()
         {
          return wsmsg.$==2?((Useful.printoutfn($this.out,function($1)
          {
           return function($2)
           {
            return $1("WebSocket "+Utils.toSafe($2)+" connection open.");
           };
          }))($this.clientId),$this.serverO={
           $:1,
           $0:server
          },Concurrency.Zero()):wsmsg.$==3?((Useful.printoutfn($this.out,function($1)
          {
           return function($2)
           {
            return $1("WebSocket "+Utils.toSafe($2)+" connection closed.");
           };
          }))($this.clientId),$this.close(),Concurrency.Zero()):wsmsg.$==1?((Useful.printoutfn($this.out,function($1)
          {
           return function($2)
           {
            return $1("WebSocket "+Utils.toSafe($2)+" connection error!");
           };
          }))($this.clientId),Concurrency.Zero()):($this.processMessage(wsmsg.$0),Concurrency.Zero());
         }),function(a)
         {
          (((Runtime.Curried3(function($1,$2,$3)
          {
           return $1("msg: "+FSharpStation_GeneratedPrintf.p$16($2)+" \nexn:"+Utils.prettyPrint($3));
          }))(function(s)
          {
           console.log(s);
          }))(wsmsg))(a);
          return Concurrency.Zero();
         }),Concurrency.Delay(function()
         {
          return Concurrency.Return(state);
         }));
        });
       };
      }]);
     });
    }),function()
    {
     Useful.dprintfn(function($1)
     {
      return $1("connectToWebSocketServer with server");
     });
     return Concurrency.Zero();
    });
   });
  },
  processMessage:function(msg)
  {
   var $1,$this,m,m$1,x;
   $this=this;
   (Useful.dprintfn(function($2)
   {
    return function($3)
    {
     return $2(GeneratedPrintf.p$23($3));
    };
   }))(msg);
   m=msg.msgType;
   function g(m$2)
   {
    $this.reply(m$2);
   }
   switch(m.$==2?0:m.$==0?1:m.$==1?2:m.$==5?3:m.$==4?4:0)
   {
    case 0:
     this.processReply(msg);
     break;
    case 1:
     ((Useful.printoutfn(this.out,Runtime.Curried3(function($2,$3,$4)
     {
      return $2("Information from '"+Utils.toSafe($3)+"': "+Utils.toSafe($4));
     })))(msg.from.get_txt()))(((Provider.Id())())(JSON.parse(msg.payload)));
     break;
    case 2:
     m$1=this.payloadProcessorO;
     m$1!=null&&m$1.$==1?Wrap.Start(Wrap.map(function(x$1)
     {
      return g(WSMessagingBroker.makeReply(x$1));
     },$this.mapPayloadWrap(m$1.$0,msg)),null):msg.replier.$===2?null:null;
     break;
    case 3:
     $this.reply(WSMessagingBroker.msgType(MessageType.MsgInformation,WSMessagingBroker.mapPayload(Global.id,msg)));
     break;
    case 4:
     $this.reply(WSMessagingBroker.msgType(MessageType.MsgInformation,(x=WSMessagingBroker.makeReply(msg),MessageGeneric.New(x.from,x.destination,x.msgType,x.subtype,x.id,JSON.stringify(((Provider.Id())())(this.clientId)),x.replier))));
     break;
   }
  },
  mapPayloadWrap:function(fW,msg)
  {
   var b;
   b=Wrap.wrap();
   return b.Run(b.Delay(function()
   {
    return b.Bind$3(fW(msg.payload),function(a)
    {
     return b.Return(WSMessagingBroker.mapPayload(function()
     {
      return a;
     },msg));
    });
   }));
  },
  processReply:function(msg)
  {
   var _this;
   _this=this.waiting;
   _this.mailbox.AddLast({
    $:1,
    $0:msg.id,
    $1:msg
   });
   _this.resume();
  },
  close:function()
  {
   var o;
   o=this.serverO;
   o==null?void 0:(o.$0.FSSGlobal_WSMessagingBroker_IServer$Close(),this.serverO=null);
  },
  reply:function(msg)
  {
   var o;
   o=this.serverO;
   o==null?void 0:o.$0.FSSGlobal_WSMessagingBroker_IServer$Post(WSMessagingBroker.destination(msg.from,WSMessagingBroker.from(this.clientAddress,msg)));
  },
  set_Out:function(fout)
  {
   this.out=fout;
  },
  SendMsg:function(msg)
  {
   return this.sendMsg(msg);
  },
  get_ClientId:function()
  {
   return this.clientId;
  },
  get_EndPoint:function()
  {
   return this.wsEndPoint;
  },
  get_MBListeners:function()
  {
   return this.getListeners();
  },
  Dispose:function()
  {
   this.close();
  }
 },Obj,WSMessagingClient);
 WSMessagingClient.New=Runtime.Ctor(function(clientId,timeout,endPoint)
 {
  WSMessagingClient.New$1.call(this,Runtime.Curried3(function(u,c,f)
  {
   return Async.map(Global.ignore,WithEncoding.ConnectStateful(function(a)
   {
    return JSON.stringify((FSharpStation_JsonEncoder.j())(a));
   },function(a)
   {
    return(FSharpStation_JsonDecoder.j())(JSON.parse(a));
   },Endpoint.CreateRemote((((Runtime.Curried3(function($1,$2,$3)
   {
    return $1("ws://"+Utils.toSafe($2)+"?ClientId="+Utils.toSafe($3));
   }))(Global.id))(u))(c),{
    $:1,
    $0:WebSocket.JsonEncoding.Readable
   }),function(serverP)
   {
    return f({
     FSSGlobal_WSMessagingBroker_IServer$Post:function(v)
     {
      return serverP.Post(v);
     },
     FSSGlobal_WSMessagingBroker_IServer$Close:function()
     {
      return serverP.get_Connection().close(1000);
     }
    });
   }));
  }),clientId,timeout,endPoint);
 },WSMessagingClient);
 WSMessagingClient.New$1=Runtime.Ctor(function(connectStateful,clientId,timeout,endPoint)
 {
  var $this,d;
  $this=this;
  this.connectStateful=connectStateful;
  this.clientId=clientId;
  this.wsEndPoint=(d=WSMessagingBroker.extractEndPoint()+"/ws",endPoint==null?d:endPoint.$0);
  this.clientAddress=new Address({
   $:0,
   $0:this.clientId
  });
  this.wsTimeout=timeout==null?60000:timeout.$0;
  this.out=function($1)
  {
   return function($2)
   {
    return $1(Utils.toSafe($2));
   };
  }(function(s)
  {
   console.log(s);
  });
  this.serverO=null;
  this.payloadProcessorO=null;
  this.waiting=WSMessagingBroker.waitingAgent(function(msg)
  {
   ((Useful.printoutfn($this.out,Runtime.Curried3(function($1,$2,$3)
   {
    return $1("Reply from '"+Utils.toSafe($2)+"': "+Utils.toSafe($3));
   })))(msg.from.get_txt()))(msg.payload);
  });
  this.checkServer=Mailbox.callA(function()
  {
   var b;
   b=null;
   return Concurrency.Delay(function()
   {
    Useful.dprintfn(function($1)
    {
     return $1("getServer");
    });
    return Concurrency.Combine($this.serverO==null?(Useful.dprintfn(function($1)
    {
     return $1("getServer Connecting");
    }),Concurrency.Bind($this.connectToWebSocketServer(),function()
    {
     return Concurrency.Bind(Concurrency.Sleep(200),function()
     {
      return Concurrency.Return(null);
     });
    })):Concurrency.Zero(),Concurrency.Delay(function()
    {
     var x;
     return Concurrency.Return((x=$this.serverO,Result.fromOption(new ErrSimple.New("could not connect to Server",false),x)));
    }));
   });
  });
 },WSMessagingClient);
 FsStationClientErr=WSMessagingBroker.FsStationClientErr=Runtime.Class({
  FSSGlobal_Useful_ErrMsg$get_IsWarning:function()
  {
   return this.$==0&&this.$1.$==0;
  },
  FSSGlobal_Useful_ErrMsg$get_ErrMsg:function()
  {
   return this.$==0?(((Runtime.Curried3(function($1,$2,$3)
   {
    return $1(FSharpStation_GeneratedPrintf.p$3($2)+" "+Utils.toSafe($3));
   }))(Global.id))(this.$1))(this.$0):(function($1)
   {
    return function($2)
    {
     return $1(FSharpStation_GeneratedPrintf.p$4($2));
    };
   }(Global.id))(this);
  }
 },null,FsStationClientErr);
 FStationMessaging=WSMessagingBroker.FStationMessaging=Runtime.Class({
  snippetResponse:function(response)
  {
   return response.$==2?Result.succeed(response.$0):Result.fail(new FsStationClientErr({
    $:1,
    $0:Global.String(response)
   }));
  },
  snippetsResponse:function(response)
  {
   return response.$==3?Result.succeed(response.$0):Result.fail(new FsStationClientErr({
    $:1,
    $0:Global.String(response)
   }));
  },
  stringResponse:function(response)
  {
   var $1,$2;
   return response.$==1&&(($2=response.$0,$2!=null&&$2.$==1)&&($1=response.$0.$0,true))?Result.succeed($1):Result.fail(new FsStationClientErr({
    $:1,
    $0:Global.String(response)
   }));
  },
  stringResponseR:function(response)
  {
   var $1,$2;
   function m(a,a$1)
   {
    return new FsStationClientErr({
     $:0,
     $0:a,
     $1:a$1
    });
   }
   return response.$==4&&(($2=response.$0,$2!=null&&$2.$==1)&&($1=[response.$0.$0,response.$1],true))?Result.succeedWithMsgs($1[0],Arrays.ofSeq(Seq$2.map(function($3)
   {
    return m($3[0],$3[1]);
   },$1[1]))):Result.fail(new FsStationClientErr({
    $:1,
    $0:Global.String(response)
   }));
  },
  toId:function()
  {
   return new Address({
    $:0,
    $0:this.fsIds
   });
  },
  get_MessagingClient:function()
  {
   return this.msgClient;
  },
  set_FSStationId:function(id)
  {
   this.fsIds=id;
  },
  get_FSStationId:function()
  {
   return this.fsIds;
  },
  RunActionCall:function(name,act,parms)
  {
   var $this,t,t$1,msg,b;
   function checkResponse(r)
   {
    return $this.stringResponseR(r);
   }
   $this=this;
   t=this.toId();
   t$1=this;
   msg={
    $:14,
    $0:name,
    $1:act,
    $2:parms
   };
   b=Wrap.wrap();
   return b.Run(b.Delay(function()
   {
    var p;
    return b.Bind$3(Wrap.map(function(a)
    {
     return(FSharpStation_JsonDecoder.j$4())(JSON.parse(a));
    },t$1.msgClient.sendGetReply((p=JSON.stringify((FSharpStation_JsonEncoder.j$4())(msg)),MessageGeneric.New(new Address({
     $:0,
     $0:""
    }),t,MessageType.MsgRequest,"",Guid.NewGuid(),p,Replier.NoReply)))),function(a)
    {
     return b.Bind$1(checkResponse(a),function(a$1)
     {
      return b.Return(a$1);
     });
    });
   }));
  },
  RunSnippet:function(url,snpPath)
  {
   var $this,t,m,t$1,b;
   function checkResponse(r)
   {
    return $this.stringResponseR(r);
   }
   $this=this;
   t=this.toId();
   m={
    $:13,
    $0:Strings.SplitChars(snpPath,["/"],0),
    $1:url
   };
   t$1=this;
   b=Wrap.wrap();
   return b.Run(b.Delay(function()
   {
    var p;
    return b.Bind$3(Wrap.map(function(a)
    {
     return(FSharpStation_JsonDecoder.j$4())(JSON.parse(a));
    },t$1.msgClient.sendGetReply((p=JSON.stringify((FSharpStation_JsonEncoder.j$4())(m)),MessageGeneric.New(new Address({
     $:0,
     $0:""
    }),t,MessageType.MsgRequest,"",Guid.NewGuid(),p,Replier.NoReply)))),function(a)
    {
     return b.Bind$1(checkResponse(a),function(a$1)
     {
      return b.Return(a$1);
     });
    });
   }));
  },
  GenericMessage:function(txt)
  {
   var $this,t,t$1,msg,b;
   function checkResponse(r)
   {
    return $this.stringResponse(r);
   }
   $this=this;
   t=this.toId();
   t$1=this;
   msg={
    $:1,
    $0:txt
   };
   b=Wrap.wrap();
   return b.Run(b.Delay(function()
   {
    var p;
    return b.Bind$3(Wrap.map(function(a)
    {
     return(FSharpStation_JsonDecoder.j$4())(JSON.parse(a));
    },t$1.msgClient.sendGetReply((p=JSON.stringify((FSharpStation_JsonEncoder.j$4())(msg)),MessageGeneric.New(new Address({
     $:0,
     $0:""
    }),t,MessageType.MsgRequest,"",Guid.NewGuid(),p,Replier.NoReply)))),function(a)
    {
     return b.Bind$1(checkResponse(a),function(a$1)
     {
      return b.Return(a$1);
     });
    });
   }));
  },
  RequestWholeFile:function()
  {
   var $this,t,t$1,msg,b;
   function checkResponse(r)
   {
    return $this.stringResponse(r);
   }
   $this=this;
   t=this.toId();
   t$1=this;
   msg=FSMessage.GetWholeFile;
   b=Wrap.wrap();
   return b.Run(b.Delay(function()
   {
    var p;
    return b.Bind$3(Wrap.map(function(a)
    {
     return(FSharpStation_JsonDecoder.j$4())(JSON.parse(a));
    },t$1.msgClient.sendGetReply((p=JSON.stringify((FSharpStation_JsonEncoder.j$4())(msg)),MessageGeneric.New(new Address({
     $:0,
     $0:""
    }),t,MessageType.MsgRequest,"",Guid.NewGuid(),p,Replier.NoReply)))),function(a)
    {
     return b.Bind$1(checkResponse(a),function(a$1)
     {
      return b.Return(a$1);
     });
    });
   }));
  },
  RequestPredsById:function(snpId)
  {
   var $this,t,t$1,msg,b;
   function checkResponse(r)
   {
    return $this.snippetsResponse(r);
   }
   $this=this;
   t=this.toId();
   t$1=this;
   msg={
    $:4,
    $0:snpId
   };
   b=Wrap.wrap();
   return b.Run(b.Delay(function()
   {
    var p;
    return b.Bind$3(Wrap.map(function(a)
    {
     return(FSharpStation_JsonDecoder.j$4())(JSON.parse(a));
    },t$1.msgClient.sendGetReply((p=JSON.stringify((FSharpStation_JsonEncoder.j$4())(msg)),MessageGeneric.New(new Address({
     $:0,
     $0:""
    }),t,MessageType.MsgRequest,"",Guid.NewGuid(),p,Replier.NoReply)))),function(a)
    {
     return b.Bind$1(checkResponse(a),function(a$1)
     {
      return b.Return(a$1);
     });
    });
   }));
  },
  RequestPreds:function(snpPath)
  {
   var $this,t,m,t$1,b;
   function checkResponse(r)
   {
    return $this.snippetsResponse(r);
   }
   $this=this;
   t=this.toId();
   m={
    $:8,
    $0:Strings.SplitChars(snpPath,["/"],0)
   };
   t$1=this;
   b=Wrap.wrap();
   return b.Run(b.Delay(function()
   {
    var p;
    return b.Bind$3(Wrap.map(function(a)
    {
     return(FSharpStation_JsonDecoder.j$4())(JSON.parse(a));
    },t$1.msgClient.sendGetReply((p=JSON.stringify((FSharpStation_JsonEncoder.j$4())(m)),MessageGeneric.New(new Address({
     $:0,
     $0:""
    }),t,MessageType.MsgRequest,"",Guid.NewGuid(),p,Replier.NoReply)))),function(a)
    {
     return b.Bind$1(checkResponse(a),function(a$1)
     {
      return b.Return(a$1);
     });
    });
   }));
  },
  RequestJSCode:function(snpPath)
  {
   var $this,t,m,t$1,b;
   function checkResponse(r)
   {
    return $this.stringResponseR(r);
   }
   $this=this;
   t=this.toId();
   m={
    $:10,
    $0:Strings.SplitChars(snpPath,["/"],0)
   };
   t$1=this;
   b=Wrap.wrap();
   return b.Run(b.Delay(function()
   {
    var p;
    return b.Bind$3(Wrap.map(function(a)
    {
     return(FSharpStation_JsonDecoder.j$4())(JSON.parse(a));
    },t$1.msgClient.sendGetReply((p=JSON.stringify((FSharpStation_JsonEncoder.j$4())(m)),MessageGeneric.New(new Address({
     $:0,
     $0:""
    }),t,MessageType.MsgRequest,"",Guid.NewGuid(),p,Replier.NoReply)))),function(a)
    {
     return b.Bind$1(checkResponse(a),function(a$1)
     {
      return b.Return(a$1);
     });
    });
   }));
  },
  RequestCode:function(snpPath)
  {
   var $this,t,m,t$1,b;
   function checkResponse(r)
   {
    return $this.stringResponse(r);
   }
   $this=this;
   t=this.toId();
   m={
    $:7,
    $0:Strings.SplitChars(snpPath,["/"],0)
   };
   t$1=this;
   b=Wrap.wrap();
   return b.Run(b.Delay(function()
   {
    var p;
    return b.Bind$3(Wrap.map(function(a)
    {
     return(FSharpStation_JsonDecoder.j$4())(JSON.parse(a));
    },t$1.msgClient.sendGetReply((p=JSON.stringify((FSharpStation_JsonEncoder.j$4())(m)),MessageGeneric.New(new Address({
     $:0,
     $0:""
    }),t,MessageType.MsgRequest,"",Guid.NewGuid(),p,Replier.NoReply)))),function(a)
    {
     return b.Bind$1(checkResponse(a),function(a$1)
     {
      return b.Return(a$1);
     });
    });
   }));
  },
  RequestSnippet:function(snpPath)
  {
   var $this,t,m,t$1,b;
   function checkResponse(r)
   {
    return $this.snippetResponse(r);
   }
   $this=this;
   t=this.toId();
   m={
    $:9,
    $0:Strings.SplitChars(snpPath,["/"],0)
   };
   t$1=this;
   b=Wrap.wrap();
   return b.Run(b.Delay(function()
   {
    var p;
    return b.Bind$3(Wrap.map(function(a)
    {
     return(FSharpStation_JsonDecoder.j$4())(JSON.parse(a));
    },t$1.msgClient.sendGetReply((p=JSON.stringify((FSharpStation_JsonEncoder.j$4())(m)),MessageGeneric.New(new Address({
     $:0,
     $0:""
    }),t,MessageType.MsgRequest,"",Guid.NewGuid(),p,Replier.NoReply)))),function(a)
    {
     return b.Bind$1(checkResponse(a),function(a$1)
     {
      return b.Return(a$1);
     });
    });
   }));
  },
  SendMessage:function(msg)
  {
   var t,t$1,b;
   t=this.toId();
   t$1=this;
   b=Wrap.wrap();
   return b.Run(b.Delay(function()
   {
    var p;
    return b.Bind$3(Wrap.map(function(a)
    {
     return(FSharpStation_JsonDecoder.j$4())(JSON.parse(a));
    },t$1.msgClient.sendGetReply((p=JSON.stringify((FSharpStation_JsonEncoder.j$4())(msg)),MessageGeneric.New(new Address({
     $:0,
     $0:""
    }),t,MessageType.MsgRequest,"",Guid.NewGuid(),p,Replier.NoReply)))),function(a)
    {
     return b.Bind$1(Result.succeed(a),function(a$1)
     {
      return b.Return(a$1);
     });
    });
   }));
  },
  SendMessage$1:function(toId2,msg)
  {
   var t,b;
   t=this;
   b=Wrap.wrap();
   return b.Run(b.Delay(function()
   {
    var p;
    return b.Bind$3(Wrap.map(function(a)
    {
     return(FSharpStation_JsonDecoder.j$4())(JSON.parse(a));
    },t.msgClient.sendGetReply((p=JSON.stringify((FSharpStation_JsonEncoder.j$4())(msg)),MessageGeneric.New(new Address({
     $:0,
     $0:""
    }),toId2,MessageType.MsgRequest,"",Guid.NewGuid(),p,Replier.NoReply)))),function(a)
    {
     return b.Bind$1(Result.succeed(a),function(a$1)
     {
      return b.Return(a$1);
     });
    });
   }));
  }
 },Obj,FStationMessaging);
 FStationMessaging.get_FSStationId_=function()
 {
  return"FSharpStation1528950548035";
 };
 FStationMessaging.New=Runtime.Ctor(function(clientId,fsStationId,timeout,endPoint)
 {
  FStationMessaging.New$1.call(this,new WSMessagingClient.New(clientId,timeout,endPoint),clientId,fsStationId);
 },FStationMessaging);
 FStationMessaging.New$1=Runtime.Ctor(function(msgClient,_clientId,fsStationId)
 {
  this.msgClient=msgClient;
  this.fsIds=Option.defaultValue("FSharpStation1528950548035",fsStationId);
 },FStationMessaging);
 WSMessagingBroker.extractEndPoint=function()
 {
  return Arrays.get(Strings.SplitChars(location.href.substring(location.href.indexOf("//")+2),["/"],0),0);
 };
 WSMessagingBroker.waitingAgent=function(defProc)
 {
  return Mailbox.foldA(function($1,$2)
  {
   var b;
   b=null;
   return Concurrency.Delay(function()
   {
    var msg,o,$3,f,o$1,$4,f$1,o$2,$5;
    return Concurrency.Combine($2.$==1?(msg=$2.$1,(Option.defaultWith(function()
    {
     defProc(msg);
    },(o=Map.TryFind($2.$0,$1),o==null?null:{
     $:1,
     $0:($3=o.$0,(f=$3[0],($3[1],$3[2],f(msg))))
    })),Concurrency.Zero())):$2.$==2?(o$1=Map.TryFind($2.$0,$1),o$1==null?void 0:($4=o$1.$0,$4[0],f$1=$4[1],$4[2],f$1($2.$1())),Concurrency.Zero()):$2.$==3?(o$2=Map.TryFind($2.$0,$1),o$2==null?void 0:($5=o$2.$0,$5[0],$5[1],$5[2]($2.$1())),Concurrency.Zero()):Concurrency.Zero(),Concurrency.Delay(function()
    {
     var $6;
     return Concurrency.Return(($2.$==2?($6=$2.$0,true):$2.$==3?($6=$2.$0,true):$2.$==0?false:($6=$2.$0,true))?$1.Remove($6):$1.Add($2.$0,$2.$1));
    }));
   });
  },new FSharpMap.New([]));
 };
 WSMessagingBroker.makeReply=function(msg)
 {
  return WSMessagingBroker.replier(Replier.NoReply,WSMessagingBroker.msgType(MessageType.MsgReply,msg));
 };
 WSMessagingBroker.mapPayload=function(f,msg)
 {
  return MessageGeneric.New(msg.from,msg.destination,msg.msgType,msg.subtype,msg.id,f(msg.payload),msg.replier);
 };
 WSMessagingBroker.msgId=function(id,msg)
 {
  return MessageGeneric.New(msg.from,msg.destination,msg.msgType,msg.subtype,id,msg.payload,msg.replier);
 };
 WSMessagingBroker.replier=function(rpl,msg)
 {
  return MessageGeneric.New(msg.from,msg.destination,msg.msgType,msg.subtype,msg.id,msg.payload,rpl);
 };
 WSMessagingBroker.subtype=function(sub,msg)
 {
  return MessageGeneric.New(msg.from,msg.destination,msg.msgType,sub,msg.id,msg.payload,msg.replier);
 };
 WSMessagingBroker.msgType=function(typ,msg)
 {
  return MessageGeneric.New(msg.from,msg.destination,typ,msg.subtype,msg.id,msg.payload,msg.replier);
 };
 WSMessagingBroker.destination=function(dst,msg)
 {
  return MessageGeneric.New(msg.from,dst,msg.msgType,msg.subtype,msg.id,msg.payload,msg.replier);
 };
 WSMessagingBroker.from=function(frm,msg)
 {
  return MessageGeneric.New(frm,msg.destination,msg.msgType,msg.subtype,msg.id,msg.payload,msg.replier);
 };
 WSMessagingBroker.MessageBrokerAddress=function()
 {
  SC$1.$cctor();
  return SC$1.MessageBrokerAddress;
 };
 WSMessagingBroker.MessageBrokerId=function()
 {
  SC$1.$cctor();
  return SC$1.MessageBrokerId;
 };
 ResponseError.New=function(Code,Message)
 {
  return{
   Code:Code,
   Message:Message
  };
 };
 Location.New=function(File,Line,Column)
 {
  return{
   File:File,
   Line:Line,
   Column:Column
  };
 };
 CompletionResponse.New=function(Name,ReplacementText,Glyph,GlyphChar)
 {
  return{
   Name:Name,
   ReplacementText:ReplacementText,
   Glyph:Glyph,
   GlyphChar:GlyphChar
  };
 };
 OverloadDescription.New=function(Signature,Comment)
 {
  return{
   Signature:Signature,
   Comment:Comment
  };
 };
 OverloadParameter.New=function(Name,CanonicalTypeTextForSorting,Display,Description)
 {
  return{
   Name:Name,
   CanonicalTypeTextForSorting:CanonicalTypeTextForSorting,
   Display:Display,
   Description:Description
  };
 };
 Overload.New=function(Tip,TypeText,Parameters,IsStaticArguments)
 {
  return{
   Tip:Tip,
   TypeText:TypeText,
   Parameters:Parameters,
   IsStaticArguments:IsStaticArguments
  };
 };
 Parameter.New=function(Name,Type)
 {
  return{
   Name:Name,
   Type:Type
  };
 };
 SignatureData.New=function(OutputType,Parameters)
 {
  return{
   OutputType:OutputType,
   Parameters:Parameters
  };
 };
 MethodResponse.New=function(Name,CurrentParameter,Overloads)
 {
  return{
   Name:Name,
   CurrentParameter:CurrentParameter,
   Overloads:Overloads
  };
 };
 SymbolUseRange.New=function(FileName,StartLine,StartColumn,EndLine,EndColumn,IsFromDefinition,IsFromAttribute,IsFromComputationExpression,IsFromDispatchSlotImplementation,IsFromPattern,IsFromType)
 {
  return{
   FileName:FileName,
   StartLine:StartLine,
   StartColumn:StartColumn,
   EndLine:EndLine,
   EndColumn:EndColumn,
   IsFromDefinition:IsFromDefinition,
   IsFromAttribute:IsFromAttribute,
   IsFromComputationExpression:IsFromComputationExpression,
   IsFromDispatchSlotImplementation:IsFromDispatchSlotImplementation,
   IsFromPattern:IsFromPattern,
   IsFromType:IsFromType
  };
 };
 SymbolUseResponse.New=function(Name,Uses)
 {
  return{
   Name:Name,
   Uses:Uses
  };
 };
 HelpTextResponse.New=function(Name,Overloads)
 {
  return{
   Name:Name,
   Overloads:Overloads
  };
 };
 CompilerLocationResponse.New=function(Fsc,Fsi,MSBuild)
 {
  return{
   Fsc:Fsc,
   Fsi:Fsi,
   MSBuild:MSBuild
  };
 };
 FSharpErrorInfo.New=function(FileName,StartLine,EndLine,StartColumn,EndColumn,Message,Subcategory)
 {
  return{
   FileName:FileName,
   StartLine:StartLine,
   EndLine:EndLine,
   StartColumn:StartColumn,
   EndColumn:EndColumn,
   Message:Message,
   Subcategory:Subcategory
  };
 };
 ErrorResponse.New=function(File,Errors)
 {
  return{
   File:File,
   Errors:Errors
  };
 };
 Colorization.New=function(Kind)
 {
  return{
   Kind:Kind
  };
 };
 Declaration.New=function(UniqueName,Name,Glyph,GlyphChar,IsTopLevel,File,EnclosingEntity,IsAbstract)
 {
  return{
   UniqueName:UniqueName,
   Name:Name,
   Glyph:Glyph,
   GlyphChar:GlyphChar,
   IsTopLevel:IsTopLevel,
   File:File,
   EnclosingEntity:EnclosingEntity,
   IsAbstract:IsAbstract
  };
 };
 DeclarationResponse.New=function(Declaration$1,Nested)
 {
  return{
   Declaration:Declaration$1,
   Nested:Nested
  };
 };
 OpenNamespace.New=function(Namespace,Name,Type,Line,Column,MultipleNames)
 {
  return{
   Namespace:Namespace,
   Name:Name,
   Type:Type,
   Line:Line,
   Column:Column,
   MultipleNames:MultipleNames
  };
 };
 QualifySymbol.New=function(Name,Qualifier)
 {
  return{
   Name:Name,
   Qualifier:Qualifier
  };
 };
 ResolveNamespaceResponse.New=function(Opens,Qualifies,Word)
 {
  return{
   Opens:Opens,
   Qualifies:Qualifies,
   Word:Word
  };
 };
 UnionCaseResponse.New=function(Text)
 {
  return{
   Text:Text
  };
 };
 ACMessage.ACMIdentification={
  $:0
 };
 FSAutoCompleteIntermediaryClient=FSAutoCompleteIntermediary.FSAutoCompleteIntermediaryClient=Runtime.Class({
  info2Bool:function(inf)
  {
   return inf.$==0&&inf.$0==="true";
  },
  errors2String:function(errs)
  {
   return errs.$==7?Strings.concat("\n",Seq$2.map(function(er)
   {
    return((((((((Runtime.Curried(function($1,$2,$3,$4,$5,$6,$7,$8)
    {
     return $1("ErrFSharp \"F# "+Utils.toSafe($2)+".fsx ("+Global.String($3)+","+Global.String($4)+") - ("+Global.String($5)+","+Global.String($6)+") "+Utils.toSafe($7)+":"+Utils.toSafe($8)+"\"");
    },8))(Global.id))(er.FileName))(er.StartLine))(er.StartColumn))(er.EndLine))(er.EndColumn))(er.Subcategory))(er.Message);
   },errs.$0.Errors)):(function($1)
   {
    return function($2)
    {
     return $1(FSharpStation_GeneratedPrintf.p$7($2));
    };
   }(Global.id))(errs);
  },
  tip2String:function(tip)
  {
   return tip.$==11?Strings.concat("\n",Seq$2.collect(function(t)
   {
    return List$1.ofArray([t.Signature,t.Comment]);
   },Seq$2.collect(Global.id,tip.$0))):(function($1)
   {
    return function($2)
    {
     return $1(FSharpStation_GeneratedPrintf.p$7($2));
    };
   }(Global.id))(tip);
  },
  comp2Strings:function(comp)
  {
   var $this;
   $this=this;
   return comp.$==3?Arrays.map(function(cs)
   {
    return[cs.Name,cs.ReplacementText,cs.Glyph,cs.GlyphChar];
   },comp.$0):comp.$==2?[]:comp.$==17?Arrays.collect(function(c)
   {
    return $this.comp2Strings(c);
   },comp.$0):[[(function($1)
   {
    return function($2)
    {
     return $1(FSharpStation_GeneratedPrintf.p$7($2));
    };
   }(Global.id))(comp),"","ErrorMsg","E"]];
  },
  Async_map:function(f,aa)
  {
   var b;
   b=null;
   return Concurrency.Delay(function()
   {
    return Concurrency.Bind(aa,function(a)
    {
     return Concurrency.Return(f(a));
    });
   });
  },
  FindDecl:function(fname,line,col,sId)
  {
   return this.Async_map(Global.id,FSAutoCompleteIntermediary.sendMessage({
    $:7,
    $0:fname,
    $1:line,
    $2:col,
    $3:sId
   }));
  },
  FindDecl$1:function(fname,line,col)
  {
   return this.Async_map(Global.id,FSAutoCompleteIntermediary.sendMessage({
    $:6,
    $0:fname,
    $1:line,
    $2:col
   }));
  },
  Complete:function(fname,txt,line,col,sId)
  {
   var $this;
   $this=this;
   return $this.Async_map(function(c)
   {
    return $this.comp2Strings(c);
   },FSAutoCompleteIntermediary.sendMessage({
    $:9,
    $0:fname,
    $1:line,
    $2:col,
    $3:txt,
    $4:sId
   }));
  },
  Complete$1:function(fname,txt,line,col)
  {
   var $this;
   $this=this;
   return $this.Async_map(function(c)
   {
    return $this.comp2Strings(c);
   },FSAutoCompleteIntermediary.sendMessage({
    $:8,
    $0:fname,
    $1:line,
    $2:col,
    $3:txt
   }));
  },
  ToolTip:function(fname,line,col,sId)
  {
   var $this;
   $this=this;
   return $this.Async_map(function(t)
   {
    return $this.tip2String(t);
   },FSAutoCompleteIntermediary.sendMessage({
    $:3,
    $0:fname,
    $1:line,
    $2:col,
    $3:sId
   }));
  },
  ToolTip$1:function(fname,line,col)
  {
   var $this;
   $this=this;
   return $this.Async_map(function(t)
   {
    return $this.tip2String(t);
   },FSAutoCompleteIntermediary.sendMessage({
    $:2,
    $0:fname,
    $1:line,
    $2:col
   }));
  },
  Parse:function(fname,txt)
  {
   var $this;
   $this=this;
   return $this.Async_map(function(e)
   {
    return $this.errors2String(e);
   },FSAutoCompleteIntermediary.sendMessage({
    $:10,
    $0:fname,
    $1:txt,
    $2:[]
   }));
  },
  Parse$1:function(fname,txt,sts)
  {
   var $this;
   $this=this;
   return $this.Async_map(function(e)
   {
    return $this.errors2String(e);
   },FSAutoCompleteIntermediary.sendMessage({
    $:10,
    $0:fname,
    $1:txt,
    $2:sts
   }));
  },
  MustParse:function(fname,sId)
  {
   var $this;
   $this=this;
   return $this.Async_map(function(i)
   {
    return $this.info2Bool(i);
   },FSAutoCompleteIntermediary.sendMessage({
    $:11,
    $0:fname,
    $1:sId
   }));
  }
 },Obj,FSAutoCompleteIntermediaryClient);
 FSAutoCompleteIntermediaryClient.New=Runtime.Ctor(function(clientId,endPoint)
 {
 },FSAutoCompleteIntermediaryClient);
 FSAutoCompleteIntermediary.sendMessage=function(msg)
 {
  var b;
  b=null;
  return Concurrency.Delay(function()
  {
   return Concurrency.Bind((new AjaxRemotingProvider.New()).Async("FSharpStation:FSSGlobal.FSAutoCompleteIntermediary.sendMessageRpc:1124743568",[msg]),function(a)
   {
    return Concurrency.Return(a);
   });
  });
 };
 Evaluator.extractConfig=function(code)
 {
  return Strings.StartsWith(code,"////-d:")?Slice.string(code,{
   $:1,
   $0:4
  },{
   $:1,
   $0:code.indexOf("\n")-1
  }):"";
 };
 FsEvaluator.abortFsiExe=function()
 {
  Concurrency.Start((new AjaxRemotingProvider.New()).Async("FSharpStation:FSSGlobal.FsEvaluator+Evaluator.abortFsiExe:-829366048",[]),null);
 };
 FsEvaluator.evaluateAR=function(fsid,ep,incrUseCount,source)
 {
  var b;
  b=null;
  return Concurrency.Delay(function()
  {
   return Concurrency.Bind((new AjaxRemotingProvider.New()).Async("FSharpStation:FSSGlobal.FsEvaluator.evaluateAS:-1357873018",[fsid,ep,incrUseCount,source]),function(a)
   {
    function m(msg,wrn)
    {
     return new ErrSimple.New(msg,wrn);
    }
    return Concurrency.Return({
     $:0,
     $0:a[0],
     $1:Arrays.ofSeq(Seq$2.map(function($1)
     {
      return m($1[0],$1[1]);
     },a[1]))
    });
   });
  });
 };
 FsTranslator.translateAR=function(source,minified)
 {
  var b;
  b=null;
  return Concurrency.Delay(function()
  {
   return Concurrency.Bind((new AjaxRemotingProvider.New()).Async("FSharpStation:FSSGlobal.FsTranslator.translateAS:1220910711",[source,minified]),function(a)
   {
    function m(msg,wrn)
    {
     return new ErrSimple.New(msg,wrn);
    }
    return Concurrency.Return({
     $:0,
     $0:a[0],
     $1:Arrays.ofSeq(Seq$2.map(function($1)
     {
      return m($1[0],$1[1]);
     },a[1]))
    });
   });
  });
 };
 Val=HtmlNode.Val=Runtime.Class({
  get_ValTypeMember:function()
  {
   return 0;
  }
 },null,Val);
 Var.lensView=function(get,update,view0,_var)
 {
  var id,view,$1;
  id=Var.freshId();
  view=View.Map2(function(v)
  {
   return get(v);
  },_var.get_View(),view0);
  $1=new Var$1({
   Get:function()
   {
    return get(_var.Get());
   },
   Set:function(v)
   {
    return _var.Update(function(t)
    {
     return update(t,v);
    });
   },
   SetFinal:function(v)
   {
    return this.Set(v);
   },
   Update:function(f)
   {
    return _var.Update(function(t)
    {
     return update(t,f(get(t)));
    });
   },
   UpdateMaybe:function(f)
   {
    return _var.UpdateMaybe(function(t)
    {
     var x;
     x=f(get(t));
     return x==null?null:{
      $:1,
      $0:update(t,x.$0)
     };
    });
   },
   get_View:function()
   {
    return view;
   },
   get_Id:function()
   {
    return id;
   }
  });
  Var$1.New.call($1);
  return $1;
 };
 Var.freshId=function()
 {
  Var.set_counter(Var.counter()+1);
  return"varuid"+Global.String(Var.counter());
 };
 Var.counter=function()
 {
  SC$1.$cctor();
  return SC$1.counter;
 };
 Var.set_counter=function($1)
 {
  SC$1.$cctor();
  SC$1.counter=$1;
 };
 ListModel.currentLens=function(def,curr,model)
 {
  return ListModel["currentLensUpd'"](def,curr,function(v)
  {
   model.UpdateBy(function()
   {
    return model.TryFindByKey(model.key(v))==null?null:{
     $:1,
     $0:v
    };
   },model.key(v));
  },model);
 };
 ListModel["currentLensUpd'"]=function(def,curr,upd,model)
 {
  return new FromView.New(View.Map2(function(_mdl,kO)
  {
   var o;
   o=kO==null?null:model.TryFindByKey(kO.$0);
   return o==null?def:o.$0;
  },model.v,curr),upd);
 };
 ListModel.currentLensUpd=function(def,curr,upd,model)
 {
  var f;
  function b(a)
  {
   return model.TryFindByKey(a);
  }
  function g(o)
  {
   return o==null?def:o.$0;
  }
  return Var.lensView((f=function(o)
  {
   return o==null?null:b(o.$0);
  },function(x)
  {
   return g(f(x));
  }),function(kO,v)
  {
   var a;
   a=upd(v);
   kO==null?void 0:a(kO.$0);
   return kO;
  },model.v,curr);
 };
 HelperType.HelperType={
  $:0
 };
 HelperType.op_AmpGreater=function(_arg15,vw)
 {
  return new Val({
   $:2,
   $0:vw
  });
 };
 HelperType.op_AmpGreater$1=function(_arg14,vr)
 {
  return new Val({
   $:1,
   $0:vr
  });
 };
 HelperType.op_AmpGreater$2=function(_arg13,va)
 {
  return va;
 };
 HelperType.op_AmpGreater$3=function(_arg12,va)
 {
  return va;
 };
 HelperType.op_AmpGreater$4=function(_arg11,va)
 {
  return va;
 };
 HelperType.op_AmpGreater$5=function(_arg10,va)
 {
  return va;
 };
 HelperType.op_AmpGreater$6=function(_arg9,va)
 {
  return va;
 };
 HelperType.op_AmpGreater$7=function(_arg8,va)
 {
  return va;
 };
 HelperType.op_AmpGreater$8=function(_arg7,va)
 {
  return va;
 };
 HelperType.op_AmpGreater$9=function(_arg6,a)
 {
  return new Val({
   $:0,
   $0:a
  });
 };
 HelperType.op_AmpGreater$10=function(_arg5,a)
 {
  return new Val({
   $:0,
   $0:a
  });
 };
 HelperType.op_AmpGreater$11=function(_arg4,a)
 {
  return new Val({
   $:0,
   $0:a
  });
 };
 HelperType.op_AmpGreater$12=function(_arg3,a)
 {
  return new Val({
   $:0,
   $0:a
  });
 };
 HelperType.op_AmpGreater$13=function(_arg2,a)
 {
  return new Val({
   $:0,
   $0:a
  });
 };
 HelperType.op_AmpGreater$14=function(_arg1,a)
 {
  return new Val({
   $:0,
   $0:a
  });
 };
 valBuilder=Val.valBuilder=Runtime.Class({
  Delay:function(f)
  {
   return f();
  },
  Zero:function()
  {
   return new Val({
    $:0,
    $0:null
   });
  },
  Bind:function(w,r)
  {
   return Val.bind(r,w);
  },
  Bind$1:function(w,r)
  {
   return Val.bind(r,w);
  },
  Bind$2:function(w,r)
  {
   return Val.bind(r,w);
  },
  ReturnFrom:Global.id,
  Return:function(x)
  {
   return new Val({
    $:0,
    $0:x
   });
  }
 },Obj,valBuilder);
 valBuilder.New=Runtime.Ctor(function()
 {
 },valBuilder);
 Val.fixitF=function(_f,v)
 {
  return _f(v);
 };
 Val.valFlow=function()
 {
  SC$1.$cctor();
  return SC$1.valFlow;
 };
 Val.mapCached=function(f,v)
 {
  return new Val({
   $:2,
   $0:View.MapCached(f,Val.toView(v))
  });
 };
 Val.sink=function(f,v)
 {
  View.Sink(f,Val.toView(Val.fixit(v)));
 };
 Val.mapAsync=function(f,v)
 {
  return new Val({
   $:2,
   $0:View.MapAsync(f,Val.toView(Val.fixit(v)))
  });
 };
 Val.iter4=function(f,v1,v2,v3,v4)
 {
  Val.iterV(Global.ignore,Val.map4(f,v1,v2,v3,v4));
 };
 Val.iter3=function(f,v1,v2,v3)
 {
  Val.iterV(Global.ignore,Val.map3(f,v1,v2,v3));
 };
 Val.iter2=function(f,v1,v2)
 {
  Val.iterV(Global.ignore,Val.map2(f,v1,v2));
 };
 Val.apply=function(va,vf)
 {
  return Val.bindV(function(f)
  {
   return Val.mapV(f,va);
  },vf);
 };
 Val.map4=function(f,v1,v2,v3,v4)
 {
  return Val.map4V(f,Val.fixit(v1),Val.fixit(v2),Val.fixit(v3),Val.fixit(v4));
 };
 Val.map3=function(f,v1,v2,v3)
 {
  return Val.map3V(f,Val.fixit(v1),Val.fixit(v2),Val.fixit(v3));
 };
 Val.map2=function(f,v1,v2)
 {
  return((Val.map2V(f))(Val.fixit(v1)))(Val.fixit(v2));
 };
 Val.map=function(f,v)
 {
  return Val.mapV(f,Val.fixit(v));
 };
 Val.bind=function(f,v)
 {
  return Val.bindV(f,Val.fixit(v));
 };
 Val.iter=function(f,v)
 {
  Val.iterV(f,Val.fixit(v));
 };
 Val.toDoc=function(v)
 {
  return Doc.EmbedView(Val.toView(Val.fixit(v)));
 };
 Val.fixit=function(v)
 {
  return Val.fixitF(Val.toVal,v);
 };
 Val.toVal=function(o)
 {
  return typeof o=="string"?new Val({
   $:0,
   $0:o
  }):typeof o=="number"?new Val({
   $:0,
   $0:o
  }):typeof o=="boolean"?new Val({
   $:0,
   $0:o
  }):o instanceof Doc?new Val({
   $:0,
   $0:o
  }):o instanceof Val?o:o instanceof Var$1?new Val({
   $:1,
   $0:o
  }):"RSet"in o?new Val({
   $:1,
   $0:o
  }):typeof o=="function"?new Val({
   $:2,
   $0:o
  }):o.get_ValTypeMember()===0?o:Operators.FailWith((function($1)
  {
   return function($2)
   {
    return $1("Could not convert "+Utils.prettyPrint($2));
   };
  }(Global.id))(o));
 };
 Val.attrV=function(att,va)
 {
  return va.$==2?AttrModule.Dynamic(att,va.$0):va.$==1?AttrModule.Dynamic(att,va.$0.get_View()):AttrProxy.Create(att,va.$0);
 };
 Val.attrVO=function(att,vao)
 {
  var wa,va;
  return vao.$==2?(wa=vao.$0,AttrModule.DynamicPred(att,View.Map(function(o)
  {
   return o!=null;
  },wa),View.Map(function(o)
  {
   return o==null?"":o.$0;
  },wa))):vao.$==1?(va=vao.$0,AttrModule.DynamicPred(att,View.Map(function(o)
  {
   return o!=null;
  },va.get_View()),View.Map(function(o)
  {
   return o==null?"":o.$0;
  },va.get_View()))):vao.$0==null?AttrModule.DynamicPred(att,View.Const(false),View.Const("")):AttrProxy.Create(att,vao.$0.$0);
 };
 Val.tagElt=function(tag,va)
 {
  return va.$==2?Doc.EmbedView(View.Map(tag,va.$0)):va.$==1?Doc.EmbedView(View.Map(tag,va.$0.get_View())):tag(va.$0);
 };
 Val.tagDoc=function(tag,va)
 {
  return va.$==2?Doc.EmbedView(View.Map(tag,va.$0)):va.$==1?Doc.EmbedView(View.Map(tag,va.$0.get_View())):tag(va.$0);
 };
 Val.map4V=function(f3,v1,v2,v3,v4)
 {
  var x;
  x=Val.map3V(f3,v1,v2,v3);
  return((Val.map2V(function(a)
  {
   return function(f)
   {
    return f(a);
   };
  }))(v4))(x);
 };
 Val.map3V=function(f3,v1,v2,v3)
 {
  var x;
  x=((Val.map2V(f3))(v1))(v2);
  return((Val.map2V(function(a)
  {
   return function(f)
   {
    return f(a);
   };
  }))(v3))(x);
 };
 Val.map2V=function(f_a_b_c)
 {
  function f_aVbVc(a)
  {
   var f;
   f=f_a_b_c(a);
   return function(v)
   {
    return Val.mapV(f,v);
   };
  }
  function fVb_aVc(vb)
  {
   return((Val.swap())(f_aVbVc))(vb);
  }
  function fVbVaVc(vb)
  {
   var f;
   f=fVb_aVc(vb);
   return function(v)
   {
    return Val.bindV(f,v);
   };
  }
  return function(va)
  {
   return((Val.swap())(fVbVaVc))(va);
  };
 };
 Val.bindV=function(f,v)
 {
  return v.$==2?new Val({
   $:2,
   $0:View.Bind(function(x)
   {
    return Val.toView(f(x));
   },v.$0)
  }):v.$==1?new Val({
   $:2,
   $0:View.Bind(function(x)
   {
    return Val.toView(f(x));
   },v.$0.get_View())
  }):f(v.$0);
 };
 Val.getAsync=function(v)
 {
  return v.$==2?View.GetAsync(v.$0):v.$==1?Concurrency.Return(v.$0.Get()):Concurrency.Return(v.$0);
 };
 Val.toView=function(v)
 {
  return v.$==2?v.$0:v.$==1?v.$0.get_View():View.Const(v.$0);
 };
 Val.iterV=function(f,va)
 {
  if(va.$==2)
   View.Get(f,va.$0);
  else
   if(va.$==1)
    f(va.$0.Get());
   else
    f(va.$0);
 };
 Val.mapV=function(f,va)
 {
  return va.$==2?new Val({
   $:2,
   $0:View.Map(f,va.$0)
  }):va.$==1?new Val({
   $:2,
   $0:View.Map(f,va.$0.get_View())
  }):new Val({
   $:0,
   $0:f(va.$0)
  });
 };
 Val.swap=function()
 {
  SC$1.$cctor();
  return SC$1.swap;
 };
 HtmlNode$1=HtmlNode.HtmlNode=Runtime.Class({
  Style:function(sty)
  {
   return this.AddChildren([HtmlNode.style(sty)]);
  },
  AddClass:function(c)
  {
   return HtmlNode.addClass(c,this);
  },
  InsertChildren:function(add)
  {
   return HtmlNode.insertChildren(add,this);
  },
  AddChildren:function(add)
  {
   return HtmlNode.addChildren(add,this);
  },
  get_toDoc:function()
  {
   var $1,x,v;
   return this.$==3||this.$==6?Doc.Empty():(x=HtmlNode.chooseNode(this),(v=Doc.Empty(),x==null?v:x.$0));
  }
 },null,HtmlNode$1);
 HtmlNode$1.HtmlEmpty=new HtmlNode$1({
  $:6
 });
 HtmlNode$1.op_MinusMinusMinusMinusMinusMinusMinusMinusMinusMinusMinusMinusMinusMinusMinusMinusMinusMinusMinusMinus=function(ps,chn)
 {
  return HtmlNode.indent2Level(11,chn,ps);
 };
 HtmlNode$1.op_MinusMinusMinusMinusMinusMinusMinusMinusMinusMinusMinusMinusMinusMinusMinusMinusMinusMinus=function(ps,chn)
 {
  return HtmlNode.indent2Level(10,chn,ps);
 };
 HtmlNode$1.op_MinusMinusMinusMinusMinusMinusMinusMinusMinusMinusMinusMinusMinusMinusMinusMinus=function(ps,chn)
 {
  return HtmlNode.indent2Level(9,chn,ps);
 };
 HtmlNode$1.op_MinusMinusMinusMinusMinusMinusMinusMinusMinusMinusMinusMinusMinusMinus=function(ps,chn)
 {
  return HtmlNode.indent2Level(8,chn,ps);
 };
 HtmlNode$1.op_MinusMinusMinusMinusMinusMinusMinusMinusMinusMinusMinusMinus=function(ps,chn)
 {
  return HtmlNode.indent2Level(7,chn,ps);
 };
 HtmlNode$1.op_MinusMinusMinusMinusMinusMinusMinusMinusMinusMinus=function(ps,chn)
 {
  return HtmlNode.indent2Level(6,chn,ps);
 };
 HtmlNode$1.op_MinusMinusMinusMinusMinusMinusMinusMinus=function(ps,chn)
 {
  return HtmlNode.indent2Level(5,chn,ps);
 };
 HtmlNode$1.op_MinusMinusMinusMinusMinusMinus=function(ps,chn)
 {
  return HtmlNode.indent2Level(4,chn,ps);
 };
 HtmlNode$1.op_MinusMinusMinusMinus=function(ps,chn)
 {
  return HtmlNode.indent2Level(3,chn,ps);
 };
 HtmlNode$1.op_MinusMinus=function(ps,chn)
 {
  return HtmlNode.indent2Level(2,chn,ps);
 };
 HtmlNode$1.op_Addition=function(ps,r)
 {
  return new List$1.T({
   $:1,
   $0:r,
   $1:ps
  });
 };
 HtmlNode$1.op_MinusMinusMinus=function(ps,chn)
 {
  return ps.$==1?ps.$1.$==1?new List$1.T({
   $:1,
   $0:ps.$1.$0.AddChildren([ps.$0.AddChildren([chn])]),
   $1:ps.$1.$1
  }):List$1.ofArray([ps.$0.AddChildren([chn])]):List$1.T.Empty;
 };
 HtmlNode$1.op_Subtraction=function(ps,chn)
 {
  return ps.$==0?List$1.T.Empty:new List$1.T({
   $:1,
   $0:ps.$0.AddChildren([chn]),
   $1:ps.$1
  });
 };
 LoadFiles.LoadFilesAsyncOld=function(files)
 {
  function a($1,$2)
  {
   try
   {
    Global.CIPHERSpaceLoadFiles(files,$1);
   }
   catch(e)
   {
    $2(e);
   }
  }
  return Concurrency.FromContinuations(function($1,$2,$3)
  {
   return a.apply(null,[$1,$2,$3]);
  });
 };
 LoadFiles.LoadFilesAsync=function(files)
 {
  var b;
  b=null;
  return Concurrency.Delay(function()
  {
   return Concurrency.For(files,function(a)
   {
    return Concurrency.Bind(LoadFiles.LoadFile(a),function()
    {
     return Concurrency.Return(null);
    });
   });
  });
 };
 LoadFiles.LoadFile=function(file)
 {
  var o,o$1,$1,$2,$3,$4,$5,$6,$7,$8,$9,$10,ref,b;
  function EndsWith(s,fn)
  {
   return Strings.EndsWith(fn,s)?{
    $:1,
    $0:null
   }:null;
  }
  function a($11,$12)
  {
   try
   {
    ref.onload=$11;
    Global.document.head.appendChild(ref);
   }
   catch(e)
   {
    $12(e);
   }
  }
  o=(o$1=(($2=EndsWith(".js",file),$2!=null&&$2.$==1)?!Global.document.querySelector("script[src='"+file+"']")||(($3=EndsWith(".fsx",file),$3!=null&&$3.$==1)?!Global.document.querySelector("script[src='"+file+"']")||($4=EndsWith(".fs",file),$4!=null&&$4.$==1)&&!Global.document.querySelector("script[src='"+file+"']"):($5=EndsWith(".fs",file),$5!=null&&$5.$==1)&&!Global.document.querySelector("script[src='"+file+"']")):($6=EndsWith(".fsx",file),$6!=null&&$6.$==1)?!Global.document.querySelector("script[src='"+file+"']")||($7=EndsWith(".fs",file),$7!=null&&$7.$==1)&&!Global.document.querySelector("script[src='"+file+"']"):($8=EndsWith(".fs",file),$8!=null&&$8.$==1)&&!Global.document.querySelector("script[src='"+file+"']"))?{
   $:1,
   $0:LoadFiles.createScript(file)
  }:($9=EndsWith(".css",file),$9!=null&&$9.$==1)?{
   $:1,
   $0:LoadFiles.createCss(file)
  }:($10=EndsWith(".html",file),$10!=null&&$10.$==1)?{
   $:1,
   $0:LoadFiles.createHtml(file)
  }:null,o$1==null?null:{
   $:1,
   $0:(ref=o$1.$0,Concurrency.FromContinuations(function($11,$12,$13)
   {
    return a.apply(null,[$11,$12,$13]);
   }))
  });
  return o==null?(b=null,Concurrency.Delay(function()
  {
   return Concurrency.Return(null);
  })):o.$0;
 };
 LoadFiles.createHtml=function(fn)
 {
  var fileRef;
  fileRef=Global.document.createElement("link");
  fileRef.setAttribute("rel","import");
  fileRef.setAttribute("type","text/html");
  fileRef.setAttribute("href",fn);
  return fileRef;
 };
 LoadFiles.createCss=function(fn)
 {
  var fileRef;
  fileRef=Global.document.createElement("link");
  fileRef.setAttribute("rel","stylesheet");
  fileRef.setAttribute("type","text/css");
  fileRef.setAttribute("href",fn);
  return fileRef;
 };
 LoadFiles.createScript=function(fn)
 {
  var fileRef;
  fileRef=Global.document.createElement("script");
  fileRef.setAttribute("type","text/javascript");
  fileRef.setAttribute("src",fn);
  return fileRef;
 };
 HtmlNode.findRootElement=function(e)
 {
  var root;
  return!function(a)
  {
   return e.getRootNode(a);
  }?Global.document.body:(root=e.getRootNode(),!root.body?root.firstChild:root.body);
 };
 HtmlNode.createIFrame$3704$45=Runtime.Curried3(function(cover,$1,$2)
 {
  return View.Get(function(pressed)
  {
   if(!pressed)
    cover.Set(false);
  },Mouse.get_MousePressed());
 });
 HtmlNode.createIFrame$3699$45=Runtime.Curried3(function(cover,$1,$2)
 {
  return cover.Set(true);
 });
 HtmlNode.createIFrame$3698$45=Global.id;
 HtmlNode.createIFrame=function(f)
 {
  var cover;
  cover=Var$1.Create$1(true);
  return HtmlNode.div([HtmlNode.style("position: relative; overflow: hidden; height: 100%; width: 100%;"),HtmlNode.iframe([HtmlNode.style("position: absolute; width:100%; height:100%;"),HtmlNode.frameborder("0"),new HtmlNode$1({
   $:8,
   $0:AttrProxy.OnAfterRenderImpl(f)
  }),new HtmlNode$1({
   $:8,
   $0:AttrProxy.HandlerImpl("mouseleave",function()
   {
    return function()
    {
     return cover.Set(true);
    };
   })
  })]),HtmlNode.div([HtmlNode.style("position: absolute;"),HtmlNode.classIf("iframe-cover",Val.map(Global.id,cover)),new HtmlNode$1({
   $:8,
   $0:AttrProxy.HandlerImpl("mouseenter",function()
   {
    return function()
    {
     return View.Get(function(pressed)
     {
      if(!pressed)
       cover.Set(false);
     },Mouse.get_MousePressed());
    };
   })
  })]),HtmlNode.styleH([HtmlNode.htmlText(".iframe-cover { top:0; left:0; right:0; bottom:0; background: blue; opacity: 0.04; z-index: 2; }")])]);
 };
 HtmlNode.bindHElem=function(hElemF,v)
 {
  return new HtmlNode$1({
   $:2,
   $0:Val.map(hElemF,Val.fixit(v))
  });
 };
 HtmlNode.string2Styles=function()
 {
  SC$1.$cctor();
  return SC$1.string2Styles;
 };
 HtmlNode.style2pairs=function(ss)
 {
  return Arrays.map(function(d)
  {
   return[Strings.Trim(Arrays.get(d,0)),Strings.Trim(Arrays.get(d,1))];
  },Arrays.filter(function(d)
  {
   return Arrays.length(d)===2;
  },Arrays.map(function(s)
  {
   return Strings.SplitChars(s,[":"],0);
  },Strings.SplitChars(ss,[";"],0))));
 };
 HtmlNode.classIf=function(cls,v)
 {
  return HtmlNode["class"](Val.map(function(b)
  {
   return b?cls:"";
  },Val.fixit(v)));
 };
 HtmlNode.css=function(v)
 {
  return HtmlNode.styleH([HtmlNode.htmlText(v)]);
 };
 HtmlNode.style1=function(n,v)
 {
  var x;
  return HtmlNode.style(Val.map((x=n+":",function(y)
  {
   return x+y;
  }),v));
 };
 HtmlNode.placeholder=function(v)
 {
  return HtmlNode.htmlAttribute("placeholder",v);
 };
 HtmlNode.style=function(v)
 {
  return HtmlNode.htmlAttribute("style",v);
 };
 HtmlNode.draggable=function(v)
 {
  return HtmlNode.htmlAttribute("draggable",v);
 };
 HtmlNode.spellcheck=function(v)
 {
  return HtmlNode.htmlAttribute("spellcheck",v);
 };
 HtmlNode.frameborder=function(v)
 {
  return HtmlNode.htmlAttribute("frameborder",v);
 };
 HtmlNode.Id=function(v)
 {
  return HtmlNode.htmlAttribute("id",v);
 };
 HtmlNode.title=function(v)
 {
  return HtmlNode.htmlAttribute("title",v);
 };
 HtmlNode.width=function(v)
 {
  return HtmlNode.htmlAttribute("width",v);
 };
 HtmlNode.type=function(v)
 {
  return HtmlNode.htmlAttribute("type",v);
 };
 HtmlNode["class"]=function(v)
 {
  return HtmlNode.htmlAttribute("class",v);
 };
 HtmlNode.src=function(v)
 {
  return HtmlNode.htmlAttribute("src",v);
 };
 HtmlNode.charset=function(v)
 {
  return HtmlNode.htmlAttribute("charset",v);
 };
 HtmlNode.rel=function(v)
 {
  return HtmlNode.htmlAttribute("rel",v);
 };
 HtmlNode.hrefO=function(vO)
 {
  return HtmlNode.htmlAttributeO("href",vO);
 };
 HtmlNode.href=function(v)
 {
  return HtmlNode.htmlAttribute("href",v);
 };
 HtmlNode.target=function(v)
 {
  return HtmlNode.htmlAttribute("target",v);
 };
 HtmlNode.strong=function(at)
 {
  return HtmlNode.htmlElement("strong",at);
 };
 HtmlNode.section=function(ch)
 {
  return HtmlNode.htmlElement("section",ch);
 };
 HtmlNode.body=function(ch)
 {
  return HtmlNode.htmlElement("body",ch);
 };
 HtmlNode.iframe=function(at)
 {
  return HtmlNode.htmlElement("iframe",at);
 };
 HtmlNode.link=function(sc)
 {
  return HtmlNode.htmlElement("link",sc);
 };
 HtmlNode.fieldset=function(ch)
 {
  return HtmlNode.htmlElement("fieldset",ch);
 };
 HtmlNode.styleH=function(st)
 {
  return HtmlNode.htmlElement("style",st);
 };
 HtmlNode.script=function(sc)
 {
  return HtmlNode.htmlElement("script",sc);
 };
 HtmlNode.button=function(ch)
 {
  return HtmlNode.htmlElement("button",ch);
 };
 HtmlNode.label=function(ch)
 {
  return HtmlNode.htmlElement("label",ch);
 };
 HtmlNode.tbody=function(ch)
 {
  return HtmlNode.htmlElement("tbody",ch);
 };
 HtmlNode.td=function(ch)
 {
  return HtmlNode.htmlElement("td",ch);
 };
 HtmlNode.tr=function(ch)
 {
  return HtmlNode.htmlElement("tr",ch);
 };
 HtmlNode.th=function(ch)
 {
  return HtmlNode.htmlElement("th",ch);
 };
 HtmlNode.thead=function(ch)
 {
  return HtmlNode.htmlElement("thead",ch);
 };
 HtmlNode.table=function(ch)
 {
  return HtmlNode.htmlElement("table",ch);
 };
 HtmlNode.form=function(ch)
 {
  return HtmlNode.htmlElement("form",ch);
 };
 HtmlNode.span=function(ch)
 {
  return HtmlNode.htmlElement("span",ch);
 };
 HtmlNode.img=function(ch)
 {
  return HtmlNode.htmlElement("img",ch);
 };
 HtmlNode.div=function(ch)
 {
  return HtmlNode.htmlElement("div",ch);
 };
 HtmlNode.h6=function(ch)
 {
  return HtmlNode.htmlElement("h6",ch);
 };
 HtmlNode.h5=function(ch)
 {
  return HtmlNode.htmlElement("h5",ch);
 };
 HtmlNode.h4=function(ch)
 {
  return HtmlNode.htmlElement("h4",ch);
 };
 HtmlNode.h3=function(ch)
 {
  return HtmlNode.htmlElement("h3",ch);
 };
 HtmlNode.h2=function(ch)
 {
  return HtmlNode.htmlElement("h2",ch);
 };
 HtmlNode.h1=function(ch)
 {
  return HtmlNode.htmlElement("h1",ch);
 };
 HtmlNode.hr=function(ch)
 {
  return HtmlNode.htmlElement("hr",ch);
 };
 HtmlNode.br=function(ch)
 {
  return HtmlNode.htmlElement("br",ch);
 };
 HtmlNode.li=function(ch)
 {
  return HtmlNode.htmlElement("li",ch);
 };
 HtmlNode.ul=function(ch)
 {
  return HtmlNode.htmlElement("ul",ch);
 };
 HtmlNode.p=function(ch)
 {
  return HtmlNode.htmlElement("p",ch);
 };
 HtmlNode.a=function(ch)
 {
  return HtmlNode.htmlElement("a",ch);
 };
 HtmlNode.textV=function(v)
 {
  return HtmlNode.tag(Doc.TextNode,v);
 };
 HtmlNode._placeholder=function(v)
 {
  return HtmlNode.atr("placeholder",v);
 };
 HtmlNode._style=function(v)
 {
  return HtmlNode.atr("style",v);
 };
 HtmlNode._type=function(v)
 {
  return HtmlNode.atr("type",v);
 };
 HtmlNode._class=function(v)
 {
  return HtmlNode.atr("class",v);
 };
 HtmlNode.tag=function(tag,v)
 {
  return Val.tagDoc(tag,Val.fixit(v));
 };
 HtmlNode.atr=function(att,v)
 {
  return Val.attrV(att,Val.fixit(v));
 };
 HtmlNode.renderDoc=function()
 {
  SC$1.$cctor();
  return SC$1.renderDoc;
 };
 HtmlNode.op_BangBang=function(p,l)
 {
  return List$1.ofArray([p(l)]);
 };
 HtmlNode.endHtmlIndent=function(ps)
 {
  var o;
  o=HtmlNode.finishO(ps);
  return o==null?HtmlNode.htmlText("Malformed HTMLNode"):o.$0;
 };
 HtmlNode.finishO=function(ps)
 {
  return ps.$==1?ps.$1.$==1?HtmlNode.finishO(HtmlNode.out(ps)):{
   $:1,
   $0:ps.$0
  }:null;
 };
 HtmlNode.indent2Level=function(lvl,chn,ps)
 {
  return ps.get_Length()<lvl?new List$1.T({
   $:1,
   $0:chn,
   $1:ps
  }):HtmlNode.indent2Level(lvl,chn,HtmlNode.out(ps));
 };
 HtmlNode.out=function(ps)
 {
  return ps.$==1?ps.$1.$==1?new List$1.T({
   $:1,
   $0:HtmlNode.addChildren([ps.$0],ps.$1.$0),
   $1:ps.$1.$1
  }):List$1.ofArray([ps.$0]):List$1.T.Empty;
 };
 HtmlNode.addClassIf=function(c,v)
 {
  var c$1;
  c$1=Val.map(function(b)
  {
   return b?c:"";
  },Val.fixit(v));
  return function(h)
  {
   return HtmlNode.addClass(c$1,h);
  };
 };
 HtmlNode.addClass=function(c,h)
 {
  return HtmlNode.addChildren(List$1.ofArray([HtmlNode.htmlAttribute("class",c)]),h);
 };
 HtmlNode.insertChildren=function(add,h)
 {
  function f(n,ch)
  {
   return[n,Seq$2.append(add,ch)];
  }
  return HtmlNode.mapHtmlElement(function($1)
  {
   return function($2)
   {
    return f($1,$2);
   };
  },h);
 };
 HtmlNode.addChildren=function(add,h)
 {
  function f(n,ch)
  {
   return[n,Seq$2.append(ch,add)];
  }
  return HtmlNode.mapHtmlElement(function($1)
  {
   return function($2)
   {
    return f($1,$2);
   };
  },h);
 };
 HtmlNode.someElt=function(elt)
 {
  return new HtmlNode$1({
   $:7,
   $0:elt
  });
 };
 HtmlNode.str=function(txt)
 {
  return new HtmlNode$1({
   $:5,
   $0:Val.fixit(txt)
  });
 };
 HtmlNode.htmlText=function(txt)
 {
  return new HtmlNode$1({
   $:5,
   $0:Val.fixit(txt)
  });
 };
 HtmlNode.htmlAttributeO=function(name,v)
 {
  return new HtmlNode$1({
   $:4,
   $0:name,
   $1:Val.fixit(v)
  });
 };
 HtmlNode.htmlAttribute=function(name,v)
 {
  return new HtmlNode$1({
   $:3,
   $0:name,
   $1:Val.fixit(v)
  });
 };
 HtmlNode.htmlElementF=function(func,ch)
 {
  return new HtmlNode$1({
   $:1,
   $0:func,
   $1:ch
  });
 };
 HtmlNode.htmlElement=function(name,ch)
 {
  return new HtmlNode$1({
   $:0,
   $0:name,
   $1:ch
  });
 };
 HtmlNode.mapHtmlElement=function(f,element)
 {
  var t;
  return element.$==0?(t=(f(element.$0))(element.$1),new HtmlNode$1({
   $:0,
   $0:t[0],
   $1:t[1]
  })):element.$==2?new HtmlNode$1({
   $:2,
   $0:Val.map(function(e)
   {
    return HtmlNode.mapHtmlElement(f,e);
   },element.$0)
  }):element;
 };
 HtmlNode.getAttrChildren=function(attr)
 {
  var f,g,v;
  function c(a)
  {
   var $1;
   return a.$==3&&(a.$0===attr&&($1=[a.$0,a.$1],true))?{
    $:1,
    $0:$1[1]
   }:null;
  }
  f=function(s)
  {
   return Seq$2.tryPick(c,s);
  };
  g=(v=new Val({
   $:0,
   $0:""
  }),function(o)
  {
   return o==null?v:o.$0;
  });
  return function(x)
  {
   return g(f(x));
  };
 };
 HtmlNode.chooseNode=function(node)
 {
  var children,children$1,x,g,v;
  return node.$==0?(children=node.$1,{
   $:1,
   $0:Doc.Element(node.$0,HtmlNode.getAttrsFromSeq(children),Seq$2.choose(HtmlNode.chooseNode,children))
  }):node.$==1?(children$1=node.$1,{
   $:1,
   $0:(node.$0(HtmlNode.getAttrsFromSeq(children$1)))(Seq$2.choose(HtmlNode.chooseNode,children$1))
  }):node.$==2?{
   $:1,
   $0:(x=Val.toView(node.$0),Doc.BindView((g=(v=Doc.Empty(),function(o)
   {
    return o==null?v:o.$0;
   }),function(x$1)
   {
    return g(HtmlNode.chooseNode(x$1));
   }),x))
  }:node.$==5?{
   $:1,
   $0:Val.tagDoc(Doc.TextNode,node.$0)
  }:node.$==7?{
   $:1,
   $0:node.$0
  }:null;
 };
 HtmlNode.getAttrsFromSeq=function(children)
 {
  var x;
  x=Seq$2.choose(HtmlNode.chooseAttr,children);
  return Seq$2.append(List$1.choose(Global.id,List$1.ofArray([HtmlNode.groupAttr("class"," ",children),HtmlNode.groupAttr("style","; ",children)])),x);
 };
 HtmlNode.groupAttr=function(name,sep,children)
 {
  var ss,r;
  function f(a,b)
  {
   return HtmlNode.concat(sep,a,b);
  }
  ss=Seq$2.choose(function(n)
  {
   return HtmlNode.chooseThisAttr(name,n);
  },children);
  return Seq$2.isEmpty(ss)?null:{
   $:1,
   $0:Val.attrV(name,(r=(Runtime.Curried3(Val.map2))(function($1)
   {
    return function($2)
    {
     return f($1,$2);
    };
   }),Seq$2.reduce(function($1,$2)
   {
    return(r($1))($2);
   },ss)))
  };
 };
 HtmlNode.concat=function(s,a,b)
 {
  return a+s+b;
 };
 HtmlNode.chooseThisAttr=function(_this,node)
 {
  var $1;
  return node.$==3&&(node.$0===_this&&($1=[node.$0,node.$1],true))?{
   $:1,
   $0:$1[1]
  }:null;
 };
 HtmlNode.chooseAttr=function(node)
 {
  var $1,name,$2,name$1;
  return node.$==3&&((name=node.$0,name!=="class"&&name!=="style")&&($1=[node.$0,node.$1],true))?{
   $:1,
   $0:Val.attrV($1[0],$1[1])
  }:node.$==4&&((name$1=node.$0,name$1!=="class"&&name$1!=="style")&&($2=[node.$0,node.$1],true))?{
   $:1,
   $0:Val.attrVO($2[0],$2[1])
  }:node.$==8?{
   $:1,
   $0:node.$0
  }:null;
 };
 HtmlNode.addClassX=function(classes,add)
 {
  var x;
  return Strings.concat(" ",(x=new FSharpSet.New$1(BalancedTree.OfSeq(Strings.SplitChars(classes,[" "],0))),new FSharpSet.New$1(BalancedTree.OfSeq(Seq$2.append(new FSharpSet.New$1(BalancedTree.OfSeq(Strings.SplitChars(add,[" "],0))),x)))));
 };
 Button=Template.Button=Runtime.Class({
  OnClick:function(f)
  {
   return Button.New(this._class,this._type,this.style,this.text,f,this.disabled,this.id);
  },
  Disabled:function(dis)
  {
   return Button.New(this._class,this._type,this.style,this.text,this.onClick,Val.fixit(dis),this.id);
  },
  Text:function(txt)
  {
   return Button.New(this._class,this._type,this.style,Val.fixit(txt),this.onClick,this.disabled,this.id);
  },
  Style:function(sty)
  {
   return Button.New(this._class,this._type,Val.fixit(sty),this.text,this.onClick,this.disabled,this.id);
  },
  Type:function(typ)
  {
   return Button.New(this._class,Val.fixit(typ),this.style,this.text,this.onClick,this.disabled,this.id);
  },
  Class:function(clas)
  {
   return Button.New(Val.fixit(clas),this._type,this.style,this.text,this.onClick,this.disabled,this.id);
  },
  Id:function(id)
  {
   return Button.New(this._class,this._type,this.style,this.text,this.onClick,this.disabled,id);
  },
  get_Render:function()
  {
   var x,view;
   return new HtmlNode$1({
    $:7,
    $0:(x=HtmlNode.button([HtmlNode.type(this._type),HtmlNode["class"](this._class),HtmlNode.Id(this.id),HtmlNode.style(this.style),new HtmlNode$1({
     $:8,
     $0:(view=View.Const(""),AttrModule.DynamicPred("disabled",Val.toView(this.disabled),view))
    }),new HtmlNode$1({
     $:8,
     $0:AttrProxy.HandlerImpl("click",this.onClick)
    }),new HtmlNode$1({
     $:5,
     $0:this.text
    })]),(HtmlNode.renderDoc())(x))
   });
  }
 },null,Button);
 Button.get_Render$3817$42=function(_this)
 {
  return _this.onClick;
 };
 Button.New$1=function(txt)
 {
  return Button.New(Val.fixit("btn"),Val.fixit("button"),Val.fixit(""),Val.fixit(txt),function()
  {
   return function()
   {
    return null;
   };
  },Val.fixit(false),"");
 };
 Button.New=function(_class,_type,style,text,onClick,disabled,id)
 {
  return new Button({
   _class:_class,
   _type:_type,
   style:style,
   text:text,
   onClick:onClick,
   disabled:disabled,
   id:id
  });
 };
 Input=Template.Input=Runtime.Class({
  get_Var:function()
  {
   return this["var"];
  },
  Disabled:function(dis)
  {
   return Input.New(this._type,this._class,this.style,this.placeholder,this.id,this["var"],this.prefix,this.suffix,this.content,this.prefixAdded,this.suffixAdded,Val.fixit(dis));
  },
  SetVar:function(v)
  {
   return Input.New(this._type,this._class,this.style,this.placeholder,this.id,v,this.prefix,this.suffix,this.content,this.prefixAdded,this.suffixAdded,this.disabled);
  },
  Suffix:function(s)
  {
   return Input.New(this._type,this._class,this.style,this.placeholder,this.id,this["var"],this.prefix,s,this.content,this.prefixAdded,true,this.disabled);
  },
  Prefix:function(p)
  {
   return this.Prefix$1(HtmlNode.htmlText(p));
  },
  Prefix$1:function(p)
  {
   return Input.New(this._type,this._class,this.style,this.placeholder,this.id,this["var"],p,this.suffix,this.content,true,this.suffixAdded,this.disabled);
  },
  Content:function(c)
  {
   return Input.New(this._type,this._class,this.style,this.placeholder,this.id,this["var"],this.prefix,this.suffix,c,this.prefixAdded,this.suffixAdded,this.disabled);
  },
  Id:function(id)
  {
   return Input.New(this._type,this._class,this.style,this.placeholder,id,this["var"],this.prefix,this.suffix,this.content,this.prefixAdded,this.suffixAdded,this.disabled);
  },
  Placeholder:function(plc)
  {
   return Input.New(this._type,this._class,this.style,Val.fixit(plc),this.id,this["var"],this.prefix,this.suffix,this.content,this.prefixAdded,this.suffixAdded,this.disabled);
  },
  Style:function(sty)
  {
   return Input.New(this._type,this._class,Val.fixit(sty),this.placeholder,this.id,this["var"],this.prefix,this.suffix,this.content,this.prefixAdded,this.suffixAdded,this.disabled);
  },
  Type:function(typ)
  {
   return Input.New(Val.fixit(typ),this._class,this.style,this.placeholder,this.id,this["var"],this.prefix,this.suffix,this.content,this.prefixAdded,this.suffixAdded,this.disabled);
  },
  Class:function(clas)
  {
   return Input.New(this._type,Val.fixit(clas),this.style,this.placeholder,this.id,this["var"],this.prefix,this.suffix,this.content,this.prefixAdded,this.suffixAdded,this.disabled);
  },
  get_Render:function()
  {
   var $this;
   function groupClass(det)
   {
    return det.$==5?"input-group-addon":"input-group-btn";
   }
   $this=this;
   return HtmlNode.div(List$1.ofSeq(Seq$2.delay(function()
   {
    return Seq$2.append($this.prefixAdded||$this.suffixAdded?[HtmlNode["class"]("input-group")]:[],Seq$2.delay(function()
    {
     return Seq$2.append($this.prefixAdded?[HtmlNode.span([HtmlNode["class"](groupClass($this.prefix)),$this.prefix])]:[],Seq$2.delay(function()
     {
      var view;
      return Seq$2.append([new HtmlNode$1({
       $:7,
       $0:Doc.Input(Seq$2.append($this.content,List$1.ofArray([HtmlNode._type($this._type),HtmlNode._class($this._class),HtmlNode._style($this.style),AttrProxy.Create("id",$this.id),(view=View.Const(""),AttrModule.DynamicPred("disabled",Val.toView($this.disabled),view)),HtmlNode._placeholder($this.placeholder)])),$this["var"])
      })],Seq$2.delay(function()
      {
       return $this.suffixAdded?[HtmlNode.span([HtmlNode["class"](groupClass($this.suffix)),$this.suffix])]:[];
      }));
     }));
    }));
   })));
  }
 },null,Input);
 Input.New$1=function(v)
 {
  return Input.New$3(Var$1.Lens(v,function(o)
  {
   return o==null?"":o.$0;
  },function(sO,s)
  {
   return sO==null?null:{
    $:1,
    $0:s
   };
  })).Disabled(Val.map(function(o)
  {
   return o==null;
  },v));
 };
 Input.New$2=function(v)
 {
  return Input.New$3(Var$1.Create$1(v));
 };
 Input.New$3=function(_var)
 {
  var c;
  c=Val.fixit("form-control");
  return Input.New(Val.fixit("text"),c,Val.fixit(""),Val.fixit("Enter text:"),"",_var,HtmlNode$1.HtmlEmpty,HtmlNode$1.HtmlEmpty,List$1.T.Empty,false,false,Val.fixit(false));
 };
 Input.New=function(_type,_class,style,placeholder,id,_var,prefix,suffix,content,prefixAdded,suffixAdded,disabled)
 {
  return new Input({
   _type:_type,
   _class:_class,
   style:style,
   placeholder:placeholder,
   id:id,
   "var":_var,
   prefix:prefix,
   suffix:suffix,
   content:content,
   prefixAdded:prefixAdded,
   suffixAdded:suffixAdded,
   disabled:disabled
  });
 };
 Hoverable=Template.Hoverable=Runtime.Class({
  Content:function(c)
  {
   var $this;
   $this=this;
   return c.AddChildren([HtmlNode.classIf("hovering",this.hover),new HtmlNode$1({
    $:8,
    $0:AttrProxy.HandlerImpl("mouseenter",function()
    {
     return function()
     {
      return $this.hover.Set(true);
     };
    })
   }),new HtmlNode$1({
    $:8,
    $0:AttrProxy.HandlerImpl("mouseleave",function()
    {
     return function()
     {
      return $this.hover.Set(false);
     };
    })
   })]);
  },
  Content$1:function(c)
  {
   var $this;
   $this=this;
   return HtmlNode.div(Seq$2.append(c,List$1.ofArray([HtmlNode.classIf("hovering",this.hover),new HtmlNode$1({
    $:8,
    $0:AttrProxy.HandlerImpl("mouseenter",function()
    {
     return function()
     {
      return $this.hover.Set(true);
     };
    })
   }),new HtmlNode$1({
    $:8,
    $0:AttrProxy.HandlerImpl("mouseleave",function()
    {
     return function()
     {
      return $this.hover.Set(false);
     };
    })
   })])));
  }
 },null,Hoverable);
 Hoverable.get_Demo=function()
 {
  return Hoverable.get_New().Content(HtmlNode.div([HtmlNode.style("flex-flow: column;")]));
 };
 Hoverable.Content$3911$43=Runtime.Curried3(function(_this,$1,$2)
 {
  return _this.hover.Set(false);
 });
 Hoverable.Content$3910$43=Runtime.Curried3(function(_this,$1,$2)
 {
  return _this.hover.Set(true);
 });
 Hoverable.Content$3903$37=Runtime.Curried3(function(_this,$1,$2)
 {
  return _this.hover.Set(false);
 });
 Hoverable.Content$3902$37=Runtime.Curried3(function(_this,$1,$2)
 {
  return _this.hover.Set(true);
 });
 Hoverable.get_New=function()
 {
  return Hoverable.New(Var$1.Create$1(false));
 };
 Hoverable.New=function(hover)
 {
  return new Hoverable({
   hover:hover
  });
 };
 Panel=Template.Panel=Runtime.Class({
  Disabled:function(dis)
  {
   return Panel.New(this._class,this._style,this.title,this.header,this.content,dis);
  },
  Content:function(c)
  {
   return Panel.New(this._class,this._style,this.title,this.header,c,this.disabled);
  },
  Header:function(h)
  {
   return Panel.New(this._class,this._style,this.title,h,this.content,this.disabled);
  },
  Title:function(txt)
  {
   return Panel.New(this._class,this._style,Val.fixit(txt),this.header,this.content,this.disabled);
  },
  Style:function(sty)
  {
   return Panel.New(this._class,Val.fixit(sty),this.title,this.header,this.content,this.disabled);
  },
  Class:function(clas)
  {
   return Panel.New(Val.fixit(clas),this._style,this.title,this.header,this.content,this.disabled);
  },
  get_Render:function()
  {
   var view;
   return HtmlNode.fieldset([new HtmlNode$1({
    $:8,
    $0:(view=View.Const(""),AttrModule.DynamicPred("disabled",Val.toView(this.disabled),view))
   }),HtmlNode.div([HtmlNode["class"](this._class),HtmlNode.div(Seq$2.append([HtmlNode["class"]("panel-heading"),HtmlNode.label([HtmlNode["class"]("panel-title text-center"),HtmlNode.htmlText(this.title)])],this.header)),HtmlNode.div(Seq$2.append([HtmlNode["class"]("panel-body"),HtmlNode.style(this._style)],this.content))])]);
  }
 },null,Panel);
 Panel.get_New=function()
 {
  return Panel.New(Val.fixit("panel panel-default shadow"),Val.fixit("text-align:center"),Val.fixit("Panel"),List$1.ofArray([HtmlNode.htmlText("Some text")]),List$1.ofArray([HtmlNode.htmlText("Some Content")]),Val.fixit(Var$1.Create$1(false)));
 };
 Panel.New=function(_class,_style,title,header,content,disabled)
 {
  return new Panel({
   _class:_class,
   _style:_style,
   title:title,
   header:header,
   content:content,
   disabled:disabled
  });
 };
 TextArea=Template.TextArea=Runtime.Class({
  get_Var:function()
  {
   return this["var"];
  },
  Disabled:function(dis)
  {
   return TextArea.New(this._class,this.placeholder,this.title,this.spellcheck,this.id,this["var"],Val.fixit(dis));
  },
  SetVar:function(v)
  {
   return TextArea.New(this._class,this.placeholder,this.title,this.spellcheck,this.id,v,this.disabled);
  },
  Id:function(id)
  {
   return TextArea.New(this._class,this.placeholder,this.title,this.spellcheck,id,this["var"],this.disabled);
  },
  Spellcheck:function(spl)
  {
   return TextArea.New(this._class,this.placeholder,this.title,spl,this.id,this["var"],this.disabled);
  },
  Title:function(ttl)
  {
   return TextArea.New(this._class,this.placeholder,Val.fixit(ttl),this.spellcheck,this.id,this["var"],this.disabled);
  },
  Placeholder:function(plc)
  {
   return TextArea.New(this._class,Val.fixit(plc),this.title,this.spellcheck,this.id,this["var"],this.disabled);
  },
  Class:function(clas)
  {
   return TextArea.New(Val.fixit(clas),this.placeholder,this.title,this.spellcheck,this.id,this["var"],this.disabled);
  },
  get_Render:function()
  {
   return this.RenderWith(List$1.T.Empty);
  },
  RenderWith:function(more)
  {
   var $this,view;
   $this=this;
   return HtmlNode.div([HtmlNode.htmlElementF(function(att)
   {
    return function()
    {
     return Doc.InputArea(att,$this["var"]);
    };
   },List$1.append(List$1.ofArray([HtmlNode["class"](this._class),HtmlNode.Id(this.id),HtmlNode.spellcheck(Val.map(function(spl)
   {
    return spl?"true":"false";
   },this.spellcheck)),HtmlNode.title(this.title),HtmlNode.style("height: 100%;  width: 100%; box-sizing: border-box; "),HtmlNode.placeholder(this.placeholder),new HtmlNode$1({
    $:8,
    $0:(view=View.Const(""),AttrModule.DynamicPred("disabled",Val.toView(this.disabled),view))
   })]),more))]);
  }
 },null,TextArea);
 TextArea.New$1=function(v)
 {
  return TextArea.New$3(Var$1.Lens(v,function(o)
  {
   return o==null?"":o.$0;
  },function(sO,s)
  {
   return sO==null?null:{
    $:1,
    $0:s
   };
  })).Disabled(Val.map(function(o)
  {
   return o==null;
  },v));
 };
 TextArea.New$2=function(v)
 {
  return TextArea.New$3(Var$1.Create$1(v));
 };
 TextArea.New$3=function(_var)
 {
  return TextArea.New(Val.fixit("form-control"),Val.fixit("Enter text:"),Val.fixit(""),Val.fixit(false),"",_var,Val.fixit(false));
 };
 TextArea.New=function(_class,placeholder,title,spellcheck,id,_var,disabled)
 {
  return new TextArea({
   _class:_class,
   placeholder:placeholder,
   title:title,
   spellcheck:spellcheck,
   id:id,
   "var":_var,
   disabled:disabled
  });
 };
 CodeMirrorPos.New=function(line,ch)
 {
  return{
   line:line,
   ch:ch
  };
 };
 CodeMirrorEditor=Template.CodeMirrorEditor=Runtime.Class({},Obj,CodeMirrorEditor);
 CodeMirrorEditor.New=Runtime.Ctor(function()
 {
 },CodeMirrorEditor);
 CodeMirror=Template.CodeMirror=Runtime.Class({
  get_Var:function()
  {
   return this["var"];
  },
  Disabled:function(dis)
  {
   return CodeMirror.New(this._class,this.style,this.id,this["var"],this.onChange,this.onRender,this.editorO,Val.fixit(dis));
  },
  OnRender:function(f)
  {
   return CodeMirror.New(this._class,this.style,this.id,this["var"],this.onChange,{
    $:1,
    $0:f
   },this.editorO,this.disabled);
  },
  OnChange:function(f)
  {
   return CodeMirror.New(this._class,this.style,this.id,this["var"],f,this.onRender,this.editorO,this.disabled);
  },
  Style:function(sty)
  {
   return CodeMirror.New(this._class,Val.fixit(sty),this.id,this["var"],this.onChange,this.onRender,this.editorO,this.disabled);
  },
  SetVar:function(v)
  {
   return CodeMirror.New(this._class,this.style,this.id,v,this.onChange,this.onRender,this.editorO,this.disabled);
  },
  Id:function(id)
  {
   return CodeMirror.New(this._class,this.style,id,this["var"],this.onChange,this.onRender,this.editorO,this.disabled);
  },
  Class:function(clas)
  {
   return CodeMirror.New(Val.fixit(clas),this.style,this.id,this["var"],this.onChange,this.onRender,this.editorO,this.disabled);
  },
  get_Render:function()
  {
   var $this;
   $this=this;
   return HtmlNode.div([HtmlNode["class"](this._class),new HtmlNode$1({
    $:8,
    $0:AttrProxy.Create("id",this.id)
   }),HtmlNode.style("position: relative; height: 300px"),HtmlNode.style(this.style),HtmlNode.div([HtmlNode.style("height: 100%; width: 100%; position: absolute;"),new HtmlNode$1({
    $:8,
    $0:AttrProxy.OnAfterRenderImpl(function(el)
    {
     var b;
     Concurrency.Start((b=null,Concurrency.Delay(function()
     {
      return Concurrency.Bind(LoadFiles.LoadFilesAsync(Template.codeMirrorIncludes()),function()
      {
       var editor,o,editorChanged,varChanged;
       editor=Global.CodeMirror(el,{
        theme:"rubyblue",
        lineNumbers:true,
        matchBrackets:true,
        gutters:["CodeMirror-lint-markers"],
        extraKeys:{
         Tab:function(cm)
         {
          cm.replaceSelection("    ","end");
         },
         F11:function(cm)
         {
          cm.setOption("fullScreen",!cm.getOption("fullScreen"));
         }
        }
       });
       $this.editorO={
        $:1,
        $0:editor
       };
       o=$this.onRender;
       o==null?void 0:o.$0(editor);
       editorChanged=[0];
       varChanged=[0];
       editor.on("changes",function()
       {
        var v;
        v=editor.getValue();
        $this["var"].Get()!==v?(editorChanged[0]=editorChanged[0]+1,$this["var"].Set(v),$this.onChange()):void 0;
       });
       View.Sink(function()
       {
        if(editorChanged[0]>varChanged[0])
         varChanged[0]=editorChanged[0];
        else
         if(editor.getValue()!==$this["var"].Get())
          {
           editor.setValue($this["var"].Get());
           editor.getDoc().clearHistory();
          }
       },$this["var"].get_View());
       Val.sink(function(dis)
       {
        editor.setOption("readOnly",dis&&"nocursor");
       },$this.disabled);
       return Concurrency.Zero();
      });
     })),null);
    })
   })]),HtmlNode.link([HtmlNode.href("/EPFileX/codemirror/content/editor.css"),HtmlNode.type("text/css"),HtmlNode.rel("stylesheet")]),HtmlNode.link([HtmlNode.href("/EPFileX/codemirror/content/codemirror.css"),HtmlNode.type("text/css"),HtmlNode.rel("stylesheet")]),HtmlNode.link([HtmlNode.href("/EPFileX/codemirror/scripts/addon/display/fullscreen.css"),HtmlNode.type("text/css"),HtmlNode.rel("stylesheet")]),HtmlNode.link([HtmlNode.href("/EPFileX/codemirror/scripts/addon/dialog/dialog.css"),HtmlNode.type("text/css"),HtmlNode.rel("stylesheet")]),HtmlNode.link([HtmlNode.href("/EPFileX/codemirror/scripts/addon/hint/show-hint.css"),HtmlNode.type("text/css"),HtmlNode.rel("stylesheet")]),HtmlNode.link([HtmlNode.href("/EPFileX/codemirror/scripts/addon/lint/lint.css"),HtmlNode.type("text/css"),HtmlNode.rel("stylesheet")]),HtmlNode.css(".CodeMirror { height: 100% }")]);
  }
 },null,CodeMirror);
 CodeMirror.New$1=function(v)
 {
  return CodeMirror.New$3(Var$1.Lens(v,function(o)
  {
   return o==null?"":o.$0;
  },function(sO,s)
  {
   return sO==null?null:{
    $:1,
    $0:s
   };
  })).Disabled(Val.map(function(o)
  {
   return o==null;
  },v));
 };
 CodeMirror.New$2=function(v)
 {
  return CodeMirror.New$3(Var$1.Create$1(v));
 };
 CodeMirror.get_Render$4099$48=function(_this)
 {
  return function(el)
  {
   var b;
   Concurrency.Start((b=null,Concurrency.Delay(function()
   {
    return Concurrency.Bind(LoadFiles.LoadFilesAsync(Template.codeMirrorIncludes()),function()
    {
     var editor,o,editorChanged,varChanged;
     editor=Global.CodeMirror(el,{
      theme:"rubyblue",
      lineNumbers:true,
      matchBrackets:true,
      gutters:["CodeMirror-lint-markers"],
      extraKeys:{
       Tab:function(cm)
       {
        cm.replaceSelection("    ","end");
       },
       F11:function(cm)
       {
        cm.setOption("fullScreen",!cm.getOption("fullScreen"));
       }
      }
     });
     _this.editorO={
      $:1,
      $0:editor
     };
     o=_this.onRender;
     o==null?void 0:o.$0(editor);
     editorChanged=[0];
     varChanged=[0];
     editor.on("changes",function()
     {
      var v;
      v=editor.getValue();
      _this["var"].Get()!==v?(editorChanged[0]=editorChanged[0]+1,_this["var"].Set(v),_this.onChange()):void 0;
     });
     View.Sink(function()
     {
      if(editorChanged[0]>varChanged[0])
       varChanged[0]=editorChanged[0];
      else
       if(editor.getValue()!==_this["var"].Get())
        {
         editor.setValue(_this["var"].Get());
         editor.getDoc().clearHistory();
        }
     },_this["var"].get_View());
     Val.sink(function(dis)
     {
      editor.setOption("readOnly",dis&&"nocursor");
     },_this.disabled);
     return Concurrency.Zero();
    });
   })),null);
  };
 };
 CodeMirror.New$3=function(_var)
 {
  return CodeMirror.New(Val.fixit(""),Val.fixit(""),"",_var,Global.ignore,null,null,Val.fixit(false));
 };
 CodeMirror.New=function(_class,style,id,_var,onChange,onRender,editorO,disabled)
 {
  return new CodeMirror({
   _class:_class,
   style:style,
   id:id,
   "var":_var,
   onChange:onChange,
   onRender:onRender,
   editorO:editorO,
   disabled:disabled
  });
 };
 Hint.New=function(text,displayText,className)
 {
  return{
   text:text,
   displayText:displayText,
   className:className
  };
 };
 HintResponse.New=function(list,from,to)
 {
  return{
   list:list,
   from:from,
   to:to
  };
 };
 HintOptions.New=function(hint,completeSingle,container)
 {
  return{
   hint:hint,
   completeSingle:completeSingle,
   container:container
  };
 };
 LintResponse.New=function(message,severity,from,to)
 {
  return{
   message:message,
   severity:severity,
   from:from,
   to:to
  };
 };
 SplitterBar=Template.SplitterBar=Runtime.Class({
  Children:function(ch)
  {
   return SplitterBar.New(this.value,this.min,this.max,this.vertical,this.node,ch,this.after,this.dragging,this.startVer,this.startP,this.start,this.size,this.domElem);
  },
  get_After:function()
  {
   return SplitterBar.New(this.value,this.min,this.max,this.vertical,this.node,this.children,true,this.dragging,this.startVer,this.startP,this.start,this.size,this.domElem);
  },
  get_Before:function()
  {
   return SplitterBar.New(this.value,this.min,this.max,this.vertical,this.node,this.children,false,this.dragging,this.startVer,this.startP,this.start,this.size,this.domElem);
  },
  Horizontal:function()
  {
   return SplitterBar.New(this.value,this.min,this.max,Val.fixit(false),this.node,this.children,this.after,this.dragging,this.startVer,this.startP,this.start,this.size,this.domElem);
  },
  Vertical:function()
  {
   return SplitterBar.New(this.value,this.min,this.max,Val.fixit(true),this.node,this.children,this.after,this.dragging,this.startVer,this.startP,this.start,this.size,this.domElem);
  },
  Horizontal$1:function(v)
  {
   return SplitterBar.New(this.value,this.min,this.max,Val.map(function(v$1)
   {
    return!v$1;
   },Val.fixit(v)),this.node,this.children,this.after,this.dragging,this.startVer,this.startP,this.start,this.size,this.domElem);
  },
  Vertical$1:function(v)
  {
   return SplitterBar.New(this.value,this.min,this.max,Val.fixit(v),this.node,this.children,this.after,this.dragging,this.startVer,this.startP,this.start,this.size,this.domElem);
  },
  Max:function(v)
  {
   return SplitterBar.New(this.value,this.min,Val.fixit(v),this.vertical,this.node,this.children,this.after,this.dragging,this.startVer,this.startP,this.start,this.size,this.domElem);
  },
  Min:function(v)
  {
   return SplitterBar.New(this.value,Val.fixit(v),this.max,this.vertical,this.node,this.children,this.after,this.dragging,this.startVer,this.startP,this.start,this.size,this.domElem);
  },
  Node:function(node)
  {
   return SplitterBar.New(this.value,this.min,this.max,this.vertical,node,this.children,this.after,this.dragging,this.startVer,this.startP,this.start,this.size,this.domElem);
  },
  Value:function(v)
  {
   this.value.Set(v);
   return this;
  },
  get_Render:function()
  {
   var $this;
   function mouseCoord(ev)
   {
    return $this.startVer?ev.clientX:ev.clientY;
   }
   function size()
   {
    var m;
    m=$this.domElem;
    return m!=null&&m.$==1?$this.startVer?$this.after?m.$0.parentElement.getBoundingClientRect().width:-m.$0.parentElement.getBoundingClientRect().width:$this.after?m.$0.parentElement.getBoundingClientRect().height:-m.$0.parentElement.getBoundingClientRect().height:100;
   }
   function drag(ev)
   {
    $this.value.Set((mouseCoord(ev)-$this.start)*100/$this.size+$this.startP);
   }
   function finishDragging()
   {
    if($this.dragging)
     {
      $this.dragging=false;
      Global.removeEventListener("mousemove",drag,false);
      Global.removeEventListener("mouseup",finishDragging,false);
     }
   }
   function startDragging(a,ev)
   {
    return!$this.dragging?($this.dragging=true,$this.startVer=View.TryGet(Val.toView($this.vertical)).$0,$this.startP=View.TryGet(Val.toView($this.get_GetValue())).$0,$this.start=mouseCoord(ev),$this.size=size(),Global.addEventListener("mousemove",drag,false),Global.addEventListener("mouseup",finishDragging,false),ev.preventDefault()):null;
   }
   $this=this;
   return this.node.AddChildren([HtmlNode["class"](Val.map(function(ver)
   {
    return ver?"Vertical":"Horizontal";
   },this.vertical)),new HtmlNode$1({
    $:8,
    $0:AttrProxy.HandlerImpl("mousedown",function($1)
    {
     return function($2)
     {
      return startDragging($1,$2);
     };
    })
   }),new HtmlNode$1({
    $:8,
    $0:AttrProxy.OnAfterRenderImpl(function(el)
    {
     $this.domElem={
      $:1,
      $0:el
     };
    })
   }),HtmlNode.css("\n                    .Splitter.Vertical   { cursor: col-resize; background-color: #eef ; width : 5px ; margin-left:-7px; }\n                    .Splitter.Horizontal { cursor: row-resize; background-color: #eef ; height: 5px ; margin-top :-7px; }\n                ")]).AddChildren(this.children);
  },
  get_GetValue:function()
  {
   function f(e,e$1)
   {
    return Unchecked.Compare(e,e$1)===-1?e:e$1;
   }
   function f$1(e,e$1)
   {
    return Unchecked.Compare(e,e$1)===1?e:e$1;
   }
   return Val.map2(function($1)
   {
    return function($2)
    {
     return f($1,$2);
    };
   },this.max,Val.map2(function($1)
   {
    return function($2)
    {
     return f$1($1,$2);
    };
   },this.min,this.value));
  },
  get_Var:function()
  {
   return this.value;
  }
 },null,SplitterBar);
 SplitterBar.get_Render$4264$45=function(_this)
 {
  return function(el)
  {
   _this.domElem={
    $:1,
    $0:el
   };
  };
 };
 SplitterBar.get_Render$4263$42=Global.id;
 SplitterBar.New$1=function(value)
 {
  return SplitterBar.New$2(Var$1.Create$1(value));
 };
 SplitterBar.New$2=function(_var)
 {
  return SplitterBar.New(_var,Val.fixit(5),Val.fixit(95),Val.fixit(true),HtmlNode.div([HtmlNode["class"]("Splitter")]),List$1.T.Empty,true,false,true,0,0,0,null);
 };
 SplitterBar.New=function(value,min,max,vertical,node,children,after,dragging,startVer,startP,start,size,domElem)
 {
  return new SplitterBar({
   value:value,
   min:min,
   max:max,
   vertical:vertical,
   node:node,
   children:children,
   after:after,
   dragging:dragging,
   startVer:startVer,
   startP:startP,
   start:start,
   size:size,
   domElem:domElem
  });
 };
 SectionType.StFixedPerc={
  $:2
 };
 SectionType.StFixedPx={
  $:1
 };
 SectionType.StVariable={
  $:0
 };
 Grid=Template.Grid=Runtime.Class({
  get_Render:function()
  {
   return HtmlNode.div(this.GridTemplate());
  },
  GridTemplate:function()
  {
   var $this;
   $this=this;
   return List$1.ofSeq(Seq$2.delay(function()
   {
    function m(area,html)
    {
     return area!=null&&area.$==1?html.AddChildren([HtmlNode.style((function($1)
     {
      return function($2)
      {
       return $1("grid-area: "+Utils.toSafe($2)+"; dispxlay: grid");
      };
     }(Global.id))(area.$0))]):html;
    }
    return Seq$2.append(Seq$2.map(function($1)
    {
     return m($1[0],$1[1]);
    },$this.content),Seq$2.delay(function()
    {
     function c($1,$2)
     {
      var spl;
      return $2.$==2?(spl=$2.$0,{
       $:1,
       $0:spl.get_Render().InsertChildren([HtmlNode.style1("grid-column",Global.String($1+(spl.after?2:1))),HtmlNode.style1("grid-row",(function($3)
       {
        return function($4)
        {
         return $3("1 / "+Global.String($4));
        };
       }(Global.id))(Arrays.length($this.rows)+1))])
      }):$2.$==1?null:null;
     }
     return Seq$2.append(Seq$2.choose(function($1)
     {
      return c($1[0],$1[1]);
     },Seq$2.indexed($this.cols)),Seq$2.delay(function()
     {
      function c$1($1,$2)
      {
       var spl;
       return $2.$==2?(spl=$2.$0,{
        $:1,
        $0:spl.get_Render().InsertChildren([HtmlNode.style1("grid-row",Global.String($1+(spl.after?2:1))),HtmlNode.style1("grid-column",(function($3)
        {
         return function($4)
         {
          return $3("1 / "+Global.String($4));
         };
        }(Global.id))(Arrays.length($this.cols)+1))])
       }):$2.$==1?null:null;
      }
      return Seq$2.append(Seq$2.choose(function($1)
      {
       return c$1($1[0],$1[1]);
      },Seq$2.indexed($this.rows)),Seq$2.delay(function()
      {
       return Seq$2.append($this.styles(),Seq$2.delay(function()
       {
        return Seq$2.append([HtmlNode.style((((Runtime.Curried3(function($1,$2,$3)
        {
         return $1("display: grid; grid-gap: "+$2.toFixed(6)+"px; padding: "+$3.toFixed(6)+"px; box-sizing: border-box");
        }))(Global.id))($this.gap))($this.padding))],Seq$2.delay(function()
        {
         return[new HtmlNode$1({
          $:8,
          $0:AttrProxy.OnAfterRenderImpl(function(el)
          {
           function setDimensions()
           {
            var r;
            r=el.getBoundingClientRect();
            Template.setVar($this.widthHeight,[r.width,r.height]);
           }
           setDimensions();
           Template.addResizeObserver(setDimensions,el);
          })
         })];
        }));
       }));
      }));
     }));
    }));
   }));
  },
  styles:function()
  {
   return List$1.ofArray([HtmlNode.style1("grid-template-columns",this.style(this.cols,Val.map(function(t)
   {
    return t[0];
   },this.widthHeight))),HtmlNode.style1("grid-template-rows",this.style(this.rows,Val.map(function(t)
   {
    return t[1];
   },this.widthHeight)))]);
  },
  style:function(areas,size)
  {
   var $this,p,finalPerc,autoPct;
   function f(pcs,pxs)
   {
    return function(a)
    {
     return a.$==2?[Val.map2(function(x)
     {
      return function(y)
      {
       return x+y;
      };
     },a.$0.get_GetValue(),pcs),pxs]:a.$==1?a.$0.$==1?[pcs,Val.map2(function(x)
     {
      return function(y)
      {
       return x+y;
      };
     },a.$0.$0,pxs)]:[Val.map2(function(x)
     {
      return function(y)
      {
       return x+y;
      };
     },a.$0.$0,pcs),pxs]:[pcs,pxs];
    };
   }
   function perc(pc)
   {
    return Val.map2(function(finalPerc$1)
    {
     return function(pc$1)
     {
      var x,e,a;
      x=(e=finalPerc$1*pc$1,(a=0,Unchecked.Compare(a,e)===1?a:e));
      return(function($1)
      {
       return function($2)
       {
        return $1($2.toFixed(6)+"%");
       };
      }(Global.id))(x);
     };
    },finalPerc,pc);
   }
   function pixel(px)
   {
    return Val.map(function(px$1)
    {
     var x,a;
     x=(a=0,Unchecked.Compare(a,px$1)===1?a:px$1);
     return(function($1)
     {
      return function($2)
      {
       return $1($2.toFixed(6)+"px");
      };
     }(Global.id))(x);
    },px);
   }
   $this=this;
   return Arrays.length(areas)===0?new Val({
    $:0,
    $0:"100%"
   }):(p=Seq$2.fold(function($1,$2)
   {
    return(function($3)
    {
     return f($3[0],$3[1]);
    }($1))($2);
   },[new Val({
    $:0,
    $0:0
   }),new Val({
    $:0,
    $0:0
   })],areas),(finalPerc=Val.map2(function(v)
   {
    return function(size$1)
    {
     return(size$1-$this.padding*2-$this.gap*(Arrays.length(areas)-1)-v)/(size$1-$this.padding*2);
    };
   },p[1],size),(autoPct=Val.map(function(y)
   {
    return 100-y;
   },p[0]),Val.map(function(s)
   {
    return Strings.concat(" ",s);
   },Seq$2.foldBack(function(a,state)
   {
    function f$1(state$1,v)
    {
     return new List$1.T({
      $:1,
      $0:v,
      $1:state$1
     });
    }
    return Val.map2(function($1)
    {
     return function($2)
     {
      return f$1($1,$2);
     };
    },state,a.$==2?perc(a.$0.get_GetValue()):a.$==1?a.$0.$==1?pixel(a.$0.$0):perc(a.$0.$0):perc(autoPct));
   },areas,new Val({
    $:0,
    $0:List$1.T.Empty
   }))))));
  },
  Children:function(ch)
  {
   return this.changeSplitter(function(spl)
   {
    return spl.Children(ch);
   });
  },
  Min:function(v)
  {
   return this.changeSplitter(function(spl)
   {
    return spl.Min(v);
   });
  },
  Max:function(v)
  {
   return this.changeSplitter(function(spl)
   {
    return spl.Max(v);
   });
  },
  get_Before:function()
  {
   return this.changeSplitter(function(spl)
   {
    return spl.get_Before();
   });
  },
  changeSplitter:function(f)
  {
   var $this,o,$1,pos,m,m$1;
   $this=this;
   o=this.lastSplitter;
   o==null?void 0:($1=o.$0,pos=$1[0],$1[1]?(m=Arrays.get($this.cols,pos),m.$==2?Arrays.set($this.cols,pos,{
    $:2,
    $0:f(m.$0)
   }):void 0):(m$1=Arrays.get($this.rows,pos),m$1.$==2?Arrays.set($this.rows,pos,{
    $:2,
    $0:f(m$1.$0)
   }):void 0));
   return this;
  },
  Gap:function(f)
  {
   return Grid.New(this.padding,f,this.content,this.cols,this.rows,this.widthHeight,this.lastSplitter);
  },
  Padding:function(f)
  {
   return Grid.New(f,this.gap,this.content,this.cols,this.rows,this.widthHeight,this.lastSplitter);
  },
  Content:function(html)
  {
   return Grid.New(this.padding,this.gap,this.content.concat([[null,html]]),this.cols,this.rows,this.widthHeight,this.lastSplitter);
  },
  Content$1:function(area,html)
  {
   return Grid.New(this.padding,this.gap,this.content.concat([[{
    $:1,
    $0:area
   },html]]),this.cols,this.rows,this.widthHeight,this.lastSplitter);
  },
  RowAuto:function(f)
  {
   return Grid.New(this.padding,this.gap,this.content,this.cols,this.rows.concat([{
    $:0,
    $0:SplitterBar.New$1(f).Horizontal()
   }]),this.widthHeight,this.lastSplitter);
  },
  RowVariable:function(f)
  {
   return this.NewSplitter$1(f,false);
  },
  RowVariable$1:function(f)
  {
   return this.NewSplitter(f,false);
  },
  RowVariable$2:function(s)
  {
   return Grid.New(this.padding,this.gap,this.content,this.cols,this.rows.concat([{
    $:2,
    $0:s
   }]),this.widthHeight,this.lastSplitter);
  },
  RowFixed:function(f)
  {
   return Grid.New(this.padding,this.gap,this.content,this.cols,this.rows.concat([{
    $:1,
    $0:{
     $:0,
     $0:Val.fixit(f)
    }
   }]),this.widthHeight,this.lastSplitter);
  },
  RowFixedPx:function(f)
  {
   return Grid.New(this.padding,this.gap,this.content,this.cols,this.rows.concat([{
    $:1,
    $0:{
     $:1,
     $0:Val.fixit(f)
    }
   }]),this.widthHeight,this.lastSplitter);
  },
  ColAuto:function(f)
  {
   return Grid.New(this.padding,this.gap,this.content,this.cols.concat([{
    $:0,
    $0:SplitterBar.New$1(f)
   }]),this.rows,this.widthHeight,this.lastSplitter);
  },
  ColVariable:function(f)
  {
   return this.NewSplitter$1(f,true);
  },
  ColVariable$1:function(f)
  {
   return this.NewSplitter(f,true);
  },
  ColVariable$2:function(s)
  {
   return Grid.New(this.padding,this.gap,this.content,this.cols.concat([{
    $:2,
    $0:s
   }]),this.rows,this.widthHeight,this.lastSplitter);
  },
  ColFixed:function(f)
  {
   return Grid.New(this.padding,this.gap,this.content,this.cols.concat([{
    $:1,
    $0:{
     $:0,
     $0:Val.fixit(f)
    }
   }]),this.rows,this.widthHeight,this.lastSplitter);
  },
  ColFixedPx:function(f)
  {
   return Grid.New(this.padding,this.gap,this.content,this.cols.concat([{
    $:1,
    $0:{
     $:1,
     $0:Val.fixit(f)
    }
   }]),this.rows,this.widthHeight,this.lastSplitter);
  },
  NewSplitter:function(f,col)
  {
   return this.NewSplitter$1(Var$1.Create$1(f),col);
  },
  NewSplitter$1:function(f,col)
  {
   var spl,l,l$1;
   spl=SplitterBar.New$2(f);
   return col?(l={
    $:1,
    $0:[Arrays.length(this.cols),col]
   },Grid.New(this.padding,this.gap,this.content,this.cols.concat([{
    $:2,
    $0:spl
   }]),this.rows,this.widthHeight,l)):(l$1={
    $:1,
    $0:[Arrays.length(this.rows),col]
   },Grid.New(this.padding,this.gap,this.content,this.cols,this.rows.concat([{
    $:2,
    $0:spl.Horizontal()
   }]),this.widthHeight,l$1));
  }
 },null,Grid);
 Grid.NewBisect=function(first,secT,ver,per,ch1,ch2)
 {
  var p,sect,auto;
  p=ver?[secT.$==1?function(g)
  {
   return g.ColFixedPx(per);
  }:secT.$==2?function(g)
  {
   return g.ColFixed(per);
  }:function(g)
  {
   return g.ColVariable(per);
  },function(g)
  {
   return g.ColAuto(50);
  },function(g)
  {
   return g.Content(HtmlNode.style("grid-template-areas: 'one   two' "));
  }]:[secT.$==1?function(g)
  {
   return g.RowFixedPx(per);
  }:secT.$==2?function(g)
  {
   return g.RowFixed(per);
  }:function(g)
  {
   return g.RowVariable(per);
  },function(g)
  {
   return g.RowAuto(50);
  },function(g)
  {
   return g.Content(HtmlNode.style("grid-template-areas: 'one' 'two' "));
  }];
  sect=p[0];
  auto=p[1];
  return(first?function(x)
  {
   return auto(sect(x));
  }:function(x)
  {
   return sect(auto(x));
  })(p[2](Grid.get_New().Content$1("one",ch1).Content$1("two",ch2).Padding(0)));
 };
 Grid.GridTemplate$4451$49=function(_this)
 {
  return function(el)
  {
   function setDimensions()
   {
    var r;
    r=el.getBoundingClientRect();
    Template.setVar(_this.widthHeight,[r.width,r.height]);
   }
   setDimensions();
   Template.addResizeObserver(setDimensions,el);
  };
 };
 Grid.get_New=function()
 {
  return Grid.New(9,9,[],[],[],Var$1.Create$1([1000,100]),null);
 };
 Grid.New=function(padding,gap,content,cols,rows,widthHeight,lastSplitter)
 {
  return new Grid({
   padding:padding,
   gap:gap,
   content:content,
   cols:cols,
   rows:rows,
   widthHeight:widthHeight,
   lastSplitter:lastSplitter
  });
 };
 TabStrip=Template.TabStrip=Runtime.Class({
  get_Render:function()
  {
   var $this,strip,g,content;
   $this=this;
   strip=HtmlNode.bindHElem(function(tabs)
   {
    return HtmlNode.div(List$1.ofSeq(Seq$2.delay(function()
    {
     return Seq$2.append([HtmlNode["class"]((((Runtime.Curried3(function($1,$2,$3)
     {
      return $1("tab-strip "+Utils.toSafe($2)+" "+Utils.toSafe($3));
     }))(Global.id))($this.top?"top":"bottom"))($this.horizontal?"horizontal":"vertical"))],Seq$2.delay(function()
     {
      return Seq$2.collect(function(m)
      {
       var i;
       i=m[0];
       return[Hoverable.get_New().Content(HtmlNode.div([HtmlNode.htmlText(m[1][1][0]),HtmlNode["class"](Val.map(function(sel)
       {
        return"tab"+(sel===i?" selected":"");
       },$this.selected)),HtmlNode.draggable("true"),new HtmlNode$1({
        $:8,
        $0:AttrProxy.HandlerImpl("dragover",function()
        {
         return function(ev)
         {
          return ev.preventDefault();
         };
        })
       }),new HtmlNode$1({
        $:8,
        $0:AttrProxy.HandlerImpl("drag",function()
        {
         return function()
         {
          (Template.draggedTab())[0]={
           $:1,
           $0:[$this,i]
          };
         };
        })
       }),new HtmlNode$1({
        $:8,
        $0:AttrProxy.HandlerImpl("drop",function()
        {
         return function(ev)
         {
          ev.preventDefault();
          ev.stopPropagation();
          return $this.reorder(i);
         };
        })
       }),new HtmlNode$1({
        $:8,
        $0:AttrProxy.HandlerImpl("click",function()
        {
         return function()
         {
          return $this.selected.Set(i);
         };
        })
       })]))];
      },Seq$2.indexed(tabs));
     }));
    })));
   },this.tabs);
   Val.sink((g=this.id,function(p)
   {
    Template.setSelectedPanel(g,p);
   }),this.get_Selected());
   content=HtmlNode.bindHElem(function(tabs)
   {
    return HtmlNode.div(List$1.ofSeq(Seq$2.delay(function()
    {
     return Seq$2.append([HtmlNode["class"]("tab-children")],Seq$2.delay(function()
     {
      return Seq$2.append([HtmlNode.Id(Template.uid2s($this.id))],Seq$2.delay(function()
      {
       function m(uid,a)
       {
        return a[1].AddChildren([HtmlNode.style(Val.map(function(sels)
        {
         return Seq$2.contains(uid,Seq$2.map(function(t)
         {
          return t[1];
         },Map.ToSeq(sels)))?"":"display : none";
        },Template.selectedPanels())),HtmlNode.Id(Template.uid2s(uid))]);
       }
       return Seq$2.map(function($1)
       {
        return m($1[0],$1[1]);
       },tabs);
      }));
     }));
    })));
   },this.tabs);
   return HtmlNode.div([HtmlNode["class"]("tab-panel"),this.top?strip:HtmlNode$1.HtmlEmpty,HtmlNode.div([content,HtmlNode["class"]("tab-content")]),!this.top?strip:HtmlNode$1.HtmlEmpty,new HtmlNode$1({
    $:8,
    $0:AttrProxy.HandlerImpl("dragover",function()
    {
     return function(ev)
     {
      return ev.preventDefault();
     };
    })
   }),new HtmlNode$1({
    $:8,
    $0:AttrProxy.HandlerImpl("drop",function()
    {
     return function(ev)
     {
      ev.preventDefault();
      return $this.reorder(Arrays.length($this.tabs.Get()));
     };
    })
   }),HtmlNode.css("\n    \n    .tab-panel {\n     overflow  : hidden   ;\n     display   : flex     ;\n     flex-flow : column   ;\n     background: lightgray;\n    }\n    .tab-content {\n     flex      : 1 1     ;\n     overflow  : auto    ;\n     position  : relative;\n    }\n    .tab-children {\n     height    : 100%    ;\n     width     : 100%    ;\n     position  : absolute;\n     display   : grid    ;\n    }\n    .tab-strip {\n     padding   : 0pt     ;\n     flex      : 0 0     ;\n    }\n    .tab {\n     border     : 0.2pt solid transparent;\n     padding    : 0pt 4pt;\n     display    : inline-block;\n     font-family: sans-serif;\n     font-weight: 200;\n     font-size  : small;\n     color      : #666;\n     cursor     : pointer;\n    }\n    .top>.tab {\n     border-radius: 2pt 2pt 0pt 0pt;\n     border-bottom-width: 0pt;\n     vertical-align: bottom;\n    }\n    .bottom>.tab {\n     border-top-width: 0pt;\n     border-radius: 0pt 0pt 2pt 2pt;\n     vertical-align: top;\n    }\n    .horizontal>.tab:not(:first-child) {\n     border-left-width: 0pt;\n    }\n    .tab.hovering {\n     background: red;\n    }\n    .tab.selected {\n     background: white;\n     border-left-width: 0.2pt;\n     color: black;\n     font-weight: 500;\n     border-color: black;\n    }\n    .horizontal>.tab.selected {\n     border-left-width: 0.2pt;\n    }\n    ")]);
  },
  Select:function(gi)
  {
   var $this,o;
   function c(i,a)
   {
    return Unchecked.Equals(a[0],gi)?($this.selected.Set(i),{
     $:1,
     $0:true
    }):null;
   }
   $this=this;
   o=Seq$2.tryPick(function($1)
   {
    return c($1[0],$1[1]);
   },Seq$2.indexed(this.tabs.Get()));
   return o==null?false:o.$0;
  },
  Select$1:function(nm)
  {
   var $this,o;
   function c(i,a)
   {
    return a[1][0]===nm?($this.selected.Set(i),{
     $:1,
     $0:true
    }):null;
   }
   $this=this;
   o=Seq$2.tryPick(function($1)
   {
    return c($1[0],$1[1]);
   },Seq$2.indexed(this.tabs.Get()));
   return o==null?false:o.$0;
  },
  Select$2:function(n)
  {
   this.selected.Set(n);
  },
  get_Selected:function()
  {
   return Val.map2(function(tabs)
   {
    return function(sel)
    {
     var o;
     o=Seq$2.tryItem(sel,tabs);
     return o==null?null:{
      $:1,
      $0:o.$0[0]
     };
    };
   },this.tabs,this.selected);
  },
  get_Vertical:function()
  {
   return TabStrip.New(this.selected,this.tabs,this.top,false,this.id);
  },
  get_Horizontal:function()
  {
   return TabStrip.New(this.selected,this.tabs,this.top,true,this.id);
  },
  SetTop:function(t)
  {
   return TabStrip.New(this.selected,this.tabs,t,this.horizontal,this.id);
  },
  get_Bottom:function()
  {
   return TabStrip.New(this.selected,this.tabs,false,this.horizontal,this.id);
  },
  get_Top:function()
  {
   return TabStrip.New(this.selected,this.tabs,true,this.horizontal,this.id);
  },
  reorder:function(drop)
  {
   var drag,sel,m;
   m=(Template.draggedTab())[0];
   if(m!=null&&m.$==1)
   {
    if(!Unchecked.Equals(m.$0[0].id,this.id))
     this.moveTab(m.$0[0],m.$0[1],drop);
    else
     if(m!=null&&m.$==1)
      {
       drag=m.$0[1];
       this.tabs.Set(Template.reorderArray(this.tabs.Get(),drag,drop));
       sel=this.selected.Get();
       this.selected.Set(sel===drag?drop:sel<drag&&sel<drop||sel>drag&&sel>drop?sel:sel<drag?sel+1:sel-1);
      }
     else
      throw new MatchFailureException.New("Compiled\\FSharpStation2\\FSharpStation.fs",4562,18);
   }
   else
    void 0;
  },
  moveTab:function(from,drag,drop)
  {
   var ts,ft,newTabsT,newTabsF;
   ts=this.tabs.Get();
   ft=from.tabs.Get();
   newTabsT=Arrays.collect(Global.id,[Slice.array(ts,{
    $:1,
    $0:0
   },{
    $:1,
    $0:drop-1
   }),[Arrays.get(ft,drag)],Slice.array(ts,{
    $:1,
    $0:drop
   },{
    $:1,
    $0:Arrays.length(ts)-1
   })]);
   newTabsF=Arrays.collect(Global.id,[Slice.array(ft,{
    $:1,
    $0:0
   },{
    $:1,
    $0:drag-1
   }),Slice.array(ft,{
    $:1,
    $0:drag+1
   },{
    $:1,
    $0:Arrays.length(ft)-1
   })]);
   from.tabs.Set(newTabsF);
   this.tabs.Set(newTabsT);
   this.selected.Set(drop);
   from.selected.Get()>=Arrays.length(newTabsF)?from.selected.Set(0):void 0;
   Template.RaiseTabMoved(from,this);
  }
 },null,TabStrip);
 TabStrip.get_Render$4633$42=Runtime.Curried3(function(_this,$1,ev)
 {
  ev.preventDefault();
  return _this.reorder(Arrays.length(_this.tabs.Get()));
 });
 TabStrip.get_Render$4632$42=Runtime.Curried3(function($1,$2,ev)
 {
  return ev.preventDefault();
 });
 TabStrip.get_Render$4608$70=function(i,_this)
 {
  return function()
  {
   return function()
   {
    return _this.selected.Set(i);
   };
  };
 };
 TabStrip.get_Render$4607$70=function(i,_this)
 {
  return function()
  {
   return function(ev)
   {
    ev.preventDefault();
    ev.stopPropagation();
    return _this.reorder(i);
   };
  };
 };
 TabStrip.get_Render$4606$70=function(_this,i)
 {
  return function()
  {
   return function()
   {
    (Template.draggedTab())[0]={
     $:1,
     $0:[_this,i]
    };
   };
  };
 };
 TabStrip.get_Render$4605$70=Runtime.Curried3(function($1,$2,ev)
 {
  return ev.preventDefault();
 });
 TabStrip.New$1=function(tabs)
 {
  return TabStrip.New$2(Var$1.Create$1(Arrays.ofSeq(Seq$2.map(function(def)
  {
   return[Guid.NewGuid(),def];
  },tabs))));
 };
 TabStrip.New$2=function(tabs)
 {
  return TabStrip.New(Var$1.Create$1(0),tabs,false,true,Guid.NewGuid());
 };
 TabStrip.New=function(selected,tabs,top,horizontal,id)
 {
  return new TabStrip({
   selected:selected,
   tabs:tabs,
   top:top,
   horizontal:horizontal,
   id:id
  });
 };
 MenuEntry=Template.MenuEntry=Runtime.Class({
  get_MenuNode:function()
  {
   return new MenuNode({
    $:1,
    $0:this
   });
  },
  SubMenu:function(es)
  {
   return MenuEntry.New(this.text,this.ref,this.active,this.disabled,{
    $:1,
    $0:Menu.New2(es).get_DropDown()
   },this.toolTip,this.target,this.divider,this.onClick);
  },
  SubMenu$1:function(es)
  {
   return MenuEntry.New(this.text,this.ref,this.active,this.disabled,{
    $:1,
    $0:Menu.New$1(es).get_DropDown()
   },this.toolTip,this.target,this.divider,this.onClick);
  },
  Disabled:function(dis)
  {
   return MenuEntry.New(this.text,this.ref,this.active,Val.fixit(dis),this.subMenu,this.toolTip,this.target,this.divider,this.onClick);
  },
  OnClick:function(f)
  {
   return MenuEntry.New(this.text,this.ref,this.active,this.disabled,this.subMenu,this.toolTip,this.target,this.divider,{
    $:1,
    $0:f
   });
  },
  get_Divider:function()
  {
   return MenuEntry.New(this.text,this.ref,this.active,this.disabled,this.subMenu,this.toolTip,this.target,true,this.onClick);
  },
  Target:function(t)
  {
   return MenuEntry.New(this.text,this.ref,this.active,this.disabled,this.subMenu,this.toolTip,{
    $:1,
    $0:t
   },this.divider,this.onClick);
  },
  get_Render:function()
  {
   var x,x$1,x$2,x$3,o,m,a,m$1,a$1;
   return(this.divider?function(h)
   {
    return HtmlNode.addClass("divider",h);
   }:Global.id)((x=(x$1=(x$2=(x$3=Template.entryTxt(this.text,(o=this.target,o==null?"":o.$0),this.ref),(HtmlNode.addClassIf("active",this.active))(x$3)),(HtmlNode.addClassIf("disabled",this.disabled))(x$2)),(m=this.subMenu,(m!=null&&m.$==1?(a=List$1.ofArray([HtmlNode["class"]("dropdown"),m.$0.get_Render()]),function(h)
   {
    return HtmlNode.addChildren(a,h);
   }):Global.id)(x$1))),(m$1=this.onClick,(m$1!=null&&m$1.$==1?(a$1=List$1.ofArray([new HtmlNode$1({
    $:8,
    $0:AttrProxy.HandlerImpl("click",m$1.$0)
   }),HtmlNode.style("cursor : pointer")]),function(h)
   {
    return HtmlNode.addChildren(a$1,h);
   }):Global.id)(x))));
  }
 },null,MenuEntry);
 MenuEntry.get_Render$4746$104=Global.id;
 MenuEntry.New$1=function(txt,ref)
 {
  var i;
  i=MenuEntry.New$2(txt);
  return MenuEntry.New(i.text,Val.map(function(a)
  {
   return{
    $:1,
    $0:a
   };
  },ref),i.active,i.disabled,i.subMenu,i.toolTip,i.target,i.divider,i.onClick);
 };
 MenuEntry.New$2=function(txt)
 {
  var t,a;
  t=Val.fixit(txt);
  a=Val.fixit(false);
  return MenuEntry.New(t,new Val({
   $:0,
   $0:null
  }),a,Val.fixit(false),null,null,null,false,null);
 };
 MenuEntry.New=function(text,ref,active,disabled,subMenu,toolTip,target,divider,onClick)
 {
  return new MenuEntry({
   text:text,
   ref:ref,
   active:active,
   disabled:disabled,
   subMenu:subMenu,
   toolTip:toolTip,
   target:target,
   divider:divider,
   onClick:onClick
  });
 };
 MenuNode=Template.MenuNode=Runtime.Class({
  get_Render:function()
  {
   return this.$==1?this.$0.get_Render():this.$0;
  }
 },null,MenuNode);
 Menu=Template.Menu=Runtime.Class({
  get_Render:function()
  {
   var $this;
   $this=this;
   return(this.dropdown?Template.dropdown:Template.nav)(List$1.ofSeq(Seq$2.delay(function()
   {
    return Seq$2.map(function(entry)
    {
     return entry.get_Render();
    },$this.entries);
   })));
  },
  get_DropDown:function()
  {
   return Menu.New(this.entries,true);
  }
 },null,Menu);
 Menu.New2=function(es)
 {
  return Menu.New$1(Seq$2.map(function(a)
  {
   return new MenuNode({
    $:1,
    $0:a
   });
  },es));
 };
 Menu.New$1=function(es)
 {
  return Menu.New(es,false);
 };
 Menu.New=function(entries,dropdown)
 {
  return new Menu({
   entries:entries,
   dropdown:dropdown
  });
 };
 Action=Template.Action=Runtime.Class({
  get_Button:function()
  {
   var o,o$1,o$2;
   function v(a,a$1)
   {
    return null;
   }
   o=(o$1=(o$2=this.onClick,o$2==null?null:{
    $:1,
    $0:o$2.$0(this)
   }),o$1==null?function($1)
   {
    return function($2)
    {
     return v($1,$2);
    };
   }:o$1.$0);
   return Button.New(Val.map(function(h)
   {
    return h?"btn btn-primary":"btn";
   },this.highlight),Val.fixit("button"),Val.fixit(""),this.text,o,this.disabled,"");
  },
  get_MenuEntry:function()
  {
   var o,o$1;
   o=(o$1=this.onClick,o$1==null?null:{
    $:1,
    $0:o$1.$0(this)
   });
   return MenuEntry.New(this.text,new Val({
    $:0,
    $0:null
   }),this.highlight,this.disabled,null,this.toolTip,null,false,o);
  },
  Highlight:function(h)
  {
   return Action.New(this.text,Val.fixit(h),this.disabled,this.toolTip,this.onClick,this.parms);
  },
  Disabled:function(dis)
  {
   return Action.New(this.text,this.highlight,Val.fixit(dis),this.toolTip,this.onClick,this.parms);
  },
  OnClick2:function(f)
  {
   return Action.New(this.text,this.highlight,this.disabled,this.toolTip,{
    $:1,
    $0:f
   },this.parms);
  },
  OnClick:function(f)
  {
   return Action.New(this.text,this.highlight,this.disabled,this.toolTip,{
    $:1,
    $0:function()
    {
     return f;
    }
   },this.parms);
  },
  Parms:function(ps)
  {
   return Action.New(this.text,this.highlight,this.disabled,this.toolTip,this.onClick,{
    $:1,
    $0:ps
   });
  },
  Text:function(txt)
  {
   return Action.New(Val.fixit(txt),this.highlight,Val.fixit(false),this.toolTip,this.onClick,this.parms);
  }
 },null,Action);
 Action.New$1=function(txt)
 {
  return Action.New(Val.fixit(txt),Val.fixit(false),Val.fixit(false),null,null,null);
 };
 Action.New=function(text,highlight,disabled,toolTip,onClick,parms)
 {
  return new Action({
   text:text,
   highlight:highlight,
   disabled:disabled,
   toolTip:toolTip,
   onClick:onClick,
   parms:parms
  });
 };
 GuiPart=Template.GuiPart=Runtime.Class({
  GetHtmlNode:function(lyt,name)
  {
   var ts,per,minV,maxV,perV,curper;
   return this.$==1?[this.$0,Global.ignore]:this.$==2?[this.$0.get_Button().get_Render(),Global.ignore]:this.$==5?[lyt.GetCallButton(this.$0,this.$1,this.$2),Global.ignore]:this.$==4?(ts=TabStrip.New$1(Seq$2.map(function(node)
   {
    return[node,lyt.GetNode(node)];
   },this.$1)).SetTop(this.$0),(Template.addValue(name,ts,lyt.tabStrips),[ts.get_Render(),Global.ignore])):this.$==3?(per=this.$3,(minV=Var$1.Create$1(this.$6),(maxV=Var$1.Create$1(this.$7),(perV=Var$1.Create$1(per),(curper=[per],[Grid.NewBisect(this.$0,this.$1,this.$2,perV,lyt.GetNode(this.$4),lyt.GetNode(this.$5)).Min(minV).Max(maxV).get_Render(),function(a)
   {
    var per$1;
    if(a.$==3)
     {
      per$1=a.$3;
      curper[0]!==per$1?(curper[0]=per$1,perV.Set(per$1)):void 0;
      minV.Set(a.$6);
      maxV.Set(a.$7);
     }
   }]))))):[HtmlNode$1.HtmlEmpty,Global.ignore];
  }
 },null,GuiPart);
 HtmlNodeFable.New=function(HtmlElementF,HtmlAttributeF,HtmlAttributeOF,HtmlTextF,HtmlEmptyF,HtmlGuiPart,HtmlGuiCall)
 {
  return{
   HtmlElementF:HtmlElementF,
   HtmlAttributeF:HtmlAttributeF,
   HtmlAttributeOF:HtmlAttributeOF,
   HtmlTextF:HtmlTextF,
   HtmlEmptyF:HtmlEmptyF,
   HtmlGuiPart:HtmlGuiPart,
   HtmlGuiCall:HtmlGuiCall
  };
 };
 LayoutDescriptionFable.New=function(GuiRoot,GuiTabStrip,GuiSplit,GuiNode,GuiCall)
 {
  return{
   GuiRoot:GuiRoot,
   GuiTabStrip:GuiTabStrip,
   GuiSplit:GuiSplit,
   GuiNode:GuiNode,
   GuiCall:GuiCall
  };
 };
 GuiPartSourceId.get_New=function()
 {
  return{
   $:0,
   $0:Guid.NewGuid()
  };
 };
 Layout=Template.Layout=Runtime.Class({
  SelectTab:function(tName)
  {
   Seq$2.iter(function(ts)
   {
    ts.Select$1(tName);
   },this.tabStrips.get_Values());
  },
  SetLayoutJson:function(steps,json)
  {
   var $1,$this;
   function jsonF2HtmlNode(a)
   {
    var a$1,a$2,a$3,a$4,$2,a$5,a$6;
    a$1=Template.PHtmlElementF(a);
    return a$1!=null&&a$1.$==1?{
     $:1,
     $0:new HtmlNode$1({
      $:0,
      $0:a$1.$0[0],
      $1:Seq$2.choose(jsonF2HtmlNode,a$1.$0[1])
     })
    }:(a$2=Template.PHtmlAttributeF(a),a$2!=null&&a$2.$==1?{
     $:1,
     $0:new HtmlNode$1({
      $:3,
      $0:a$2.$0[0],
      $1:new Val({
       $:0,
       $0:a$2.$0[1]
      })
     })
    }:(a$3=Template.PHtmlAttributeOF(a),a$3!=null&&a$3.$==1?{
     $:1,
     $0:new HtmlNode$1({
      $:4,
      $0:a$3.$0[0],
      $1:new Val({
       $:0,
       $0:a$3.$0[1]
      })
     })
    }:(a$4=Template.PHtmlTextF(a),a$4!=null&&a$4.$==1?{
     $:1,
     $0:new HtmlNode$1({
      $:5,
      $0:new Val({
       $:0,
       $0:a$4.$0
      })
     })
    }:($2=Template.PHtmlEmptyF(a),$2!=null&&$2.$==1)?{
     $:1,
     $0:HtmlNode$1.HtmlEmpty
    }:(a$5=Template.PHtmlGuiPart(a),a$5!=null&&a$5.$==1?{
     $:1,
     $0:$this.GetNode(a$5.$0)
    }:(a$6=Template.PHtmlGuiCall(a),a$6!=null&&a$6.$==1?{
     $:1,
     $0:$this.GetCallButton(a$6.$0[0],a$6.$0[1],a$6.$0[2])
    }:null)))));
   }
   function jsonF2GuiRoot(a)
   {
    var a$1,a$2,a$3,t,a$4,a$5;
    a$1=Template.PGuiNode(a);
    return a$1!=null&&a$1.$==1?{
     $:1,
     $0:new GuiPart({
      $:1,
      $0:Option.defaultValue(HtmlNode$1.HtmlEmpty,jsonF2HtmlNode(a$1.$0))
     })
    }:(a$2=Template.PGuiRoot(a),a$2!=null&&a$2.$==1?{
     $:1,
     $0:new GuiPart({
      $:0,
      $0:a$2.$0
     })
    }:(a$3=Template.PGuiTabStrip(a),a$3!=null&&a$3.$==1?{
     $:1,
     $0:(t=a$3.$0,new GuiPart({
      $:4,
      $0:t[0],
      $1:t[1]
     }))
    }:(a$4=Template.PGuiSplit(a),a$4!=null&&a$4.$==1?{
     $:1,
     $0:new GuiPart({
      $:3,
      $0:a$4.$0[0],
      $1:Template.toSect(a$4.$0[1]),
      $2:a$4.$0[2],
      $3:a$4.$0[3],
      $4:a$4.$0[4],
      $5:a$4.$0[5],
      $6:a$4.$0[6],
      $7:a$4.$0[7]
     })
    }:(a$5=Template.PGuiCall(a),a$5!=null&&a$5.$==1?{
     $:1,
     $0:new GuiPart({
      $:5,
      $0:a$5.$0[0],
      $1:a$5.$0[1],
      $2:a$5.$0[2]
     })
    }:null))));
   }
   $this=this;
   function c(name,ldf)
   {
    var o;
    o=jsonF2GuiRoot(ldf);
    return o==null?null:{
     $:1,
     $0:[name,{
      $:1,
      $0:ldf
     },o.$0]
    };
   }
   try
   {
    $1=this.AddNewSteps(steps,json===""?[]:Arrays.choose(function($2)
    {
     return c($2[0],$2[1]);
    },((Provider.DecodeArray(Provider.DecodeTuple([Provider.Id(),FSharpStation_JsonDecoder.j$12])))())(JSON.parse(json))));
   }
   catch(e)
   {
    $1=(function($2)
    {
     return function($3)
     {
      return $2("Error: "+Utils.prettyPrint($3));
     };
    }(function(s)
    {
     console.log(s);
    }))(e);
   }
  },
  AddNewSteps:function(steps,steps2)
  {
   var $this;
   function a(name,si,part)
   {
    var p,partv;
    if($this.parts.ContainsKey(name))
     {
      p=$this.parts.get_Item(name);
      partv=p[0];
      Unchecked.Equals((partv.Get())[0],si)?Val.iter(Global.ignore,Val.apply(new Val({
       $:0,
       $0:part
      }),p[2])):partv.Set([si,part]);
     }
    else
     $this.AddNode(name,si,part);
   }
   function m(_name,det)
   {
    return Seq$2.last(det);
   }
   $this=this;
   Arrays.iter(function($1)
   {
    return a($1[0],$1[1],$1[2]);
   },Arrays.map(function($1)
   {
    return m($1[0],$1[1]);
   },Arrays.groupBy(function($1)
   {
    return Global.id($1[0],$1[1],$1[2]);
   },steps.concat(steps2))));
  },
  get_Render:function()
  {
   function g(v)
   {
    var m;
    m=v.Get();
    return m[1].$==0?{
     $:1,
     $0:m[1].$0
    }:null;
   }
   return this.GetNode(Option.defaultValue("main",Seq$2.tryPick(function(x)
   {
    return g(Template.t1of3.apply(null,x));
   },this.parts.get_Values())));
  },
  GetNode:function(name)
  {
   var res;
   res=null;
   return this.parts.TryGetValue(name,{
    get:function()
    {
     return res;
    },
    set:function(v)
    {
     res=v;
    }
   })?Template.t2of3(res[0],res[1],res[2]):this.AddNode(name,GuiPartSourceId.get_New(),new GuiPart({
    $:1,
    $0:HtmlNode.div([HtmlNode.htmlText((function($1)
    {
     return function($2)
     {
      return $1("GuiPart "+Utils.toSafe($2)+" not found");
     };
    }(Global.id))(name))])
   }));
  },
  AddNode:function(name,sid,part)
  {
   var $this,partV,nodeFv,node;
   function f(_si,p)
   {
    return p.GetHtmlNode($this,name);
   }
   $this=this;
   partV=Var$1.Create$1([sid,part]);
   nodeFv=Val.map(function($1)
   {
    return f($1[0],$1[1]);
   },partV);
   node=new HtmlNode$1({
    $:2,
    $0:Val.map(function(t)
    {
     return t[0];
    },nodeFv)
   });
   this.parts.Add(name,[partV,node,Val.map(function(t)
   {
    return t[1];
   },nodeFv)]);
   return node;
  },
  GetCallButton:function(name,action,parms)
  {
   var a;
   a=Result.Success(this.GetGuiCallAction(name,action,parms));
   return a.$==1?HtmlNode.div([HtmlNode.htmlText(Strings.concat(". ",Result.msgs2String(a.$0)))]):a.$0[0].get_Button().get_Render();
  },
  GetGuiCallAction:function(name,action,parms)
  {
   var m;
   return this.parts.ContainsKey(action)?(m=(this.parts.get_Item(action))[0].Get(),m[1].$==2?Result.succeed(m[1].$0.Text(name).Parms(Arrays.map(Global.id,parms))):Result.failSimpleError((function($1)
   {
    return function($2)
    {
     return $1("GuiPart "+Utils.toSafe($2)+" is not a GuiAction");
    };
   }(Global.id))(action))):Result.failSimpleError((function($1)
   {
    return function($2)
    {
     return $1("GuiAction "+Utils.toSafe($2)+" not found");
    };
   }(Global.id))(action));
  }
 },null,Layout);
 Layout.New$1=function(steps)
 {
  var lyt;
  function a(name,part,id)
  {
   lyt.AddNode(name,part,id);
  }
  lyt=Layout.New(new Dictionary.New$5(),new Dictionary.New$5());
  Seq$2.iter(function($1)
  {
   return a($1[0],$1[1],$1[2]);
  },steps);
  return lyt;
 };
 Layout.AddGuids=function(steps)
 {
  function m(name,part)
  {
   return[name,part.$==2?GuiPartSourceId.get_New():part.$==0?{
    $:2,
    $0:part.$0
   }:part.$==3?{
    $:4,
    $0:part.$0,
    $1:part.$1,
    $2:part.$2,
    $3:part.$4,
    $4:part.$5
   }:part.$==4?{
    $:3,
    $0:part.$0,
    $1:part.$1
   }:part.$==5?{
    $:5,
    $0:part.$0,
    $1:part.$1,
    $2:part.$2
   }:GuiPartSourceId.get_New(),part];
  }
  return Arrays.ofSeq(Seq$2.map(function($1)
  {
   return m($1[0],$1[1]);
  },steps));
 };
 Layout.New=function(parts,tabStrips)
 {
  return new Layout({
   parts:parts,
   tabStrips:tabStrips
  });
 };
 Template.varVerSplitter=function(pc,ch1,ch2,min,max)
 {
  return new GuiPart({
   $:3,
   $0:true,
   $1:SectionType.StVariable,
   $2:true,
   $3:pc,
   $4:ch1,
   $5:ch2,
   $6:min,
   $7:max
  });
 };
 Template.varHorSplitter=function(pc,ch1,ch2,min,max)
 {
  return new GuiPart({
   $:3,
   $0:true,
   $1:SectionType.StVariable,
   $2:false,
   $3:pc,
   $4:ch1,
   $5:ch2,
   $6:min,
   $7:max
  });
 };
 Template.fixPcVerSplitter=function(first,px,ch1,ch2)
 {
  return new GuiPart({
   $:3,
   $0:first,
   $1:SectionType.StFixedPerc,
   $2:true,
   $3:px,
   $4:ch1,
   $5:ch2,
   $6:5,
   $7:95
  });
 };
 Template.fixPcHorSplitter=function(first,px,ch1,ch2)
 {
  return new GuiPart({
   $:3,
   $0:first,
   $1:SectionType.StFixedPerc,
   $2:false,
   $3:px,
   $4:ch1,
   $5:ch2,
   $6:5,
   $7:95
  });
 };
 Template.fixedVerSplitter=function(first,px,ch1,ch2)
 {
  return new GuiPart({
   $:3,
   $0:first,
   $1:SectionType.StFixedPx,
   $2:true,
   $3:px,
   $4:ch1,
   $5:ch2,
   $6:5,
   $7:95
  });
 };
 Template.fixedHorSplitter=function(first,px,ch1,ch2)
 {
  return new GuiPart({
   $:3,
   $0:first,
   $1:SectionType.StFixedPx,
   $2:false,
   $3:px,
   $4:ch1,
   $5:ch2,
   $6:5,
   $7:95
  });
 };
 Template.t3of3=function(a,a$1,a$2)
 {
  return a$2;
 };
 Template.t2of3=function(a,a$1,a$2)
 {
  return a$1;
 };
 Template.t1of3=Global.id;
 Template.toSect=function(s)
 {
  return s==="StVariable"?SectionType.StVariable:s==="StFixedPx"?SectionType.StFixedPx:SectionType.StFixedPerc;
 };
 Template.PGuiCall=function(ldf)
 {
  return ldf.GuiCall;
 };
 Template.PGuiNode=function(ldf)
 {
  return ldf.GuiNode;
 };
 Template.PGuiRoot=function(ldf)
 {
  return ldf.GuiRoot;
 };
 Template.PGuiSplit=function(ldf)
 {
  return ldf.GuiSplit;
 };
 Template.PGuiTabStrip=function(ldf)
 {
  return ldf.GuiTabStrip;
 };
 Template.PHtmlGuiCall=function(hnf)
 {
  return hnf.HtmlGuiCall;
 };
 Template.PHtmlGuiPart=function(hnf)
 {
  return hnf.HtmlGuiPart;
 };
 Template.PHtmlEmptyF=function(hnf)
 {
  return hnf.HtmlEmptyF;
 };
 Template.PHtmlTextF=function(hnf)
 {
  return hnf.HtmlTextF;
 };
 Template.PHtmlAttributeOF=function(hnf)
 {
  return hnf.HtmlAttributeOF;
 };
 Template.PHtmlAttributeF=function(hnf)
 {
  return hnf.HtmlAttributeF;
 };
 Template.PHtmlElementF=function(hnf)
 {
  return hnf.HtmlElementF;
 };
 Template.addValue=function(k,v,dict)
 {
  dict.Remove(k);
  dict.Add(k,v);
 };
 Template.processLayoutSteps=function(steps,parts)
 {
  var o,$1;
  return Option.defaultValue(parts,(o=Seq$2.tryHead(steps),o==null?null:{
   $:1,
   $0:($1=o.$0,Template.processLayoutSteps(Seq$2.skip(1,steps),parts.Add($1[0],$1[1])))
  }));
 };
 Template.HtmlGuiCall=function(p,p$1,p$2)
 {
  return new GuiPart({
   $:5,
   $0:p,
   $1:p$1,
   $2:p$2
  });
 };
 Template.Do2=function(f,p,act,a,a$1)
 {
  return f(act,p);
 };
 Template.Do=function(f,p,a,a$1)
 {
  return f(p);
 };
 Template.navbar=function(brand,center,right)
 {
  return HtmlNode.div([HtmlNode["class"]("navbar navbar-default"),HtmlNode.div([HtmlNode["class"]("container-fluid"),HtmlNode.div([HtmlNode["class"]("navbar-header"),HtmlNode.div([HtmlNode["class"]("navbar-brand"),brand])]),HtmlNode.div([HtmlNode["class"]("navbar-collapse collapse"),center,HtmlNode.addClass("navbar-right",right)])])]);
 };
 Template.dropdown=function(ch)
 {
  return Template.entries(ch,"dropdown-menu");
 };
 Template.nav=function(ch)
 {
  return Template.entries(ch,"nav navbar-nav");
 };
 Template.entries=function(ch,cl)
 {
  return HtmlNode.addClass(cl,HtmlNode.ul(ch));
 };
 Template.entryTxt=function(txt,t,r)
 {
  return Template.menuEntry(Template.refText(txt,t,r));
 };
 Template.refText=function(txt,_t,r)
 {
  return HtmlNode.bindHElem(function(t)
  {
   return t===""?HtmlNode$1.HtmlEmpty:Template.refA(HtmlNode.htmlText(t),t,r);
  },txt);
 };
 Template.refA=function(cont,t,r)
 {
  return HtmlNode.a([cont,HtmlNode.hrefO(r),HtmlNode.target(t)]);
 };
 Template.menuEntry=function(content)
 {
  return HtmlNode.li([content]);
 };
 Template.RaiseTabMoved=function(fromS,toS)
 {
  var o;
  o=Template.TabMoved();
  o==null?void 0:o.$0([fromS,toS]);
 };
 Template.TabMoved=function()
 {
  SC$1.$cctor();
  return SC$1.TabMoved;
 };
 Template.set_TabMoved=function($1)
 {
  SC$1.$cctor();
  SC$1.TabMoved=$1;
 };
 Template.setSelectedPanel=function(group,panelO)
 {
  Template.selectedPanels().Set(panelO==null?Template.selectedPanels().Get().Remove(group):Template.selectedPanels().Get().Add(group,panelO.$0));
 };
 Template.selectedPanels=function()
 {
  SC$1.$cctor();
  return SC$1.selectedPanels;
 };
 Template.uid2s=function(uid)
 {
  return"X"+Strings.Replace(Global.String(uid),"-","");
 };
 Template.draggedTab=function()
 {
  SC$1.$cctor();
  return SC$1.draggedTab;
 };
 Template.reorderArray=function(ts,drag,drop)
 {
  return Arrays.collect(Global.id,drop<drag?[Slice.array(ts,{
   $:1,
   $0:0
  },{
   $:1,
   $0:drop-1
  }),[Arrays.get(ts,drag)],Slice.array(ts,{
   $:1,
   $0:drop
  },{
   $:1,
   $0:drag-1
  }),Slice.array(ts,{
   $:1,
   $0:drag+1
  },{
   $:1,
   $0:Arrays.length(ts)-1
  })]:[Slice.array(ts,{
   $:1,
   $0:0
  },{
   $:1,
   $0:drag-1
  }),Slice.array(ts,{
   $:1,
   $0:drag+1
  },{
   $:1,
   $0:drop
  }),[Arrays.get(ts,drag)],Slice.array(ts,{
   $:1,
   $0:drop+1
  },{
   $:1,
   $0:Arrays.length(ts)-1
  })]);
 };
 Template.reorderList=function(ts,drag,drop)
 {
  return drop<drag?List$1.append(ts.GetSlice({
   $:1,
   $0:0
  },{
   $:1,
   $0:drop-1
  }),List$1.append(List$1.ofArray([ts.get_Item(drag)]),List$1.append(ts.GetSlice({
   $:1,
   $0:drop
  },{
   $:1,
   $0:drag-1
  }),ts.GetSlice({
   $:1,
   $0:drag+1
  },{
   $:1,
   $0:ts.get_Length()-1
  })))):List$1.append(ts.GetSlice({
   $:1,
   $0:0
  },{
   $:1,
   $0:drag-1
  }),List$1.append(ts.GetSlice({
   $:1,
   $0:drag+1
  },{
   $:1,
   $0:drop
  }),List$1.append(List$1.ofArray([ts.get_Item(drag)]),ts.GetSlice({
   $:1,
   $0:drop+1
  },{
   $:1,
   $0:ts.get_Length()-1
  }))));
 };
 Template.setVar=function(vr,vl)
 {
  if(!Unchecked.Equals(vr.Get(),vl))
   vr.Set(vl);
 };
 Template.addResizeObserver=function(f,el)
 {
  var r,ro,changed,b;
  try
  {
   r=!(!Global.ResizeObserver);
  }
  catch(e)
  {
   r=false;
  }
  if(r)
   {
    ro=new Global.ResizeObserver(f);
    Template.set_observers(new List$1.T({
     $:1,
     $0:ro,
     $1:Template.observers()
    }));
    ro.observe(el);
   }
  else
   {
    changed=Template.dimsChanged(el);
    Concurrency.Start((b=null,Concurrency.Delay(function()
    {
     return Concurrency.While(function()
     {
      return el.isConnected;
     },Concurrency.Delay(function()
     {
      return Concurrency.Bind(Concurrency.Sleep(110),function()
      {
       return changed()?(f(),Concurrency.Zero()):Concurrency.Zero();
      });
     }));
    })),null);
   }
 };
 Template.dimsChanged=function(el)
 {
  var dims;
  dims=[el.getBoundingClientRect()];
  return function()
  {
   var ndims;
   ndims=el.getBoundingClientRect();
   return Unchecked.Equals(Template.domRect2Tuple(dims[0]),Template.domRect2Tuple(ndims))?false:(dims[0]=ndims,true);
  };
 };
 Template.domRect2Tuple=function(r)
 {
  return[r.top,r.left,r.width,r.height];
 };
 Template.observers=function()
 {
  SC$1.$cctor();
  return SC$1.observers;
 };
 Template.set_observers=function($1)
 {
  SC$1.$cctor();
  SC$1.observers=$1;
 };
 Template.setLint=function(ed,getAnnotations)
 {
  ed.setOption("lint",{
   async:1,
   getAnnotations:Runtime.CreateFuncWithArgs(getAnnotations),
   container:HtmlNode.findRootElement(ed.getWrapperElement())
  });
 };
 Template.showHints=function(ed,getHints,completeSingle,a)
 {
  var _v;
  _v=HintOptions.New(Runtime.CreateFuncWithArgs(getHints),completeSingle,HtmlNode.findRootElement(ed.getWrapperElement()));
  _v.hint.async=1;
  ed.showHint(_v);
 };
 Template.cmPos=function(l,c)
 {
  return CodeMirrorPos.New(l,c);
 };
 Template.codeMirrorIncludes=function()
 {
  SC$1.$cctor();
  return SC$1.codeMirrorIncludes;
 };
 Template.hoverable=function(c)
 {
  return Hoverable.get_New().Content(c);
 };
 RunNode=RunCode.RunNode=Runtime.Class({
  createBaseNode:function()
  {
   var el;
   el=Global.document.createElement("div");
   el.setAttribute("id",this.nodeName);
   Global.document.body.appendChild(el);
   return el;
  },
  createNode:function()
  {
   var e;
   e=Global.document.createElement("div");
   e.style="height: 100%; width: 100%;";
   return e;
  },
  RunHtml:function(node)
  {
   this.RunDoc((HtmlNode.renderDoc())(node));
  },
  RunDoc:function(doc)
  {
   Doc.Run(this.get_RunNode(),doc);
  },
  get_AddBootstrap:function()
  {
   var el;
   el=Global.document.createElement("div");
   el.innerHTML="<script src='http://code.jquery.com/jquery-3.1.1.min.js' type='text/javascript' charset='UTF-8'></script>\n                <script src='http://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js' type='text/javascript' charset='UTF-8'></script>\n                <link type='text/css' rel='stylesheet' href='http://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css'>\n                <link type='text/css' rel='stylesheet' href='/EPFileX/css/main.css'>\n               ";
   this.runNode.parentElement.appendChild(el);
   return this;
  },
  get_RunNode:function()
  {
   return this.runNode;
  }
 },Obj,RunNode);
 RunNode.New=Runtime.Ctor(function(clearNode,useShadowRoot)
 {
  RunNode.New$1.call(this,"TestNode",clearNode,useShadowRoot);
 },RunNode);
 RunNode.New$1=Runtime.Ctor(function(nodeName,clearNode,useShadowRoot)
 {
  var baseNode,m,m$1,p,e;
  this.nodeName=nodeName;
  baseNode=(m=Global.document.getElementById(this.nodeName),Unchecked.Equals(m,null)?this.createBaseNode():m);
  this.runNode=!(useShadowRoot==null||useShadowRoot.$0)?baseNode:(m$1=baseNode.shadowRoot,Unchecked.Equals(m$1,null)?(p=this.createNode(),(baseNode.attachShadow({
   mode:"open"
  }).appendChild(p),e=this.createNode(),p.appendChild(e),e)):m$1.firstChild);
  clearNode==null||clearNode.$0?this.runNode.innerHTML="":void 0;
 },RunNode);
 RunCode.completeJS=function(js)
 {
  return"\n          CIPHERSpaceLoadFileGlobalFileRef = null;\n          CIPHERSpaceLoadFile = function (filename, callback) {\n              if (filename.slice(-3) == \".js\" || filename.slice(-4) == \".fsx\" || filename.slice(-3) == \".fs\") { //if filename is a external JavaScript file\n                  var fileRef = null;\n                  var pre = document.querySelector('script[src=\"' + filename + '\"]')\n                  if (!pre) {\n                      fileRef = document.createElement('script')\n                      fileRef.setAttribute(\"type\", \"text/javascript\")\n                      fileRef.setAttribute(\"src\", filename)\n                  }\n                  else callback();\n              }\n              else if (filename.slice(-4) == \".css\") { //if filename is an external CSS file\n                  var pre = document.querySelector('script[src=\"' + filename + '\"]')\n                  if (!pre) {\n                      fileRef = document.createElement(\"link\")\n                      fileRef.setAttribute(\"rel\", \"stylesheet\")\n                      fileRef.setAttribute(\"type\", \"text/css\")\n                      fileRef.setAttribute(\"href\", filename)\n                  }\n                  else callback();\n              }\n              else if (filename.slice(-5) == \".html\") { //if filename is an external HTML file\n                  var pre = document.querySelector('script[src=\"' + filename + '\"]')\n                  if (!pre) {\n                      fileRef = document.createElement(\"link\")\n                      fileRef.setAttribute(\"rel\", \"import\")\n                      fileRef.setAttribute(\"type\", \"text/html\")\n                      fileRef.setAttribute(\"href\", filename)\n                  }\n                  else callback();\n              }\n              if (!!fileRef) {\n                  CIPHERSpaceLoadFileGlobalFileRef = fileRef;\n      \u0009\u0009\u0009fileRef.onload = function () { fileRef.onload = null;  callback(); }\n                  document.getElementsByTagName(\"head\")[0].appendChild(fileRef);\n              }\n          }\n          CIPHERSpaceLoadFiles = function (files, callback) {\n              var newCallback = callback\n              if (!!CIPHERSpaceLoadFileGlobalFileRef && !!(CIPHERSpaceLoadFileGlobalFileRef.onload)) {\n                  var oldCallback = CIPHERSpaceLoadFileGlobalFileRef.onload;\n                  CIPHERSpaceLoadFileGlobalFileRef.onload = null;\n                  newCallback = function () {\n                      callback();\n                      oldCallback();\n                  }\n              }\n              var i = 0;\n              loadNext = function () {\n                  if (i < files.length) {\n                      var file = files[i];\n                      i++;\n                      CIPHERSpaceLoadFile(file, loadNext);\n                  }\n                  else newCallback();\n              };\n              loadNext();\n      \u0009}\n          CIPHERSpaceLoadFiles(['https://code.jquery.com/jquery-3.1.1.min.js'], function() {}); \n      \u0009CIPHERSpaceLoadFilesDoAfter = function (callback) {\n      \u0009\u0009var newCallback = callback\n      \u0009\u0009if (!!CIPHERSpaceLoadFileGlobalFileRef) {\n      \u0009\u0009\u0009if (!!(CIPHERSpaceLoadFileGlobalFileRef.onload)) {\n      \u0009\u0009\u0009\u0009var oldCallback = CIPHERSpaceLoadFileGlobalFileRef.onload;\n      \u0009\u0009\u0009\u0009CIPHERSpaceLoadFileGlobalFileRef.onload = null;\n      \u0009\u0009\u0009\u0009newCallback = function () {\n      \u0009\u0009\u0009\u0009\u0009oldCallback();\n      \u0009\u0009\u0009\u0009\u0009callback();\n      \u0009\u0009\u0009\u0009}\n      \u0009\u0009\u0009}\n      \u0009\u0009}\n      \u0009\u0009else CIPHERSpaceLoadFileGlobalFileRef = {};\n      \u0009\u0009CIPHERSpaceLoadFileGlobalFileRef.onload = newCallback;\n      \u0009}\n      \n      CIPHERSpaceLoadFilesDoAfter(function() { \n        if (typeof IntelliFactory !=='undefined')\n          IntelliFactory.Runtime.Start();\n        for (key in window) { \n          if (key.startsWith(\"StartupCode$\")) \n            //try { window[key].$cctor(); } catch (e) {} \n            window[key].$cctor();\n        } \n      })\n      \n                       "+js;
 };
 Position.NewBrowser={
  $:3
 };
 Position.Tab={
  $:2
 };
 Position.Right={
  $:1
 };
 Position.Below={
  $:0
 };
 ErrCompiler=FsGlobal.ErrCompiler=Runtime.Class({
  FSSGlobal_Useful_ErrMsg$get_IsWarning:function()
  {
   return this.$==0&&!this.$1;
  },
  FSSGlobal_Useful_ErrMsg$get_ErrMsg:function()
  {
   return this.$==0?(function($1)
   {
    return function($2)
    {
     return $1(Utils.toSafe($2));
    };
   }(Global.id))(this.$0):(function($1)
   {
    return function($2)
    {
     return $1(FSharpStation_GeneratedPrintf.p$5($2));
    };
   }(Global.id))(this);
  }
 },null,ErrCompiler);
 ErrCompiler["Could not open new browser, Popup blocker may be active"]=new ErrCompiler({
  $:2
 });
 ErrCompiler["Snippet Missing"]=new ErrCompiler({
  $:1
 });
 KeyMapAutoComplete.New=function(F2,LeftDoubleClick,_CtrlSpace,_)
 {
  return{
   F2:F2,
   LeftDoubleClick:LeftDoubleClick,
   "Ctrl-Space":_CtrlSpace,
   ".":_
  };
 };
 Property=FsGlobal.Property=Runtime.Class({
  setV:function(v)
  {
   this.props.set_Item(this.key,v);
   this.setDirty();
  },
  getV:function()
  {
   return this.props.get_Item(this.key);
  },
  setK:function(k)
  {
   this.props.Add(k,this.props.get_Item(this.key));
   this.props.Remove(this.key);
   this.key=k;
   this.setDirty();
  },
  getK:function()
  {
   return this.key;
  },
  Remove:function()
  {
   this.props.Remove(this.key);
   this.setDirty();
  },
  get_SetV:function()
  {
   var $this;
   $this=this;
   return function(v)
   {
    $this.setV(v);
   };
  },
  get_GetV:function()
  {
   var $this;
   $this=this;
   return function()
   {
    return $this.getV();
   };
  },
  get_SetK:function()
  {
   var $this;
   $this=this;
   return function(k)
   {
    $this.setK(k);
   };
  },
  get_GetK:function()
  {
   var $this;
   $this=this;
   return function()
   {
    return $this.getK();
   };
  },
  get_ValueVar:function()
  {
   return new PropValue.New(this);
  },
  get_KeyVar:function()
  {
   return this;
  },
  get_View:function()
  {
   return View.Const(this.getK());
  },
  UpdateMaybe:function(f)
  {
   var o;
   o=f(this.getK());
   o==null?void 0:this.setK(o.$0);
  },
  Update:function(f)
  {
   this.setK(f(this.getK()));
  },
  Get:function()
  {
   return this.getK();
  },
  Set:function(v)
  {
   this.setK(v);
  },
  SetFinal:function(v)
  {
   this.setK(v);
  },
  get_Id:function()
  {
   return"?";
  }
 },Var$1,Property);
 Property.New=Runtime.Ctor(function(setDirty,props,keyP)
 {
  Var$1.New.call(this);
  this.setDirty=setDirty;
  this.props=props;
  this.key=keyP;
 },Property);
 PropValue=FsGlobal.PropValue=Runtime.Class({
  get_View:function()
  {
   return View.Const(this.get());
  },
  UpdateMaybe:function(f)
  {
   var o;
   o=f(this.get());
   o==null?void 0:this.set(o.$0);
  },
  Update:function(f)
  {
   this.set(f(this.get()));
  },
  Get:function()
  {
   return this.get();
  },
  Set:function(v)
  {
   this.set(v);
  },
  SetFinal:function(v)
  {
   this.set(v);
  },
  get_Id:function()
  {
   return"?";
  }
 },Var$1,PropValue);
 PropValue.New=Runtime.Ctor(function(prop)
 {
  Var$1.New.call(this);
  this.get=prop.get_GetV();
  this.set=prop.get_SetV();
 },PropValue);
 FsGlobal["CodeSnippet.propValue"]=function(_this,p)
 {
  var o,o$1;
  return _this.properties.ContainsKey(p)?{
   $:1,
   $0:_this.properties.get_Item(p)
  }:(o=(o$1=_this.parent,o$1==null?null:CodeSnippet$1.FetchO(o$1.$0)),o==null?null:FsGlobal["CodeSnippet.propValue"](o.$0,p));
 };
 CodeSnippet$1.FetchByPathO=function(names)
 {
  function tryFindByName(snps,name)
  {
   return Seq$2.tryHead(Seq$2.filter(function(snp)
   {
    return snp.get_Name()===name;
   },snps));
  }
  function tryFindByPath(snps,names$1)
  {
   var first,x,f,x$1;
   first=(x=Seq$2.tryHead(names$1),x==null?null:tryFindByName(snps,x.$0));
   return Seq$2.length(names$1)<=1?first:first==null?null:(f=first.$0,(x$1=Seq$2.tail(names$1),tryFindByPath(Seq$2.filter(function(snp)
   {
    return Unchecked.Equals(snp.parent,{
     $:1,
     $0:f.id
    });
   },(FsGlobal.codeSnippets())["var"].Get()),x$1)));
  }
  return tryFindByPath(Seq$2.filter(function(snp)
  {
   return snp.parent==null;
  },(FsGlobal.codeSnippets())["var"].Get()),names);
 };
 FsGlobal["CodeSnippet.IsDescendantOf"]=function(_this,antId)
 {
  function isDescendantOf(snp)
  {
   var m,parId,o;
   m=snp.parent;
   return m!=null&&m.$==1&&(parId=m.$0,Unchecked.Equals(parId,antId)||Option.defaultValue(false,(o=CodeSnippet$1.FetchO(parId),o==null?null:{
    $:1,
    $0:isDescendantOf(o.$0)
   })));
  }
  return isDescendantOf(_this);
 };
 FsGlobal["CodeSnippet.GetCodeFsx"]=function(_this,addLinePrepos)
 {
  return(FsGlobal["CodeSnippet.GetCodeAndStarts"](_this,addLinePrepos))[0];
 };
 FsGlobal["CodeSnippet.GetCodeAndStarts"]=function(_this,addLinePrepos)
 {
  return CodeSnippet.CodeAndStarts(addLinePrepos,FsGlobal["CodeSnippet.Predecessors"](_this));
 };
 FsGlobal["CodeSnippet.Predecessors"]=function(_this,u)
 {
  var preds;
  preds=Arrays.ofSeq(_this.UniquePredecessors(CodeSnippet$1.FetchO));
  return Arrays.ofSeq(Seq$2.map(FsGlobal["CodeSnippet.get_PrepareSnippet"],Seq$2.filter(function(snp)
  {
   return Arrays.contains(snp.id,preds);
  },(FsGlobal.codeSnippets())["var"].Get())));
 };
 FsGlobal["CodeSnippet.get_PrepareSnippet"]=function(_this,u)
 {
  var p;
  p=FsGlobal["CodeSnippet.get_Levels"](_this);
  return CodeSnippet.New(_this.name,Strings.Replace(Strings.Replace(_this.content,"##"+"FSHARPSTATION_ID"+"##",FsGlobal.fsIds()),"##"+"FSHARPSTATION_ENDPOINT"+"##",Global.location.href),_this.parent,_this.predecessors,_this.id,_this.expanded,p[0],p[1],_this.properties);
 };
 FsGlobal["CodeSnippet.get_Levels"]=function(_this,u)
 {
  function levels(out,out2)
  {
   return function(snp)
   {
    var x,o,m;
    return Option.defaultValue([out,out2],(x=(o=snp.parent,o==null?null:CodeSnippet$1.FetchO(o.$0)),(m=levels(out+1,out2+(snp.properties.ContainsKey("NoIndent")?0:1)),x==null?null:{
     $:1,
     $0:m(x.$0)
    })));
   };
  }
  return(function($1)
  {
   return levels($1[0],$1[1]);
  }([0,0]))(_this);
 };
 CodeSnippet$1.New=function(od,nm,pa,pred,co,cnt)
 {
  var newS,$1,a,a$1,t;
  newS=CodeSnippet.New(nm,cnt,pa,pred,CodeSnippetId.get_New(),true,0,0,new Dictionary.New$5());
  $1=FsGlobal.codeSnippets().get_Length();
  $1===0?FsGlobal.codeSnippets().Append(newS):od===0?(a=Seq$2.append([newS],(FsGlobal.codeSnippets())["var"].Get()),FsGlobal.codeSnippets().Set(a)):od<$1?(a$1=(t=Arrays.splitAt(od,Arrays.ofSeq((FsGlobal.codeSnippets())["var"].Get())),t[0].concat([newS].concat(t[1]))),FsGlobal.codeSnippets().Set(a$1)):FsGlobal.codeSnippets().Append(newS);
  return newS;
 };
 CodeSnippet$1.New$1=function(nm,pa,pred,co,cnt)
 {
  return CodeSnippet$1.New(FsGlobal.codeSnippets().get_Length(),nm,pa,pred,co,cnt);
 };
 CodeSnippet$1.New$2=function(cnt)
 {
  return CodeSnippet$1.New$1("",null,List$1.T.Empty,List$1.T.Empty,cnt);
 };
 CodeSnippet$1.New$3=function(pa,cnt)
 {
  return CodeSnippet$1.New$1("",{
   $:1,
   $0:pa
  },List$1.T.Empty,List$1.T.Empty,cnt);
 };
 CodeSnippet$1.New$4=function(pa,pred,cnt)
 {
  return CodeSnippet$1.New$1("",{
   $:1,
   $0:pa
  },pred,List$1.T.Empty,cnt);
 };
 CodeSnippet$1.New$5=function(pred,cnt)
 {
  return CodeSnippet$1.New$1("",null,pred,List$1.T.Empty,cnt);
 };
 CodeSnippet$1.FetchL=function(id)
 {
  return Option$1.toList(CodeSnippet$1.FetchO(id));
 };
 CodeSnippet$1.FetchO=function(id)
 {
  return FsGlobal.codeSnippets().TryFindByKey(id);
 };
 CodeSnippet$1.PickIO=function(id)
 {
  function f(a,snp)
  {
   return Unchecked.Equals(snp.id,id);
  }
  return FsGlobal.tryPickI(function($1)
  {
   return f($1[0],$1[1]);
  },(FsGlobal.codeSnippets())["var"].Get());
 };
 FsGlobal.tryPickI=function(f,s)
 {
  return Seq$2.tryHead(Seq$2.filter(f,Seq$2.indexed(s)));
 };
 FsGlobal.fsIds=function()
 {
  SC$1.$cctor();
  return SC$1.fsIds;
 };
 FsGlobal.codeSnippets=function()
 {
  SC$1.$cctor();
  return SC$1.codeSnippets;
 };
 Babel=FableModule.Babel=Runtime.Class({},Obj,Babel);
 Babel.New=Runtime.Ctor(function()
 {
 },Babel);
 Fable=FableModule.Fable=Runtime.Class({},Obj,Fable);
 Fable.New=Runtime.Ctor(function()
 {
 },Fable);
 FableModule.fableTranslate=function(source)
 {
  var b;
  b=Wrap.wrapper();
  return b.Run(b.Delay(function()
  {
   var b$1;
   FableModule.loadReferences().f();
   return b.Bind$2((b$1=null,Concurrency.Delay(function()
   {
    return Concurrency.While(function()
    {
     return Object.getOwnPropertyNames(Global.metadata).length<Arrays.length(FableModule.references());
    },Concurrency.Delay(function()
    {
     return Concurrency.Bind(Concurrency.Sleep(200),function()
     {
      return Concurrency.Return(null);
     });
    }));
   })),function()
   {
    var checker,com,fileName,ast,options;
    checker=FableModule.getChecker().f();
    com=Fable$1.makeCompiler([["Microsoft.FSharp.Core.ExtraTopLevelOperators.PrintFormatLine","FSSGlobal.FSharpStation.FableModule.ToConsole($0)"]]);
    fileName="stdin.fsx";
    ast=JSON.parse(Fable$1.convertToJson(Fable$1.compileAst(com,Fable$1.parseFSharpProject(checker,com,fileName,source),fileName)));
    options=Object.create(null);
    options.plugins=[Global.babelPlugins.transformMacroExpressions,Global.babelPlugins.removeUnneededNulls,"transform-es2015-modules-amd"];
    options.presets=[];
    options.filename=fileName;
    options.babelrc=false;
    return b.Return(Strings.Replace(Strings.Replace(Babel$1.transformFromAst(ast,null,options).code,"define([","require(["),"\"use strict\";","\"use strict\"; try { exports = exports || {}; } catch (err) {}"));
   });
  }));
 };
 FableModule.ToConsole=function(arg)
 {
  console.log(arg);
  return arg.cont(FableModule.addOutMsg());
 };
 FableModule.addOutMsg=function()
 {
  SC$1.$cctor();
  return SC$1.addOutMsg;
 };
 FableModule.set_addOutMsg=function($1)
 {
  SC$1.$cctor();
  SC$1.addOutMsg=$1;
 };
 FableModule.getChecker=function()
 {
  SC$1.$cctor();
  return SC$1.getChecker;
 };
 FableModule.loadReferences=function()
 {
  SC$1.$cctor();
  return SC$1.loadReferences;
 };
 FableModule.references=function()
 {
  SC$1.$cctor();
  return SC$1.references;
 };
 FSharpStation.FSharpStationClient$6797$173=Global.id;
 FSharpStation.FSharpStationClient$6796$212=function(outputMsgs,scrollToBottom)
 {
  return function(e)
  {
   Val.sink(scrollToBottom(e),outputMsgs);
  };
 };
 FSharpStation.FSharpStationClient$6796$173=Global.id;
 FSharpStation.FSharpStationClient$6486$68=function(props,setDirtyP,redraw)
 {
  return function()
  {
   return function()
   {
    props.Add("","1");
    setDirtyP();
    return redraw.Set(null);
   };
  };
 };
 FSharpStation.FSharpStationClient$6483$68=function(prop,redraw)
 {
  return function()
  {
   return function()
   {
    prop.Remove();
    return redraw.Set(null);
   };
  };
 };
 FSharpStation.FSharpStationClient$6334$44=Runtime.Curried3(function(gotoDefinition,$1,$2)
 {
  return gotoDefinition();
 });
 FSharpStation.FSharpStationClient$6328$39=function(showToolTip,codeMirror)
 {
  return function()
  {
   return function()
   {
    return showToolTip(codeMirror.editorO.$0);
   };
  };
 };
 FSharpStation.FSharpStationClient$5982$61=Runtime.Curried3(function($1,el,$2)
 {
  el.value="";
 });
 FSharpStation.FSharpStationClient$5981$61=Runtime.Curried3(function(loadFile,el,$1)
 {
  return loadFile(el);
 });
 FSharpStation.FSharpStationClient$5864$48=function(topScrollList)
 {
  return function(e)
  {
   e.scrollTop=topScrollList[0];
  };
 };
 FSharpStation.FSharpStationClient$5863$48=Runtime.Curried3(function(topScrollList,e,$1)
 {
  topScrollList[0]=e.scrollTop;
 });
 FSharpStation.FSharpStationClient$5840$57=function(togglePredecessorForCur,code,currentCodeSnippetO)
 {
  return function()
  {
   return function()
   {
    return Val.iter(togglePredecessorForCur(code),currentCodeSnippetO);
   };
  };
 };
 FSharpStation.FSharpStationClient$5836$58=function(code,currentCodeSnippetId)
 {
  return function()
  {
   return function()
   {
    return currentCodeSnippetId.Set(code.id);
   };
  };
 };
 FSharpStation.FSharpStationClient$5828$57=function(isParent,toggleExpanded,code)
 {
  return function()
  {
   return function()
   {
    return isParent?toggleExpanded(code):null;
   };
  };
 };
 FSharpStation.FSharpStationClient$5824$50=function(reorderSnippet,code,draggedId)
 {
  return function()
  {
   return function(ev)
   {
    ev.preventDefault();
    return(reorderSnippet(code.id))(draggedId[0]);
   };
  };
 };
 FSharpStation.FSharpStationClient$5823$50=function(draggedId,code)
 {
  return function()
  {
   return function()
   {
    draggedId[0]=code.id;
   };
  };
 };
 FSharpStation.FSharpStationClient$5822$50=Runtime.Curried3(function($1,$2,ev)
 {
  return ev.preventDefault();
 });
 FSharpStation.FSharpStationClient=function(loadFromUri)
 {
  var missingVar,currentCodeSnippetId,s,v,refresh,currentCodeSnippetO,position,s$1,v$1,noSelectionVal,propertyCssVal,v$2,f,g,prior,propertyCssLinkVal,v$3,f$1,g$1,prior$1,propertyModeVal,v$4,f$2,g$2,prior$2,propertyThemeVal,v$5,f$3,g$3,prior$3,propertyLayoutVal,v$6,f$4,g$4,prior$4,propertyLayoutJSVal,v$7,f$5,g$5,prior$5,disableParseVal,disableFSIVal,disableFableVal,disableWebSharperVal,lastCodeAndStarts,getPredecessorsM,codeFS,codeJS,parserMsgs,outputMsgs,parsed,dirty,draggedId,compileRunW,$1,curPredecessors,topScrollList,fileName,fileInputElementId,loadFileElement,b,autoCompleteClient,parseFileName,latestParsedPrefix,isParseDisabled,cancellationTokenSourceO,parseIn,parseOut,parsingCode,rex1,rex2,rex,asyncStartDelayed,annotationsV,v$8,x,prior$6,codeMirror,view,contentVar,changingIRefO,contentVarChanged,refVarChanged,codeMirrorRender,redraw,properties,triggerWSResult,actLoadFile,actSaveFile,actAddSnippet,actDeleteSnippet,actIndentSnippet,actOutdentSnippet,actGetFsCode,actSetSnippetProp,actEvalFsCode,actEvalCode,actFableFsCode,actFableCode,actRunWSNewTab,$2,actRunWSHere,$3,actRunWSIn,actParseCode,actCompileWS,$4,actFindDefinition,actRefreshEditor,actOutText,actAbortFsi,buttonsH,menuLeft,menuRight,menuBar,s$2,v$9,v$10,snippetList,x$1,steps,view$1,contentVar$1,changingIRefO$1,contentVarChanged$1,refVarChanged$1,layout,res,wsStationClient,b$1,cssLinks,x$2;
  function missing(def,find,lens,k)
  {
   return find(k)==null?Var$1.Lens(missingVar,function()
   {
    return def;
   },function()
   {
    return"";
   }):lens(k);
  }
  function refreshView()
  {
   refresh.Set(null);
  }
  function curSnippetNameOf(k)
  {
   function a(s$3)
   {
    return s$3.get_Name();
   }
   function a$1(s$3,n)
   {
    return CodeSnippet.New(n,s$3.content,s$3.parent,s$3.predecessors,s$3.id,s$3.expanded,s$3.level,s$3.levelCode,s$3.properties);
   }
   return missing("",function(a$2)
   {
    return FsGlobal.codeSnippets().TryFindByKey(a$2);
   },function(a$2)
   {
    return FsGlobal.codeSnippets().LensInto(a,a$1,a$2);
   },k);
  }
  function curSnippetCodeOf(k)
  {
   function a(s$3)
   {
    return s$3.content;
   }
   function a$1(s$3,n)
   {
    return CodeSnippet.New(s$3.name,n,s$3.parent,s$3.predecessors,s$3.id,s$3.expanded,s$3.level,s$3.levelCode,s$3.properties);
   }
   return missing("",function(a$2)
   {
    return FsGlobal.codeSnippets().TryFindByKey(a$2);
   },function(a$2)
   {
    return FsGlobal.codeSnippets().LensInto(a,a$1,a$2);
   },k);
  }
  function b$2(snp)
  {
   var o;
   o=FsGlobal["CodeSnippet.propValue"](snp,"CSS");
   return o==null?null:{
    $:1,
    $0:Global.id(o.$0)
   };
  }
  function g$6(a)
  {
   return Option.defaultValue("",a);
  }
  function b$3(snp)
  {
   var o;
   o=FsGlobal["CodeSnippet.propValue"](snp,"CSSLink");
   return o==null?null:{
    $:1,
    $0:Global.id(o.$0)
   };
  }
  function g$7(a)
  {
   return Option.defaultValue("",a);
  }
  function b$4(snp)
  {
   var o;
   o=FsGlobal["CodeSnippet.propValue"](snp,"Mode");
   return o==null?null:{
    $:1,
    $0:Global.id(o.$0)
   };
  }
  function g$8(a)
  {
   return Option.defaultValue("fsharp",a);
  }
  function b$5(snp)
  {
   var o;
   o=FsGlobal["CodeSnippet.propValue"](snp,"Theme");
   return o==null?null:{
    $:1,
    $0:Global.id(o.$0)
   };
  }
  function g$9(a)
  {
   return Option.defaultValue("",a);
  }
  function b$6(snp)
  {
   var o;
   o=FsGlobal["CodeSnippet.propValue"](snp,"Layout");
   return o==null?null:{
    $:1,
    $0:Global.id(o.$0)
   };
  }
  function g$10(a)
  {
   return Option.defaultValue("",a);
  }
  function b$7(snp)
  {
   var o;
   o=FsGlobal["CodeSnippet.propValue"](snp,"LayoutJS");
   return o==null?null:{
    $:1,
    $0:Global.id(o.$0)
   };
  }
  function g$11(a)
  {
   return Option.defaultValue("",a);
  }
  function disablePropertyVal(p)
  {
   var v$11,f$8,g$13,prior$7;
   function b$8(snp)
   {
    var o;
    o=FsGlobal["CodeSnippet.propValue"](snp,p);
    return o==null?null:{
     $:1,
     $0:Global.id(o.$0)
    };
   }
   function g$14(a)
   {
    return Option.defaultValue("",a);
   }
   v$11=Val.map((f$8=(g$13=function(o)
   {
    return o==null?null:b$8(o.$0);
   },function(x$3)
   {
    return g$13(CodeSnippet$1.FetchO(x$3));
   }),function(x$3)
   {
    return g$14(f$8(x$3));
   }),currentCodeSnippetId);
   prior$7=[Var$1.Create$1(null)];
   View.Sink(function(v$12)
   {
    if(!Unchecked.Equals(prior$7[0].Get(),v$12))
     prior$7[0].Set(v$12);
   },Val.toView(v$11));
   return new Val({
    $:1,
    $0:prior$7[0]
   });
  }
  function disableEval(parse,ev)
  {
   return ev===""?parse:ev!=="0";
  }
  function setDirtyPart()
  {
   parsed=false;
   dirty.Set(true);
  }
  function setDirty()
  {
   lastCodeAndStarts=null;
   setDirtyPart();
  }
  function setDirtyPred()
  {
   setDirty();
   getPredecessorsM.ClearCache();
   refreshView();
  }
  function setClean()
  {
   getPredecessorsM.ClearCache();
   dirty.Set(false);
   lastCodeAndStarts=null;
  }
  function appendMsg(_var,msg)
  {
   var newM,$7,$8;
   return!msg?null:(newM=($7=_var.Get(),($8=Global.String(msg),$7===null?$8:$7===""?$8:$8===null?$7:$8===""?$7:$7+"\n"+$8)),newM!==_var.Get()?_var.Set(newM):null);
  }
  function setOutMsg(msg)
  {
   outputMsgs.Set(msg);
  }
  function addOutMsg(msg)
  {
   appendMsg(outputMsgs,msg);
  }
  function addPrsMsg(msg)
  {
   appendMsg(parserMsgs,msg);
  }
  function getFSCode()
  {
   var o;
   o=CodeSnippet$1.FetchO(currentCodeSnippetId.Get());
   o==null?void 0:codeFS.Set(FsGlobal["CodeSnippet.GetCodeFsx"](o.$0,true));
  }
  function reorderSnippet(toId,fromId)
  {
   var p,others,moving,$7,$8,ti,tsn,a;
   function trySnippet(id)
   {
    function f$8(a$1,snp)
    {
     return Unchecked.Equals(snp.id,id);
    }
    return function(s$3)
    {
     return FsGlobal.tryPickI(function($9)
     {
      return f$8($9[0],$9[1]);
     },s$3);
    };
   }
   p=Arrays.partition(function(snp)
   {
    return Unchecked.Equals(snp.id,fromId)||FsGlobal["CodeSnippet.IsDescendantOf"](snp,fromId);
   },Arrays.ofSeq((FsGlobal.codeSnippets())["var"].Get()));
   others=p[1];
   moving=p[0];
   $7=(trySnippet(fromId))(moving);
   $8=(trySnippet(toId))(others);
   $7!=null&&$7.$==1?$8!=null&&$8.$==1?(ti=$8.$0[0],tsn=$8.$0[1],a=Arrays.collect(Global.id,[Slice.array(others,{
    $:1,
    $0:0
   },{
    $:1,
    $0:ti-1
   }),moving,Slice.array(others,{
    $:1,
    $0:ti
   },null)]),FsGlobal.codeSnippets().Set(a),FsGlobal.codeSnippets().UpdateBy(function(c)
   {
    return{
     $:1,
     $0:CodeSnippet.New(c.name,c.content,tsn.parent,c.predecessors,c.id,c.expanded,c.level,c.levelCode,c.properties)
    };
   },$7.$0[1].id)):void 0:void 0;
   return setDirtyPred();
  }
  function indentCodeIn()
  {
   var o,$7,j,snp;
   o=CodeSnippet$1.PickIO(currentCodeSnippetId.Get());
   o==null?void 0:($7=o.$0,j=$7[0],snp=$7[1],function(f$8,i)
   {
    var x$3;
    while(true)
     {
      if(i<0)
       return null;
      else
       if(f$8((x$3=(FsGlobal.codeSnippets())["var"].Get(),(function(i$1)
       {
        return function(s$3)
        {
         return Seq$2.nth(i$1,s$3);
        };
       }(i))(x$3))))
        return null;
       else
        i=i-1;
     }
   }(function(pri)
   {
    return Unchecked.Equals(pri.parent,snp.parent)&&(FsGlobal.codeSnippets().UpdateBy(function(c)
    {
     return{
      $:1,
      $0:CodeSnippet.New(c.name,c.content,{
       $:1,
       $0:pri.id
      },c.predecessors,c.id,c.expanded,c.level,c.levelCode,c.properties)
     };
    },snp.id),true);
   },j-1),setDirtyPred());
  }
  function indentCodeOut()
  {
   var o,snp,newP,o$1,o$2;
   o=CodeSnippet$1.FetchO(currentCodeSnippetId.Get());
   o==null?void 0:(snp=o.$0,newP=(o$1=(o$2=snp.parent,o$2==null?null:CodeSnippet$1.FetchO(o$2.$0)),o$1==null?null:o$1.$0.parent),FsGlobal.codeSnippets().UpdateBy(function(c)
   {
    return{
     $:1,
     $0:CodeSnippet.New(c.name,c.content,newP,c.predecessors,c.id,c.expanded,c.level,c.levelCode,c.properties)
    };
   },snp.id),setDirtyPred());
  }
  function compileSnippetW(snpO)
  {
   var b$8;
   b$8=Wrap.wrapper();
   return b$8.Run(b$8.Delay(function()
   {
    return b$8.Bind$1(Result.fromOption(ErrCompiler["Snippet Missing"],snpO),function(a)
    {
     var code;
     outputMsgs.Set("Compiling to JavaScript...");
     codeJS.Set("");
     code=FsGlobal["CodeSnippet.GetCodeFsx"](a,true);
     codeFS.Set(code);
     return b$8.Bind$2(FsTranslator.translateAR(code,false),function(a$1)
     {
      return b$8.Bind$1(a$1,function(a$2)
      {
       var jsc;
       jsc=RunCode.completeJS(a$2);
       codeJS.Set(jsc);
       addOutMsg("Compiled!");
       return b$8.Return(jsc);
      });
     });
    });
   }));
  }
  function newWindow(url)
  {
   var a;
   a=Global.open.apply(Global,[url]);
   return Unchecked.Equals(a,null)?Result.fail(ErrCompiler["Could not open new browser, Popup blocker may be active"]):Result.succeed(a);
  }
  function _eval(window$1,js)
  {
   try
   {
    return window$1["eval"].apply(window$1,[js]);
   }
   catch(e)
   {
    ((function($7)
    {
     return function($8)
     {
      return $7(Utils.prettyPrint($8));
     };
    }(function(s$3)
    {
     console.log(s$3);
    }))(e));
    return(function($7)
    {
     return function($8)
     {
      return $7(Utils.prettyPrint($8));
     };
    }(Global.id))(e);
   }
  }
  function focus(window$1)
  {
   try
   {
    window$1.focus.apply(window$1,[]);
   }
   catch(e)
   {
    ((function($7)
    {
     return function($8)
     {
      return $7(Utils.prettyPrint($8));
     };
    }(function(s$3)
    {
     console.log(s$3);
    }))(e));
   }
  }
  function evalWindowUrlJSW(url,js)
  {
   var b$8;
   b$8=Wrap.wrapper();
   return b$8.Run(b$8.Delay(function()
   {
    return b$8.Bind$1(Result.tryProtection(),function()
    {
     return b$8.Bind$1(newWindow(url),function(a)
     {
      focus(a);
      return b$8.Bind$2(Concurrency.Sleep(800),function()
      {
       return b$8.Return(_eval(a,js));
      });
     });
    });
   }));
  }
  function createIFrameA()
  {
   return Concurrency.FromContinuations(function(cb,errF)
   {
    var x$3;
    try
    {
     x$3=HtmlNode.createIFrame(cb);
     return(new RunNode.New(null,null)).RunHtml(x$3);
    }
    catch(e)
    {
     return errF(e);
    }
   });
  }
  function evalIFrameJSW(js)
  {
   var b$8;
   b$8=Wrap.wrapper();
   return b$8.Run(b$8.Delay(function()
   {
    return b$8.Bind$1(Result.tryProtection(),function()
    {
     return b$8.Bind$2(createIFrameA(),function(a)
     {
      var window$1;
      window$1=a.contentWindow;
      window$1.document.body.style.margin="0px";
      return b$8.Return(_eval(window$1,js));
     });
    });
   }));
  }
  function compileRunUrlW(url,pos,snpO)
  {
   var b$8;
   b$8=Wrap.wrapper();
   return b$8.Run(b$8.Delay(function()
   {
    return b$8.Bind$3(compileSnippetW(snpO),function(a)
    {
     outputMsgs.Set("Running JavaScript...");
     return b$8.Bind$3(pos.$==3?evalWindowUrlJSW(url,a):evalIFrameJSW(a),function(a$1)
     {
      addOutMsg(a$1);
      addOutMsg("Done!");
      return b$8.Return([pos,a$1]);
     });
    });
   }));
  }
  function getSnpO()
  {
   return CodeSnippet$1.FetchO(currentCodeSnippetId.Get());
  }
  function evalCodeW(code)
  {
   var b$8;
   b$8=Wrap.wrapper();
   return b$8.Run(b$8.Delay(function()
   {
    codeFS.Set(code);
    return b$8.Bind$2(FsEvaluator.evaluateAR(FsGlobal.fsIds(),Global.location.href,true,code),function(a)
    {
     return b$8.Bind$1(a,function()
     {
      return b$8.Return("");
     });
    });
   }));
  }
  function evalSnippetW(snpO)
  {
   var b$8;
   b$8=Wrap.wrapper();
   return b$8.Run(b$8.Delay(function()
   {
    return b$8.Bind$1(Result.fromOption(ErrCompiler["Snippet Missing"],snpO),function(a)
    {
     return b$8.Bind$3(evalCodeW(FsGlobal["CodeSnippet.GetCodeFsx"](a,true)),function(a$1)
     {
      return b$8.Bind$2((new AjaxRemotingProvider.New()).Async("FSharpStation:FSSGlobal.FsEvaluator+Evaluator.addPresence:1381500690",[(function($7)
      {
       return function($8)
       {
        return $7(FSharpStation_GeneratedPrintf.p$6($8));
       };
      }(Global.id))(a.id),"ok"]),function()
      {
       return b$8.Return(a$1);
      });
     });
    });
   }));
  }
  function doSomething(msgStart,msgFinish,doIt)
  {
   var b$8;
   b$8=Wrap.wrapper();
   return b$8.Run(b$8.Delay(function()
   {
    outputMsgs.Set(msgStart);
    return b$8.Bind$3(doIt(),function(a)
    {
     addOutMsg(a);
     addOutMsg(msgFinish);
     return b$8.Return(a);
    });
   }));
  }
  function evaluateSnippetW(snpO)
  {
   return doSomething("Evaluating F# code...","",function()
   {
    return evalSnippetW(snpO);
   });
  }
  function evaluateCodeW(code)
  {
   return doSomething("Evaluating F# code...","",function()
   {
    return evalCodeW(code);
   });
  }
  function evalFableCodeW(code)
  {
   var b$8;
   b$8=Wrap.wrapper();
   return b$8.Run(b$8.Delay(function()
   {
    codeFS.Set(code);
    return b$8.Bind$3(FableModule.fableTranslate(code),function(a)
    {
     codeJS.Set(a);
     Global["eval"](a);
     return b$8.Return("");
    });
   }));
  }
  function evalFableSnippetW(snpO)
  {
   var b$8;
   b$8=Wrap.wrapper();
   return b$8.Run(b$8.Delay(function()
   {
    return b$8.Bind$1(Result.fromOption(ErrCompiler["Snippet Missing"],snpO),function(a)
    {
     return b$8.ReturnFrom(evalFableCodeW(FsGlobal["CodeSnippet.GetCodeFsx"](a,false)));
    });
   }));
  }
  function fableSnippetW(snpO)
  {
   return doSomething("Running Fable...","Done!",function()
   {
    return evalFableSnippetW(snpO);
   });
  }
  function fableCodeW(code)
  {
   return doSomething("Running Fable...","Done!",function()
   {
    return evalFableCodeW(code);
   });
  }
  function compileRunP(pos)
  {
   var x$3;
   x$3=getSnpO();
   return(compileRunW(pos))(x$3);
  }
  function isDirectPredecessor(pre,curO)
  {
   return Option.defaultValue(false,curO==null?null:{
    $:1,
    $0:List$1.contains(pre,curO.$0.predecessors)
   });
  }
  function isIndirectPredecessor(pre,predecessors)
  {
   return predecessors.Contains(pre);
  }
  function togglePredecessorForCur(pre,curO)
  {
   var cur,preds,p,x$3;
   return curO==null?null:(cur=curO.$0,Unchecked.Equals(cur,pre)||isIndirectPredecessor(cur.id,new HashSet.New$2(pre.UniquePredecessors(CodeSnippet$1.FetchO)))?null:(preds=(List$1.contains(pre.id,cur.predecessors)?(p=(x$3=pre.id,function(y)
   {
    return!Unchecked.Equals(x$3,y);
   }),function(l)
   {
    return List$1.filter(p,l);
   }):function(l)
   {
    return new List$1.T({
     $:1,
     $0:pre.id,
     $1:l
    });
   })(cur.predecessors),(FsGlobal.codeSnippets().UpdateBy(function(c)
   {
    return{
     $:1,
     $0:CodeSnippet.New(c.name,c.content,c.parent,preds,c.id,c.expanded,c.level,c.levelCode,c.properties)
    };
   },cur.id),setDirtyPred())));
  }
  function toggleExpanded(snp)
  {
   FsGlobal.codeSnippets().UpdateBy(function(c)
   {
    return{
     $:1,
     $0:CodeSnippet.New(c.name,c.content,c.parent,c.predecessors,c.id,!c.expanded,c.level,c.levelCode,c.properties)
    };
   },snp.id);
   refreshView();
  }
  function listEntry(isParent,isExpanded,code)
  {
   var x$3,$7,$8,x$4;
   return Hoverable.get_New().Content$1([HtmlNode["class"]("code-editor-list-tile"),HtmlNode.classIf("selected",Val.map((x$3=code.id,function(y)
   {
    return Unchecked.Equals(x$3,y);
   }),currentCodeSnippetId)),HtmlNode.classIf("direct-predecessor",Val.map(($7=code.id,function($9)
   {
    return isDirectPredecessor($7,$9);
   }),currentCodeSnippetO)),HtmlNode.classIf("indirect-predecessor",Val.map(($8=code.id,function($9)
   {
    return isIndirectPredecessor($8,$9);
   }),curPredecessors)),HtmlNode.draggable("true"),new HtmlNode$1({
    $:8,
    $0:AttrProxy.HandlerImpl("dragover",function()
    {
     return function(ev)
     {
      return ev.preventDefault();
     };
    })
   }),new HtmlNode$1({
    $:8,
    $0:AttrProxy.HandlerImpl("drag",function()
    {
     return function()
     {
      draggedId[0]=code.id;
     };
    })
   }),new HtmlNode$1({
    $:8,
    $0:AttrProxy.HandlerImpl("drop",function()
    {
     return function(ev)
     {
      ev.preventDefault();
      return reorderSnippet(code.id,draggedId[0]);
     };
    })
   }),HtmlNode.span([HtmlNode["class"]("node"),HtmlNode.classIf("parent",isParent),HtmlNode.classIf("expanded",isExpanded),new HtmlNode$1({
    $:8,
    $0:AttrProxy.HandlerImpl("click",function()
    {
     return function()
     {
      return isParent?toggleExpanded(code):null;
     };
    })
   }),HtmlNode.title(isParent?isExpanded?"collapse":"expand":""),HtmlNode.htmlText(isParent?isExpanded?"-":"+":"")]),HtmlNode.div([HtmlNode["class"]("code-editor-list-text"),HtmlNode.style1("text-indent",(x$4=(FsGlobal["CodeSnippet.get_Levels"](code))[0],(function($9)
   {
    return function($10)
    {
     return $9(Global.String($10)+"em");
    };
   }(Global.id))(x$4))),HtmlNode.style("white-space: pre"),HtmlNode.htmlText(Val.map2(function(n)
   {
    return function(c)
    {
     return FsStationShared.snippetName(n,c);
    };
   },curSnippetNameOf(code.id),curSnippetCodeOf(code.id))),new HtmlNode$1({
    $:8,
    $0:AttrProxy.HandlerImpl("click",function()
    {
     return function()
     {
      return currentCodeSnippetId.Set(code.id);
     };
    })
   })]),HtmlNode.span([HtmlNode["class"]("predecessor"),HtmlNode.title("toggle predecessor"),new HtmlNode$1({
    $:8,
    $0:AttrProxy.HandlerImpl("click",function()
    {
     return function()
     {
      return Val.iter(function($9)
      {
       return togglePredecessorForCur(code,$9);
      },currentCodeSnippetO);
     };
    })
   }),HtmlNode.htmlText("X")])]);
  }
  function ifUndef(def,v$11)
  {
   return!v$11?def:v$11;
  }
  function obj2CodeSnippetId(o)
  {
   return new CodeSnippetId({
    $:0,
    $0:!o?"00000000-0000-0000-0000-000000000000":o.Item
   });
  }
  function obj2CodeSnippetIdO(o)
  {
   return!o?null:{
    $:1,
    $0:obj2CodeSnippetId(o)
   };
  }
  function obj2Map(o)
  {
   var dict;
   function a(a$1,a$2)
   {
    dict.Add(a$1,a$2);
   }
   function m(f$8,v$11)
   {
    return[f$8,v$11];
   }
   dict=new Dictionary.New$5();
   return!o?dict:(Seq$2.iter(function($7)
   {
    return a($7[0],$7[1]);
   },Arrays.map(function($7)
   {
    return m($7[0],$7[1]);
   },JSModule.GetFields(o))),dict);
  }
  function deserializeCodeSnipets(v$11)
  {
   var objs;
   try
   {
    objs=JSON.parse(v$11);
    ((function($7)
    {
     return function($8)
     {
      return $7(Utils.prettyPrint($8));
     };
    }(function(s$3)
    {
     console.log(s$3);
    }))(objs.length));
    return Arrays.choose(function(o)
    {
     return!o?null:{
      $:1,
      $0:CodeSnippet.New(ifUndef("",o.name),ifUndef("",o.content),obj2CodeSnippetIdO(o.parent),List$1.ofSeq(Arrays.map(obj2CodeSnippetId,ifUndef([],o.predecessors))),obj2CodeSnippetId(o.id),ifUndef(false,o.expanded),ifUndef(0,o.level),ifUndef(0,o.levelCode),obj2Map(o.properties))
     };
    },objs);
   }
   catch(m)
   {
    return[];
   }
  }
  function addCode()
  {
   var o,$7,i,snp;
   function nextI(lvl,k)
   {
    var o$1;
    return Option.defaultValue(k,(o$1=Seq$2.tryItem(k,(FsGlobal.codeSnippets())["var"].Get()),o$1==null?null:{
     $:1,
     $0:(FsGlobal["CodeSnippet.get_Levels"](o$1.$0))[0]<=lvl?k:nextI(lvl,k+1)
    }));
   }
   currentCodeSnippetId.Set(Option.defaultWith(function()
   {
    return CodeSnippet$1.New$2("");
   },(o=CodeSnippet$1.PickIO(currentCodeSnippetId.Get()),o==null?null:{
    $:1,
    $0:($7=o.$0,(i=$7[0],(snp=$7[1],CodeSnippet$1.New(nextI((FsGlobal["CodeSnippet.get_Levels"](snp))[0],i+1),"",snp.parent,List$1.T.Empty,List$1.T.Empty,""))))
   })).id);
   setDirty();
   refreshView();
  }
  function deleteCode()
  {
   var o,snp;
   o=CodeSnippet$1.FetchO(currentCodeSnippetId.Get());
   o==null?void 0:(snp=o.$0,Global.confirm((function($7)
   {
    return function($8)
    {
     return $7("Do you want to delete "+Utils.toSafe($8)+"?");
    };
   }(Global.id))(snp.get_Name()))?(currentCodeSnippetId.Set(CodeSnippetId.get_New()),FsGlobal.codeSnippets().Remove(snp),setDirty(),refreshView()):void 0);
  }
  function justFileName(f$8)
  {
   return Seq$2.last(Strings.SplitChars(f$8,["/","\\"],0));
  }
  function loadTextFile(element,f$8)
  {
   var files,reader;
   files=element.files;
   return files.length>0?(reader=new Global.FileReader(),(reader.onload=function(e)
   {
    return f$8(e.target.result);
   },reader.readAsText(files.item(0)))):null;
  }
  function parseText(txt)
  {
   var a;
   try
   {
    a=deserializeCodeSnipets(txt);
    FsGlobal.codeSnippets().Set(a);
    setClean();
    refreshView();
   }
   catch(e)
   {
    Global.alert(Global.String(e));
   }
  }
  function loadFile(e)
  {
   if(!dirty.Get()||Global.confirm("Changes have not been saved, do you really want to load?"))
    loadTextFile(HtmlNode.findRootElement(e).querySelector("#"+fileInputElementId),parseText);
  }
  function downloadFile()
  {
   var t,a,n,m;
   t=(a=Arrays.ofSeq((FsGlobal.codeSnippets())["var"].Get()),JSON.stringify(((Provider.EncodeArray(FSharpStation_JsonEncoder.j$7))())(a)));
   n=(m=justFileName(fileName.Get()),m===""?"snippets.fsjson":m);
   Global.saveAs(new Global.Blob([t],{
    type:"text/plain;charset=utf-8"
   }),n);
   setClean();
  }
  function do_LoadFile(e,a)
  {
   return HtmlNode.findRootElement(e).querySelector("#"+fileInputElementId).click();
  }
  function nextParsedPrefix()
  {
   return latestParsedPrefix==="a"?"b":"a";
  }
  function parseFile(prefix)
  {
   return prefix+parseFileName;
  }
  function getCodeAndStartsFast(snp,addLinePrepos)
  {
   var p,$7,pId,alp,preds,redO,cur,red1,t,o;
   p=lastCodeAndStarts!=null&&lastCodeAndStarts.$==1&&((pId=lastCodeAndStarts.$0[0],(alp=lastCodeAndStarts.$0[1],Unchecked.Equals(pId,snp.id)&&Unchecked.Equals(alp,addLinePrepos)))&&($7=[lastCodeAndStarts.$0[1],lastCodeAndStarts.$0[0],lastCodeAndStarts.$0[2]],true))?[$7[2],FsGlobal["CodeSnippet.get_PrepareSnippet"](snp)]:(preds=FsGlobal["CodeSnippet.Predecessors"](snp),(redO=Arrays.length(preds)===1?null:{
    $:1,
    $0:CodeSnippet.ReducedCode(addLinePrepos,Slice.array(preds,{
     $:1,
     $0:0
    },{
     $:1,
     $0:Arrays.length(preds)-2
    }))
   },(cur=Arrays.get(preds,Arrays.length(preds)-1),(lastCodeAndStarts={
    $:1,
    $0:[cur.id,addLinePrepos,redO]
   },[redO,cur]))));
   red1=CodeSnippet.ReducedCode(addLinePrepos,[p[1]]);
   t=Option.defaultValue(red1,(o=p[0],o==null?null:{
    $:1,
    $0:(function(t$1)
    {
     var a,a$1,a$2,a$3,a$4,a$5;
     a=t$1[0];
     a$1=t$1[1];
     a$2=t$1[2];
     a$3=t$1[3];
     a$4=t$1[4];
     a$5=t$1[5];
     return function(t$2)
     {
      return CodeSnippet.AddSeps(a,a$1,a$2,a$3,a$4,a$5,t$2[0],t$2[1],t$2[2],t$2[3],t$2[4],t$2[5]);
     };
    }(o.$0))(red1)
   }));
   return CodeSnippet.FinishCode(addLinePrepos,t[0],t[1],t[2],t[3],t[4],t[5]);
  }
  function parseCode()
  {
   var o,b$8;
   o=cancellationTokenSourceO[0];
   o==null?void 0:o.$0.Cancel$1();
   cancellationTokenSourceO[0]={
    $:1,
    $0:new CancellationTokenSource.New()
   };
   Concurrency.Start((b$8=null,Concurrency.Delay(function()
   {
    return Concurrency.Bind(isParseDisabled,function(a)
    {
     var m,cur;
     return a?Concurrency.Zero():(m=CodeSnippet$1.FetchO(currentCodeSnippetId.Get()),m!=null&&m.$==1?(cur=m.$0,(parserMsgs.Set("Parsing...\n"+String.skipFirstLine(parserMsgs.Get())),Concurrency.Bind(Concurrency.Sleep(500),function()
     {
      var prefix,p;
      prefix=nextParsedPrefix();
      p=getCodeAndStartsFast(cur,false);
      return Concurrency.Bind(autoCompleteClient.Parse$1(parseFile(prefix),p[0],p[1]),function(a$1)
      {
       cancellationTokenSourceO[0]=null;
       parsed=true;
       latestParsedPrefix=prefix;
       parserMsgs.Set("Parsed!\n"+a$1);
       return Concurrency.Zero();
      });
     }))):Concurrency.Zero());
    });
   })),{
    $:1,
    $0:cancellationTokenSourceO[0].$0
   });
  }
  function parseFSA(silent)
  {
   parseCode();
  }
  function mustParse(cur)
  {
   var b$8;
   b$8=null;
   return Concurrency.Delay(function()
   {
    return!parsed?Concurrency.Return(true):Concurrency.Bind(autoCompleteClient.MustParse(parseFile(latestParsedPrefix),cur.get_NameSanitized()),function(a)
    {
     return Concurrency.Return(a);
    });
   });
  }
  function parseIfMustThen(silent)
  {
   var b$8;
   b$8=null;
   return Concurrency.Delay(function()
   {
    return Concurrency.Bind(isParseDisabled,function(a)
    {
     var m;
     return a?Concurrency.Zero():(m=CodeSnippet$1.FetchO(currentCodeSnippetId.Get()),m!=null&&m.$==1?Concurrency.Bind(mustParse(m.$0),function(a$1)
     {
      return a$1?(parseFSA(silent),Concurrency.Zero()):Concurrency.Zero();
     }):Concurrency.Zero());
    });
   });
  }
  function getStartWord(line,ch)
  {
   var a,t;
   a=Useful.REGEX("([a-zA-Z_]\\w*)$","g",Strings.Substring(line,0,ch));
   return a!=null&&a.$==1?(t=a.$0,!Unchecked.Equals(t,null)&&t.length===1)?Arrays.get(a.$0,0):"":"";
  }
  function getEndWord(line,ch)
  {
   var a,t;
   a=Useful.REGEX("^([a-zA-Z_]\\w*)","g",line.substring(ch));
   return a!=null&&a.$==1?(t=a.$0,!Unchecked.Equals(t,null)&&t.length===1)?Arrays.get(a.$0,0):"":"";
  }
  function showToolTip(ed)
  {
   var b$8;
   Concurrency.Start((b$8=null,Concurrency.Delay(function()
   {
    return Concurrency.Bind(isParseDisabled,function(a)
    {
     var m,cur;
     return a?Concurrency.Zero():(m=CodeSnippet$1.FetchO(currentCodeSnippetId.Get()),m!=null&&m.$==1?(cur=m.$0,Concurrency.Bind(parseIfMustThen(false),function()
     {
      var pos,l,sub,add0,add;
      pos=ed.getCursor();
      l=ed.getLine(pos.line);
      sub=Strings.length(getStartWord(l,pos.ch));
      add0=Strings.length(getEndWord(l,pos.ch));
      add=sub===0&&add0===0?2:add0;
      return Concurrency.Bind(autoCompleteClient.ToolTip(parseFile(latestParsedPrefix),pos.line+1,pos.ch+1,cur.get_NameSanitized()),function(a$1)
      {
       var c;
       addPrsMsg(((((c=(Runtime.Curried(function($7,$8,$9,$10,$11)
       {
        return $7("InfoFSharp \""+Utils.toSafe($8)+" "+("("+Utils.prettyPrint($9[0])+", "+Utils.prettyPrint($9[1])+")")+" - "+("("+Utils.prettyPrint($10[0])+", "+Utils.prettyPrint($10[1])+")")+" "+Utils.toSafe($11)+" \"");
       },5))(Global.id),function(a$2)
       {
        var c$1;
        c$1=c(a$2);
        return function(t)
        {
         var c$2;
         c$2=c$1([t[0],t[1]]);
         return function(t$1)
         {
          return c$2([t$1[0],t$1[1]]);
         };
        };
       })(cur.get_NameSanitized()))([pos.line+1,pos.ch-sub+1]))([pos.line+1,pos.ch+add+1]))(Strings.Replace(a$1,"\"","''")));
       return Concurrency.Zero();
      });
     })):Concurrency.Zero());
    });
   })),null);
  }
  function getSymbolType(chr)
  {
   return chr==="C"?"class":chr==="Cn"?"Constant":chr==="D"?"delegate":chr==="E"?"enum":chr==="P"?"property":chr==="e"?"event":chr==="X"?"exception":chr==="F"?"field":chr==="I"?"interface":chr==="M"?"function":chr==="N"?"module":chr==="S"?"struct":chr==="T"?"type":chr==="V"?"Variable":chr;
  }
  function getHints(ed,cb,a)
  {
   var b$8;
   asyncStartDelayed((b$8=null,Concurrency.Delay(function()
   {
    return Concurrency.Bind(isParseDisabled,function(a$1)
    {
     var m,pos,l,word;
     ((function($7)
     {
      return function($8)
      {
       return $7("getHints (Complete) "+Utils.prettyPrint($8));
      };
     }(function(s$3)
     {
      console.log(s$3);
     }))(a$1));
     return a$1?Concurrency.Zero():(m=CodeSnippet$1.FetchO(currentCodeSnippetId.Get()),m!=null&&m.$==1?(pos=ed.getCursor(),(l=ed.getLine(pos.line),(word=getStartWord(l,pos.ch),Concurrency.Bind(autoCompleteClient.Complete(parseFile(latestParsedPrefix),l+"a",pos.line+1,pos.ch+1,m.$0.get_NameSanitized()),function(a$2)
     {
      function m$1(dis,rep,cls,chr)
      {
       return Hint.New(rep,(((Runtime.Curried3(function($7,$8,$9)
       {
        return $7(Strings.PadRight(Utils.toSafe($8),40)+" "+Strings.PadLeft(Utils.toSafe($9),20));
       }))(Global.id))(dis))(getSymbolType(chr)),cls);
      }
      cb(HintResponse.New(Arrays.map(function($7)
      {
       return m$1($7[0],$7[1],$7[2],$7[3]);
      },a$2),CodeMirrorPos.New(pos.line,pos.ch-word.length),pos));
      return Concurrency.Zero();
     })))):Concurrency.Zero());
    });
   })));
  }
  function expandParents(snp)
  {
   var o,o$1,me;
   o=(o$1=snp.parent,o$1==null?null:CodeSnippet$1.FetchO(o$1.$0));
   o==null?void 0:(me=o.$0,expandParents(me),!me.expanded?toggleExpanded(me):void 0);
  }
  function _goto(codeId,line,col)
  {
   var b$8;
   return Concurrency.Start((b$8=null,Concurrency.Delay(function()
   {
    var o;
    currentCodeSnippetId.Set(codeId);
    o=CodeSnippet$1.FetchO(codeId);
    o==null?void 0:expandParents(o.$0);
    return Concurrency.Bind(Concurrency.Sleep(200),function()
    {
     var o$1,ed;
     o$1=codeMirror.editorO;
     o$1==null?void 0:(ed=o$1.$0,ed.setCursor(line-1,col-1),ed.focus());
     return Concurrency.Zero();
    });
   })),null);
  }
  function jumpToLine(line)
  {
   var a,t,col,guid,line$1;
   a=Useful.REGEX("([0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}).+?\\((\\d+)\\,\\s*(\\d+)\\)","",line);
   a!=null&&a.$==1?(t=a.$0,!Unchecked.Equals(t,null)&&t.length===4)?(col=Arrays.get(a.$0,3),guid=Arrays.get(a.$0,1),line$1=Arrays.get(a.$0,2),_goto(new CodeSnippetId({
    $:0,
    $0:guid
   }),Global.Number(line$1),Global.Number(col))):void 0:void 0;
  }
  function gotoDefinition()
  {
   var b$8;
   Concurrency.Start((b$8=null,Concurrency.Delay(function()
   {
    var $7,$8,$9,ed,pos;
    $7=CodeSnippet$1.FetchO(currentCodeSnippetId.Get());
    $8=codeMirror.editorO;
    return($8!=null&&$8.$==1?$7!=null&&$7.$==1?($9=[$7.$0,$8.$0],false):true:true)?Concurrency.Zero():(ed=$9[1],(pos=ed.getCursor(),(ed.getLine(pos.line),Concurrency.Bind(autoCompleteClient.FindDecl(parseFile(latestParsedPrefix),pos.line+1,pos.ch+1,$9[0].get_NameSanitized()),function(a)
    {
     var decl;
     return a.$==9?(decl=a.$0,(jumpToLine(((((((Runtime.Curried(function($10,$11,$12,$13,$14,$15)
     {
      return $10(Utils.toSafe($11)+" ("+Global.String($12)+", "+Global.String($13)+") - ("+Global.String($14)+", "+Global.String($15)+")");
     },6))(Global.id))(decl.File))(decl.Line))(decl.Column))(decl.Line))(decl.Column)),Concurrency.Zero())):a.$==1?(Global.alert((function($10)
     {
      return function($11)
      {
       return $10(GeneratedPrintf.p($11));
      };
     }(Global.id))(a.$0)),Concurrency.Zero()):(Global.alert((function($10)
     {
      return function($11)
      {
       return $10(FSharpStation_GeneratedPrintf.p$7($11));
      };
     }(Global.id))(a)),Concurrency.Zero());
    }))));
   })),null);
  }
  function refreshCodeMirror()
  {
   var o;
   o=codeMirror.editorO;
   o==null?void 0:o.$0.refresh();
  }
  function delayedRefreshCM(delay)
  {
   var b$8;
   Concurrency.Start((b$8=null,Concurrency.Delay(function()
   {
    return Concurrency.Bind(Concurrency.Sleep(delay),function()
    {
     refreshCodeMirror();
     return Concurrency.Zero();
    });
   })),null);
  }
  function setDirtyP()
  {
   dirty.Set(true);
  }
  function getProperty(props,key)
  {
   return new Property.New(setDirtyP,props,key);
  }
  function setProperty(props,key,v$11)
  {
   return getProperty(props,key).get_ValueVar().Set(v$11);
  }
  function f$6(u,props)
  {
   return HtmlNode.table(List$1.ofSeq(Seq$2.delay(function()
   {
    return Seq$2.append([HtmlNode.thead([HtmlNode.th([HtmlNode.htmlText("Property"),HtmlNode.style("padding-right:10px")]),HtmlNode.th([HtmlNode.htmlText("Value")])])],Seq$2.delay(function()
    {
     return Seq$2.append(Seq$2.map(function(kvp)
     {
      var prop;
      prop=getProperty(props,kvp);
      return HtmlNode.tr([HtmlNode.td([HtmlNode.someElt(Doc.Input([],prop.get_KeyVar()))]),HtmlNode.td([HtmlNode.someElt(Doc.InputArea([HtmlNode.atr("style","height: 1.5em")],prop.get_ValueVar()))]),Template.hoverable(HtmlNode.td([HtmlNode.title("remove"),HtmlNode.style(" cursor: pointer "),HtmlNode.htmlText("x"),new HtmlNode$1({
       $:8,
       $0:AttrProxy.HandlerImpl("click",function()
       {
        return function()
        {
         prop.Remove();
         return redraw.Set(null);
        };
       })
      })]))]);
     },Seq$2.sort(props.get_Keys())),Seq$2.delay(function()
     {
      return[HtmlNode.tr([Template.hoverable(HtmlNode.td([HtmlNode.htmlText("Add..."),new HtmlNode$1({
       $:8,
       $0:AttrProxy.HandlerImpl("click",function()
       {
        return function()
        {
         props.Add("","1");
         setDirtyP();
         return redraw.Set(null);
        };
       })
      })])),HtmlNode.td([HtmlNode.htmlText("")])])];
     }));
    }));
   })));
  }
  function f$7(k)
  {
   function a(s$3)
   {
    return s$3.properties;
   }
   function a$1(s$3,p)
   {
    return CodeSnippet.New(s$3.name,s$3.content,s$3.parent,s$3.predecessors,s$3.id,s$3.expanded,s$3.level,s$3.levelCode,p);
   }
   return missing(new Dictionary.New$5(),function(a$2)
   {
    return FsGlobal.codeSnippets().TryFindByKey(a$2);
   },function(a$2)
   {
    return FsGlobal.codeSnippets().LensInto(a,a$1,a$2);
   },k);
  }
  function g$12(a)
  {
   return new Val({
    $:1,
    $0:a
   });
  }
  function DoW(f$8,p,a,a$1)
  {
   return Wrap.start(addOutMsg,Wrap.map(Global.ignore,f$8(p)));
  }
  function DoP(f$8,p,a,a$1)
  {
   function p$1($7,$8)
   {
    if($7==null)
     addOutMsg("Failed!\n"+$8);
    else
     if($7.$0[0].$==0)
      {
       addOutMsg($8);
       triggerWSResult.Set(null);
      }
     else
      addOutMsg($8);
   }
   return Wrap.startV(function($7)
   {
    return p$1($7[0],$7[1]);
   },f$8(p));
  }
  function DoW2(f$8,p,t)
  {
   function $7(_p)
   {
    return(f$8(t))(_p);
   }
   return Runtime.Curried(DoW,2,[$7,p]);
  }
  function DoP2(f$8,p,t)
  {
   function $7(_p)
   {
    return(f$8(t))(_p);
   }
   return Runtime.Curried(DoP,2,[$7,p]);
  }
  function getSnippet(act)
  {
   var m,$7,t;
   m=act.parms;
   return m!=null&&m.$==1&&((t=m.$0,!Unchecked.Equals(t,null)&&t.length===1)&&($7=Arrays.get(m.$0,0),true))?CodeSnippet$1.FetchByPathO(Strings.SplitChars($7,["/"],0)):getSnpO();
  }
  function getCodeFromAct(act,addOpen)
  {
   var b$8;
   b$8=Wrap.wrap();
   return b$8.Run(b$8.Delay(function()
   {
    return b$8.Bind$2(Val.getAsync(act.text),function(a)
    {
     var $7,o,code,code$1,$8,$9,o$1,o$2,$10,snpO,openPre,actionTempl,a$1,t;
     function propValue(p)
     {
      return snpO==null?null:FsGlobal["CodeSnippet.propValue"](snpO.$0,p);
     }
     setOutMsg(a+"...");
     snpO=getSnpO();
     openPre=addOpen?Option.defaultValue("",(o=propValue("open"),o==null?null:{
      $:1,
      $0:o.$0+"\n"
     })):"";
     actionTempl=Lazy.Create(function()
     {
      return Option.defaultValue("${parm}() |> printfn \"%A\"",propValue("action-template"));
     });
     a$1=(o$2=act.parms,o$2==null?null:{
      $:1,
      $0:Arrays.map(Global.id,o$2.$0)
     });
     switch(a$1!=null&&a$1.$==1?(t=a$1.$0,!Unchecked.Equals(t,null)&&t.length===2?Arrays.get(a$1.$0,0)==="Code"?($10=Arrays.get(a$1.$0,1),0):Arrays.get(a$1.$0,0)==="Property"?($10=Arrays.get(a$1.$0,1),1):2:2):2)
     {
      case 0:
       o$1={
        $:1,
        $0:$10
       };
       break;
      case 1:
       o$1=propValue($10);
       break;
      case 2:
       o$1=null;
       break;
     }
     $9=o$1==null?propValue(a):o$1;
     code=(code$1=Option.defaultWith(function()
     {
      return((Object.constructor("return function(parm) { return `"+actionTempl.f()+"`}"))())(a);
     },$9),Strings.StartsWith(code$1,"////")?code$1:openPre+code$1);
     return snpO!=null&&snpO.$==1?b$8.Bind$2((new AjaxRemotingProvider.New()).Async("FSharpStation:FSSGlobal.FsEvaluator+Evaluator.getPresence:1818471758",[Evaluator.extractConfig(code),(function($11)
     {
      return function($12)
      {
       return $11(FSharpStation_GeneratedPrintf.p$6($12));
      };
     }(Global.id))(snpO.$0.id)]),function(a$2)
     {
      return Unchecked.Equals(a$2,{
       $:1,
       $0:"ok"
      })?b$8.Return(code):b$8.Bind$3(evalSnippetW(snpO),function()
      {
       return b$8.Return(code);
      });
     }):b$8.Return(code);
    });
   }));
  }
  function evalFsCode(act,u)
  {
   return Wrap.bind(evaluateCodeW,getCodeFromAct(act,true));
  }
  function evalFableCode(act,u)
  {
   return Wrap.bind(fableCodeW,getCodeFromAct(act,false));
  }
  function evaluateFS2(act,u)
  {
   return evaluateSnippetW(getSnippet(act));
  }
  function fableFS2(act,u)
  {
   return fableSnippetW(getSnippet(act));
  }
  function compileRunP2(act,p)
  {
   var x$3;
   x$3=getSnippet(act);
   return(compileRunW(p))(x$3);
  }
  function setSnippetProp(act,u)
  {
   var b$8;
   b$8=Wrap.wrapper();
   return b$8.Run(b$8.Delay(function()
   {
    return b$8.Bind$1(Result.tryProtection(),function()
    {
     var m,$7,t,opth,o;
     return b$8.Bind$1((m=act.parms,m!=null&&m.$==1&&((t=m.$0,!Unchecked.Equals(t,null)&&t.length===3)&&($7=[Arrays.get(m.$0,1),Arrays.get(m.$0,0),Arrays.get(m.$0,2)],true))?(opth=$7[1],(Option.defaultWith(function()
     {
      ((function($8)
      {
       return function($9)
       {
        return $8("setSnippetProp snippet not found: "+Utils.toSafe($9));
       };
      }(function(s$3)
      {
       console.log(s$3);
      }))(opth));
     },(o=CodeSnippet$1.FetchByPathO(Strings.SplitChars(opth,["/"],0)),o==null?null:{
      $:1,
      $0:setProperty(o.$0.properties,$7[0],$7[2])
     })),Result.succeed())):Result.failSimpleError((function($8)
     {
      return function($9)
      {
       return $8("setSnippetProp wrong parms: "+FSharpStation_GeneratedPrintf.p$8($9));
      };
     }(Global.id))(act.parms))),function()
     {
      return b$8.Return();
     });
    });
   }));
  }
  function showOutText(act,u)
  {
   var $7,m,t,t$1,$8,t$2;
   ((function($9)
   {
    return function($10)
    {
     return $9("showOutText: "+GeneratedPrintf.p$22($10));
    };
   }(function(s$3)
   {
    console.log(s$3);
   }))(act));
   m=act.parms;
   switch(m!=null&&m.$==1?(t=m.$0,!Unchecked.Equals(t,null)&&t.length===1?($7=Arrays.get(m.$0,0),0):(t$1=m.$0,!Unchecked.Equals(t$1,null)&&t$1.length===2?(Arrays.get(m.$0,1),Arrays.get(m.$0,0)===""?($7=[Arrays.get(m.$0,0),Arrays.get(m.$0,1)],1):2):2)):2)
   {
    case 0:
     return setOutMsg($7);
     break;
    case 1:
     return setOutMsg($7[1]);
     break;
    case 2:
     return m!=null&&m.$==1&&((t$2=m.$0,!Unchecked.Equals(t$2,null)&&t$2.length===2)&&(Arrays.get(m.$0,1),Arrays.get(m.$0,0)==="+"&&($8=[Arrays.get(m.$0,0),Arrays.get(m.$0,1)],true)))?addOutMsg($8[1]):(function($9)
     {
      return function($10)
      {
       return $9("error: showOutText "+GeneratedPrintf.p$22($10));
      };
     }(function(s$3)
     {
      console.log(s$3);
     }))(act);
     break;
   }
  }
  function $5()
  {
   return compileRunP(position.Get());
  }
  function $6()
  {
   var b$8;
   b$8=Wrap.wrapper();
   return b$8.Run(b$8.Delay(function()
   {
    lastCodeAndStarts=null;
    parseFSA(false);
    return b$8.Zero();
   }));
  }
  function jumpToRef(e,a)
  {
   var v$11,s$3;
   function c(line,from,to_)
   {
    return s$3>=from&&s$3<to_?{
     $:1,
     $0:line
    }:null;
   }
   v$11=e.value;
   s$3=e.selectionStart;
   return jumpToLine(Seq$2.pick(function($7)
   {
    return c($7[0],$7[1],$7[2]);
   },(Seq$2.mapFold(function(total,line)
   {
    return[[line,total,total+line.length+1],total+line.length+1];
   },0,Strings.SplitChars(v$11,["\n"],0)))[0]));
  }
  function scrollToBottom(e,a)
  {
   var b$8;
   return Concurrency.Start((b$8=null,Concurrency.Delay(function()
   {
    return Concurrency.Bind(Concurrency.Sleep(100),function()
    {
     e.scrollTop=e.scrollHeight;
     return Concurrency.Zero();
    });
   })),null);
  }
  function doGuiCallR(name,action,parms)
  {
   var b$8;
   b$8=Result.result();
   return b$8.Run(b$8.Delay(function()
   {
    return b$8.Bind(Result.tryProtection(),function()
    {
     return b$8.Bind(layout.GetGuiCallAction(name,action,parms),function(a)
     {
      var o;
      o=a.onClick;
      o==null?void 0:((o.$0(a))(null))(null);
      return b$8.Zero();
     });
    });
   }));
  }
  function addLayoutJson(json)
  {
   delayedRefreshCM(1000);
   delayedRefreshCM(2000);
   delayedRefreshCM(3000);
   layout.SetLayoutJson(steps,json);
  }
  function addLayoutSteps(steps2)
  {
   delayedRefreshCM(1000);
   delayedRefreshCM(2000);
   delayedRefreshCM(3000);
   layout.AddNewSteps(steps,steps2);
  }
  function transMsgs(msgs)
  {
   return Arrays.ofSeq(Seq$2.map(function(e)
   {
    return[e.FSSGlobal_Useful_ErrMsg$get_ErrMsg(),e.FSSGlobal_Useful_ErrMsg$get_IsWarning()?FSSeverity.FSWarning:FSSeverity.FSError];
   },msgs));
  }
  function result2response(res$1)
  {
   var o;
   return{
    $:4,
    $0:(o=res$1.$0,o==null?null:{
     $:1,
     $0:o.$0[1]
    }),
    $1:Arrays.ofSeq(Seq$2.map(function(err)
    {
     return[err.FSSGlobal_Useful_ErrMsg$get_ErrMsg(),err.FSSGlobal_Useful_ErrMsg$get_IsWarning()?FSSeverity.FSWarning:FSSeverity.FSError];
    },res$1.$1))
   };
  }
  function result2StringResponse(res$1)
  {
   var m,o;
   return{
    $:4,
    $0:(m=function($7)
    {
     return function($8)
     {
      return $7(Utils.prettyPrint($8));
     };
    }(Global.id),(o=res$1.$0,o==null?null:{
     $:1,
     $0:m(o.$0)
    })),
    $1:Arrays.ofSeq(Seq$2.map(function(err)
    {
     return[err.FSSGlobal_Useful_ErrMsg$get_ErrMsg(),err.FSSGlobal_Useful_ErrMsg$get_IsWarning()?FSSeverity.FSWarning:FSSeverity.FSError];
    },res$1.$1))
   };
  }
  function respond(fromId,msg)
  {
   var b$8;
   b$8=null;
   return Concurrency.Delay(function()
   {
    var o,o$1,o$2,o$3,o$4,m,o$5,nm,a;
    return msg.$==2?Concurrency.Return({
     $:1,
     $0:(o=CodeSnippet$1.FetchO(msg.$0),o==null?null:{
      $:1,
      $0:o.$0.content
     })
    }):msg.$==3?Concurrency.Return({
     $:1,
     $0:(o$1=CodeSnippet$1.FetchO(msg.$0),o$1==null?null:{
      $:1,
      $0:FsGlobal["CodeSnippet.GetCodeFsx"](o$1.$0,true)
     })
    }):msg.$==4?Concurrency.Return({
     $:3,
     $0:Option.defaultValue([],(o$2=CodeSnippet$1.FetchO(msg.$0),o$2==null?null:{
      $:1,
      $0:FsGlobal["CodeSnippet.Predecessors"](o$2.$0)
     }))
    }):msg.$==5?Concurrency.Return({
     $:2,
     $0:CodeSnippet$1.FetchO(msg.$0)
    }):msg.$==6?Concurrency.Return({
     $:1,
     $0:(o$3=CodeSnippet$1.FetchByPathO(msg.$0),o$3==null?null:{
      $:1,
      $0:o$3.$0.content
     })
    }):msg.$==7?Concurrency.Return({
     $:1,
     $0:(o$4=CodeSnippet$1.FetchByPathO(msg.$0),o$4==null?null:{
      $:1,
      $0:FsGlobal["CodeSnippet.GetCodeFsx"](o$4.$0,true)
     })
    }):msg.$==10?(m=CodeSnippet$1.FetchByPathO(msg.$0),m==null?Concurrency.Return({
     $:4,
     $0:null,
     $1:[["Snippet not found",FSSeverity.FSError]]
    }):Concurrency.Bind(FsTranslator.translateAR(FsGlobal["CodeSnippet.GetCodeFsx"](m.$0,true),false),function(a$1)
    {
     return Concurrency.Return({
      $:4,
      $0:Result.getOption(Result.map(RunCode.completeJS,a$1)),
      $1:transMsgs(Result.getMsgs(a$1))
     });
    })):msg.$==8?Concurrency.Return({
     $:3,
     $0:Option.defaultValue([],(o$5=CodeSnippet$1.FetchByPathO(msg.$0),o$5==null?null:{
      $:1,
      $0:FsGlobal["CodeSnippet.Predecessors"](o$5.$0)
     }))
    }):msg.$==9?Concurrency.Return({
     $:2,
     $0:CodeSnippet$1.FetchByPathO(msg.$0)
    }):msg.$==1?Concurrency.Return({
     $:1,
     $0:{
      $:1,
      $0:"Message received: "+msg.$0
     }
    }):msg.$==0?Concurrency.Return({
     $:0,
     $0:FsGlobal.fsIds()
    }):msg.$==12?Async.map(result2response,Wrap.getAsyncR(compileRunUrlW(msg.$1,Position.NewBrowser,CodeSnippet$1.FetchO(msg.$0)))):msg.$==13?Async.map(result2response,Wrap.getAsyncR(compileRunUrlW(msg.$1,Position.NewBrowser,CodeSnippet$1.FetchByPathO(msg.$0)))):msg.$==14?(nm=msg.$0,Concurrency.Return(result2StringResponse(Result.map(function()
    {
     return(function($7)
     {
      return function($8)
      {
       return $7("success: "+Utils.toSafe($8));
      };
     }(Global.id))(nm);
    },doGuiCallR(nm,msg.$1,msg.$2))))):Concurrency.Return({
     $:1,
     $0:{
      $:1,
      $0:(a=Arrays.ofSeq((FsGlobal.codeSnippets())["var"].Get()),JSON.stringify(((Provider.EncodeArray(FSharpStation_JsonEncoder.j$7))())(a)))
     }
    });
   });
  }
  function addCssLink(lnk)
  {
   !List$1.contains(lnk,cssLinks.Get())?cssLinks.Set(new List$1.T({
    $:1,
    $0:lnk,
    $1:cssLinks.Get()
   })):void 0;
   delayedRefreshCM(300);
  }
  missingVar=Var$1.Create$1("");
  currentCodeSnippetId=Var$1.Create$1(CodeSnippetId.get_New());
  s="CodeEditor."+"currentCodeSnippetId";
  v=Global.localStorage.getItem(s);
  v!==null?currentCodeSnippetId.Set((FSharpStation_JsonDecoder.j$7())(JSON.parse(v))):void 0;
  Val.sink(function(v$11)
  {
   Global.localStorage.setItem(s,JSON.stringify((FSharpStation_JsonEncoder.j$5())(v$11)));
  },currentCodeSnippetId);
  refresh=Var$1.Create$1();
  currentCodeSnippetO=Val.map2(function(k)
  {
   return function()
   {
    return FsGlobal.codeSnippets().TryFindByKey(k);
   };
  },currentCodeSnippetId,refresh);
  position=Var$1.Create$1(Position.Below);
  s$1="CodeEditor."+"position";
  v$1=Global.localStorage.getItem(s$1);
  v$1!==null?position.Set((FSharpStation_JsonDecoder.j$8())(JSON.parse(v$1))):void 0;
  Val.sink(function(v$11)
  {
   Global.localStorage.setItem(s$1,JSON.stringify((FSharpStation_JsonEncoder.j$6())(v$11)));
  },position);
  Val.map(function(pos)
  {
   return pos.$==1;
  },position);
  noSelectionVal=Val.map(function(cur)
  {
   return Unchecked.Equals(CodeSnippet$1.FetchO(cur),null);
  },currentCodeSnippetId);
  propertyCssVal=(v$2=Val.map((f=(g=function(o)
  {
   return o==null?null:b$2(o.$0);
  },function(x$3)
  {
   return g(CodeSnippet$1.FetchO(x$3));
  }),function(x$3)
  {
   return g$6(f(x$3));
  }),currentCodeSnippetId),(prior=[Var$1.Create$1(null)],(View.Sink(function(v$11)
  {
   if(!Unchecked.Equals(prior[0].Get(),v$11))
    prior[0].Set(v$11);
  },Val.toView(v$2)),new Val({
   $:1,
   $0:prior[0]
  }))));
  propertyCssLinkVal=(v$3=Val.map((f$1=(g$1=function(o)
  {
   return o==null?null:b$3(o.$0);
  },function(x$3)
  {
   return g$1(CodeSnippet$1.FetchO(x$3));
  }),function(x$3)
  {
   return g$7(f$1(x$3));
  }),currentCodeSnippetId),(prior$1=[Var$1.Create$1(null)],(View.Sink(function(v$11)
  {
   if(!Unchecked.Equals(prior$1[0].Get(),v$11))
    prior$1[0].Set(v$11);
  },Val.toView(v$3)),new Val({
   $:1,
   $0:prior$1[0]
  }))));
  propertyModeVal=(v$4=Val.map((f$2=(g$2=function(o)
  {
   return o==null?null:b$4(o.$0);
  },function(x$3)
  {
   return g$2(CodeSnippet$1.FetchO(x$3));
  }),function(x$3)
  {
   return g$8(f$2(x$3));
  }),currentCodeSnippetId),(prior$2=[Var$1.Create$1(null)],(View.Sink(function(v$11)
  {
   if(!Unchecked.Equals(prior$2[0].Get(),v$11))
    prior$2[0].Set(v$11);
  },Val.toView(v$4)),new Val({
   $:1,
   $0:prior$2[0]
  }))));
  propertyThemeVal=(v$5=Val.map((f$3=(g$3=function(o)
  {
   return o==null?null:b$5(o.$0);
  },function(x$3)
  {
   return g$3(CodeSnippet$1.FetchO(x$3));
  }),function(x$3)
  {
   return g$9(f$3(x$3));
  }),currentCodeSnippetId),(prior$3=[Var$1.Create$1(null)],(View.Sink(function(v$11)
  {
   if(!Unchecked.Equals(prior$3[0].Get(),v$11))
    prior$3[0].Set(v$11);
  },Val.toView(v$5)),new Val({
   $:1,
   $0:prior$3[0]
  }))));
  propertyLayoutVal=(v$6=Val.map((f$4=(g$4=function(o)
  {
   return o==null?null:b$6(o.$0);
  },function(x$3)
  {
   return g$4(CodeSnippet$1.FetchO(x$3));
  }),function(x$3)
  {
   return g$10(f$4(x$3));
  }),currentCodeSnippetId),(prior$4=[Var$1.Create$1(null)],(View.Sink(function(v$11)
  {
   if(!Unchecked.Equals(prior$4[0].Get(),v$11))
    prior$4[0].Set(v$11);
  },Val.toView(v$6)),new Val({
   $:1,
   $0:prior$4[0]
  }))));
  propertyLayoutJSVal=(v$7=Val.map((f$5=(g$5=function(o)
  {
   return o==null?null:b$7(o.$0);
  },function(x$3)
  {
   return g$5(CodeSnippet$1.FetchO(x$3));
  }),function(x$3)
  {
   return g$11(f$5(x$3));
  }),currentCodeSnippetId),(prior$5=[Var$1.Create$1(null)],(View.Sink(function(v$11)
  {
   if(!Unchecked.Equals(prior$5[0].Get(),v$11))
    prior$5[0].Set(v$11);
  },Val.toView(v$7)),new Val({
   $:1,
   $0:prior$5[0]
  }))));
  disableParseVal=Val.map(function(p)
  {
   return p!=="0"&&p!=="";
  },disablePropertyVal("DisableParse"));
  disableFSIVal=Val.map2(function($7)
  {
   return function($8)
   {
    return disableEval($7,$8);
   };
  },disableParseVal,disablePropertyVal("DisableFSI"));
  disableFableVal=Val.map2(function($7)
  {
   return function($8)
   {
    return disableEval($7,$8);
   };
  },disableParseVal,disablePropertyVal("DisableFable"));
  disableWebSharperVal=Val.map2(function($7)
  {
   return function($8)
   {
    return disableEval($7,$8);
   };
  },disableParseVal,disablePropertyVal("DisableWebSharper"));
  lastCodeAndStarts=null;
  getPredecessorsM=new ResetableMemoize.New(function(curO)
  {
   var x$3;
   x$3=curO==null?null:{
    $:1,
    $0:new HashSet.New$2(curO.$0.UniquePredecessors(CodeSnippet$1.FetchO))
   };
   return Option.defaultValue(new HashSet.New$3(),x$3);
  });
  codeFS=Var$1.Create$1("");
  codeJS=Var$1.Create$1("");
  parserMsgs=Var$1.Create$1("");
  outputMsgs=Var$1.Create$1("");
  parsed=false;
  dirty=Var$1.Create$1(false);
  Val.sink(function(m)
  {
   Global.onbeforeunload=m?function(e)
   {
    e.returnValue="Changes you made may not be saved.";
   }:null;
  },dirty);
  draggedId=[CodeSnippetId.get_New()];
  FableModule.set_addOutMsg(addOutMsg);
  compileRunW=($1=Global.location.origin+"/Main.html",(Runtime.Curried3(compileRunUrlW))($1));
  curPredecessors=Val.map(function(a)
  {
   var res$1,res$2;
   res$1=null;
   return getPredecessorsM.cache.TryGetValue(a,{
    get:function()
    {
     return res$1;
    },
    set:function(v$11)
    {
     res$1=v$11;
    }
   })?res$1:(res$2=getPredecessorsM.f(a),(getPredecessorsM.cache.set_Item(a,res$2),res$2));
  },currentCodeSnippetO);
  topScrollList=[0];
  fileName=Var$1.Create$1("");
  Val.map(function(v$11)
  {
   return v$11==="";
  },fileName);
  fileInputElementId="CodeEditorFileSel";
  loadFileElement=Input.New$3(Var$1.Lens(fileName,justFileName,Global.id)).Prefix$1(HtmlNode.label([HtmlNode["class"]("btn btn-primary"),HtmlNode.htmlText("Load File..."),Input.New$3(fileName).Type("file").Style("display: none").Content([AttrProxy.HandlerImpl("change",function(el)
  {
   return function()
   {
    return loadFile(el);
   };
  }),AttrProxy.HandlerImpl("click",function(el)
  {
   return function()
   {
    el.value="";
   };
  })]).Id(fileInputElementId).get_Render()]));
  loadFromUri!==""?Concurrency.Start((b=null,Concurrency.Delay(function()
  {
   return Concurrency.Bind(Concurrency.Sleep(3000),function()
   {
    var r;
    ((function($7)
    {
     return function($8)
     {
      return $7("loading "+Utils.toSafe($8)+"...");
     };
    }(function(s$3)
    {
     console.log(s$3);
    }))(loadFromUri));
    r=$.getJSON(loadFromUri+"?t="+Global.String(Date.now()));
    r.done(function()
    {
     return parseText(r.responseText);
    });
    return Concurrency.Zero();
   });
  })),null):void 0;
  autoCompleteClient=new FSAutoCompleteIntermediaryClient.New("FSharpStation",{
   $:1,
   $0:Global.location.href
  });
  parseFileName=FsGlobal.fsIds()+".fsx";
  latestParsedPrefix="a";
  isParseDisabled=View.GetAsync(Val.toView(disableParseVal));
  cancellationTokenSourceO=[null];
  parseIn=0;
  parseOut=0;
  parsingCode="";
  rex1="\\((\\d+)\\) F# (.+).fsx\\((\\d+)\\,(\\d+)\\): (error|warning) ((.|\\b)+)";
  rex2="(Err|Warning|Info)(FSharp|WebSharper)\\s+\"(\\((\\d+)\\) ?)?F?#? ?(.+?)(.fsx)? \\((\\d+)\\,\\s*(\\d+)\\) - \\((\\d+)\\,\\s*(\\d+)\\) ((.|\\s)+?)"+"\"";
  rex=rex1+"|"+rex2;
  asyncStartDelayed=Useful.asyncStartCancelling();
  annotationsV=(v$8=(x=currentCodeSnippetId.get_View(),View.Map2(function(msgs,snpId)
  {
   var a;
   function c(file,indent,fl,fc,tl,tc,sev,from,msg)
   {
    var ind;
    return Strings.StartsWith(file,snpId.get_Text())?(ind=Global.Number(indent)>0?Global.Number(indent):0,{
     $:1,
     $0:LintResponse.New(msg,Strings.StartsWith(sev.toUpperCase(),"ERR")?"error":Strings.StartsWith(sev.toUpperCase(),"INFO")?"info":"warning",Template.cmPos(fl-1,fc-1-ind),Template.cmPos(tl-1,tc-1-ind))
    }):null;
   }
   return Arrays.choose(function($7)
   {
    return c($7[0],$7[1],$7[2],$7[3],$7[4],$7[5],$7[6],$7[7],$7[8]);
   },Arrays.choose(function(v$11)
   {
    var $7,a$1,t,$8,a$2,t$1,fc,fl;
    return(a$1=Useful.REGEX(rex2,"",v$11),a$1!=null&&a$1.$==1&&((t=a$1.$0,!Unchecked.Equals(t,null)&&t.length===13)&&($7=[Arrays.get(a$1.$0,8),Arrays.get(a$1.$0,5),Arrays.get(a$1.$0,7),Arrays.get(a$1.$0,2),Arrays.get(a$1.$0,4),Arrays.get(a$1.$0,11),Arrays.get(a$1.$0,1),Arrays.get(a$1.$0,10),Arrays.get(a$1.$0,9)],true)))?{
     $:1,
     $0:[$7[1],$7[4],Global.Number($7[2]),Global.Number($7[0]),Global.Number($7[8]),Global.Number($7[7]),$7[6],$7[3],$7[5]]
    }:(a$2=Useful.REGEX(rex1,"",v$11),a$2!=null&&a$2.$==1&&((t$1=a$2.$0,!Unchecked.Equals(t$1,null)&&t$1.length===8)&&($8=[Arrays.get(a$2.$0,4),Arrays.get(a$2.$0,2),Arrays.get(a$2.$0,3),Arrays.get(a$2.$0,1),Arrays.get(a$2.$0,6),Arrays.get(a$2.$0,5)],true)))?(fc=$8[0],(fl=$8[2],{
     $:1,
     $0:[$8[1],$8[3],Global.Number(fl),Global.Number(fc)-1,Global.Number(fl),Global.Number(fc),$8[5],"fsi",$8[4]]
    })):null;
   },(a=Useful.REGEX(rex,"g",msgs),a!=null&&a.$==1?a.$0:[])));
  },parserMsgs.get_View(),x)),(prior$6=[Var$1.Create$1(null)],(View.Sink(function(v$11)
  {
   if(!Unchecked.Equals(prior$6[0].Get(),v$11))
    prior$6[0].Set(v$11);
  },v$8),prior$6[0].get_View())));
  View.Sink(function()
  {
   Concurrency.Start(parseIfMustThen(),null);
  },currentCodeSnippetId.get_View());
  codeMirror=CodeMirror.New$3((view=Val.toView(Val.fixit(currentCodeSnippetId)),(contentVar=Var$1.Create$1(null),(changingIRefO=[null],(contentVarChanged=[0],(refVarChanged=[0],(View.Sink(function()
  {
   var o,r;
   o=changingIRefO[0];
   o==null?void 0:(r=o.$0,contentVarChanged[0]>refVarChanged[0]?refVarChanged[0]=contentVarChanged[0]:!Unchecked.Equals(r.Get(),contentVar.Get())?(refVarChanged[0]=refVarChanged[0]+1,r.Set(contentVar.Get())):void 0);
  },contentVar.get_View()),View.Sink(function()
  {
   var o,r;
   o=changingIRefO[0];
   o==null?void 0:(r=o.$0,refVarChanged[0]>contentVarChanged[0]?contentVarChanged[0]=refVarChanged[0]:!Unchecked.Equals(r.Get(),contentVar.Get())?(contentVarChanged[0]=contentVarChanged[0]+10,contentVar.Set(r.Get())):void 0);
  },View.Bind(function(cur)
  {
   var r;
   r=curSnippetCodeOf(cur);
   changingIRefO[0]={
    $:1,
    $0:r
   };
   refVarChanged[0]=contentVarChanged[0]+100;
   contentVar.Set(r.Get());
   return r.get_View();
  },view)),contentVar))))))).OnChange(function()
  {
   var $7;
   lastCodeAndStarts!=null&&lastCodeAndStarts.$==1&&(Unchecked.Equals(lastCodeAndStarts.$0[0],currentCodeSnippetId.Get())&&($7=[lastCodeAndStarts.$0[0],lastCodeAndStarts.$0[2]],true))?setDirtyPart():setDirty();
   parseCode();
  }).OnRender(function(ed)
  {
   var g$13;
   function g$14($7)
   {
    return getHints($7[0],$7[1],$7[2]);
   }
   function f$8(a)
   {
    ed.replaceSelection(".","end");
   }
   function g$15($7)
   {
    return getHints($7[0],$7[1],$7[2]);
   }
   ed.addKeyMap(KeyMapAutoComplete.New(showToolTip,showToolTip,function(a)
   {
    Template.showHints(ed,g$14,false,a);
   },(g$13=function()
   {
    Template.showHints(ed,g$15,false,void 0);
   },function(x$3)
   {
    return g$13(f$8(x$3));
   })));
   View.Sink(function()
   {
    ed.performLint();
   },annotationsV);
   Template.setLint(ed,function(t)
   {
    View.Get(t[1],annotationsV);
   });
   Val.sink(function(v$11)
   {
    var b$8;
    Concurrency.Start((b$8=null,Concurrency.Delay(function()
    {
     ed.setOption("theme",v$11);
     return Concurrency.Bind(Concurrency.Sleep(50),function()
     {
      ed.refresh();
      return Concurrency.Zero();
     });
    })),null);
   },propertyThemeVal);
   Val.sink(function(v$11)
   {
    ed.setOption("mode",v$11);
   },propertyModeVal);
  }).Style("height: 100%");
  codeMirrorRender=codeMirror.get_Render().AddChildren([new HtmlNode$1({
   $:8,
   $0:AttrProxy.HandlerImpl("dblclick",function()
   {
    return function()
    {
     return showToolTip(codeMirror.editorO.$0);
    };
   })
  }),HtmlNode.htmlElement("menu",[HtmlNode.type("context"),HtmlNode.Id("right-menu"),HtmlNode.htmlElement("menuitem",[HtmlNode.htmlAttribute("label","Goto Definition"),new HtmlNode$1({
   $:8,
   $0:AttrProxy.HandlerImpl("click",function()
   {
    return function()
    {
     return gotoDefinition();
    };
   })
  })])]),HtmlNode.htmlAttribute("contextmenu","right-menu")]);
  Val.sink(function()
  {
   var b$8;
   Concurrency.Start((b$8=null,Concurrency.Delay(function()
   {
    var m,m$1;
    return!parsed?Concurrency.Zero():(m=codeMirror.editorO,m!=null&&m.$==1?(m$1=CodeSnippet$1.FetchO(currentCodeSnippetId.Get()),m$1!=null&&m$1.$==1?(m.$0.performLint(),Concurrency.Zero()):Concurrency.Zero()):Concurrency.Zero());
   })),null);
  },parserMsgs);
  redraw=Var$1.Create$1();
  properties=HtmlNode.div([new HtmlNode$1({
   $:2,
   $0:Val.map2(function($7)
   {
    return function($8)
    {
     return f$6($7,$8);
    };
   },redraw,Val.bind(function(x$3)
   {
    return g$12(f$7(x$3));
   },currentCodeSnippetId))
  }),HtmlNode.css(" td.hovering { background: gray; } ")]);
  triggerWSResult=Var$1.Create$1();
  actLoadFile=Action.New$1("Load...").OnClick(function($7)
  {
   return function($8)
   {
    return do_LoadFile($7,$8);
   };
  });
  actSaveFile=Action.New$1("Save as...").OnClick(Runtime.Curried(Template.Do,2,[downloadFile,null])).Highlight(dirty);
  actAddSnippet=Action.New$1("Add Snippet").OnClick(Runtime.Curried(Template.Do,2,[addCode,null]));
  actDeleteSnippet=Action.New$1("Delete Snippet").OnClick(Runtime.Curried(Template.Do,2,[deleteCode,null])).Disabled(noSelectionVal);
  actIndentSnippet=Action.New$1("Indent In  >>").OnClick(Runtime.Curried(Template.Do,2,[indentCodeIn,null])).Disabled(noSelectionVal);
  actOutdentSnippet=Action.New$1("Indent Out <<").OnClick(Runtime.Curried(Template.Do,2,[indentCodeOut,null])).Disabled(noSelectionVal);
  actGetFsCode=Action.New$1("Get F# Code").OnClick(Runtime.Curried(Template.Do,2,[getFSCode,null])).Disabled(disableParseVal);
  actSetSnippetProp=Action.New$1("actSetSnippetProp").OnClick2(function($7)
  {
   return DoW2(function($8)
   {
    return function($9)
    {
     return setSnippetProp($8,$9);
    };
   },null,$7);
  }).Disabled(disableFSIVal);
  actEvalFsCode=Action.New$1("Run FSI on Code").OnClick2(function($7)
  {
   return DoW2(function($8)
   {
    return function($9)
    {
     return evalFsCode($8,$9);
    };
   },null,$7);
  }).Disabled(disableFSIVal);
  actEvalCode=Action.New$1("Run FSI").OnClick2(function($7)
  {
   return DoW2(function($8)
   {
    return function($9)
    {
     return evaluateFS2($8,$9);
    };
   },null,$7);
  }).Disabled(disableFSIVal);
  actFableFsCode=Action.New$1("Run Fable on Code").OnClick2(function($7)
  {
   return DoW2(function($8)
   {
    return function($9)
    {
     return evalFableCode($8,$9);
    };
   },null,$7);
  }).Disabled(disableFableVal);
  actFableCode=Action.New$1("Run Fable").OnClick2(function($7)
  {
   return DoW2(function($8)
   {
    return function($9)
    {
     return fableFS2($8,$9);
    };
   },null,$7);
  }).Disabled(disableFableVal);
  actRunWSNewTab=Action.New$1("Run WebSharper in new tab").OnClick2(($2=Position.NewBrowser,function($7)
  {
   return DoW2(function($8)
   {
    return function($9)
    {
     return compileRunP2($8,$9);
    };
   },$2,$7);
  })).Disabled(disableWebSharperVal);
  actRunWSHere=Action.New$1("Run WebSharper in WS Result").OnClick2(($3=Position.Below,function($7)
  {
   return DoP2(function($8)
   {
    return function($9)
    {
     return compileRunP2($8,$9);
    };
   },$3,$7);
  })).Disabled(disableWebSharperVal);
  actRunWSIn=Action.New$1("Run WebSharper in ...").OnClick(Runtime.Curried(DoP,2,[$5,null])).Disabled(disableWebSharperVal);
  actParseCode=Action.New$1("Parse F#").OnClick(Runtime.Curried(DoW,2,[$6,null])).Disabled(disableParseVal);
  actCompileWS=Action.New$1("Compile WebSharper").OnClick(($4=function(x$3)
  {
   return compileSnippetW(getSnpO(x$3));
  },Runtime.Curried(DoW,2,[$4,null]))).Disabled(disableWebSharperVal);
  actFindDefinition=Action.New$1("Find Definition").OnClick(Runtime.Curried(Template.Do,2,[gotoDefinition,null])).Disabled(disableParseVal);
  actRefreshEditor=Action.New$1("Refresh CodeMirror").OnClick(Runtime.Curried(Template.Do,2,[refreshCodeMirror,null]));
  actOutText=Action.New$1("Show Output text").OnClick2(Runtime.Curried(Template.Do2,3,[showOutText,null]));
  actAbortFsi=Action.New$1("Abort FSI").OnClick(Runtime.Curried(Template.Do,2,[function()
  {
   FsEvaluator.abortFsiExe();
  },null]));
  buttonsH=HtmlNode.div([actAddSnippet.get_Button().get_Render(),actOutdentSnippet.get_Button().get_Render(),actIndentSnippet.get_Button().get_Render(),loadFileElement.get_Render().AddChildren([HtmlNode.style("grid-column: 4/6")]),actEvalCode.get_Button().get_Render(),actFableCode.get_Button().get_Render(),actRunWSIn.get_Button().get_Render(),actDeleteSnippet.get_Button().get_Render(),actFindDefinition.get_Button().get_Render(),HtmlNode.span([]),actSaveFile.get_Button().get_Render(),HtmlNode.span([]),actGetFsCode.get_Button().get_Render(),actParseCode.get_Button().get_Render(),HtmlNode.someElt(Doc.Select([AttrProxy.Create("id","Position")],function(v$11)
  {
   return v$11.$==1?"Right":v$11.$==2?"In Tab":v$11.$==3?"New Browser":"Below";
  },List$1.ofArray([Position.NewBrowser,Position.Below]),position)),HtmlNode.style("\n                    overflow: hidden;\n                    display: grid;\n                    grid-template-columns: repeat(8, 12.1%);\n                    bxackground-color: #eee;\n                    padding : 5px;\n                    grid-gap: 5px;\n                ")]);
  menuLeft=Menu.New2([MenuEntry.New$2("File").SubMenu([actLoadFile.get_MenuEntry(),actSaveFile.get_MenuEntry()]),MenuEntry.New$2("Code").SubMenu([actAddSnippet.get_MenuEntry(),actDeleteSnippet.get_MenuEntry(),MenuEntry.New$2("").get_Divider(),actIndentSnippet.get_MenuEntry(),actOutdentSnippet.get_MenuEntry(),MenuEntry.New$2("").get_Divider(),actFindDefinition.get_MenuEntry(),MenuEntry.New$2("").get_Divider(),actGetFsCode.get_MenuEntry(),MenuEntry.New$2("").get_Divider(),actRefreshEditor.get_MenuEntry()]),MenuEntry.New$2("Run").SubMenu([actEvalCode.get_MenuEntry(),actAbortFsi.get_MenuEntry(),MenuEntry.New$2("").get_Divider(),actFableCode.get_MenuEntry(),MenuEntry.New$2("").get_Divider(),actRunWSNewTab.get_MenuEntry(),actRunWSHere.get_MenuEntry(),MenuEntry.New$2("").get_Divider(),actParseCode.get_MenuEntry(),actCompileWS.get_MenuEntry()])]);
  menuRight=Menu.New2([MenuEntry.New$2("About").SubMenu([MenuEntry.New$1("Source @ GitHub","https://github.com/amieres/FSharpStation").Target("_blank")])]);
  menuBar=Template.navbar(HtmlNode.h1([HtmlNode.htmlText("F# Station"),HtmlNode.style("font-size: 48px; margin-top: -17px")]),menuLeft.get_Render(),menuRight.get_Render());
  s$2="CodeEditor."+"splitterV1";
  v$9=SplitterBar.New$1(20).Children([HtmlNode.style("grid-row: 2 / 4")]).get_Var();
  v$10=Global.localStorage.getItem(s$2);
  v$10!==null?v$9.Set(((Provider.Id())())(JSON.parse(v$10))):void 0;
  Val.sink(function(v$11)
  {
   Global.localStorage.setItem(s$2,JSON.stringify(((Provider.Id())())(v$11)));
  },v$9);
  snippetList=HtmlNode.bindHElem(function(snps)
  {
   return HtmlNode.div(List$1.ofSeq(Seq$2.delay(function()
   {
    return Seq$2.append([HtmlNode.style("overflow: auto")],Seq$2.delay(function()
    {
     var x$3;
     return Seq$2.append(Seq$2.choose(Global.id,(x$3=Seq$2.indexed(snps),Seq$2.mapFold(function(expanded,t)
     {
      var snp,o,isParent,o$1,isExpanded;
      snp=t[1];
      return Option.defaultValue(true,(o=snp.parent,o==null?null:{
       $:1,
       $0:expanded.Contains(o.$0)
      }))?(isParent=Option.defaultValue(false,(o$1=Seq$2.tryItem(t[0]+1,FsGlobal.codeSnippets()),o$1==null?null:{
       $:1,
       $0:Unchecked.Equals(o$1.$0.parent,{
        $:1,
        $0:snp.id
       })
      })),(isExpanded=isParent&&snp.expanded,[{
       $:1,
       $0:listEntry(isParent,isExpanded,snp)
      },isExpanded?expanded.Add(snp.id):expanded])):[null,expanded];
     },new FSharpSet.New(List$1.T.Empty),x$3))[0]),Seq$2.delay(function()
     {
      return Seq$2.append([new HtmlNode$1({
       $:8,
       $0:AttrProxy.HandlerImpl("scroll",function(e)
       {
        return function()
        {
         topScrollList[0]=e.scrollTop;
        };
       })
      })],Seq$2.delay(function()
      {
       return[new HtmlNode$1({
        $:8,
        $0:AttrProxy.OnAfterRenderImpl(function(e)
        {
         e.scrollTop=topScrollList[0];
        })
       })];
      }));
     }));
    }));
   })));
  },(x$1=FsGlobal.codeSnippets().v,View.SnapshotOn((FsGlobal.codeSnippets())["var"].Get(),refresh.get_View(),x$1)));
  steps=Layout.AddGuids([["actLoadFile",new GuiPart({
   $:2,
   $0:actLoadFile
  })],["actSaveFile",new GuiPart({
   $:2,
   $0:actSaveFile
  })],["actAddSnippet",new GuiPart({
   $:2,
   $0:actAddSnippet
  })],["actDeleteSnippet",new GuiPart({
   $:2,
   $0:actDeleteSnippet
  })],["actIndentSnippet",new GuiPart({
   $:2,
   $0:actIndentSnippet
  })],["actOutdentSnippet",new GuiPart({
   $:2,
   $0:actOutdentSnippet
  })],["actGetFsCode",new GuiPart({
   $:2,
   $0:actGetFsCode
  })],["actSetSnippetProp",new GuiPart({
   $:2,
   $0:actSetSnippetProp
  })],["actEvalFsCode",new GuiPart({
   $:2,
   $0:actEvalFsCode
  })],["actEvalCode",new GuiPart({
   $:2,
   $0:actEvalCode
  })],["actRunFableFs",new GuiPart({
   $:2,
   $0:actFableFsCode
  })],["actRunFable",new GuiPart({
   $:2,
   $0:actFableCode
  })],["actRunWSNewTab",new GuiPart({
   $:2,
   $0:actRunWSNewTab
  })],["actRunWSHere",new GuiPart({
   $:2,
   $0:actRunWSHere
  })],["actRunWSIn",new GuiPart({
   $:2,
   $0:actRunWSIn
  })],["actParseCode",new GuiPart({
   $:2,
   $0:actParseCode
  })],["actCompileWS",new GuiPart({
   $:2,
   $0:actCompileWS
  })],["actFindDefinition",new GuiPart({
   $:2,
   $0:actFindDefinition
  })],["actOutText",new GuiPart({
   $:2,
   $0:actOutText
  })],["Output",new GuiPart({
   $:1,
   $0:TextArea.New$3(outputMsgs).Placeholder("Output:").Title("Output").RenderWith(List$1.ofArray([new HtmlNode$1({
    $:8,
    $0:AttrProxy.HandlerImpl("dblclick",function(a)
    {
     return function($7)
     {
      return jumpToRef(a,$7);
     };
    })
   }),new HtmlNode$1({
    $:8,
    $0:AttrProxy.OnAfterRenderImpl(function(e)
    {
     Val.sink(function($7)
     {
      return scrollToBottom(e,$7);
     },outputMsgs);
    })
   })]))
  })],["Parser",new GuiPart({
   $:1,
   $0:TextArea.New$3(parserMsgs).Placeholder("Parser messages:").Title("Parser").RenderWith(List$1.ofArray([new HtmlNode$1({
    $:8,
    $0:AttrProxy.HandlerImpl("dblclick",function(a)
    {
     return function($7)
     {
      return jumpToRef(a,$7);
     };
    })
   })]))
  })],["JavaScript",new GuiPart({
   $:1,
   $0:TextArea.New$3(codeJS).Placeholder("Javascript:").Title("JavaScript code generated").get_Render()
  })],["F# code",new GuiPart({
   $:1,
   $0:TextArea.New$3(codeFS).Placeholder("F# code:").Title("F# code assembled").get_Render()
  })],["Properties",new GuiPart({
   $:1,
   $0:properties
  })],["WS Result",new GuiPart({
   $:1,
   $0:HtmlNode.div([HtmlNode.div([HtmlNode.Id("TestNode"),HtmlNode.style("background: white; height: 100%; width: 100%; ")])])
  })],["title",new GuiPart({
   $:1,
   $0:Input.New$3((view$1=Val.toView(Val.fixit(currentCodeSnippetId)),(contentVar$1=Var$1.Create$1(null),(changingIRefO$1=[null],(contentVarChanged$1=[0],(refVarChanged$1=[0],(View.Sink(function()
   {
    var o,r;
    o=changingIRefO$1[0];
    o==null?void 0:(r=o.$0,contentVarChanged$1[0]>refVarChanged$1[0]?refVarChanged$1[0]=contentVarChanged$1[0]:!Unchecked.Equals(r.Get(),contentVar$1.Get())?(refVarChanged$1[0]=refVarChanged$1[0]+1,r.Set(contentVar$1.Get())):void 0);
   },contentVar$1.get_View()),View.Sink(function()
   {
    var o,r;
    o=changingIRefO$1[0];
    o==null?void 0:(r=o.$0,refVarChanged$1[0]>contentVarChanged$1[0]?contentVarChanged$1[0]=refVarChanged$1[0]:!Unchecked.Equals(r.Get(),contentVar$1.Get())?(contentVarChanged$1[0]=contentVarChanged$1[0]+10,contentVar$1.Set(r.Get())):void 0);
   },View.Bind(function(cur)
   {
    var r;
    r=curSnippetNameOf(cur);
    changingIRefO$1[0]={
     $:1,
     $0:r
    };
    refVarChanged$1[0]=contentVarChanged$1[0]+100;
    contentVar$1.Set(r.Get());
    return r.get_View();
   },view$1)),contentVar$1))))))).Prefix$1(HtmlNode.htmlText("name:")).get_Render()
  })],["code",new GuiPart({
   $:1,
   $0:codeMirrorRender
  })],["snippets",new GuiPart({
   $:1,
   $0:snippetList
  })],["buttons",new GuiPart({
   $:1,
   $0:buttonsH
  })],["menu",new GuiPart({
   $:1,
   $0:menuBar
  })],["messagesR",new GuiPart({
   $:4,
   $0:true,
   $1:["Properties"]
  })],["messagesB1",new GuiPart({
   $:4,
   $0:true,
   $1:["Output","JavaScript","F# code"]
  })],["messagesB2",new GuiPart({
   $:4,
   $0:true,
   $1:["Parser","WS Result"]
  })],["messagesB",Template.varVerSplitter(55,"messagesB1","messagesB2",0,100)],["title_code",Template.fixedHorSplitter(true,34,"title","code")],["code_props",Template.varVerSplitter(85,"title_code","messagesR",25,100)],["code_buttons",Template.fixedHorSplitter(false,80,"code_props","buttons")],["snippets_code",Template.varVerSplitter(15,"snippets","code_buttons",5,95)],["main_messages",Template.varHorSplitter(82,"snippets_code","messagesB",35,100)],["extrabuttons",new GuiPart({
   $:1,
   $0:HtmlNode.div([])
  })],["main_extra",Template.varVerSplitter(100,"main_messages","extrabuttons",20,100)],["main",Template.fixedHorSplitter(true,50,"menu","main_extra")]]);
  layout=Layout.New$1(steps);
  Global.addLayoutJson=addLayoutJson;
  Val.sink(addLayoutJson,propertyLayoutVal);
  Val.sink(function(js)
  {
   if(js==="")
    addLayoutSteps([]);
   else
    _eval(Global,js);
  },propertyLayoutJSVal);
  Global.doFSharpStationGuiCall=function(v$11)
  {
   var a,c;
   a=Result.Success(doGuiCallR.apply(null,v$11));
   a.$==1?((c=(Runtime.Curried3(function($7,$8,$9)
   {
    return $7("Error doGuiCall "+Utils.printArray(Utils.prettyPrint,$8)+": "+("("+Utils.prettyPrint($9[0])+", "+Utils.prettyPrint($9[1])+", "+Utils.printArray(Utils.prettyPrint,$9[2])+")"));
   }))(function(s$3)
   {
    console.log(s$3);
   }),function(a$1)
   {
    var c$1;
    c$1=c(a$1);
    return function(t)
    {
     c$1([t[0],t[1],t[2]]);
    };
   })(a.$0))(v$11):void 0;
  };
  Global.setFSharpStationLayout=function(f$8)
  {
   var o;
   o=CodeSnippet$1.FetchO(currentCodeSnippetId.Get());
   o==null?void 0:addLayoutSteps(f$8.apply(null,[layout,o.$0]));
  };
  res=null;
  (new Dictionary.New$5()).TryGetValue("",{
   get:function()
   {
    return res;
   },
   set:function(v$11)
   {
    res=v$11;
   }
  })?void 0:void 0;
  Panel.get_New();
  wsStationClient=new WSMessagingClient.New(FsGlobal.fsIds(),null,null);
  Concurrency.Start((b$1=null,Concurrency.Delay(function()
  {
   return Concurrency.Bind(Concurrency.Sleep(1000),function()
   {
    return Concurrency.While(function()
    {
     return true;
    },Concurrency.Delay(function()
    {
     return Concurrency.TryWith(Concurrency.Delay(function()
     {
      var pro,f$8,g$13,dst,p;
      function f$9($7)
      {
       return respond("",$7);
      }
      function g$14(a)
      {
       return{
        $:1,
        $0:a
       };
      }
      function f$10(a)
      {
       return(FSharpStation_JsonDecoder.j$9())(JSON.parse(a));
      }
      function f$11(a)
      {
       return JSON.stringify((FSharpStation_JsonEncoder.j$8())(a));
      }
      pro=function(x$3)
      {
       return g$14(f$9(x$3));
      };
      wsStationClient.payloadProcessorO={
       $:1,
       $0:(f$8=function(x$3)
       {
        return pro(f$10(x$3));
       },(g$13=function(a)
       {
        return Wrap.map(f$11,a);
       },function(x$3)
       {
        return g$13(f$8(x$3));
       }))
      };
      Wrap.Start(wsStationClient.sendAndForget(WSMessagingBroker.msgType(MessageType.MsgInformation,(dst=WSMessagingBroker.MessageBrokerAddress(),(p=JSON.stringify(((Provider.Id())())("Registering Processor")),MessageGeneric.New(new Address({
       $:0,
       $0:""
      }),dst,MessageType.MsgRequest,"",Guid.NewGuid(),p,Replier.NoReply))))),null);
      return Concurrency.Bind(Concurrency.Sleep(60000),function()
      {
       return Concurrency.Return(null);
      });
     }),function(a)
     {
      ((function($7)
      {
       return function($8)
       {
        return $7(Utils.toSafe($8));
       };
      }(function(s$3)
      {
       console.log(s$3);
      }))(a.message));
      return Concurrency.Bind(Concurrency.Sleep(1000),function()
      {
       return Concurrency.Return(null);
      });
     });
    }));
   });
  })),null);
  Val.sink(function()
  {
   layout.SelectTab("Output");
  },outputMsgs);
  Val.sink(function()
  {
   layout.SelectTab("WS Result");
  },triggerWSResult);
  Concurrency.Start(Async.sleepThen(function()
  {
   layout.SelectTab("Parser");
  },1000),null);
  cssLinks=Var$1.Create$1(List$1.ofArray(["/EPFileX/css/main.css"]));
  Val.sink(addCssLink,propertyCssLinkVal);
  Val.sink(function(theme)
  {
   if(theme!=="")
    addCssLink((function($7)
    {
     return function($8)
     {
      return $7("/EPFileX/codemirror/content/theme/"+Utils.toSafe($8)+".css");
     };
    }(Global.id))(theme));
  },propertyThemeVal);
  x$2=HtmlNode.div([HtmlNode.style("height: 100vh; width: 100% "),layout.get_Render().Style("height: 100%; width: 100% "),HtmlNode.script([HtmlNode.src("/EPFileX/FileSaver/FileSaver.js"),HtmlNode.type("text/javascript")]),HtmlNode.script([HtmlNode.src("http://code.jquery.com/jquery-3.1.1.min.js"),HtmlNode.type("text/javascript")]),HtmlNode.script([HtmlNode.src("http://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"),HtmlNode.type("text/javascript")]),HtmlNode.link([HtmlNode.href("http://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"),HtmlNode.type("text/css"),HtmlNode.rel("stylesheet")]),HtmlNode.css("\n      \n        body { margin: 0px }     \n             \n        div textarea {\n            font-family     : monospace;\n        }\n        .code-editor-list-tile {\n            white-space     : nowrap; \n            border-style    : solid none none;\n            border-color    : white;\n            border-width    : 1px;\n            background-color: #D8D8D8;\n            display         : flex;\n        }\n        .code-editor-list-text{\n            padding         : 1px 10px 1px 5px;\n            overflow        : hidden;\n            text-overflow   : ellipsis;\n            white-space     : nowrap;\n            flex            : 1;\n        }\n        \n        .code-editor-list-tile.direct-predecessor {\n            font-weight     : bold;\n        }\n        .code-editor-list-tile.indirect-predecessor {\n            color           : blue;\n        }\n        .code-editor-list-tile.selected {\n            background-color: #77F;\n            color           : white;\n        }\n        .code-editor-list-tile.hovering {\n            background      : lightgray;\n        }\n        .code-editor-list-tile.hovering.selected {\n            background      : blue;\n        }\n        .code-editor-list-tile>.predecessor {\n            font-weight     : bold;\n            border-style    : inset;\n            border-width    : 1px;\n            text-align      : center;\n            color           : transparent;\n        }\n        .code-editor-list-tile.direct-predecessor>.predecessor {\n            color           : blue;\n        }\n        \n        .CodeMirror { height: 100%; }\n        \n        .node {\n            background-color: white; \n            width           : 2ch; \n            color           : #A03; \n            font-weight     : bold; \n            text-align      : center;\n            font-family     : arial;\n        }\n        .Warning { text-decoration: underline lightblue } \n        .Error   { text-decoration: underline red       } \n        .body    { margin         : 0px                 }\n        "),HtmlNode.style(" \n                color      : #333;\n                font-size  : small;\n                font-family: monospace;\n                line-height: 1.2;\n                    "),new HtmlNode$1({
   $:2,
   $0:Val.map(function(csslnks)
   {
    return HtmlNode.div(List$1.ofSeq(Seq$2.delay(function()
    {
     return Seq$2.map(function(csslnk)
     {
      return HtmlNode.link([HtmlNode.href(csslnk),HtmlNode.type("text/css"),HtmlNode.rel("stylesheet")]);
     },csslnks);
    })));
   },cssLinks)
  }),HtmlNode.css(propertyCssVal)]);
  return(HtmlNode.renderDoc())(x$2);
 };
 SC$1.$cctor=function()
 {
  var g,v,g$1;
  SC$1.$cctor=Global.ignore;
  function m(n,v$1)
  {
   return new HtmlNode$1({
    $:8,
    $0:AttrModule.Style(n,v$1)
   });
  }
  SC$1.result=new ropBuilder.New();
  SC$1.fromResult=Result.toResultS;
  SC$1.toResult=Result.fromResultS;
  SC$1.errOptionIsNone=new ErrOptionIsNone.New();
  SC$1.wrap=new Builder.New();
  SC$1.wrapper=new Builder.New();
  SC$1.result$1=Result.result();
  SC$1.wrap$1=Wrap.wrap();
  SC$1.rexGuid="([0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12})";
  SC$1.MessageBrokerId="<MessageBroker>";
  SC$1.MessageBrokerAddress=new Address({
   $:0,
   $0:WSMessagingBroker.MessageBrokerId()
  });
  SC$1.counter=1;
  SC$1.swap=Runtime.Curried3(function(f,a,b)
  {
   return(f(b))(a);
  });
  SC$1.valFlow=new valBuilder.New();
  SC$1.renderDoc=(g=(v=Doc.Empty(),function(o)
  {
   return o==null?v:o.$0;
  }),function(x)
  {
   return g(HtmlNode.chooseNode(x));
  });
  SC$1.string2Styles=(g$1=function(a)
  {
   return Arrays.map(function($1)
   {
    return m($1[0],$1[1]);
   },a);
  },function(x)
  {
   return g$1(HtmlNode.style2pairs(x));
  });
  SC$1.codeMirrorIncludes=["/EPFileX/codemirror/scripts/codemirror/codemirror.js","/EPFileX/codemirror/scripts/intellisense.js","/EPFileX/codemirror/scripts/codemirror/codemirror-intellisense.js","/EPFileX/codemirror/scripts/codemirror/codemirror-compiler.js","/EPFileX/codemirror/scripts/codemirror/mode/none.js","/EPFileX/codemirror/scripts/codemirror/mode/fsharp.js","/EPFileX/codemirror/scripts/codemirror/mode/css.js","/EPFileX/codemirror/scripts/codemirror/mode/javascript.js","/EPFileX/codemirror/scripts/codemirror/mode/markdown.js","/EPFileX/codemirror/scripts/addon/search/searchcursor.js","/EPFileX/codemirror/scripts/addon/search/search.js","/EPFileX/codemirror/scripts/addon/search/jump-to-line.js","/EPFileX/codemirror/scripts/addon/dialog/dialog.js","/EPFileX/codemirror/scripts/addon/edit/matchbrackets.js","/EPFileX/codemirror/scripts/addon/selection/active-line.js","/EPFileX/codemirror/scripts/addon/display/fullscreen.js","/EPFileX/codemirror/scripts/addon/hint/show-hint.js","/EPFileX/codemirror/scripts/addon/lint/lint.js"];
  SC$1.observers=List$1.T.Empty;
  SC$1.draggedTab=[null];
  SC$1.selectedPanels=Var$1.Create$1(new FSharpMap.New([]));
  SC$1.TabMoved=null;
  SC$1.codeSnippets=ListModel$1.Create(function(s)
  {
   return s.id;
  },List$1.T.Empty);
  SC$1.fsIds="FSharpStation"+Global.String(Date.now());
  SC$1.references=["mscorlib.dll","System.dll","System.Core.dll","System.Data.dll","System.IO.dll","System.Xml.dll","System.Numerics.dll","FSharp.Core.sigdata","FSharp.Core.dll","Fable.Core.dll","Fable.Import.Browser.dll"];
  SC$1.loadReferences=Lazy.Create(function()
  {
   var b;
   Concurrency.Start((b=null,Concurrency.Delay(function()
   {
    return Concurrency.Bind(LoadFiles.LoadFilesAsync(["https://cdnjs.cloudflare.com/ajax/libs/require.js/2.3.2/require.min.js"]),function()
    {
     var options;
     options=Object.create(null);
     options.skipDataMain=1;
     options.isBrowser=1;
     Global.require.config(options);
     Seq$2.iter(function(fn)
     {
      Global.getFileBlob(fn,"metadata/"+fn);
     },FableModule.references());
     return Concurrency.Zero();
    });
   })),null);
  });
  SC$1.getChecker=Lazy.Create(function()
  {
   return Fable$1.createChecker(function(f)
   {
    return Global.metadata[f];
   },Arrays.choose(function(fn)
   {
    return fn.indexOf("sigdata")!=-1?null:{
     $:1,
     $0:Strings.Replace(fn,".dll","")
    };
   },FableModule.references()));
  });
  SC$1.addOutMsg=function(a)
  {
   console.log(a);
  };
 };
 FSharpStation_GeneratedPrintf.p$1=function($1)
 {
  return"Address "+Utils.prettyPrint($1.$0);
 };
 FSharpStation_JsonEncoder.j$4=function()
 {
  return FSharpStation_JsonEncoder._v$4?FSharpStation_JsonEncoder._v$4:FSharpStation_JsonEncoder._v$4=(Provider.EncodeUnion(void 0,"$",[[0,[]],[1,[["$0","Item",Provider.Id(),0]]],[2,[["$0","Item",FSharpStation_JsonEncoder.j$5,0]]],[3,[["$0","Item",FSharpStation_JsonEncoder.j$5,0]]],[4,[["$0","Item",FSharpStation_JsonEncoder.j$5,0]]],[5,[["$0","Item",FSharpStation_JsonEncoder.j$5,0]]],[6,[["$0","Item",Provider.EncodeArray(Provider.Id()),0]]],[7,[["$0","Item",Provider.EncodeArray(Provider.Id()),0]]],[8,[["$0","Item",Provider.EncodeArray(Provider.Id()),0]]],[9,[["$0","Item",Provider.EncodeArray(Provider.Id()),0]]],[10,[["$0","Item",Provider.EncodeArray(Provider.Id()),0]]],[11,[]],[12,[["$0","Item1",FSharpStation_JsonEncoder.j$5,0],["$1","Item2",Provider.Id(),0]]],[13,[["$0","Item1",Provider.EncodeArray(Provider.Id()),0],["$1","Item2",Provider.Id(),0]]],[14,[["$0","name",Provider.Id(),0],["$1","action",Provider.Id(),0],["$2","parms",Provider.EncodeArray(Provider.Id()),0]]]]))();
 };
 FSharpStation_JsonEncoder.j$5=function()
 {
  return FSharpStation_JsonEncoder._v$5?FSharpStation_JsonEncoder._v$5:FSharpStation_JsonEncoder._v$5=(Provider.EncodeUnion(CodeSnippetId,"$",[[0,[["$0","Item",Provider.Id(),0]]]]))();
 };
 FSharpStation_JsonDecoder.j$4=function()
 {
  return FSharpStation_JsonDecoder._v$4?FSharpStation_JsonDecoder._v$4:FSharpStation_JsonDecoder._v$4=(Provider.DecodeUnion(void 0,"$",[[0,[["$0","Item",Provider.Id(),0]]],[1,[["$0","Item",Provider.Id(),1]]],[2,[["$0","Item",FSharpStation_JsonDecoder.j$6,1]]],[3,[["$0","Item",Provider.DecodeArray(FSharpStation_JsonDecoder.j$6),0]]],[4,[["$0","Item1",Provider.Id(),1],["$1","Item2",Provider.DecodeArray(Provider.DecodeTuple([Provider.Id(),FSharpStation_JsonDecoder.j$5])),0]]]]))();
 };
 FSharpStation_JsonDecoder.j$6=function()
 {
  return FSharpStation_JsonDecoder._v$6?FSharpStation_JsonDecoder._v$6:FSharpStation_JsonDecoder._v$6=(Provider.DecodeRecord(CodeSnippet,[["name",Provider.Id(),0],["content",Provider.Id(),0],["parent",FSharpStation_JsonDecoder.j$7,1],["predecessors",Provider.DecodeList(FSharpStation_JsonDecoder.j$7),0],["id",FSharpStation_JsonDecoder.j$7,0],["expanded",Provider.Id(),0],["level",Provider.Id(),0],["levelCode",Provider.Id(),0],["properties",Provider.DecodeStringDictionary(Provider.Id()),0]]))();
 };
 FSharpStation_JsonDecoder.j$5=function()
 {
  return FSharpStation_JsonDecoder._v$5?FSharpStation_JsonDecoder._v$5:FSharpStation_JsonDecoder._v$5=(Provider.DecodeUnion(void 0,"$",[[0,[]],[1,[]],[2,[]]]))();
 };
 FSharpStation_JsonDecoder.j$7=function()
 {
  return FSharpStation_JsonDecoder._v$7?FSharpStation_JsonDecoder._v$7:FSharpStation_JsonDecoder._v$7=(Provider.DecodeUnion(CodeSnippetId,"$",[[0,[["$0","Item",Provider.Id(),0]]]]))();
 };
 FSharpStation_GeneratedPrintf.p$2=function($1)
 {
  return $1.$==5?"MsgRequestForEcho":$1.$==4?"MsgRequestForId":$1.$==3?"MsgFromBroker":$1.$==2?"MsgReply":$1.$==1?"MsgRequest":"MsgInformation";
 };
 FSharpStation_JsonEncoder.j$8=function()
 {
  return FSharpStation_JsonEncoder._v$8?FSharpStation_JsonEncoder._v$8:FSharpStation_JsonEncoder._v$8=(Provider.EncodeUnion(void 0,"$",[[0,[["$0","Item",Provider.Id(),0]]],[1,[["$0","Item",Provider.Id(),1]]],[2,[["$0","Item",FSharpStation_JsonEncoder.j$7,1]]],[3,[["$0","Item",Provider.EncodeArray(FSharpStation_JsonEncoder.j$7),0]]],[4,[["$0","Item1",Provider.Id(),1],["$1","Item2",Provider.EncodeArray(Provider.EncodeTuple([Provider.Id(),FSharpStation_JsonEncoder.j$9])),0]]]]))();
 };
 FSharpStation_JsonEncoder.j$9=function()
 {
  return FSharpStation_JsonEncoder._v$9?FSharpStation_JsonEncoder._v$9:FSharpStation_JsonEncoder._v$9=(Provider.EncodeUnion(void 0,"$",[[0,[]],[1,[]],[2,[]]]))();
 };
 FSharpStation_JsonDecoder.j$9=function()
 {
  return FSharpStation_JsonDecoder._v$9?FSharpStation_JsonDecoder._v$9:FSharpStation_JsonDecoder._v$9=(Provider.DecodeUnion(void 0,"$",[[0,[]],[1,[["$0","Item",Provider.Id(),0]]],[2,[["$0","Item",FSharpStation_JsonDecoder.j$7,0]]],[3,[["$0","Item",FSharpStation_JsonDecoder.j$7,0]]],[4,[["$0","Item",FSharpStation_JsonDecoder.j$7,0]]],[5,[["$0","Item",FSharpStation_JsonDecoder.j$7,0]]],[6,[["$0","Item",Provider.DecodeArray(Provider.Id()),0]]],[7,[["$0","Item",Provider.DecodeArray(Provider.Id()),0]]],[8,[["$0","Item",Provider.DecodeArray(Provider.Id()),0]]],[9,[["$0","Item",Provider.DecodeArray(Provider.Id()),0]]],[10,[["$0","Item",Provider.DecodeArray(Provider.Id()),0]]],[11,[]],[12,[["$0","Item1",FSharpStation_JsonDecoder.j$7,0],["$1","Item2",Provider.Id(),0]]],[13,[["$0","Item1",Provider.DecodeArray(Provider.Id()),0],["$1","Item2",Provider.Id(),0]]],[14,[["$0","name",Provider.Id(),0],["$1","action",Provider.Id(),0],["$2","parms",Provider.DecodeArray(Provider.Id()),0]]]]))();
 };
 GeneratedPrintf.p$22=function($1)
 {
  return"{"+("text = "+FSharpStation_GeneratedPrintf.p$9($1.text))+"; "+("highlight = "+FSharpStation_GeneratedPrintf.p$11($1.highlight))+"; "+("disabled = "+FSharpStation_GeneratedPrintf.p$11($1.disabled))+"; "+("toolTip = "+FSharpStation_GeneratedPrintf.p$13($1.toolTip))+"; "+("onClick = "+FSharpStation_GeneratedPrintf.p$14($1.onClick))+"; "+("parms = "+FSharpStation_GeneratedPrintf.p$8($1.parms))+"}";
 };
 FSharpStation_GeneratedPrintf.p$14=function($1)
 {
  return $1==null?"null":"Some <fun>";
 };
 FSharpStation_GeneratedPrintf.p$13=function($1)
 {
  return $1==null?"null":"Some "+Utils.prettyPrint($1.$0);
 };
 FSharpStation_GeneratedPrintf.p$11=function($1)
 {
  return $1.$==2?"Dynamic "+FSharpStation_GeneratedPrintf.p$12($1.$0):$1.$==1?"DynamicV "+Utils.prettyPrint($1.$0):"Constant "+Utils.prettyPrint($1.$0);
 };
 FSharpStation_GeneratedPrintf.p$12=function($1)
 {
  return"View <fun>";
 };
 FSharpStation_GeneratedPrintf.p$9=function($1)
 {
  return $1.$==2?"Dynamic "+FSharpStation_GeneratedPrintf.p$10($1.$0):$1.$==1?"DynamicV "+Utils.prettyPrint($1.$0):"Constant "+Utils.prettyPrint($1.$0);
 };
 FSharpStation_GeneratedPrintf.p$10=function($1)
 {
  return"View <fun>";
 };
 FSharpStation_GeneratedPrintf.p$8=function($1)
 {
  return $1==null?"null":"Some "+Utils.printArray(Utils.prettyPrint,$1.$0);
 };
 FSharpStation_GeneratedPrintf.p$7=function($1)
 {
  return $1.$==17?"KMultiple "+Utils.printArray(function($2)
  {
   return FSharpStation_GeneratedPrintf.p$7($2);
  },$1.$0):$1.$==16?"KUnionCase "+GeneratedPrintf.p$21($1.$0):$1.$==15?"KNamespaces "+GeneratedPrintf.p$18($1.$0):$1.$==14?"KCompilerLocation "+GeneratedPrintf.p$17($1.$0):$1.$==13?"KSignatureData "+GeneratedPrintf.p$15($1.$0):$1.$==12?"KTypeSig "+Utils.prettyPrint($1.$0):$1.$==11?"KToolTip "+Utils.printArray(function($2)
  {
   return Utils.printArray(function($3)
   {
    return GeneratedPrintf.p$2($3);
   },$2);
  },$1.$0):$1.$==10?"KDeclarations "+Utils.printArray(function($2)
  {
   return GeneratedPrintf.p$13($2);
  },$1.$0):$1.$==9?"KFindDecl "+GeneratedPrintf.p$12($1.$0):$1.$==8?"KColorizations "+Utils.printList(function($2)
  {
   return GeneratedPrintf.p$11($2);
  },$1.$0):$1.$==7?"KErrors "+GeneratedPrintf.p$9($1.$0):$1.$==6?"KMethod "+GeneratedPrintf.p$6($1.$0):$1.$==5?"KHelp "+Utils.prettyPrint($1.$0):$1.$==4?"KSymbolUse "+GeneratedPrintf.p$4($1.$0):$1.$==3?"KCompletion "+Utils.printArray(function($2)
  {
   return GeneratedPrintf.p$3($2);
  },$1.$0):$1.$==2?"KHelpText "+GeneratedPrintf.p$1($1.$0):$1.$==1?"KError "+GeneratedPrintf.p($1.$0):"KInfo "+Utils.prettyPrint($1.$0);
 };
 GeneratedPrintf.p$21=function($1)
 {
  return"{"+("Text = "+Utils.prettyPrint($1.Text))+"}";
 };
 GeneratedPrintf.p$18=function($1)
 {
  return"{"+("Opens = "+Utils.printArray(function($2)
  {
   return GeneratedPrintf.p$19($2);
  },$1.Opens))+"; "+("Qualifies = "+Utils.printArray(function($2)
  {
   return GeneratedPrintf.p$20($2);
  },$1.Qualifies))+"; "+("Word = "+Utils.prettyPrint($1.Word))+"}";
 };
 GeneratedPrintf.p$20=function($1)
 {
  return"{"+("Name = "+Utils.prettyPrint($1.Name))+"; "+("Qualifier = "+Utils.prettyPrint($1.Qualifier))+"}";
 };
 GeneratedPrintf.p$19=function($1)
 {
  return"{"+("Namespace = "+Utils.prettyPrint($1.Namespace))+"; "+("Name = "+Utils.prettyPrint($1.Name))+"; "+("Type = "+Utils.prettyPrint($1.Type))+"; "+("Line = "+Utils.prettyPrint($1.Line))+"; "+("Column = "+Utils.prettyPrint($1.Column))+"; "+("MultipleNames = "+Utils.prettyPrint($1.MultipleNames))+"}";
 };
 GeneratedPrintf.p$17=function($1)
 {
  return"{"+("Fsc = "+Utils.prettyPrint($1.Fsc))+"; "+("Fsi = "+Utils.prettyPrint($1.Fsi))+"; "+("MSBuild = "+Utils.prettyPrint($1.MSBuild))+"}";
 };
 GeneratedPrintf.p$15=function($1)
 {
  return"{"+("OutputType = "+Utils.prettyPrint($1.OutputType))+"; "+("Parameters = "+Utils.printList(function($2)
  {
   return Utils.printList(function($3)
   {
    return GeneratedPrintf.p$16($3);
   },$2);
  },$1.Parameters))+"}";
 };
 GeneratedPrintf.p$16=function($1)
 {
  return"{"+("Name = "+Utils.prettyPrint($1.Name))+"; "+("Type = "+Utils.prettyPrint($1.Type))+"}";
 };
 GeneratedPrintf.p$13=function($1)
 {
  return"{"+("Declaration = "+GeneratedPrintf.p$14($1.Declaration))+"; "+("Nested = "+Utils.printArray(function($2)
  {
   return GeneratedPrintf.p$14($2);
  },$1.Nested))+"}";
 };
 GeneratedPrintf.p$14=function($1)
 {
  return"{"+("UniqueName = "+Utils.prettyPrint($1.UniqueName))+"; "+("Name = "+Utils.prettyPrint($1.Name))+"; "+("Glyph = "+Utils.prettyPrint($1.Glyph))+"; "+("GlyphChar = "+Utils.prettyPrint($1.GlyphChar))+"; "+("IsTopLevel = "+Utils.prettyPrint($1.IsTopLevel))+"; "+("File = "+Utils.prettyPrint($1.File))+"; "+("EnclosingEntity = "+Utils.prettyPrint($1.EnclosingEntity))+"; "+("IsAbstract = "+Utils.prettyPrint($1.IsAbstract))+"}";
 };
 GeneratedPrintf.p$12=function($1)
 {
  return"{"+("File = "+Utils.prettyPrint($1.File))+"; "+("Line = "+Utils.prettyPrint($1.Line))+"; "+("Column = "+Utils.prettyPrint($1.Column))+"}";
 };
 GeneratedPrintf.p$11=function($1)
 {
  return"{"+("Kind = "+Utils.prettyPrint($1.Kind))+"}";
 };
 GeneratedPrintf.p$9=function($1)
 {
  return"{"+("File = "+Utils.prettyPrint($1.File))+"; "+("Errors = "+Utils.printArray(function($2)
  {
   return GeneratedPrintf.p$10($2);
  },$1.Errors))+"}";
 };
 GeneratedPrintf.p$10=function($1)
 {
  return"{"+("FileName = "+Utils.prettyPrint($1.FileName))+"; "+("StartLine = "+Utils.prettyPrint($1.StartLine))+"; "+("EndLine = "+Utils.prettyPrint($1.EndLine))+"; "+("StartColumn = "+Utils.prettyPrint($1.StartColumn))+"; "+("EndColumn = "+Utils.prettyPrint($1.EndColumn))+"; "+("Message = "+Utils.prettyPrint($1.Message))+"; "+("Subcategory = "+Utils.prettyPrint($1.Subcategory))+"}";
 };
 GeneratedPrintf.p$6=function($1)
 {
  return"{"+("Name = "+Utils.prettyPrint($1.Name))+"; "+("CurrentParameter = "+Utils.prettyPrint($1.CurrentParameter))+"; "+("Overloads = "+Utils.printList(function($2)
  {
   return GeneratedPrintf.p$7($2);
  },$1.Overloads))+"}";
 };
 GeneratedPrintf.p$7=function($1)
 {
  return"{"+("Tip = "+Utils.printList(function($2)
  {
   return Utils.printList(function($3)
   {
    return GeneratedPrintf.p$2($3);
   },$2);
  },$1.Tip))+"; "+("TypeText = "+Utils.prettyPrint($1.TypeText))+"; "+("Parameters = "+Utils.printList(function($2)
  {
   return GeneratedPrintf.p$8($2);
  },$1.Parameters))+"; "+("IsStaticArguments = "+Utils.prettyPrint($1.IsStaticArguments))+"}";
 };
 GeneratedPrintf.p$8=function($1)
 {
  return"{"+("Name = "+Utils.prettyPrint($1.Name))+"; "+("CanonicalTypeTextForSorting = "+Utils.prettyPrint($1.CanonicalTypeTextForSorting))+"; "+("Display = "+Utils.prettyPrint($1.Display))+"; "+("Description = "+Utils.prettyPrint($1.Description))+"}";
 };
 GeneratedPrintf.p$4=function($1)
 {
  return"{"+("Name = "+Utils.prettyPrint($1.Name))+"; "+("Uses = "+Utils.printList(function($2)
  {
   return GeneratedPrintf.p$5($2);
  },$1.Uses))+"}";
 };
 GeneratedPrintf.p$5=function($1)
 {
  return"{"+("FileName = "+Utils.prettyPrint($1.FileName))+"; "+("StartLine = "+Utils.prettyPrint($1.StartLine))+"; "+("StartColumn = "+Utils.prettyPrint($1.StartColumn))+"; "+("EndLine = "+Utils.prettyPrint($1.EndLine))+"; "+("EndColumn = "+Utils.prettyPrint($1.EndColumn))+"; "+("IsFromDefinition = "+Utils.prettyPrint($1.IsFromDefinition))+"; "+("IsFromAttribute = "+Utils.prettyPrint($1.IsFromAttribute))+"; "+("IsFromComputationExpression = "+Utils.prettyPrint($1.IsFromComputationExpression))+"; "+("IsFromDispatchSlotImplementation = "+Utils.prettyPrint($1.IsFromDispatchSlotImplementation))+"; "+("IsFromPattern = "+Utils.prettyPrint($1.IsFromPattern))+"; "+("IsFromType = "+Utils.prettyPrint($1.IsFromType))+"}";
 };
 GeneratedPrintf.p$3=function($1)
 {
  return"{"+("Name = "+Utils.prettyPrint($1.Name))+"; "+("ReplacementText = "+Utils.prettyPrint($1.ReplacementText))+"; "+("Glyph = "+Utils.prettyPrint($1.Glyph))+"; "+("GlyphChar = "+Utils.prettyPrint($1.GlyphChar))+"}";
 };
 GeneratedPrintf.p$1=function($1)
 {
  return"{"+("Name = "+Utils.prettyPrint($1.Name))+"; "+("Overloads = "+Utils.printList(function($2)
  {
   return Utils.printList(function($3)
   {
    return GeneratedPrintf.p$2($3);
   },$2);
  },$1.Overloads))+"}";
 };
 GeneratedPrintf.p$2=function($1)
 {
  return"{"+("Signature = "+Utils.prettyPrint($1.Signature))+"; "+("Comment = "+Utils.prettyPrint($1.Comment))+"}";
 };
 GeneratedPrintf.p=function($1)
 {
  return"{"+("Code = "+Utils.prettyPrint($1.Code))+"; "+("Message = "+Utils.prettyPrint($1.Message))+"}";
 };
 FSharpStation_JsonEncoder.j$7=function()
 {
  return FSharpStation_JsonEncoder._v$7?FSharpStation_JsonEncoder._v$7:FSharpStation_JsonEncoder._v$7=(Provider.EncodeRecord(CodeSnippet,[["name",Provider.Id(),0],["content",Provider.Id(),0],["parent",FSharpStation_JsonEncoder.j$5,1],["predecessors",Provider.EncodeList(FSharpStation_JsonEncoder.j$5),0],["id",FSharpStation_JsonEncoder.j$5,0],["expanded",Provider.Id(),0],["level",Provider.Id(),0],["levelCode",Provider.Id(),0],["properties",Provider.EncodeStringDictionary(Provider.Id()),0]]))();
 };
 FSharpStation_GeneratedPrintf.p$6=function($1)
 {
  return"CodeSnippetId "+Utils.prettyPrint($1.$0);
 };
 FSharpStation_JsonEncoder.j$6=function()
 {
  return FSharpStation_JsonEncoder._v$6?FSharpStation_JsonEncoder._v$6:FSharpStation_JsonEncoder._v$6=(Provider.EncodeUnion(void 0,"$",[[0,[]],[1,[]],[2,[]],[3,[]]]))();
 };
 FSharpStation_JsonDecoder.j$8=function()
 {
  return FSharpStation_JsonDecoder._v$8?FSharpStation_JsonDecoder._v$8:FSharpStation_JsonDecoder._v$8=(Provider.DecodeUnion(void 0,"$",[[0,[]],[1,[]],[2,[]],[3,[]]]))();
 };
 FSharpStation_JsonDecoder.j$10=function()
 {
  return FSharpStation_JsonDecoder._v$10?FSharpStation_JsonDecoder._v$10:FSharpStation_JsonDecoder._v$10=(Provider.DecodeUnion(void 0,"type",[["BRConnections",[["$0","Item",Provider.DecodeArray(Provider.Id()),0]]]]))();
 };
 FSharpStation_JsonEncoder.j$10=function()
 {
  return FSharpStation_JsonEncoder._v$10?FSharpStation_JsonEncoder._v$10:FSharpStation_JsonEncoder._v$10=(Provider.EncodeUnion(void 0,"type",[["BRGetConnections",[]]]))();
 };
 FSharpStation_JsonDecoder.j$11=function()
 {
  return FSharpStation_JsonDecoder._v$11?FSharpStation_JsonDecoder._v$11:FSharpStation_JsonDecoder._v$11=(Provider.DecodeUnion(void 0,"type",[["BMOk",[]],["BMOnlyBrokerShouldUse",[]],["BMDestinationNotFound",[["$0","Item",FSharpStation_JsonDecoder.j$1,0]]],["BMWebSocketError",[["$0","Item",Provider.Id(),0]]],["BMReceiverCantReply",[]],["BMUnexpectedMsgType",[["$0","Item",FSharpStation_JsonDecoder.j$2,0]]]]))();
 };
 GeneratedPrintf.p$23=function($1)
 {
  return"{"+("from = "+FSharpStation_GeneratedPrintf.p$1($1.from))+"; "+("destination = "+FSharpStation_GeneratedPrintf.p$1($1.destination))+"; "+("msgType = "+FSharpStation_GeneratedPrintf.p$2($1.msgType))+"; "+("subtype = "+Utils.prettyPrint($1.subtype))+"; "+("id = "+Utils.prettyPrint($1.id))+"; "+("payload = "+Utils.prettyPrint($1.payload))+"; "+("replier = "+FSharpStation_GeneratedPrintf.p$15($1.replier))+"}";
 };
 FSharpStation_GeneratedPrintf.p$15=function($1)
 {
  return $1.$==2?"Receiver":$1.$==1?"Broker":"NoReply";
 };
 FSharpStation_GeneratedPrintf.p$16=function($1)
 {
  return $1.$==3?"Close":$1.$==2?"Open":$1.$==1?"Error":"Message "+GeneratedPrintf.p$23($1.$0);
 };
 FSharpStation_JsonDecoder.j$12=function()
 {
  return FSharpStation_JsonDecoder._v$12?FSharpStation_JsonDecoder._v$12:FSharpStation_JsonDecoder._v$12=(Provider.DecodeRecord(void 0,[["GuiRoot",Provider.Id(),1],["GuiTabStrip",Provider.DecodeTuple([Provider.Id(),Provider.DecodeArray(Provider.Id())]),1],["GuiSplit",Provider.DecodeTuple([Provider.Id(),Provider.Id(),Provider.Id(),Provider.Id(),Provider.Id(),Provider.Id(),Provider.Id(),Provider.Id()]),1],["GuiNode",FSharpStation_JsonDecoder.j$13,1],["GuiCall",Provider.DecodeTuple([Provider.Id(),Provider.Id(),Provider.DecodeArray(Provider.Id())]),1]]))();
 };
 FSharpStation_JsonDecoder.j$13=function()
 {
  return FSharpStation_JsonDecoder._v$13?FSharpStation_JsonDecoder._v$13:FSharpStation_JsonDecoder._v$13=(Provider.DecodeRecord(void 0,[["HtmlElementF",Provider.DecodeTuple([Provider.Id(),Provider.DecodeArray(FSharpStation_JsonDecoder.j$13)]),1],["HtmlAttributeF",Provider.DecodeTuple([Provider.Id(),Provider.Id()]),1],["HtmlAttributeOF",Provider.DecodeTuple([Provider.Id(),FSharpStation_JsonDecoder.j$14]),1],["HtmlTextF",Provider.Id(),1],["HtmlEmptyF",Provider.Id(),1],["HtmlGuiPart",Provider.Id(),1],["HtmlGuiCall",Provider.DecodeTuple([Provider.Id(),Provider.Id(),Provider.DecodeArray(Provider.Id())]),1]]))();
 };
 FSharpStation_JsonDecoder.j$14=function()
 {
  return FSharpStation_JsonDecoder._v$14?FSharpStation_JsonDecoder._v$14:FSharpStation_JsonDecoder._v$14=(Provider.DecodeUnion(void 0,"$",[null,[1,[["$0","Value",Provider.Id(),0]]]]))();
 };
 FSharpStation_JsonDecoder.j$1=function()
 {
  return FSharpStation_JsonDecoder._v$1?FSharpStation_JsonDecoder._v$1:FSharpStation_JsonDecoder._v$1=(Provider.DecodeUnion(Address,"$",[[0,[["$0","address",Provider.Id(),0]]]]))();
 };
 FSharpStation_JsonDecoder.j$2=function()
 {
  return FSharpStation_JsonDecoder._v$2?FSharpStation_JsonDecoder._v$2:FSharpStation_JsonDecoder._v$2=(Provider.DecodeUnion(void 0,"type",[["MsgInformation",[]],["MsgRequest",[]],["MsgReply",[]],["MsgFromBroker",[]],["MsgRequestForId",[]],["MsgRequestForEcho",[]]]))();
 };
 FSharpStation_JsonDecoder.j$3=function()
 {
  return FSharpStation_JsonDecoder._v$3?FSharpStation_JsonDecoder._v$3:FSharpStation_JsonDecoder._v$3=(Provider.DecodeUnion(void 0,"type",[["NoReply",[]],["Broker",[]],["Receiver",[]]]))();
 };
 FSharpStation_JsonDecoder.j=function()
 {
  return FSharpStation_JsonDecoder._v?FSharpStation_JsonDecoder._v:FSharpStation_JsonDecoder._v=(Provider.DecodeRecord(void 0,[["from",FSharpStation_JsonDecoder.j$1,0],["destination",FSharpStation_JsonDecoder.j$1,0],["msgType",FSharpStation_JsonDecoder.j$2,0],["subtype",Provider.Id(),0],["id",Provider.Id(),0],["payload",Provider.Id(),0],["replier",FSharpStation_JsonDecoder.j$3,0]]))();
 };
 FSharpStation_JsonEncoder.j$1=function()
 {
  return FSharpStation_JsonEncoder._v$1?FSharpStation_JsonEncoder._v$1:FSharpStation_JsonEncoder._v$1=(Provider.EncodeUnion(Address,"$",[[0,[["$0","address",Provider.Id(),0]]]]))();
 };
 FSharpStation_JsonEncoder.j$2=function()
 {
  return FSharpStation_JsonEncoder._v$2?FSharpStation_JsonEncoder._v$2:FSharpStation_JsonEncoder._v$2=(Provider.EncodeUnion(void 0,"type",[["MsgInformation",[]],["MsgRequest",[]],["MsgReply",[]],["MsgFromBroker",[]],["MsgRequestForId",[]],["MsgRequestForEcho",[]]]))();
 };
 FSharpStation_JsonEncoder.j$3=function()
 {
  return FSharpStation_JsonEncoder._v$3?FSharpStation_JsonEncoder._v$3:FSharpStation_JsonEncoder._v$3=(Provider.EncodeUnion(void 0,"type",[["NoReply",[]],["Broker",[]],["Receiver",[]]]))();
 };
 FSharpStation_JsonEncoder.j=function()
 {
  return FSharpStation_JsonEncoder._v?FSharpStation_JsonEncoder._v:FSharpStation_JsonEncoder._v=(Provider.EncodeRecord(void 0,[["from",FSharpStation_JsonEncoder.j$1,0],["destination",FSharpStation_JsonEncoder.j$1,0],["msgType",FSharpStation_JsonEncoder.j$2,0],["subtype",Provider.Id(),0],["id",Provider.Id(),0],["payload",Provider.Id(),0],["replier",FSharpStation_JsonEncoder.j$3,0]]))();
 };
 FSharpStation_GeneratedPrintf.p=function($1)
 {
  return $1.$==5?"BMUnexpectedMsgType "+FSharpStation_GeneratedPrintf.p$2($1.$0):$1.$==4?"BMReceiverCantReply":$1.$==3?"BMWebSocketError "+Utils.prettyPrint($1.$0):$1.$==2?"BMDestinationNotFound "+FSharpStation_GeneratedPrintf.p$1($1.$0):$1.$==1?"BMOnlyBrokerShouldUse":"BMOk";
 };
 FSharpStation_GeneratedPrintf.p$3=function($1)
 {
  return $1.$==2?"FSInfor":$1.$==1?"FSWarning":"FSError";
 };
 FSharpStation_GeneratedPrintf.p$4=function($1)
 {
  return $1.$==1?"Snippet Not Found "+Utils.prettyPrint($1.$0):"FSMessage ("+Utils.prettyPrint($1.$0)+", "+FSharpStation_GeneratedPrintf.p$3($1.$1)+")";
 };
 FSharpStation_GeneratedPrintf.p$5=function($1)
 {
  return $1.$==2?"Could not open new browser, Popup blocker may be active":$1.$==1?"Snippet Missing":"JsCompilerMsg ("+Utils.prettyPrint($1.$0)+", "+Utils.prettyPrint($1.$1)+")";
 };
}());
