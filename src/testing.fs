#nowarn "3242"
////-d:FSharpStation1572445936800 -d:TEE -d:WEBSHARPER
//#I @"C:\Program Files (x86)\Reference Assemblies\Microsoft\Framework\.NETFramework\v4.6.1"
//#I @"C:\Program Files (x86)\Reference Assemblies\Microsoft\Framework\.NETFramework\v4.6.1\Facades"
//#I @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper\lib\net461"
//#I @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper.UI\lib\net461"
//#r @"C:\Program Files (x86)\Reference Assemblies\Microsoft\Framework\.NETFramework\v4.6.1\System.Core.dll"
//#r @"C:\Program Files (x86)\Reference Assemblies\Microsoft\Framework\.NETFramework\v4.6.1\System.dll"
//#r @"C:\Program Files (x86)\Reference Assemblies\Microsoft\Framework\.NETFramework\v4.6.1\System.Web.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper\lib\net461\WebSharper.Core.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper\lib\net461\WebSharper.Core.JavaScript.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper\lib\net461\WebSharper.Collections.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper\lib\net461\WebSharper.InterfaceGenerator.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper\lib\net461\WebSharper.Main.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper\lib\net461\WebSharper.JQuery.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper\lib\net461\WebSharper.JavaScript.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper\lib\net461\WebSharper.Web.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper\lib\net461\WebSharper.Sitelets.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper\lib\net461\WebSharper.Control.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper.UI\lib\net461\HtmlAgilityPack.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper.UI\lib\net461\WebSharper.UI.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper.UI\lib\net461\WebSharper.UI.Templating.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper.UI\lib\net461\WebSharper.UI.Templating.Runtime.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper.UI\lib\net461\WebSharper.UI.Templating.Common.dll"
//#r @"C:\Program Files (x86)\Reference Assemblies\Microsoft\Framework\.NETFramework\v4.6.1\mscorlib.dll"
//#r @"D:\Abe\CIPHERWorkspace\FSharpStation\projects\LayoutEngine\bin\LayoutEngine.dll"
//#nowarn "3242"
/// Root namespace for all code
//#define FSharpStation1572445936800
#if INTERACTIVE
module FsRoot   =
#else
namespace FsRoot
#endif

    #if !NETSTANDARD20
    //#I @"C:\Program Files (x86)\Reference Assemblies\Microsoft\Framework\.NETFramework\v4.6.1"
    //#I @"C:\Program Files (x86)\Reference Assemblies\Microsoft\Framework\.NETFramework\v4.6.1\Facades"
    //#r @"C:\Program Files (x86)\Reference Assemblies\Microsoft\Framework\.NETFramework\v4.6.1\mscorlib.dll"
    //#r @"C:\Program Files (x86)\Reference Assemblies\Microsoft\Framework\.NETFramework\v4.6.1\System.Core.dll"
    //#r @"C:\Program Files (x86)\Reference Assemblies\Microsoft\Framework\.NETFramework\v4.6.1\System.dll"
    //#r @"C:\Program Files (x86)\Reference Assemblies\Microsoft\Framework\.NETFramework\v4.6.1\System.Web.dll"
    
    #if WEBSHARPER
    //#I @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper\lib\net461"
    //#I @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper.UI\lib\net461"
    
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper\lib\net461\WebSharper.Core.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper\lib\net461\WebSharper.Core.JavaScript.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper\lib\net461\WebSharper.Collections.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper\lib\net461\WebSharper.InterfaceGenerator.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper\lib\net461\WebSharper.Main.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper\lib\net461\WebSharper.JQuery.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper\lib\net461\WebSharper.JavaScript.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper\lib\net461\WebSharper.Web.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper\lib\net461\WebSharper.Sitelets.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper\lib\net461\WebSharper.Control.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper.UI\lib\net461\HtmlAgilityPack.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper.UI\lib\net461\WebSharper.UI.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper.UI\lib\net461\WebSharper.UI.Templating.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper.UI\lib\net461\WebSharper.UI.Templating.Runtime.dll"
    //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\packages\WebSharper.UI\lib\net461\WebSharper.UI.Templating.Common.dll"
    #endif
    #endif
    #if WEBSHARPER
    //#nowarn "3242" 
    
    open WebSharper
    //open WebSharper.JavaScript
    open WebSharper.UI
    open WebSharper.UI.Client
    type on   = WebSharper.UI.Html.on
    type attr = WebSharper.UI.Html.attr
    #else
    /// dummy WebSharper definition in order to avoid having to use #if WEBSHARPER all the time
    module WebSharper =
        type RpcAttribute() =
            inherit System.Attribute()
            let a = 1
        type JavaScriptAttribute(translate:bool) =
            inherit System.Attribute()
            let a = 1
            new() = JavaScriptAttribute true
        type InlineAttribute(code:string) =
            inherit System.Attribute()
            let a = 1
            new() = InlineAttribute ""
        type DirectAttribute(code:string) =
            inherit System.Attribute()
            let a = 1
    
    open WebSharper
    
    #endif
    
        /// Essentials that can be converted to JavaScript with WebSharper
        [< JavaScript ; AutoOpen >]
        module Library = 
            let Error = Result.Error
        
            
            type StringId<'T> = StringId of string 
            with
                member this.Id = match this with StringId v -> v
            
            type GuidId<'T> = GuidId of System.Guid
            with
                member this.Id = match this with GuidId v -> v
            
            /// call a function but return the input value
            /// for logging, debugging
            /// use: (5 * 8) |> tee (printfn "value = %d") |> doSomethingElse
            let [<Inline>] inline tee f v = f v ; v
            
            /// tee: call a function but return the input value
            /// for logging, debugging
            /// use: (5 * 8) |!> printfn "value = %d" |> doSomethingElse
            let [<Inline>] inline  (|>!) v f   = f v ; v
            let [<Inline>] inline  (>>!) g f   = g >> fun v -> f v ; v
            
            let inline print v = 
                match box v with
                | :? string as s -> printfn "%s" s
                | __             -> printfn "%A" v
            
            //#define TEE
            [< Inline "(function (n) { return n.getFullYear() + '-' + ('0'+(n.getMonth()+1)).slice(-2) + '-' +  ('0'+n.getDate()).slice(-2) + ' '+('0'+n.getHours()).slice(-2)+ ':'+('0'+n.getMinutes()).slice(-2)+ ':'+('0'+n.getSeconds()).slice(-2)+ ':'+('00'+n.getMilliseconds()).slice(-3) })(new Date(Date.now()))" >]
            let nowStamp() = 
                let t = System.DateTime.UtcNow // in two steps to avoid Warning: The value has been copied to ensure the original is not mutated
                t.ToString("yyyy-MM-dd HH:mm:ss.fff", System.Globalization.CultureInfo.InvariantCulture)
            
            let [<Inline>] inline traceT t v = tee (sprintf "%A" >> (fun s -> s.[..min 100 s.Length-1]) >> printfn "%s %s: %A" (nowStamp()) t) v
            let [<Inline>] inline trace   v = traceT "trace" v
            let [<Inline>] inline traceI  v = trace          v |> ignore
            
            module Log =
                let [<Inline>] inline In     n f   =      (traceT (sprintf "%s in " n)) >> f
                let [<Inline>] inline Out    n f   = f >> (traceT (sprintf "%s out" n))
                let [<Inline>] inline InA    n f p = async { return! In  n f p }
                let [<Inline>] inline OutA   n f p = async { return! Out n f p }
                let [<Inline>] inline InOut  n     = In  n >> Out  n
                let [<Inline>] inline InOutA n f p = async {
                    let!   r = InA n f  p
                    do         Out n id r |> ignore
                    return r 
                  }
            
                let [<Inline>] inline TimeIt n f p =
                    printfn "Starting %s" n
                    let start = System.DateTime.UtcNow.Ticks
                    f p
                    let elapsedSpan = new System.TimeSpan(System.DateTime.UtcNow.Ticks - start)
                    print <| elapsedSpan.ToString()
            
            
            [< AutoOpen >]
            module Monads =
                module Depend =
                
                    type Depend<'T> = 
                    | Dependency of (string * obj) option * (obj -> Depend<'T>)
                    | NoMore     of 'T
                
                    let dependByName nm (defF:'f) (kf:'f->'T) = Dependency(Some(nm, box defF), fun f -> NoMore (kf (unbox f)) )
                
                    #if !WEBSHARPER
                    open Microsoft.FSharp.Quotations.Patterns 
                    open Microsoft.FSharp.Quotations.DerivedPatterns 
                
                    let pname (prop  :System.Reflection.PropertyInfo) = prop  .DeclaringType.FullName + "." + prop  .Name
                    let mname (method:System.Reflection.MethodInfo  ) = method.DeclaringType.FullName + "." + method.Name
                
                    let shouldBe q = 
                        let rec shouldBe l =
                            function
                            | Call(_, method, _) -> Some(mname method, l)
                            | Lambda(a, q2)      -> shouldBe (l + 1) q2
                            | _ -> None
                        match q with
                        | PropertyGet(o,                                          prop  , [         ]     )-> pname prop  , "should be 0"
                        | Lambda(a,                                    Call(None, method, [         ])    )
                        | Lambda(a,                                    Call(None, method, [_        ])    )-> mname method, "should be 1"
                        | Lambda(a,Lambda(b,                           Call(None, method, [p;q      ]))   )-> mname method, "should be 2"
                        | Lambda(a,Lambda(b,Lambda(c,                  Call(None, method, [p;q;r    ])))  )-> mname method, "should be 3"
                        | Lambda(a,Lambda(b,Lambda(c,Lambda(d,         Call(None, method, [p;q;r;s  ])))) )-> mname method, "should be 4"
                        | Lambda(a,Lambda(b,Lambda(c,Lambda(d,Lambda(e,Call(None, method, [p;q;r;s;t]))))))-> mname method, "should be 5"
                        | q -> 
                            shouldBe 0 q 
                            |> Option.map(fun (nm,l) -> nm, sprintf "Not covered %d parms: %A" l q) 
                            |> Option.defaultWith(fun () -> "?", sprintf "Not covered: %A" q)
                        |> fun (nm, m) -> failwithf " %s : %s" nm m
                
                    let getName0(q:Quotations.Expr<                    'T>) : string *                      'T = 
                        match q with
                        | PropertyGet(o,                                          prop  , [         ]     )-> pname prop  ,                  prop.GetValue(null, [|         |]) |> unbox 
                        |_-> shouldBe q
                    let getName1(q:Quotations.Expr<'a                ->'T>) : string * ('a                ->'T) = 
                        match q with
                        | Lambda(a,                                    Call(None, method, [         ])    )-> mname method, fun a         -> method.Invoke(null, [|         |]) |> unbox 
                        | Lambda(a,                                    Call(None, method, [p        ])    )-> mname method, fun a         -> method.Invoke(null, [|a        |]) |> unbox 
                        |_-> shouldBe q
                    let getName2(q:Quotations.Expr<'a->'b            ->'T>) : string * ('a->'b            ->'T) = 
                        match q with
                        | Lambda(a,Lambda(b,                           Call(None, method, [p;q      ]))   )-> mname method, fun a b       -> method.Invoke(null, [|a;b      |]) |> unbox
                        |_-> shouldBe q
                    let getName3(q:Quotations.Expr<'a->'b->'c        ->'T>) : string * ('a->'b->'c        ->'T) = 
                        match q with
                        | Lambda(a,Lambda(b,Lambda(c,                  Call(None, method, [p;q;r    ])))  )-> mname method, fun a b c     -> method.Invoke(null, [|a;b;c    |]) |> unbox
                        |_-> shouldBe q
                    let getName4(q:Quotations.Expr<'a->'b->'c->'d    ->'T>) : string * ('a->'b->'c->'d    ->'T) = 
                        match q with
                        | Lambda(a,Lambda(b,Lambda(c,Lambda(d,         Call(None, method, [p;q;r;s  ])))) )-> mname method, fun a b c d   -> method.Invoke(null, [|a;b;c;d  |]) |> unbox
                        |_-> shouldBe q
                    let getName5(q:Quotations.Expr<'a->'b->'c->'d->'e->'T>) : string * ('a->'b->'c->'d->'e->'T) = 
                        match q with
                        | Lambda(a,Lambda(b,Lambda(c,Lambda(d,Lambda(e,Call(None, method, [p;q;r;s;t]))))))-> mname method, fun a b c d e -> method.Invoke(null, [|a;b;c;d;e|]) |> unbox
                        |_-> shouldBe q
                
                    let depend0   q                                                                      = let (nm, f) = getName0 q in dependByName nm f id
                    let depend1   q                                                                      = let (nm, f) = getName1 q in dependByName nm f id
                    let depend2   q                                                                      = let (nm, f) = getName2 q in dependByName nm f id
                    let depend3   q                                                                      = let (nm, f) = getName3 q in dependByName nm f id
                    let depend4   q                                                                      = let (nm, f) = getName4 q in dependByName nm f id
                    let depend5   q                                                                      = let (nm, f) = getName5 q in dependByName nm f id
                    let replace0 (q:Quotations.Expr<                    'T>) (fr:                    'T) = let (nm, _) = getName0 q in nm, box fr
                    let replace1 (q:Quotations.Expr<'a->                'T>) (fr:'a->                'T) = let (nm, _) = getName1 q in nm, box fr
                    let replace2 (q:Quotations.Expr<'a->'b->            'T>) (fr:'a->'b->            'T) = let (nm, _) = getName2 q in nm, box fr
                    let replace3 (q:Quotations.Expr<'a->'b->'c->        'T>) (fr:'a->'b->'c->        'T) = let (nm, _) = getName3 q in nm, box fr
                    let replace4 (q:Quotations.Expr<'a->'b->'c->'d->    'T>) (fr:'a->'b->'c->'d->    'T) = let (nm, _) = getName4 q in nm, box fr
                    let replace5 (q:Quotations.Expr<'a->'b->'c->'d->'e->'T>) (fr:'a->'b->'c->'d->'e->'T) = let (nm, _) = getName5 q in nm, box fr
                    #endif
                
                    let bind (f: 'a -> Depend<'b>) (pa:Depend<'a>) : Depend<'b> = 
                        let rec bindR =
                            function
                            | Dependency(dep, k) -> Dependency(dep , fun p -> bindR (k p) ) 
                            | NoMore     v       -> Dependency(None, fun p -> f v         )
                        bindR pa
                    let rtn = NoMore
                    let map f = bind (f >> rtn)
                
                    let replacer lst depend =
                        let rec replace =
                            function
                            | Dependency(None       , k)      -> Dependency(None        , k >> replace)
                            | Dependency(Some(nm, v), k)      ->
                                lst 
                                |> Seq.tryFind (fst >> ((=) nm))
                                |> Option.map  (snd >> fun v2 -> Dependency(Some(nm, v2), k >> replace) )
                                |> Option.defaultWith(fun ()  -> Dependency(Some(nm, v ), k >> replace) )
                            | NoMore v                        -> NoMore              v
                        replace depend
                
                    let replacerDef lst depend =
                        let rec replace =
                            function
                            | Dependency(None       , k)          -> Dependency(None         , k >> replace)
                            | Dependency(Some(nm, v), k)          ->
                                lst 
                                |> Seq.tryFind (fun (_, (nm2, _)) -> nm2 = nm)
                                |> Option.map  (fun (nmN,(_, v2)) -> Dependency(Some(nmN, v2), k >> replace) )
                                |> Option.defaultWith(fun ()      -> Dependency(Some(nm , v ), k >> replace) )
                            | NoMore v                            -> NoMore               v
                        replace depend
                
                    let resolver lst depend = 
                        let rec resolve =
                            function
                            | Dependency(None       , k)      -> k () |> resolve
                            | Dependency(Some(nm, v), k)      ->
                                lst 
                                |> Seq.tryFind (fst >> ((=) nm))
                                |> Option.map  (snd >> fun v2 -> k v2  )
                                |> Option.defaultWith(fun ()  -> k v )
                                |> resolve
                            | NoMore v                        ->   v
                        resolve depend
                
                    type DependBuilder() =
                        member __.Bind   (m, f) = bind f m
                        member __.Return     v  = rtn v
                        member __.Delay      f  = f ()
                
                    let depend = DependBuilder()
                
                    let getDependencies dep =
                        let rec collect lst dep =
                            let     lst2 = dep :: lst
                            match dep with
                            | Dependency(None      , k) -> collect lst2 (k () )
                            | Dependency(Some(_, v), k) -> collect lst2 (k v  )
                            | NoMore f                  -> lst2
                        collect [] dep
                        |> List.filter (function| Depend.Dependency(None,_) -> false |_-> true) 
                        |> List.rev 
                
                    let toString dep =
                        getDependencies dep
                        |> Seq.map       
                            (function 
                            | Depend.Dependency(Some(nm, v), next) -> sprintf "%-50s %A" nm v
                            | x -> string x)
                        |> Seq.distinct
                        |> Seq.sort
                        |> String.concat "\n"
                
                    module Operators =
                        let (>>=) ma f = bind f ma
                        let (|>>) ma f = map  f ma
                
                
            type System.String with
                member this.Substring2(from, n) = 
                    if   n    <= 0           then ""
                    elif from >= this.Length then ""
                    elif from <  0           then this.Substring2(0, n + from)
                    else this.Substring(from, min n (this.Length - from))
                member this.Left             n  = if n < 0 
                                                  then this.Substring2(0, this.Length + n)
                                                  else this.Substring2(0, n              )
                member this.Right            n  = this.Substring2(max 0 (this.Length - n), this.Length)
                member this.toUnderscore        = this |> Seq.mapi(fun i c -> if i > 0 && System.Char.IsUpper(c) then [ '_' ; c ] else [ c ])  |> Seq.collect id |> Seq.toArray |> System.String
            
            module String =
                let splitByChar (c: char) (s: string) = s.Split c
                let splitInTwoO spl txt = 
                    let i = (txt:string).IndexOf (spl:string)
                    if  i = -1 then None else
                    (txt.Left(i), txt.Substring (i + spl.Length) )
                    |> Some
                let delimitedO  op cl txt =
                    splitInTwoO op txt
                    |> Option.bind(fun (bef, sec) ->
                        splitInTwoO cl sec
                        |> Option.map(fun (mid, aft) -> bef, mid, aft)
                    )
                let contains     sub  (whole: string) = whole.Contains sub
                let trim                  (s: string) = s.Trim()
                let append     (a: string)(b: string) =  a + b
                let skipFirstLine (txt:string) = txt.IndexOf '\n' |> fun i -> if i < 0 then "" else txt.[i + 1..]
                let unindent (s:string) =
                    let lines = s.Split '\n'
                    let n     = lines 
                                |> Seq.tryFind (fun l -> l.Trim() <> "")
                                |> Option.defaultValue ""
                                |> Seq.tryFindIndex ((<>) ' ') 
                                |> Option.defaultValue 0
                    lines 
                    |> Seq.map    (fun l -> if l.Length <= n then "" else l.Substring n)
                    |> Seq.filter (fun s -> s.StartsWith "# 1 " |> not)
                let indent n (s:string) =
                    s.Split '\n'
                    |> Seq.map ((+) (String.replicate n " "))
                let unindentStr = unindent >> String.concat "\n"
                let indentStr i = indent i >> String.concat "\n" 
                let skipLastLine =
                       splitByChar '\n' 
                    >> fun s -> s.[0 .. (max 0 (s.Length - 2)) ]
                    >> String.concat "\n"
                let (|StartsWith|_|) (start:string) (s:string) = if s.StartsWith start then Some s.[start.Length..                          ] else None
                let (|EndsWith  |_|) (ends :string) (s:string) = if s.EndsWith   ends  then Some s.[0           ..s.Length - ends.Length - 1] else None
                
                let thousands n =
                    let v = n.ToString()
                    let r = v.Length % 3 
                    let s = if r = 0 then 3 else r
                    [   yield v.[0.. s - 1]
                        for i in 0..(v.Length - s)/ 3 - 1 do
                            yield v.[i * 3 + s .. i * 3 + s + 2]
                    ] |> String.concat ","
            
        /// Essentials that run in Javascript (WebSharper)
        //#define WEBSHARPER 
        [< JavaScript ; AutoOpen >]
        module LibraryJS =
            module View =
                let insertWO = 
                    function
                    | Some v -> View.Map Some v
                    | None   -> View.Const None
                let [<Inline>] inline consistent   (vl:View<_>)  = 
                    let prior      = ref <| Var.Create Unchecked.defaultof<_>
                    let setPrior v = if (!prior).Value <> v then (!prior).Value <- v 
                    View.Sink setPrior vl
                    !prior |> View.FromVar
            
                let bind = View.Bind
                let map  = View.Map
                let rtn  = View.Const
            
                let (>>=)                              v f = bind f v
                let        traverseSeq     f            sq = let folder head tail = f head >>= (fun h -> tail >>= (fun t -> List.Cons(h,t) |> rtn))
                                                             Array.foldBack folder (Seq.toArray sq) (rtn List.empty) |> map Seq.ofList
                let inline sequenceSeq                  sq = traverseSeq id sq
            
                let (<*>)                        =  View.Apply
                let       traverseListApp f list =  let cons head tail = head :: tail
                                                    let folder head tail = rtn cons <*> f head <*> tail
                                                    List.foldBack folder list (rtn [])
                let inline sequenceListApp  list =  traverseListApp id list
            
            module AppFrameworkTemplate =
                let html = """
            <div style="display:none" >
                <div links>
                    <link href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" type="text/css" rel="stylesheet">
                    <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"  type="text/javascript"></script>
                </div>
                <div ws-template="AppFramework" style="height: calc(100vh - 4px); width: calc(100vw - 4px) " class="relative" >
                    <div ws-hole="MainClient"></div>
                    <div class="AppFrameworkGo"><button ws-onclick="GoClient">${MainDoc}</button></div>
                </div>
                <style>
                    .AppFrameworkGo {
                        max-width: 2px;
                        max-height: 2px;
                        z-index: 4000;
                        overflow: hidden;
                        position: fixed;
                        top: 0px;
                        left: 0px;
                    }
                </style>
                <div ws-template="FixedSplitterVer" 
                    style="display: grid; 
                           grid-gap: 0px; 
                           box-sizing: border-box; 
                           height: 100%;
                           width : 100%;
                           grid-template-areas: 'one two'; 
                           grid-template-rows   :100%; 
                           overflow: hidden; 
                           grid-template-columns: ${PartSizes}"  >
                   <div ws-hole="First"  style="grid-area: one; " class="relative" ></div>
                   <div ws-hole="Second" style="grid-area: two; " class="relative" ></div>
                </div>               
                <div ws-template="FixedSplitterHor" 
               style="display: grid; 
                      grid-gap: 0px; 
                      box-sizing: border-box; 
                      height: 100%;
                      width : 100%;
                      grid-template-areas: 'one' 'two'; 
                      grid-template-columns:100%; 
                      overflow: hidden; 
                      grid-template-rows   : ${PartSizes}"  >
              <div ws-hole="First"  style="grid-area: one; " class="relative" ></div>
              <div ws-hole="Second" style="grid-area: two; " class="relative" ></div>
                </div>               
                <div ws-template="WCompSplitterHor" 
                     ws-onafterrender="AfterRender"
                     style="display: grid;
                            grid-gap: 5px; 
                            box-sizing: border-box; 
                            grid-template-areas: 'one' 'two'; 
                            grid-template-columns:100%; 
                            overflow: hidden; 
                            grid-template-rows   : ${PartSizes}" 
                     >
                     <slot></slot>
                    <slot name="splitter">  <div style="grid-row:2; grid-column:1 / 1 ; cursor: row-resize; z-index: 3; background-color: #eef ; height: ${Gap}; margin-top :-${Gap}" ws-onmousedown="MouseDown" ws-onafterrender="AfterRenderSp" ></div> </slot>
                    <style>
                        ::slotted(*) {
                            display: grid;
                            height : 100%;
                            width  : 100%;
                            overflow: hidden;
                        }
                        ::slotted(*:nth-child(2)) {
                            grid-area: two;
                        }
                        ::slotted(*[slot="splitter"]) {
                            grid-row:2; grid-column:1 / 1 ; 
                            cursor: row-resize; 
                            z-index: 3; 
                            background-color: #eef ; 
                            height: ${Gap}; 
                            margin-top :-${Gap}
                        }
                    </style>
                </div>        
                <div ws-template="WCompSplitterVer" 
                     ws-onafterrender="AfterRender"
                     style="display: grid; 
                            grid-gap: 5px; 
                            box-sizing: border-box; 
                            grid-template-areas: 'one two'; 
                            grid-template-rows   :100%; 
                            overflow: hidden; 
                            grid-template-columns: ${PartSizes}"  >
                    <slot></slot>
                    <slot name="splitter"> <div style="grid-column:2; grid-row:1 / 1 ; cursor: col-resize; z-index: 3; background-color: #eef ; width: ${Gap}; margin-left :-${Gap}" ws-onmousedown="MouseDown" ws-onafterrender="AfterRenderSp" ></div> </slot>
                    <style>
                        ::slotted(*) {
                            display: grid;
                            height : 100%;
                            width  : 100%;
                            overflow: hidden;
                        }
                        ::slotted(*:nth-child(2)) {
                            grid-area: two;
                        }
                        ::slotted(*[slot="splitter"]) {
                            grid-column:2; grid-row:1 / 1
                            cursor: column-resize; 
                            z-index: 3; 
                            background-color: #eef ; 
                            width: ${Gap}; 
                            margin-left:-${Gap}
                        }
                    </style>
                </div>
                <div ws-template="AppFwkClient" >
                    <ws-FixedSplitterHor>
                        <PartSizes>55px calc(100% - 55px)</PartSizes>
                        <First>
                            <span style="display: grid;
                                  grid-template-columns: 30% 20% 20% 10%;
                                  grid-gap: 25px;
                                ">
                                <div class="mainTitle">AppFramework</div>
                            </span>
                        </First>
                        <Second>
                                <ws-FixedSplitterVer>
                                    <PartSizes>calc(100% - 150px) 150px</PartSizes>
                                    <First>
                                        <wcomp-splitter vertical value="18" max="100">
                                            <div><div ws-hole="PlugIns" style="overflow:auto" >
                                                <div ws-template="Tile">
                                                    <div draggable="true" class="code-editor-list-tile ${Predecessor} ${Selected}" 
                                                    ws-ondrag="Drag"
                                                    ws-ondragover="DragOver"
                                                    ws-ondrop="Drop"
                                                   >
                                                   <span class="node ${Parent} ${ErrorMsg}" title="expand" ws-onclick="ToggleCollapse"></span>
                                                   <div  class="code-editor-list-text" style="text-indent:${Indent}em; white-space: pre" ws-onclick="Select" ws-onafterrender="AfterRender" >${Name}</div>
                                                   <span class="predecessor" title="toggle predecessor" ws-onclick="TogglePred">X</span>
                                               </div>
                                       
                                                </div>
                                            </div></div>
                                            <wcomp-splitter vertical value="100" min="30" max="100">
                                                <ws-FixedSplitterHor>
                                                    <PartSizes>32px calc(100% - 32px)</PartSizes>
                                                    <First>
                                                        <div>
                                                            <div class="input-group">
                                                                <span class="input-group-addon">name:</span>
                                                                <span class="input-group-addon">${PlugInName}</span>
                                                            </div>
                                                        </div>
                                                    </First>
                                                    <Second>
                                                        <div style="overflow:auto">
                                                            <div>
                                                                <div>Docs:</div>
                                                                <div ws-hole="Docs" style="overflow:auto" ></div>
                                                            </div>
                                                            <div>
                                                                <div>Views:</div>
                                                                <div ws-hole="Views" style="overflow:auto" >
                                                                    <div ws-template="NameValue" class="input-group">
                                                                        <span class="input-group-addon">${Name}:</span>
                                                                        <span class="input-group-addon">${Value}</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div>Queries:</div>
                                                                <div ws-hole="Queries" style="overflow:auto" ></div>
                                                            </div>
                                                            <div>
                                                                <div>Vars:</div>
                                                                <div ws-hole="Vars" style="overflow:auto" >
                                                                    <div ws-template="NameValueInput" class="input-group">
                                                                        <span class="input-group-addon">${Name}:</span>
                                                                        <textarea class="form-control" id="" placeholder="Value..." ws-var="Value" spellcheck="false">
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Second>
                                                </ws-FixedSplitterHor>
                                                <wcomp-tabstrip >
                                                    <div tabname="Properties">
                                                        <div>
                                                            <table style="border-spacing:0px">
                                                                <thead>
                                                                    <th style="width: 30%  ">Name</th>
                                                                    <th style="width: 70% ">Value</th>
                                                                </thead>
                                                                <tbody ws-hole="Properties" ws-children-template="Property">
                                                                    <tr ws-onclick="Select" style="margin-bottom: 2px" class="level  ">
                                                                        <td class="level-item">
                                                                            <div>
                                                                                <input ws-var="Name" type="text" class="form-control" id="" placeholder="Property...">
                                                                            </div>
                                                                        </td>
                                                                        <td class="level-item">
                                                                            <div>
                                                                                <textarea ws-var="Value" class="form-control" id="" placeholder="Value..."></textarea>
                                                                            </div>
                                                                        </td>
                                                                        <td class="level-item">
                                                                            <div style=" cursor: pointer " title="remove">
                                                                                <button ws-onclick="Remove" class="delete is-small">x</button>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                            <button ws-onclick="AddProperty" class="add is-small">add ...</button>
                                                        </div>
                                                    </div>
                                                </wcomp-tabstrip>
                                            </wcomp-splitter>
                                        </wcomp-splitter>
                                    </First>
                                    <Second>
                                        <div style="
                                            overflow: hidden;
                                            display: grid;
                                            grid-template-columns: 100%;
                                            grid-template-rows: repeat(15, calc(100% / 15));
                                            bxackground-color: #eee;
                                            box-sizing: border-box;
                                            padding : 5px;
                                            grid-gap: 5px;
                                            margin-right: 21px;
                                       "  class="absolute" ws-hole="Actions" >
                                            <button ws-template="Action"         ws-onclick="Click" class="btn" type="button" id=""          >${Name}</button>
                                            <button ws-template="ActionDisabled" ws-onclick="Click" class="btn" type="button" id="" disabled >${Name}</button>
                                        </div>
                                    </Second>
                                </ws-FixedSplitterVer>
                        </Second>
                    </ws-FixedSplitterHor>
                </div>
                <style style="display: none">
                        .Hidden     { display   : none         }
                        table th,table td { padding:0 5px 0 5px; text-overflow: ellipsis }
                        td input.form-control { 
                            padding    : 0px; 
                            font-family: monospace;
                            font-size  :   small;
                            margin-top :   0px;
                            margin-left: -2px;
                            width      : 100%
                        }
                        td select {
                            font-size : smaller;
                            max-width : 8ch;
                        }
                        xtextarea {
                           resize : none;
                        }
                        .tab-content {
                            overflow: hidden
                        }
                        .tab-children {
                            position:relative;
                        }
                        .tab-children>div>* {
                            position:absolute;
                            height: 100%;
                            width:  100%;
                            display: grid;
                        }
                        .relative {
                            position:relative;
                        }
                        .relative>* {
                            position:absolute;
                            height: 100%;
                            width:  100%;
                            display: grid;
                        }
                        table.table-striped    tbody tr:nth-child(even) { background: #EEE  }
                        table.table-striped    tbody tr:nth-child(odd ) { background: #FFF  }
                        table.table-striped    tbody input              { background: transparent; border: none}
                        table.table-striped    tbody select             { background: transparent; border: none}
                        table.table-nonstriped tbody tr:nth-child(even) { background: inherit }
                        table.table-nonstriped tbody tr:nth-child(odd ) { background: inherit }
                        table.table            tbody tr.hover           { border    : solid thin transparent; } 
                        table.table            tbody tr.hover:hover     { border    : solid thin blue     ; } 
                        table.table            tbody th:hover           { background: gray; cursor: pointer }
                        table.table            tbody tr.hover:hover>td  { border-top: solid thin blue     ; 
                                                                   border-bottom: solid thin blue     ; } 
                        table.table            tbody tr.selected { background   : #b9eeff             ; }
                        table.table            tbody tr.formula.selected { background: #20f7f7             ; }
                        thead { color: gray }
                        h3 { 
                            color: gray;
                            line-height: 1em;
                        }
                        button       { border: solid thin transparent ; border-radius: 3px; }
                        button:hover { border: solid thin blue }
                        .indenter { position  : absolute; 
                                    top:0px; bottom:0px; left:0px; 
                                    background: white; color:white;
                                    border-right: gray thin dotted;
                                    }
                        body {
                            color      : #333;
                            font-size  : small;
                            font-family: monospace;
                            line-height: 1.2;
                        }
                        .mainTitle {  
                            font-size: 48px;
                            font-weight: 500;
                            color: gray;
                            margin-top: -12px;
                        }
                        .CodeMirror {
                            height: 100%;
                        }
                        
                      
                        body { margin: 0px }     
                             
                        div textarea {
                            font-family     : monospace;
                        }
                        .code-editor-list-tile {
                            white-space     : nowrap; 
                            border-style    : solid none none;
                            border-color    : white;
                            border-width    : 1px;
                            background-color: #D8D8D8;
                            display         : flex;
                        }
                        .code-editor-list-text{
                            padding         : 1px 10px 1px 5px;
                            overflow        : hidden;
                            text-overflow   : ellipsis;
                            white-space     : nowrap;
                            flex            : 1;
                        }
                        
                        .code-editor-list-tile span.node.ErrorMsg {
                            background-color: red
                        }
                        .code-editor-list-tile span.node.expanded::before {
                            content: "-"
                        }
                        .code-editor-list-tile span.node.collapsed::before {
                            content: "+"
                        }
                        .code-editor-list-tile.direct-predecessor {
                            font-weight     : bold;
                            color           : blue;
                        }
                        .code-editor-list-tile.indirect-predecessor {
                            color           : blue;
                        }
                        .code-editor-list-tile.included-predecessor {
                            color           : chocolate;
                        }
                        .code-editor-list-tile.selected {
                            background-color: #77F;
                            color           : white;
                        }
                        .code-editor-list-tile.codeSnippet {
                            text-decoration: underline
                        }
                        .code-editor-list-tile:hover {
                            background      : lightgray;
                        }
                        .code-editor-list-tile.selected:hover {
                            background      : blue;
                        }
                        .code-editor-list-tile>.predecessor {
                            font-weight     : bold;
                            border-style    : inset;
                            border-width    : 1px;
                            text-align      : center;
                            color           : transparent;
                        }
                        .code-editor-list-tile.direct-predecessor>.predecessor {
                            color           : blue;
                        }
                        
                        .CodeMirror { height: 100%; }
                        
                        .node {
                            background-color: white; 
                            width           : 2ch; 
                            color           : #A03; 
                            font-weight     : bold; 
                            text-align      : center;
                            font-family     : arial;
                        }
                        .Warning { text-decoration: underline lightblue } 
                        .Error   { text-decoration: underline red       } 
                        
                    </style>
            </div>
            """
    
        //#define WEBSHARPER
        //#r @"C:\Program Files (x86)\Reference Assemblies\Microsoft\Framework\.NETFramework\v4.6.1\mscorlib.dll"
        [< JavaScriptExport >]
        module TestingJS =
        
        
            //#r @"D:\Abe\CIPHERWorkspace\FSharpStation\projects\LayoutEngine\bin\LayoutEngine.dll"
            open FsRoot
            
            [< JavaScript ; JavaScriptExport (typeof<WebComponent.WcSplitter.WcSplitterT>) >]
            module StartAppFramework =
                open FsRoot
                open WebSharper.JavaScript
            
                let htmlD = Depend.dependByName "AppFrameworkTemplate.html" AppFrameworkTemplate.html box
            
                let startWithHtmlD = Depend.depend {
                    let! html = htmlD
                    return fun () ->
                        let d = JS.Window.Document.CreateElement "div"
                        let _ = JS.Window.Document.Body.AppendChild d
                        d?outerHTML <- html
                        AppFramework.getMainDoc.Value 
                        |> Doc.RunAppend JS.Window.Document.Body 
            }
            
            module Util =
                open Html
            
                let disabled disW = attr.disabledDynPred (V "") disW
                let inputLabel attrs disW txt var =
                    div attrs [
                        div [           attr.``class`` "input-group"                       ] [
                            span      [ attr.``class`` "input-group-addon"                 ] [ text txt ]
                            Doc.Input [ attr.``class`` "form-control"      ; disabled disW ]   var
                        ]
                    ]
            
                let areaLabel attrs disW txt (var:Var<string>) =
                    div attrs [
                        div [                attr.``class`` "input-group"                       ] [
                            span           [ attr.``class`` "input-group-addon"                 ] [ text txt ]
                            Doc.InputAreaV [ attr.``class`` "form-control"      ; disabled disW ]   var.V
                        ]
                    ]
            
                let elemsUI doc addNew =
                    div [] [
                        doc
                        Doc.Button "New" [] addNew
                    ]
            
                let lensFloat2Str(v:Var<float>) = Var.Make (V (sprintf "%A" v.V)) (ParseO.parseDoubleO >> function Some d when d <> v.Value -> v.Set d |_->())
                let textLine txtW = div [] [ textView txtW ]
            
                let lensStrO (sel:Var<string option>) =
                    Var.Make 
                        (V ( match sel.V with Some s -> s |_-> "" )) 
                        (fun s -> if s = "" then sel.Set None
                                  else Some s |> sel.Set)
            
                let mapVarO toB ofBO (sel:Var<_ option>) = 
                    Var.Make(V (sel.V |> Option.map toB)) 
                            (function Some s -> ofBO s |> Option.iter (Some >> sel.Set) |_-> sel.Set None) 
            
                //let selectorLens toStr ofStrO (sel:Var<_ option>) =
                //    Var.Make 
                //        (V ( match sel.V with Some v -> sprintf "%s" (toStr v) |_-> "" )) 
                //        (fun s -> if s = "" then sel.Set None
                //                  else ofStrO s |> Option.iter (Some >> sel.Set) )
                let selectorLens toStr ofStrO = mapVarO toStr ofStrO >> lensStrO
            
                let selectorLensInt    sel = selectorLens (fun (v          ) -> v   .ToString()) (ParseO.parseIntO                      ) sel
                let selectorLensGuid   sel = selectorLens (fun (v          ) -> v   .ToString()) (ParseO.parseGuidO                     ) sel
                let selectorLensGuidId sel = selectorLens (fun (v:GuidId<_>) -> v.Id.ToString()) (ParseO.parseGuidO >> Option.map GuidId) sel
            
                let unselectorV<'K> : Var<'K option> = Var.Make (View.Const None) ignore
            
                //let wrapUI elem f = (fun a b -> f a b >> Seq.singleton >> elem [] )
                let simpleButton txt f = Doc.Button txt [] (f >> ignore)
                let newButton   f = simpleButton "New" f
                let orderedList l = ol [] [ l ]
            
            module AF =
                open FsRoot
                open AppFramework
            
                type PlugInBuilder() =
                    member __.Zero() = { defaultPlugIn() with plgName    = "Main" }
                    member this.Yield(()) = this.Zero()
                    member __.For(coll:seq<_>, func) =
                        let ie = coll.GetEnumerator()
                        while ie.MoveNext() do
                            func ie.Current
                    [<CustomOperation("name"   )>]
                    member __.Name  (plg:PlugIn, name     )   = { plg with plgName    = name }
                    [<CustomOperation("var"    )>]  
                    member __.AddVar(plg:PlugIn, name, var)   = plg.plgVars   .Add(newVar name var)  ; plg
                    [<CustomOperation("doc"    )>]  
                    member __.AddDoc(plg:PlugIn, name, doc)   = plg.plgDocs   .Add(newDoc name doc)  ; plg
                    [<CustomOperation("docDyn" )>]  
                    member __.AddDocF(plg:PlugIn, name, docF) = plg.plgDocs   .Add(newDoc name (lazy LayoutEngine.turnToView docF) ) ; plg
                    [<CustomOperation("act"    )>]
                    member __.AddAct(plg:PlugIn, name, act)   = plg.plgActions.Add(newAct name act) ; plg
                    [<CustomOperation("actOpt"    )>]
                    member __.AddActO(plg:PlugIn, name,actO) = match actO with 
                                                               | Some act -> plg.plgActions.Add(newAct name act)
                                                               | None     -> ()
                                                               plg
                    //[<CustomOperation("mainDoc")>]
                    //member __.InsDoc(plg:PlugIn, name, doc) = plg.plgDocs.    = [| newDoc name doc |] |> Array.append <| plg.plgDocs    }
                    [<CustomOperation("view"   )>]  
                    member __.AddViw(plg:PlugIn, name, viw) = plg.plgViews.Add(newViw name viw) ; plg
                    [<CustomOperation("merge"  )>]
                    member __.Merge (plg:PlugIn, prefix, p2:PlugIn) = 
                        plg.plgVars   .AppendMany(p2.plgVars    |> Seq.map (fun v -> { v with varName = prefix + v.varName } ) ) 
                        plg.plgViews  .AppendMany(p2.plgViews   |> Seq.map (fun w -> { w with viwName = prefix + w.viwName } ) ) 
                        plg.plgDocs   .AppendMany(p2.plgDocs    |> Seq.map (fun d -> { d with docName = prefix + d.docName } ) ) 
                        plg.plgActions.AppendMany(p2.plgActions |> Seq.map (fun a -> { a with actName = prefix + a.actName } ) ) 
                        plg.plgQueries.AppendMany(p2.plgQueries |> Seq.map (fun q -> { q with qryName = prefix + q.qryName } ) ) 
                        plg
            
                let plugin = PlugInBuilder()
                let addPlugIn2 plg =
                    addPlugIn  plg
                    match Seq.tryHead plg.plgDocs with
                    | Some doc -> mainDocV.Set (plg.plgName + "." + doc.docName)
                    |_->()
            
                let concatMainDocs plugins = 
                    plugins 
                    |> Seq.choose (fun plg -> Seq.tryHead plg.plgDocs) 
                    |> Seq.choose (function {docDoc = (LazyDoc d)}-> Some d.Value|_-> None) 
                    |> Doc.Concat
            
                type ListModelData<'K, 'D when 'K : equality> = {
                    elems  : ListModel<'K, 'D>
                    doc    : Doc
                    selV   : Var<'K option>
                    add    : unit -> 'D  
                    delCur : unit -> unit
                    //getDoc : View<'K option> -> Var<'D> -> Doc
                    def    : 'D
                } with 
                    member this.PlugIn selectorLens = plugin {
                        doc    "list" (lazy this.doc         )
                        //doc    "cur"  (lazy this.CurrentDoc  )
                        var    "sel"  (selectorLens this.selV)
                        act    "add"  (this.add >> ignore    )
                        act    "del"  this.delCur
                    }
                    member this.CurrentW =
                        this.selV.View 
                        |> View.Bind (Option.map this.elems.TryFindByKeyAsView >> View.insertWO) 
                        |> View.Map  (Option.bind id >> Option.defaultValue this.def)
                    member this.CurrentV =
                        Var.Make this.CurrentW
                                (fun v -> match this.selV.Value with Some k when this.elems.ContainsKey k -> this.elems.Add v |_-> ())
                    //member this.CurrentDoc   = this.getDoc this.selV.View this.CurrentV
            
                //type ListModelDataGuidId<'D> = ListModelData<GuidId<'D> , 'D>
                //type ListModelDataGuid<  'D> = ListModelData<System.Guid, 'D>
                //type ListModelDataInt<   'D> = ListModelData<int        , 'D>
            //
                //type ListModelDataGuidId<'D> with
                //    member this.PlugIn () = (box this |> unbox<ListModelData<GuidId<'D>, 'D>>).PlugIn Util.selectorLensGuidId
            
            module LayoutEngine =
                open LayoutEngine
                module AF = AppFramework
            
                let addLayout0 lyt = 
                    addLayout lyt
                    AF.mainDocV.Set lyt.lytName
            
            module ListModel =
                let MapLens predO (f: 'Key -> Var<'T> -> 'V) (m:ListModel<_,_>) =
                    let get k v = f k (m.Lens k)
                    match predO with
                    | None       -> m.ViewState |> View.MapSeqCachedViewBy m.Key get 
                    | Some predW ->
                        (m.ViewState, predW) 
                        ||> View.Map2(fun vms pred -> vms.ToArray (System.Predicate pred)) 
                        |> View.MapSeqCachedViewBy m.Key get 
            
            module LM =
                open Util
            
                let getDocFor (elements: ListModel<_,_>) def newF predWO elUI =
                    let keyF = elements.Key
                    let selected0 : Var<_ option>  = Var.Create None
                    let selView = View.Do {
                        let! selO = selected0.View
                        match selO with 
                        | None      -> return None
                        | Some sel  ->
                        let! exists = elements.ContainsKeyAsView sel
                        if not exists then return None else
                        return Some sel
                        //match predWO with
                        //| None       -> return Some sel
                        //| Some predW ->
                        //let! v    = elements.FindByKeyAsView sel
                        //let! pred = predW
                        //return if pred v then Some sel else None
                    }
                    let selectedV : Var<_ option>  = 
                        Var.Make
                            selView
                            (function Some k when elements.ContainsKey k -> Some k |_-> None
                             >> fun v -> if selected0.Value <> v then selected0.Set v )
                    let addNew () =
                        let n = newF()
                        elements.Add n
                        selectedV.Set (Some <| keyF n)
                        n
                    let delete  k = fun () -> selectedV.Set None ; elements.RemoveByKey k
                    let result = {
                        AF.elems  = elements
                        AF.doc    = Doc.Empty
                        AF.selV   = selectedV
                        AF.delCur = fun () -> selectedV.Value |> Option.iter (fun k -> delete k () )
                        AF.add    = addNew
                        //AF.getDoc = elUI selectedV ignore
                        AF.def    = def
                    }
                    let elUIF = elUI result
                    let list      = elements |> ListModel.MapLens predWO (fun k v -> elUIF (View.Const (Some k)) v )
                    { result with AF.doc = list |> Doc.BindSeqCached id }
            
                let getDoc keyF def newF predWO elUI =
                    let elements  : ListModel<_,_> = ListModel.Create keyF []
                    getDocFor elements def newF predWO elUI
            
                //let setCurrentDoc docF li = { li with AF.getDoc = docF Util.unselectorV ignore }
                let addElements (li:AF.ListModelData<_,_>) elems = li.elems.AppendMany elems
            
            module LMX =
                open Util
                open System
            
                let addNewO newF firstKey nextKey=
                    let mutable k = firstKey
                    fun () ->
                        let e = k, newF()
                        k <- nextKey k
                        e
            
                let elemUI2 elemUI a b (v:Var<_>) = elemUI a b (v.Lens snd (fun (i, _) nv -> i, nv ) )
            
                let getDocInt    def newElem elemUI = addNewO newElem 0                          ((+) 1)                             |> LM.getDoc fst (-1               , def) <| None <| elemUI2 elemUI
                let getDocGuid   def newElem elemUI = addNewO newElem (Guid.NewGuid())           (fun _ -> Guid.NewGuid())           |> LM.getDoc fst (       Guid.Empty, def) <| None <| elemUI2 elemUI
                let getDocGuidId def newElem elemUI = addNewO newElem (Guid.NewGuid() |> GuidId) (fun _ -> Guid.NewGuid() |> GuidId) |> LM.getDoc fst (GuidId Guid.Empty, def) <| None <| elemUI2 elemUI
                                                        : AF.ListModelData<GuidId<'C>, GuidId<'C> * 'C>
            
                //let setCurrentDoc docF = elemUI2 docF |> LM.setCurrentDoc
            
                let addElements (li:AF.ListModelData<_,_>) elems = elems |> Seq.iter (fun v -> (li.add() |> fst, v) |> li.elems.Add )
            
            
            module SnippetTemplates =
                let html = """
                <div ws-template="Snippet" >
                    <div draggable="true" class="code-editor-list-tile ${Predecessor} ${Selected}" 
                         ws-ondrag="Drag"
                         ws-ondragover="DragOver"
                         ws-ondrop="Drop"
                        >
                        <span class="node ${Parent} ${ErrorMsg}" title="expand" ws-onclick="ToggleCollapse"></span>
                        <div  class="code-editor-list-text" style="text-indent:${Indent}em; white-space: pre" ws-onclick="Select" ws-onafterrender="AfterRender" >${Name}</div>
                        <span class="predecessor" title="toggle predecessor" ws-onclick="TogglePred">X</span>
                    </div>
                </div>
                <style>
                    .Hidden     { display   : none         }
                    table th,table td { padding:0 5px 0 5px; text-overflow: ellipsis }
                    td input.form-control { 
                        padding    : 0px; 
                        font-family: monospace;
                        font-size  :   small;
                        margin-top :   0px;
                        margin-left: -2px;
                        width      : 100%
                    }
                    td select {
                        font-size : smaller;
                        max-width : 8ch;
                    }
                    textarea {
                       resize : none;
                    }
                    .tab-content {
                        overflow: hidden
                    }
                    .tab-children {
                        position:relative;
                    }
                    .tab-children>div>* {
                        position:absolute;
                        height: 100%;
                        width:  100%;
                        display: grid;
                    }
                    .relative {
                        position:relative;
                    }
                    .relative>* {
                        position:absolute;
                        height: 100%;
                        width:  100%;
                        display: grid;
                    }
                    table.table-striped    tbody tr:nth-child(even) { background: #EEE  }
                    table.table-striped    tbody tr:nth-child(odd ) { background: #FFF  }
                    table.table-striped    tbody input              { background: transparent; border: none}
                    table.table-striped    tbody select             { background: transparent; border: none}
                    table.table-nonstriped tbody tr:nth-child(even) { background: inherit }
                    table.table-nonstriped tbody tr:nth-child(odd ) { background: inherit }
                    table.table            tbody tr.hover           { border    : solid thin transparent; } 
                    table.table            tbody tr.hover:hover     { border    : solid thin blue     ; } 
                    table.table            tbody th:hover           { background: gray; cursor: pointer }
                    table.table            tbody tr.hover:hover>td  { border-top: solid thin blue     ; 
                                                               border-bottom: solid thin blue     ; } 
                    table.table            tbody tr.selected { background   : #b9eeff             ; }
                    table.table            tbody tr.formula.selected { background: #20f7f7             ; }
                    thead { color: gray }
                    h3 { 
                        color: gray;
                        line-height: 1em;
                    }
                    button       { border: solid thin transparent ; border-radius: 3px; }
                    button:hover { border: solid thin blue }
                    .indenter { position  : absolute; 
                                top:0px; bottom:0px; left:0px; 
                                background: white; color:white;
                                border-right: gray thin dotted;
                                }
                    body {
                        color      : #333;
                        font-size  : small;
                        font-family: monospace;
                        line-height: 1.2;
                    }
                    .mainTitle {  
                        font-size: 48px;
                        font-weight: 500;
                        color: gray;
                        margin-top: -12px;
                    }
                    .CodeMirror {
                        height: 100%;
                    }
                    
                  
                    body { margin: 0px }     
                         
                    div textarea {
                        font-family     : monospace;
                    }
                    .code-editor-list-tile {
                        white-space     : nowrap; 
                        border-style    : solid none none;
                        border-color    : white;
                        border-width    : 1px;
                        background-color: #D8D8D8;
                        display         : flex;
                    }
                    .code-editor-list-text{
                        padding         : 1px 10px 1px 5px;
                        overflow        : hidden;
                        text-overflow   : ellipsis;
                        white-space     : nowrap;
                        flex            : 1;
                    }
                    
                    .code-editor-list-tile span.node.ErrorMsg {
                        background-color: red
                    }
                    .code-editor-list-tile span.node.expanded::before {
                        content: "-"
                    }
                    .code-editor-list-tile span.node.collapsed::before {
                        content: "+"
                    }
                    .code-editor-list-tile.direct-predecessor {
                        font-weight     : bold;
                        color           : blue;
                    }
                    .code-editor-list-tile.indirect-predecessor {
                        color           : blue;
                    }
                    .code-editor-list-tile.included-predecessor {
                        color           : chocolate;
                    }
                    .code-editor-list-tile.selected {
                        background-color: #77F;
                        color           : white;
                    }
                    .code-editor-list-tile.codeSnippet {
                        text-decoration : underline;
                        font-weight     : bold;
                    }
                    .code-editor-list-tile:hover {
                        background      : lightgray;
                    }
                    .code-editor-list-tile.selected:hover {
                        background      : blue;
                    }
                    .code-editor-list-tile>.predecessor {
                        font-weight     : bold;
                        border-style    : inset;
                        border-width    : 1px;
                        text-align      : center;
                        color           : transparent;
                    }
                    .code-editor-list-tile.direct-predecessor>.predecessor {
                        color           : blue;
                    }
                    
                    .CodeMirror { height: 100%; }
                    
                    .node {
                        background-color: white; 
                        width           : 2ch; 
                        color           : #A03; 
                        font-weight     : bold; 
                        text-align      : center;
                        font-family     : arial;
                    }
                    .Warning { text-decoration: underline lightblue } 
                    .Error   { text-decoration: underline red       } 
                    
                </style>
            """
            
            //#r "D:\Abe\CIPHERWorkspace\FSharpStation\projects\LayoutEngine\bin\LayoutEngine.dll"
            //#define WEBSHARPER
            module NewLY =
                open FsRoot
                open WebSharper.UI
                open WebSharper.UI.Client
            
                module AF = AppFramework
            
                open Html
            
                type  Fun<'P, 'R> = { f : Val<'P -> 'R> ; p : Val<'P> }
                and   Val<'P    > = VView of View<'P> | VConst of 'P
                    with
                    //[<Inline>] static member ( <* )(vf:Val<'a->'b> , a :    'a ) = VConst a
                    [<Inline>] static member ( <* )(vf:Val<'a->'b> , aV:Var<'a>) = VView  aV.View
            
            
                let add1 a = a + 1
                let a11V = Var.Create 11
            
                let mainX = VConst add1 <* a11V
            
                let [<Inline>] callF f = 
                    match f with
                    | { f = VConst f  ; p = VConst p  } -> VConst (                       f              p )
                    | { f = VConst f  ; p = VView  pV } -> VView  (View.Apply (View.Const f)             pV)
                    | { f = VView  fV ; p = VView  pV } -> VView  (View.Apply             fV             pV)
                    | { f = VView  fV ; p = VConst p  } -> VView  (View.Apply             fV (View.Const p))
            
                let [<Inline>] callDoc f =
                    AF.mainDocV.View 
                    |> Doc.BindView(fun _ -> 
                        match callF f with
                        | VConst d  -> d
                        | VView  dW -> Doc.BindView id dW
                    )
            
                let [<Inline>] callAtt f : Attr =
                    match callF f with
                    | VConst a  -> a
                    | VView  aW -> failwithf "View<Attr> not implemented"
            
                let [<Inline>] ff f p = { f = f       ; p = p }
                let [<Inline>] fc c p = { f = callF c ; p = p }
            
                module Val =
            
                    let addDoc d (docs:Val<seq<Doc>>) =
                        match docs with
                        | VConst ds  -> VConst (Seq.append ds [ d ] )
                        | VView  dsW -> VConst (seq [ Doc.BindView Doc.Concat dsW ; d ])
            
                    let addAtt a (atts:Val<seq<Attr>>) =
                        match atts with
                        | VConst ats  -> VConst (Seq.append ats [ a ] )
                        | VView  atsW -> failwithf "addAtt for VView not implemented"// VConst (seq [ Doc.BindView Doc.Concat atsW ; a ])
            
                    let textDoc = function
                    | VConst txt  -> text         txt
                    | VView  txtW -> Doc.TextView txtW
            
                    let textAtt : Val<string> -> Attr = failwithf "textAtt not implemented"
            
                module Extract0 =
            
                    let getDocFromReference      ref = sprintf "getDocFromReference not implemented: @{%s}"      ref |> text
                    let getTextViewFromReference ref = sprintf "getTextViewFromReference not implemented: @{%s}" ref |> View.Const
            
                    type TextType =
                    | TSimple    of string
                    | TReference of string
            
                    let rec getOneTextData(bef, name, aft) =
                        TReference name ::  match aft with
                                            | ""  -> []
                                            | aft -> getTextData aft
                        |> 
                        match bef with
                        | ""  -> id
                        | bef -> fun ls -> TSimple bef :: ls
                    and getTextData (txt:string) =
                        txt
                        |> String.delimitedO "@{" "}"
                        |> Option.map getOneTextData
                        |> Option.defaultWith (fun () -> [ TSimple txt ])
            
                    let getDocFromReferenceD      = Depend.dependByName "getDocFromReference"      getDocFromReference id
                    let getTextViewFromReferenceD = Depend.dependByName "getTextViewFromReference" getTextViewFromReference id
            
                    let extractDocD = Depend.depend {
                        let! getDoc = getDocFromReferenceD
                        return fun txt ->
                            getTextData txt 
                            |> List.map (function
                                | TSimple    t -> text   t
                                | TReference r -> getDoc r
                            ) 
                            |> function
                            | [ d ] -> d
                            |   ls  -> Doc.Concat ls
                    }
            
                    let extractAtsD = Depend.depend {
                        let! getTextView = getTextViewFromReferenceD
                        let getTextVal txt = 
                            getTextData txt
                            |> function
                                | [ TSimple v ] -> VConst v
                                | vs ->
                                vs
                                |> View.traverseListApp (function
                                    | TSimple    v -> View.Const v
                                    | TReference r -> getTextView r
                                )
                                |> View.Apply (View.Const (String.concat ""))
                                |> VView
                        return fun (txt:string) ->
                            txt.Split ';'
                            |> Seq.map    (fun t -> t.Trim())
                            |> Seq.filter ((<>) "")
                            |> Seq.map (fun t -> 
                                match t.Split ':' with
                                | [| atn ; sty |] ->    match getTextVal sty with
                                                        | VConst s -> Attr.Style        atn s
                                                        | VView  w -> Attr.DynamicStyle atn w
                                | _ ->
                                match t.Split '=' with
                                | [| atn ; atv |] ->    match getTextVal atv with
                                                        | VConst s -> Attr.Create       atn s
                                                        | VView  w -> Attr.Dynamic      atn w
                                | _ -> failwithf "single reference attribute not implemented %s" t
                                                        //match getTextVal t with
                                                        //| VConst s -> Attr.Create       atn s
                                                        //| VView  w -> Attr.DynamicStyle atn w
            
                            )
                            //getTextData txt 
                            //|> List.map (function
                            //    | TSimple    t -> text   t
                            //    | TReference r -> getAtt r
                            //) 
                            //|> function
                            //| [ d ] -> d
                            //|   ls  -> Att.Concat ls
                    }
            
                    let extractDoc = Depend.resolver [] extractDocD
                    let extractAts = Depend.resolver [] extractAtsD
            
            
                let concat a b = sprintf "Concat(%d, %f)" a b 
                let aV = Var.Create 4
                let pa = aV.View
                let pb = 6.2
            
                let getDoc r =
                    let pName, oName = AF.splitName "NewLY" r
                    AF.tryGetDocW pName oName
                    |> Doc.BindView (fun docO -> 
                        docO
                        |> Option.map AF.getLazyDoc
                        |> Option.defaultWith (fun () ->
                            AF.tryGetWoWW pName oName
                            |> View.Map (Option.defaultWith (fun () -> sprintf "Reference not found @{%s}" r))
                            |> Doc.TextView
                        )
                    )
            
                let getTextView r =
                    let pName, oName = AF.splitName "NewLY" r
                    AF.tryGetWoWW pName oName
                    |> View.Map (Option.defaultWith (fun () -> sprintf "Text Reference not found @{%s}" r))
            
                let extractDoc   = Depend.resolver [ "getDocFromReference"     , getDoc      ] Extract0.extractDocD
                let extractAts   = Depend.resolver [ "getTextViewFromReference", getTextView ] Extract0.extractAtsD
                let extractAtt p = extractAts p |> Attr.Concat
            
                let vvv = 
                    { f = VConst concat ; p = VView  pa } |> callF
                    |> fun f -> { f = f ; p = VConst pb } |> callF
            
                type Val<'P> with
                    [<Inline>] static member (<*)(vf:Val<    'a   ->'b> , a :      'a   ) = ff vf (VConst  a                     )
                    [<Inline>] static member (<!)(vf:Val<    'a   ->'b> , av:Val<  'a  >) = ff vf          av
                    [<Inline>] static member (<!)(vf:Val<    'a   ->'b> , aW:View< 'a  >) = ff vf (VView   aW                    )
                    [<Inline>] static member (<!)(vf:Val<    'a   ->'b> , aV:Var<  'a  >) = ff vf (VView   aV.View               )
                    [<Inline>] static member (<!)(vf:Val<    'a   ->'b> , aF:Fun<_,'a  >) = ff vf (callF   aF                    )
                    [<Inline>] static member (<&)(vf:Val<seq<Doc >->'b> , a :   string  ) = ff vf (VConst (seq [extractDoc a  ]) )
                    [<Inline>] static member (<&)(vf:Val<seq<Doc >->'b> , aF:Fun<_,Doc >) = ff vf (VConst (seq [callDoc    aF ]) )
                    [<Inline>] static member (<&)(vf:Val<    Doc  ->'b> , a :   string  ) = ff vf (VConst (     extractDoc a   ) )
                    [<Inline>] static member (<&)(vf:Val<    Doc  ->'b> , aF:Fun<_,Doc >) = ff vf (VConst (     callDoc    aF  ) )
            //        [<Inline>] static member (<&)(vf:Val<seq<Doc>->'b> , aF:Fun<_,Doc>) = ff vf (VConst (seq [callDoc aF ]) )
            
                    [<Inline>] static member (<&)(vf:Val<seq<Attr>->'b> , a :   string  ) = ff vf (VConst (     extractAts a   ) )
                    [<Inline>] static member (<&)(vf:Val<seq<Attr>->'b> , aF:Fun<_,Attr>) = ff vf (VConst (seq [callAtt    aF ]) )
                    [<Inline>] static member (<&)(vf:Val<    Attr ->'b> , a :   string  ) = ff vf (VConst (     extractAtt a   ) )
                    [<Inline>] static member (<&)(vf:Val<    Attr ->'b> , aF:Fun<_,Attr>) = ff vf (VConst (     callAtt    aF  ) )
            
                type Fun<'P,'R> with    
                    [<Inline>] static member (<*)(vc , p         ) = fc vc  (VConst p)
                    [<Inline>] static member (<!)(vc , p         ) = fc vc          p
                    [<Inline>] static member (<!)(vc , p         ) = fc vc  (VView  p)
                    [<Inline>] static member (<!)(vc , pV:Var< _>) = fc vc  (VView  pV.View)
                    [<Inline>] static member (<!)(vc , p:Fun<_,_>) = fc vc  (callF  p)
            
                    [<Inline>] static member (<&)(c:Fun<_,     Attr  -> _> , p:      string ) = fc c       (VConst (              extractAtt p   ) )
                    [<Inline>] static member (<&)(c:Fun<_,     Attr  -> _> , p:Val<  string>) = fc c       (VConst (      Val.textAtt        p   ) )
                    [<Inline>] static member (<&)(c:Fun<_,     Attr  -> _> , p:Fun<_,string>) = fc c       (VConst (      Val.textAtt (callF p)  ) )
                    [<Inline>] static member (<&)(c:Fun<_,     Attr  -> _> , p:Fun<_,Attr  >) = fc c       (VConst (                 callAtt p   ) )
                    [<Inline>] static member (<&)(c:Fun<_,     Attr  -> _> , p:      Attr   ) = fc c       (VConst (                         p   ) )
                    [<Inline>] static member (<&)(c:Fun<_, seq<Attr> -> _> , p:      string ) = fc c       (VConst (              extractAts p   ) )
                    [<Inline>] static member (<&)(c:Fun<_, seq<Attr> -> _> , p:Val<  string>) = fc c       (VConst (seq [ Val.textAtt        p  ]) )
                    [<Inline>] static member (<&)(c:Fun<_, seq<Attr> -> _> , p:Fun<_,string>) = fc c       (VConst (seq [ Val.textAtt (callF p) ]) )
                    [<Inline>] static member (<&)(c:Fun<_, seq<Attr> -> _> , p:Fun<_,Attr  >) = fc c       (VConst (seq [            callAtt p  ]) )
                    [<Inline>] static member (<!)(c:Fun<   seq<Attr>   ,_> , p:      string ) =  { c with p = Val.addAtt(         extractAtt p  ) c.p }
                    [<Inline>] static member (<!)(c:Fun<   seq<Attr>   ,_> , p:Val<  string>) =  { c with p = Val.addAtt( Val.textAtt        p  ) c.p }
                    [<Inline>] static member (<!)(c:Fun<   seq<Attr>   ,_> , p:Fun<_,string>) =  { c with p = Val.addAtt( Val.textAtt (callF p) ) c.p }
                    [<Inline>] static member (<!)(c:Fun<   seq<Attr>   ,_> , p:Fun<_,Attr  >) =  { c with p = Val.addAtt(            callAtt p  ) c.p }
                    [<Inline>] static member (<!)(c:Fun<   seq<Attr>   ,_> , p:      Attr   ) =  { c with p = Val.addAtt                     p    c.p }
            
                    [<Inline>] static member (<&)(c:Fun<_,     Doc   -> _> , p:      string ) = fc c       (VConst (              extractDoc p   ) )
                    [<Inline>] static member (<&)(c:Fun<_,     Doc   -> _> , p:Val<  string>) = fc c       (VConst (      Val.textDoc        p   ) )
                    [<Inline>] static member (<&)(c:Fun<_,     Doc   -> _> , p:Fun<_,string>) = fc c       (VConst (      Val.textDoc (callF p)  ) )
                    [<Inline>] static member (<&)(c:Fun<_,     Doc   -> _> , p:Fun<_,Doc   >) = fc c       (VConst (                 callDoc p   ) )
                    [<Inline>] static member (<&)(c:Fun<_,     Doc   -> _> , p:      Doc    ) = fc c       (VConst (                         p   ) )
                    [<Inline>] static member (<&)(c:Fun<_, seq<Doc > -> _> , p:      string ) = fc c       (VConst (seq [         extractDoc p  ]) )
                    [<Inline>] static member (<&)(c:Fun<_, seq<Doc > -> _> , p:Val<  string>) = fc c       (VConst (seq [ Val.textDoc        p  ]) )
                    [<Inline>] static member (<&)(c:Fun<_, seq<Doc > -> _> , p:Fun<_,string>) = fc c       (VConst (seq [ Val.textDoc (callF p) ]) )
                    [<Inline>] static member (<&)(c:Fun<_, seq<Doc > -> _> , p:Fun<_,Doc   >) = fc c       (VConst (seq [            callDoc p  ]) )
                    [<Inline>] static member (<!)(c:Fun<   seq<Doc >   ,_> , p:      string ) =  { c with p = Val.addDoc(         extractDoc p  ) c.p }
                    [<Inline>] static member (<!)(c:Fun<   seq<Doc >   ,_> , p:Val<  string>) =  { c with p = Val.addDoc( Val.textDoc        p  ) c.p }
                    [<Inline>] static member (<!)(c:Fun<   seq<Doc >   ,_> , p:Fun<_,string>) =  { c with p = Val.addDoc( Val.textDoc (callF p) ) c.p }
                    [<Inline>] static member (<!)(c:Fun<   seq<Doc >   ,_> , p:Fun<_,Doc   >) =  { c with p = Val.addDoc(            callDoc p  ) c.p }
                    [<Inline>] static member (<!)(c:Fun<   seq<Doc >   ,_> , p:      Doc    ) =  { c with p = Val.addDoc                     p    c.p }
            
                let inline (!) v = VConst v
            
                let name       = Var.Create "World"
            
                let checkName (n:string) = if n = "World".[0..n.Length-1] || n.Length <= 1 then "<---- Please enter your name" else "" 
            
                let enterName  = ! checkName             <! name
                let now        = ! (fun _ -> nowStamp()) <! name
            
                let sayHello  =
                    let sayHello_0 = ! Doc.Concat <& "Hello @{name}!" <! enterName
                    let sayHello_1 = ! Doc.Concat <& "How are you?"
                    ! Doc.Concat <& sayHello_0       <! sayHello_1
            
                let aString = Var.Lens aV string (fun _ -> int)
            
                let main0 = ! concat <! aV <* 3.2
                let main1 = !(sprintf "result = %s %s") <! main0 <* "main0"
                let main  = ! h3 <& "color:@{name}" <& "MAIN:" <! main1 <! main1 <! ":" <! sayHello <! ":" <! " Más >> " <! sayHello <! " <<"
            
                let makeAViewDoc  f = AF.mainDocV.View |> Doc.BindView(fun _ -> f())
                let makeAViewDocL f = lazy makeAViewDoc f
            
                let main2 = makeAViewDoc <| fun () -> h4 [ attr.styleDyn name.View ] [ text "MAIN2:" ; Doc.TextView name.View] 
            
                let appFwk = ! div <* [] <& "@{AppFramework.AppFwkClient}"
                let split  = ! (LayoutEngine.variableSplitter false 0. 50. 100.) <& appFwk <& main
                let split2 = ! (LayoutEngine.variableSplitter false 0. 50. 100.) <& appFwk <& main2
            
                AF.plugin {
                    plgName "NewLY"
                    plgVar  "name"     name
                    plgVar  "a"        aString
                    plgDoc  "split"    (lazy         (split      |> callDoc ) )
                    plgDoc  "split2"   (lazy         (split2     |> callDoc ) )
                    plgDoc  "main"     (lazy         (main       |> callDoc ) )
                    plgDoc  "main2"    (lazy          main2                   )
                    plgDoc  "sayHello" (lazy         (sayHello   |> callDoc ) )
                    plgDoc  "sayHello2"(lazy         (sayHello   |> callDoc ) )
                }
                |> AF.addPlugIn
            
                [< SPAEntryPoint >]
                let mainProgram() =
                    do (StartAppFramework.startWithHtmlD 
                        |> Depend.resolver [
                            "AppFrameworkTemplate.html", AppFrameworkTemplate.html + SnippetTemplates.html
                        ]) ()
            