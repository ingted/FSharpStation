#nowarn "52"
#nowarn "1182"
#nowarn "1178"
////-d:FSharpStation1553473485001
//#I @"..\packages\WebSharper\lib\net461"
//#I @"..\packages\WebSharper.UI\lib\net461"
//#r @"..\packages\WebSharper\lib\net461\WebSharper.Core.dll"
//#r @"..\packages\WebSharper\lib\net461\WebSharper.Core.JavaScript.dll"
//#r @"..\packages\WebSharper\lib\net461\WebSharper.Collections.dll"
//#r @"..\packages\WebSharper\lib\net461\WebSharper.InterfaceGenerator.dll"
//#r @"..\packages\WebSharper\lib\net461\WebSharper.Main.dll"
//#r @"..\packages\WebSharper\lib\net461\WebSharper.JQuery.dll"
//#r @"..\packages\WebSharper\lib\net461\WebSharper.JavaScript.dll"
//#r @"..\packages\WebSharper\lib\net461\WebSharper.Web.dll"
//#r @"..\packages\WebSharper\lib\net461\WebSharper.Sitelets.dll"
//#r @"..\packages\WebSharper\lib\net461\WebSharper.Control.dll"
//#r @"..\packages\WebSharper.UI\lib\net461\HtmlAgilityPack.dll"
//#r @"..\packages\WebSharper.UI\lib\net461\WebSharper.UI.dll"
//#r @"..\packages\WebSharper.UI\lib\net461\WebSharper.UI.Templating.dll"
//#r @"..\packages\WebSharper.UI\lib\net461\WebSharper.UI.Templating.Runtime.dll"
//#r @"..\packages\WebSharper.UI\lib\net461\WebSharper.UI.Templating.Common.dll"
//#r @"..\packages\FSharp.Data\lib\net45\FSharp.Data.dll"
//#nowarn "52"
//#nowarn "1182"
//#nowarn "1178"
/// Root namespace for all code
//#define FSharpStation1553473485001
#if INTERACTIVE
module FsRoot   =
#else
namespace FsRoot
#endif

    #if WEBSHARPER
    //#define NOFRAMEWORK --noframework
    //#I @"C:\Program Files (x86)\Reference Assemblies\Microsoft\Framework\.NETFramework\v4.6.1"
    //#I @"C:\Program Files (x86)\Reference Assemblies\Microsoft\Framework\.NETFramework\v4.6.1\Facades"
    //#r @"C:\Program Files (x86)\Reference Assemblies\Microsoft\Framework\.NETFramework\v4.6.1\mscorlib.dll"
    //#r @"C:\Program Files (x86)\Reference Assemblies\Microsoft\Framework\.NETFramework\v4.6.1\System.Core.dll"
    
    //#I @"..\packages\WebSharper\lib\net461"
    //#I @"..\packages\WebSharper.UI\lib\net461"
    
    //#r @"..\packages\WebSharper\lib\net461\WebSharper.Core.dll"
    //#r @"..\packages\WebSharper\lib\net461\WebSharper.Core.JavaScript.dll"
    //#r @"..\packages\WebSharper\lib\net461\WebSharper.Collections.dll"
    //#r @"..\packages\WebSharper\lib\net461\WebSharper.InterfaceGenerator.dll"
    //#r @"..\packages\WebSharper\lib\net461\WebSharper.Main.dll"
    //#r @"..\packages\WebSharper\lib\net461\WebSharper.JQuery.dll"
    //#r @"..\packages\WebSharper\lib\net461\WebSharper.JavaScript.dll"
    //#r @"..\packages\WebSharper\lib\net461\WebSharper.Web.dll"
    //#r @"..\packages\WebSharper\lib\net461\WebSharper.Sitelets.dll"
    //#r @"..\packages\WebSharper\lib\net461\WebSharper.Control.dll"
    //#r @"..\packages\WebSharper.UI\lib\net461\HtmlAgilityPack.dll"
    //#r @"..\packages\WebSharper.UI\lib\net461\WebSharper.UI.dll"
    //#r @"..\packages\WebSharper.UI\lib\net461\WebSharper.UI.Templating.dll"
    //#r @"..\packages\WebSharper.UI\lib\net461\WebSharper.UI.Templating.Runtime.dll"
    //#r @"..\packages\WebSharper.UI\lib\net461\WebSharper.UI.Templating.Common.dll"
    
    open WebSharper
    open WebSharper.JavaScript
    open WebSharper.UI
    open WebSharper.UI.Client
    type on   = WebSharper.UI.Html.on
    type attr = WebSharper.UI.Html.attr
    #else
    /// dummy WebSharper definition in order to avoid having to use #if WEBSHARPER all the time
    module WebSharper =
        type RpcAttribute() =
            let a = 1
        type JavaScriptAttribute(translate:bool) =
            let a = 1
            new() = JavaScriptAttribute true
        type InlineAttribute(code:string) =
            let a = 1
            new() = InlineAttribute ""
        type DirectAttribute(code:string) =
            let a = 1
    
    open WebSharper
    
    #endif
    
        /// Essentials that can be converted to JavaScript with WebSharper
        [< JavaScript ; AutoOpen >]
        module Library =
            let Error = Result.Error
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
            
            (* issues with websharper Type not found in JavaScript compilation: System.Collections.Generic.IDictionary`2
            module IDict =
            #if WEBSHARPER
                [< Inline >]
            #endif
                let inline tryGetValue key (dict:System.Collections.Generic.IDictionary<_, _>) =
                    let mutable res = Unchecked.defaultof<_>
                    if dict.TryGetValue(key, &res)
                    then Some res 
                    else None
                let add          key v (dict:System.Collections.Generic.IDictionary<_, _>) = if dict.ContainsKey key then      dict.[key] <- v else dict.Add(key, v)
            *)
            module Dict =
                let [<Inline>] inline tryGetValue key (dict:System.Collections.Generic. Dictionary<_, _>) =
                    let mutable res = Unchecked.defaultof<_>
                    if dict.TryGetValue(key, &res)
                    then Some res 
                    else None
                let add          key v (dict:System.Collections.Generic. Dictionary<_, _>) = if dict.ContainsKey key then      dict.[key] <- v else dict.Add(key, v)
            
            module LDict =
                let [<Inline>] inline containsKey  key  dict = (^a : (member ContainsKey : _ -> bool) (dict, key))
                //let inline item         key  dict = (^a : (member get_Item    : _ -> _   ) (dict, key))
                let [<Inline>] inline tryGetValue fitem key  dict =
                    if containsKey key dict then Some (fitem key)
                    else None
            
            
            /// Extensible type for error messages, warnings and exceptions
            type ResultMessage<'M> =
                | NoMsg
                | ErrorMsg  of string
                | Warning   of string
                | Info      of string
                | Message   of 'M
                | ExceptMsg of string * string
                | RMessages of ResultMessage<'M> []
                with 
                override msg.ToString() =
                    match msg with
                    | NoMsg          ->  ""
                    | ErrorMsg  m    ->  m      |> sprintf "Error    : %s"
                    | Warning   m    ->  m      |> sprintf "Warning  : %s"
                    | Info      m    ->  m
                    | Message   m    ->  m      |> sprintf "%O"
                    | ExceptMsg(m,p) -> (m, p) ||> sprintf "Exception: %s, %s"
                    | RMessages ms   ->  ms     |> Seq.filter (function NoMsg -> false |_-> true) |> Seq.map (fun m -> m.ToString()) |> String.concat "\n"
            
            [< AutoOpen >]
            module ResultMessageHelpers =
                let inline errorMsgf fmt = Printf.ksprintf ErrorMsg fmt
                let inline warningf  fmt = Printf.ksprintf Warning  fmt
                let inline infof     fmt = Printf.ksprintf Info     fmt
            
            module ResultMessage =
            
                let inline noMsg    msg = msg |> function NoMsg -> true |_-> false
                let inline exclnoMsg ms = ms |> Seq.filter (noMsg >> not)
                /// converts Messages to other type of ResultMessage
                let rec bindMessage f msg = 
                    match msg with
                    | NoMsg          ->  NoMsg
                    | Message   m    ->  f         m
                    | ErrorMsg  m    ->  ErrorMsg  m
                    | Info      m    ->  Info      m
                    | Warning   m    ->  Warning   m
                    | ExceptMsg(m,p) ->  ExceptMsg(m,p)
                    | RMessages ms   ->  ms     |> Array.map (bindMessage f) |> RMessages
            
                /// a Message is converted to ErrorMsg
                let freeMessageF f msg = msg |> bindMessage f
                /// a Message is converted to ErrorMsg
                let freeMessage    msg = msg |> freeMessageF (sprintf "%O" >> ErrorMsg)
                /// a Message is converted to Warning
                let freeMessageW   msg = msg |> freeMessageF (sprintf "%O" >> Warning )
                /// a Message is converted to Info
                let freeMessageI   msg = msg |> freeMessageF (sprintf "%O" >> Info    )
            
                let rec isInfoF f msg =
                    match msg with
                    | Info      _    ->  true
                    | Message   m    ->  f m
                    | RMessages ms   ->  ms |> exclnoMsg |> Seq.forall (isInfoF f)
                    | _              ->  false
                /// a Message is not considered Info
                let isInfo  msg = msg |> isInfoF (fun _ -> false)
                /// a Message is considered Info
                let isInfoI msg = msg |> isInfoF (fun _ -> true )
            
                let rec isWarningOrInfoF f msg =
                    match msg with
                    | Warning   _    ->  true
                    | Message   m    ->  f m
                    | RMessages ms   ->  ms |> exclnoMsg |> Seq.forall (fun m -> isWarningOrInfoF f m || isInfoF f m)
                    | _              ->  false
                /// a Message is not considered a Warning
                let isWarningOrInfo  msg = msg |> isWarningOrInfoF (fun _ -> false)
                /// a Message is considered a Warning
                let isWarningOrInfoW msg = msg |> isWarningOrInfoF (fun _ -> true )
            
                let rec isFatalF f msg =
                    match msg with
                    | NoMsg
                    | Info      _    
                    | Warning   _    ->  false
                    | Message   m    ->  f m
                    | RMessages ms   ->  ms |> Seq.exists (isFatalF f)
                    | _              ->  true
                    //|>! printfn "%A = %A" msg
                /// a Message is considered fatal
                let isFatal  msg = msg |> isFatalF (fun _ -> true )
                /// a Message is not considered fatal
                let isFatalW msg = msg |> isFatalF (fun _ -> false)
            
                let rec countF f msg =
                    match msg with
                    | NoMsg          ->  0, 0, 0
                    | Info      _    ->  0, 0, 1
                    | Warning   _    ->  0, 1, 0
                    | Message   m    ->  f m
                    | RMessages ms   ->  ms |> exclnoMsg |> Seq.map (countF f) |> Seq.fold (fun (f, w, i) (fm, wm, im) -> f + fm, w + wm, i + im) (0, 0, 0)
                    | _              ->  1, 0, 0
            
                /// a Message is considered an error
                let count  msg = msg |> countF (fun _ -> 1, 0, 0)
                /// a Message is considered a Warning
                let countW msg = msg |> countF (fun _ -> 0, 1, 0)
                /// a Message is considered Info
                let countI msg = msg |> countF (fun _ -> 0, 0, 1)
                
                let addMsg a b =
                    match a, b with
                    | NoMsg        , c
                    | c            , NoMsg         ->  c
                    | RMessages mas, RMessages mbs ->  Array.append    mas      mbs   |> RMessages
                    |           ma , RMessages mbs ->  Array.append [| ma |]    mbs   |> RMessages
                    | RMessages mas,           mb  ->  Array.append    mas   [| mb |] |> RMessages
                    |           ma ,           mb  ->               [| ma   ;   mb |] |> RMessages
            
                let reduceMsgs ms = (NoMsg, ms) ||> Seq.fold addMsg
            
                let summaryF f msg =
                    match countF f msg with
                    | 0, 0, _
                    | 1, 0, 0
                    | 0, 1, 0 -> ""
                    | e, 0, _ -> sprintf "Errors   : %d\n" e
                    | 0, w, _ -> sprintf "Warnings : %d\n" w
                    | e, w, _ -> sprintf "Errors   : %d, Warnings: %d\n" e w
            
                /// returns a string with a count of errors and warnings, if more than one
                let summarizedF f msg = [ msg.ToString() ; summaryF f msg ] |> Seq.filter ((<>) "") |> String.concat "\n"
                /// a Message is considered an error
                let summarized  msg = msg |> summarizedF (fun _ -> 1, 0, 0)
                /// a Message is considered a Warning
                let summarizedW msg = msg |> summarizedF (fun _ -> 0, 1, 0)
                /// a Message is considered Info
                let summarizedI msg = msg |> summarizedF (fun _ -> 0, 0, 1)
                
            module Memoize =
            
                /// returns 3 functions:
                ///    checkO  : ('p->'v option) 
                ///    getOrAdd: ('p->('p->'v)->'v) 
                ///    clear   : (unit->unit)
                [<Inline>]
                let getStoreWithDict (cache: System.Collections.Generic.Dictionary<_, _>) =
                    let checkO v     = let mutable res = Unchecked.defaultof<_>
                                       let ok          = cache.TryGetValue(v, &res)
                                       if  ok then Some res else None
                    let store  v res = cache.[v] <- res
                                       res
                    let getOrAdd p f = checkO p |> Option.defaultWith (fun () -> f p |> store p )
                    (checkO, getOrAdd), cache.Clear
            
                /// creates a Dictionary to store memoized values
                /// returns 3 functions:
                ///    checkO  : ('p->'v option) 
                ///    getOrAdd: ('p->('p->'v)->'v) 
                ///    clear   : (unit->unit)
                [<Inline>]
                let getStore() = getStoreWithDict (System.Collections.Generic.Dictionary<_, _>() )
            
                /// Memoizes function f using the provided cache
                /// getCache() returns 1 function:
                ///    getOrAdd: ('p->('p->'v)->'v) 
                [< Inline >]
                let memoizeStore (getOrAdd:('key -> ('key -> 'value) -> 'value) ) f =
                    fun p -> getOrAdd p f
            
            
                /// Memoizes the function f using a Dictionary
                /// Returns the memoized function and a clear() function
                /// The dictionary can be reset using the clear() function
                [< Inline >]
                let memoizeResetable f =
                    let (check, getOrAdd), clear = getStore()
                    let memoF = memoizeStore getOrAdd f
                    memoF, clear
            
                /// Memoizes the function f using the provided Dictionary
                [<Inline>]
                let memoizeWithDict dict f =
                    let (check, getOrAdd), clear = getStoreWithDict dict
                    let memoF = memoizeStore getOrAdd f
                    memoF
            
                /// Memoizes the function f and returns Dictionary
                [<Inline>]
                let memoizeDict f =
                    let dict = System.Collections.Generic.Dictionary<_, _>() 
                    let (check, getOrAdd), clear = getStoreWithDict dict
                    let memoF = memoizeStore getOrAdd f
                    memoF, dict
            
                /// Memoizes the function f using a Dictionary
                [<Inline>]
                let memoize f = memoizeResetable f |> fst
            
            
            [< AutoOpen >]
            module Monads =
                module Seq =    
                    let rtn = Seq.singleton
                    let insertO  vSO              = vSO |> Option.map(Seq.map Some) |> Option.defaultWith(fun () -> rtn None)
                    let insertR (vSR:Result<_,_>) = vSR |> function | Error m -> rtn (Error m) | Ok v -> Seq.map Ok v
                    let absorbO  vOS              = vOS |> Seq.choose id
                    let absorbR  vOS              = vOS |> Seq.choose (function Ok v -> Some v |_-> None)
                    let ofOption vO = 
                        match vO with
                        | Some v -> Seq.singleton v
                        | None   -> Seq.empty
                
                /// Extensions to Async
                module Async =
                    let [< Inline >] inline rtn   v    = async.Return v
                    let [< Inline >] inline bind  f vA = async.Bind(  vA, f)
                    let [< Inline >] inline map   f    = bind (f >> rtn)
                    /// Executes f Synchronously
                    [< Inline "throw 'iterS cannot be used in JavaScript!'" >] 
                    let inline iterS (f: 'a->unit) = map f >> Async.RunSynchronously
                    /// Executes f Asynchronously
                    let [< Inline >] inline iterA f             = map f >> Async.Start
                    let apply fA vA = async {
                        let! fChild = Async.StartChild fA
                        let! vChild = Async.StartChild vA
                        let! f = fChild
                        let! v = vChild 
                        return f v 
                    }
                    let sleepThen f milliseconds = async {
                        do! Async.Sleep milliseconds
                        return f()
                    }
                    let (>>=)                              v f = bind f v
                    let traverseSeq             f           sq = let folder head tail = f head >>= (fun h -> tail >>= (fun t -> List.Cons(h,t) |> rtn))
                                                                 Array.foldBack folder (Seq.toArray sq) (rtn List.empty) |> map Seq.ofList
                    let inline sequenceSeq                  sq = traverseSeq id sq
                    let insertO  vAO                           = vAO |> Option.map(map Some) |> Option.defaultWith(fun () -> rtn None)
                    let insertR (vAR:Result<_,_>)              = vAR |> function | Error m -> rtn (Error m) | Ok v -> map Ok v
                
                
                module Result =
                    open Result
                
                    let errorf fmt = Printf.ksprintf Error fmt
                
                    let freeMessage                r = r   |> function Ok v -> Ok v   | Error e -> ResultMessage.freeMessage e |> Error
                    let rtn                          = Ok
                    let join                       r = Result.bind id r
                    let flatten                    r = Result.bind id r
                    let toOption                   r = r   |> function Ok v -> Some v |       _ -> None
                    let defaultWith              f r = r   |> function Ok v ->      v | Error e -> f e
                    let defaultValue             d r = r   |> function Ok v ->      v | Error _ -> d
                    let failIfTrue               m v = if     v then m |> Error  else Ok () 
                    let failIfFalse              m v = if not v then m |> Error  else Ok () 
                    /// bind version that protects against exceptions
                    let bindP                 f    r = match r with
                                                       | Ok    v -> try   f v
                                                                    with  e -> ExceptMsg (e.Message, e.StackTrace) |> Error
                                                       | Error e ->       e                                        |> Error
                    /// map version that protects against exceptions
                    let inline mapP           f    m = bindP (f >> rtn) m            
                    let iter                  fE f r = r   |> mapP f |> defaultWith fE                                                 : unit
                    let get                        r = r   |>          defaultWith (string >> failwith)
                    let ofOption              f   vO = vO  |> Option.map Ok           |> Option.defaultWith (f >> Error)
                    let insertO                  vRO = vRO |> Option.map(map Some)    |> Option.defaultWith(fun () -> Ok None)
                    let absorbO               f  vOR = vOR |> bindP (ofOption f)
                    let (>>=)                    r f = bind f r
                    let traverseSeq           f   sq = let folder head tail = f head >>= (fun h -> tail >>= (fun t -> List.Cons(h,t) |> rtn))
                                                       Array.foldBack folder (Seq.toArray sq) (rtn List.empty) |> map Seq.ofList
                    let inline sequenceSeq        sq = traverseSeq id sq
                        
                    
                    type Builder() =
                        member inline this.Return          x       = rtn  x
                        member inline this.ReturnFrom      x       =     (x:Result<_,_>)
                        member        this.Bind           (w , r ) = Result.bind  r w
                        member inline this.Zero           ()       = rtn ()
                        member inline this.Delay           f       = f
                        member inline this.Combine        (a, b)   = bind b a
                        member inline this.Run             f       = Ok () |> bindP f
                        member this.TryWith   (body, handler     ) = try body() with e -> handler     e
                        member this.TryFinally(body, compensation) = try body() finally   compensation()
                        member this.Using     (disposable, body  ) = using (disposable:#System.IDisposable) body
                        member this.While(guard, body) =
                            let rec whileLoop guard body =
                                if guard() then body() |> bind (fun () -> whileLoop guard body)
                                else rtn   ()
                            whileLoop guard body
                        member this.For(sequence:seq<_>, body) =
                            this.Using(sequence.GetEnumerator(),fun enum -> 
                                this.While(enum.MoveNext, 
                                    this.Delay(fun () -> body enum.Current)))
                                    
                    let result = Builder()
                    
                    module Operators =
                        let inline (|>>) v f   = mapP  f v
                        let inline (>>=) v f   = bindP f v
                        let inline (>>>) f g v = f v |>> g
                        let inline (>=>) f g v = f v >>= g
                        let inline rtn   v     = rtn    v
                        let result = result
                
                
                type ResultM<'v, 'm> = ResultM of Option<'v> * ResultMessage<'m>
                
                let inline OkM              v    = ResultM (Some v, NoMsg)
                let inline OkMWithMsg       v m  = ResultM(Some v, m)
                //let inline OkMWithMsgs      v ms = ms |> ResultMessage.reduceMsgs |> OkMWithMsg v
                
                let inline ErrorM             m  = ResultM (None  , m    )
                //let inline ErrorMWithMsgs     ms = ms |> ResultMessage.reduceMsgs |> ErrorM
                let (|OkM|ErrorM|)             r = match r with
                                                    | ResultM(Some v, m) -> OkM   (v, m)
                                                    | ResultM(None  , e) -> ErrorM e
                module ResultM =
                
                    type CheckError<'T> = CheckErrorF of ('T -> bool)
                    let checkError   () = CheckErrorF (fun _ -> true )
                    let checkErrorW  () = CheckErrorF (fun _ -> false)
                
                    let inline rtn                 v = OkM v
                    let inline rtnM                m = OkMWithMsg () m
                    let inline rtnr               vR = vR  |> Result.map OkM          |> Result.defaultWith       ErrorM
                    let freeMessage                r = r   |> function Ok v -> Ok v   | Error e -> ResultMessage.freeMessage e |> Error
                    let inline toResult            r = match r with
                                                       | ResultM(Some v, _) -> Ok     v
                                                       | ResultM(None  , e) -> Error  e
                    let inline toResultD           r = match r with
                                                       | ResultM(Some v, m) -> Ok    (v, m)
                                                       | ResultM(None  , e) -> Error  e
                    let toOption                   r = r   |> function ResultM (v,_) -> v
                    let defaultWith              f r = r   |> toResult |> Result.defaultWith   f
                    let defaultValue             d r = r   |> toResult |> Result.defaultValue  d
                    let map         f  (ResultM (v, m)) = ResultM (v |> Option.map f, m)
                    let mapMessage  fM (ResultM (v, m)) = ResultM (v, fM m)
                    let bind                  f    r = match r with
                                                       | ResultM(Some v, m) -> f v |> mapMessage (ResultMessage.addMsg m)
                                                       | ResultM(None  , e) -> ResultM(None  , e)
                    /// bind version that protects against exceptions
                    let bindP                 f    r = match r with
                                                       | ResultM(Some v, m) -> try f v |> mapMessage (ResultMessage.addMsg m)
                                                                               with  e -> ExceptMsg (e.Message, e.StackTrace) |> ErrorM
                                                       | ResultM(None  , e) -> ResultM(None  , e)
                    let bindM                 f    m = rtnM m |> bindP f
                
                    let check (CheckErrorF k) vR = vR |> function ResultM(Some _, m) when ResultMessage.isFatalF k m -> ErrorM m |_-> vR
                
                    /// map version that protects against exceptions
                    let inline mapP           f    m = bindP (f >> rtn) m
                    let iter                  fM f r = r   |> mapP f |> function | ResultM(Some (), m) -> () | ResultM(None, m) -> fM m  : unit
                    let get                        r = r   |>          defaultWith (string >> failwith)
                    let ofOption              f   vO = vO  |> Option.map OkM          |> Option.defaultWith (f >> ErrorM)
                    let ofResult                  vR = vR  |> rtnr
                    let insertO                  vRO = vRO |> Option.map(map Some)    |> Option.defaultWith(fun () -> OkM None)
                    let absorbO               f  vOR = vOR |> bindP (ofOption f)
                    let addMsg                  m  r = r |> mapMessage (ResultMessage.addMsg m)
                    let failIfFatalMsgF         f  r = r |> function OkM (v, m) when ResultMessage.isFatalF f m -> ErrorM m |_-> r
                    let failIfFatalMsg             r = r |> function OkM (v, m) when ResultMessage.isFatal    m -> ErrorM m |_-> r
                    let failIfFatalMsgW            r = r |> function OkM (v, m) when ResultMessage.isFatalW   m -> ErrorM m |_-> r
                    let (>>=)                    r f = bind f r
                    let rec    traverseSeq    f   sq = let folder head tail = f head >>= (fun h -> tail >>= (fun t -> List.Cons(h,t) |> rtn))
                                                       Array.foldBack folder (Seq.toArray sq) (rtn List.empty) |> map Seq.ofList
                    let inline sequenceSeq        sq = traverseSeq id sq
                        
                    
                    type Builder() =
                        member inline __.Return          x       = rtn  x
                        member inline __.ReturnFrom      x       =     (x:ResultM<_,_>)
                        member inline __.ReturnFrom      x       =     (x:Result< _,_>)
                        member inline __.ReturnFrom      x       = rtnM x
                        member        __.Bind           (w , r ) = bindP  r w
                        member        __.Bind           (w , r ) = bindM  r w
                        member inline __.Zero           ()       = rtn ()
                        member inline __.Delay           f       = f
                        member inline __.Combine        (a, b)   = a |> bind b
                        member inline __.Run             f       = OkM () |> bindP f
                        member __.TryWith   (body, handler     ) = try body() with e -> handler     e
                        member __.TryFinally(body, compensation) = try body() finally   compensation()
                        member __.Using     (disposable, body  ) = using (disposable:#System.IDisposable) body
                        member __.While(guard, body) =
                            let rec whileLoop guard body =
                                if guard() then body() |> bind (fun () -> whileLoop guard body)
                                else rtn   ()
                            whileLoop guard body
                        member this.For(sequence:seq<_>, body) =
                            this.Using(sequence.GetEnumerator(),fun enum -> 
                                this.While(enum.MoveNext, 
                                    this.Delay(fun () -> body enum.Current)))
                                    
                    module Operators =
                        let inline (|>>) v f   = mapP  f v
                        let inline (>>=) v f   = bindP f v
                        let inline (>>>) f g v = f v |>> g
                        let inline (>=>) f g v = f v >>= g
                        let inline rtn   v     = rtn    v
                
                [< AutoOpen >]
                module ResultMAutoOpen =
                    open ResultM
                    
                    let resultM = Builder()
                    
                
                
                type AsyncResultM<'v, 'm> = Async<ResultM<'v, 'm>>
                
                /// A computation expression to build an Async<Result<'ok, 'error>> value
                module AsyncResultM =
                    let mapError fE v  = v |> Async.map (ResultM.mapMessage fE)
                    let freeMessage v  = v |> Async.map  ResultM.freeMessage
                
                    let rtn         v   = async.Return(OkM v  )
                    let rtnr        vR  = async.Return(ResultM.rtnr vR)
                    let rtnR        vR  = async.Return    vR
                    let rtnM        vM  = async.Return(ResultM.rtnM vM)
                    let rtnrA       vrA = vrA |> Async.map    ResultM.ofResult
                    let errorMsgf   v   = async.Return(errorMsgf v |> ErrorM )
                    let iterS  fE f vRA = Async.iterS (ResultM.iter fE f) vRA
                    let iterA  fE f vRA = Async.iterA (ResultM.iter fE f) vRA
                    let iterpS    f vRA = vRA |> iterS (ResultMessage.summarized >> print) f
                    let iterpA    f vRA = vRA |> iterA (ResultMessage.summarized >> print) f
                    let bind  (fRA:'a -> Async<ResultM<'b,'c>>)  (vRA: Async<ResultM<'a,'c>>) : Async<ResultM<'b,'c>>= async {
                        try 
                            let!  vR = vRA
                            match vR with
                            | OkM   (v, m) -> return! fRA   v |> Async.map (ResultM.addMsg m)
                            | ErrorM    m  -> return  ErrorM m
                        with  e -> return ExceptMsg (e.Message, e.StackTrace) |> ErrorM
                    }
                    let inline bindr  f a  = rtnr   a |> bind f : AsyncResultM<_,_>
                    let inline bindM  f a  = rtnM   a |> bind f : AsyncResultM<_,_>
                    let inline bindrA f a  = rtnrA  a |> bind f : AsyncResultM<_,_>
                    let inline bindR  f a  = rtnR   a |> bind f : AsyncResultM<_,_>
                    let inline map    f m = bind  (f >> rtn) m            
                    let rec whileLoop cond fRA =
                        if   cond () 
                        then fRA  () |> bind (fun () -> whileLoop cond fRA)
                        else rtn  ()
                    let (>>=)                              v f = bind f v
                    let rec    traverseSeq     f            sq = let folder head tail = f head >>= (fun h -> tail >>= (fun t -> List.Cons(h,t) |> rtn))
                                                                 Array.foldBack folder (Seq.toArray sq) (rtn List.empty) |> map Seq.ofList
                    let inline sequenceSeq                  sq = traverseSeq id sq
                    let insertO   vRAO                         = vRAO |> Option.map(map Some) |> Option.defaultWith(fun () -> rtn None)
                    let insertR ( vRAR:Result<_,_>)            = vRAR |> function | Error m -> rtn (Error m) | Ok v -> map Ok v
                    let absorbR   vRRA                         = vRRA |> Async.map (ResultM.bindP   id)
                    let absorbO f vORA                         = vORA |> Async.map (ResultM.absorbO  f)
                    let getResultM       (a:AsyncResultM<_,_>) = a    |> Async.map  OkM   
                    type AsyncResultMBuilder() =
                        member __.ReturnFrom vRA        : Async<ResultM<'v  , 'm>> =           vRA
                        member __.ReturnFrom vR         : Async<ResultM<'v  , 'm>> = rtnr      vR
                        member __.ReturnFrom vR         : Async<ResultM<unit, 'm>> = rtnM      vR
                        member __.ReturnFrom vR         : Async<ResultM<'v  , 'm>> = rtnR      vR
                        member __.ReturnFrom vR         : Async<ResultM<'v  , 'm>> = rtnrA     vR
                        member __.Return     v          : Async<ResultM<'v  , 'm>> = rtn       v  
                        member __.Zero       ()         : Async<ResultM<unit, 'm>> = rtn       () 
                        member __.Bind      (vRA,  fRA) : Async<ResultM<'b  , 'm>> = bind fRA  vRA
                        member __.Bind       (w , r )                              = bindr   r w
                        member __.Bind       (w , r )                              = bindM   r w
                        member __.Bind       (w , r )                              = bindR   r w
                        member __.Bind       (w , r )                              = bindrA  r w
                        member __.Combine   (vRA,  fRA) : Async<ResultM<'b  , 'm>> = bind fRA  vRA
                        member __.Combine   (vR ,  fRA) : Async<ResultM<'b  , 'm>> = bind fRA (vR  |> rtnR)
                        member __.Delay            fRA                             = fRA
                        member __.Run              fRA                             = rtn () |> bind fRA
                        member __.TryWith   (fRA , hnd) : Async<ResultM<'a  , 'm>> = async { try return! fRA() with e -> return! hnd e  }
                        member __.TryFinally(fRA , fn ) : Async<ResultM<'a  , 'm>> = async { try return! fRA() finally   fn  () }
                        member __.Using(resource , fRA) : Async<ResultM<'a  , 'm>> = async.Using(resource,       fRA)
                        member __.While   (guard , fRA) : Async<ResultM<unit, 'a>> = whileLoop guard fRA 
                        member th.For  (s: 'a seq, fRA) : Async<ResultM<unit, 'b>> = th.Using(s.GetEnumerator (), fun enum ->
                                                                                        th.While(enum.MoveNext,
                                                                                            th.Delay(fun () -> fRA enum.Current)))
                
                [<AutoOpen>]
                module AsyncResultMAutoOpen =
                    open AsyncResultM
                
                    let asyncResultM = AsyncResultMBuilder()
                
                    // Having Async<_> members as extensions gives them lower priority in
                    // overload resolution between Async<_> and Async<Result<_,_>>.
                    type AsyncResultMBuilder with
                    member __.ReturnFrom (vA: Async<_>     ) : Async<ResultM<_,_>> =           Async.map OkM vA
                    member __.Bind       (vA: Async<_>, fRA) : Async<ResultM<_,_>> = bind fRA (Async.map OkM vA)
                    member __.Combine    (vA: Async<_>, fRA) : Async<ResultM<_,_>> = bind fRA (Async.map OkM vA)
                
            type System.String with
                member this.Substring2(from, n) = 
                    if   n    <= 0           then ""
                    elif from <  0           then this.Substring2(0, n + from)
                    elif from >= this.Length then ""
                    else this.Substring(from, min n (this.Length - from))
                member this.Left             n  = if n < 0 
                                                  then this.Substring2(0, this.Length + n)
                                                  else this.Substring2(0, n              )
                member this.Right            n  = this.Substring2(max 0 (this.Length - n), this.Length)
            
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
                
            
            module ParseO =
                let tryParseWith tryParseFunc = tryParseFunc >> function
                        | true, v    -> Some v
                        | false, _   -> None
            
            
                /// Javascript adds time zone information when parsing a date and that can change the result
                let parseDateO2  = (fun s -> s + "T00:00:00") >> tryParseWith System.DateTime.TryParse
                let parseDateO   = tryParseWith System.DateTime.TryParse
                let parseIntO    = tryParseWith System.Int32   .TryParse
                let parseInt64O  = tryParseWith System.Int64   .TryParse
                let parseSingleO = tryParseWith System.Single  .TryParse
                let parseDoubleO = tryParseWith System.Double  .TryParse
                let parseGuidO   = tryParseWith System.Guid    .TryParse
                // etc.
                
                // active patterns for try-parsing strings
                let (|Date  |_|) = parseDateO
                let (|Int   |_|) = parseIntO
                let (|Int64 |_|) = parseInt64O
                let (|Single|_|) = parseSingleO
                let (|Double|_|) = parseDoubleO
                let (|Guid  |_|) = parseGuidO
                
            module Serializer =
                open System
            
                type JsonIntermediate = {
                    tryFloat    : unit   ->  float                option
                    tryInt      : unit   ->  int64                option
                    tryString   : unit   ->  string               option
                    tryBool     : unit   ->  bool                 option
                    tryArray    : unit   -> (JsonIntermediate []) option
                    tryField    : string ->  JsonIntermediate     option
                    isObject    : unit   ->  bool
                    isNull      : unit   ->  bool
                }
            
                type SerS<'T> = ('T                 -> string   )        //      Serialization function
                type SerD<'T> = (JsonIntermediate   -> 'T option)        //    deSerialization function
                type Ser< 'T> = SerS<'T> * SerD<'T>                      // both Serialization functions
            
                let serialize (ser: Ser<_>) v = fst ser v
                let (|Field|_|) field j = j.tryField field
            
                let [< Inline >] inline sprintU v = sprintf "%A"       v
                let [< Inline >] inline sprintQ v = sprintf "\"%A\""   v
                let              inline sprintA v = String.concat ", " v |> sprintf "[%s]"
            
                let toJsonString (v:string) =
                    seq {
                        yield '"'
                        if String.IsNullOrEmpty v |> not then
                            for i = 0 to v.Length - 1 do
                                let c = v.[i]
                                let ci = int c
                                if ci >= 0 && ci <= 7 || ci = 11 || ci >= 14 && ci <= 31 then
                                    yield! sprintf "\\u%04x" ci
                                else 
                                match c with
                                | '\b' -> yield! "\\b"
                                | '\t' -> yield! "\\t"
                                | '\n' -> yield! "\\n"
                                | '\f' -> yield! "\\f"
                                | '\r' -> yield! "\\r"
                                | '"'  -> yield! "\\\""
                                | '\\' -> yield! "\\\\"
                                | _    -> yield c
                        yield '"'
                    } |> Seq.toArray|> String
            
                let serString : Ser<string> = toJsonString , (fun j -> j.tryString() )
                let serFloat  : Ser<float > = sprintU      , (fun j -> j.tryFloat () )
                let serInt    : Ser<int   > = sprintU      , (fun j -> j.tryInt   () |> Option.map int)
                let serInt64  : Ser<int64 > = sprintf "%d" , (fun j -> j.tryInt   () )
                let serBool   : Ser<bool  > = sprintU      , (fun j -> j.tryBool  () )
            
                let [< Inline >] inline serId  (get: 'a -> System.Guid) (set:System.Guid -> 'a) (print: 'a->string) : Ser<'a> =
                    let s               = System.Guid.Empty |> set |> print |> fun (s:string) -> s.Split ' ' |> Array.head
                    let sQ              = sprintf "%A" s
                    let serialize   gid = get gid |> string |> sprintf "{%10s :%A}" sQ
                    let deserialize j   = j.tryField s 
                                          |> Option.bind (fun jf -> jf.tryString() ) 
                                          |> Option.bind ParseO.parseGuidO 
                                          |> Option.map  set
                    serialize, deserialize
            
                let serField (name:string) (get:'D->'e) (set:'e->'D->'D) (serFuncs:Ser<'e>) : string * SerS<'D> * ('D -> SerD<'D>) = 
                    serFuncs |> fun (ser, deser) -> name, get >> ser, (fun rc j -> deser j |> Option.map (fun v -> set v rc) ) 
                    
                let [< Inline >] serRecord init (fields: #seq<(string * SerS<'D> * ('D -> SerD<'D>))>) : Ser<'D> =
                    if isNull (init :> obj) then failwith "Initial record is null"
                    let serialize   dim = fields |> Seq.map  (fun     (n,  ser, _deser) -> sprintf "%A: %s" n (ser dim)) |> String.concat ", " |> sprintf "{%s}"
                    let deserialize j   = fields |> Seq.fold (fun dim (n, _ser,  deser) -> j.tryField n |> Option.bind (deser dim) |> Option.defaultValue dim)   init |> Some
                    serialize, deserialize
                
                let serSeq (ser:Ser<'D>) : Ser<'D seq     > = (Seq   .map (fst ser) >> sprintA                                 ), (fun j -> j.tryArray () |> Option.map (Array.choose (snd ser)) |> Option.map Seq.ofArray)
                let serArr (ser:Ser<'D>) : Ser<'D []      > = (Array .map (fst ser) >> sprintA                                 ), (fun j -> j.tryArray () |> Option.map (Array.choose (snd ser))                          )
                let serLst (ser:Ser<'D>) : Ser<'D list    > = (List  .map (fst ser) >> sprintA                                 ), (fun j -> j.tryArray () |> Option.map (Array.choose (snd ser)) |> Option.map Seq.toList )
                let serSet (ser:Ser<'D>) : Ser<Set<'D>    > = (Set   .map (fst ser) >> sprintA                                 ), (fun j -> j.tryArray () |> Option.map (Array.choose (snd ser)) |> Option.map Set        )
                let serOpt (ser:Ser<'D>) : Ser<'D option  > = (Option.map (fst ser) >> Option.defaultValue "null"              ), (fun j -> (if j.isNull() then None else              snd ser j)|> Some                  )
                let serDup(serFst,serSnd): Ser<'a * 'b    > = (fun (f,s  ) -> sprintf "[%s, %s]" (fst serFst f) (fst serSnd s) ), (fun j -> j.tryArray () 
                                                                                                                                            |> function 
                                                                                                                                                | Some [| j1 ; j2 |] -> match snd serFst j1, snd serSnd j2 with
                                                                                                                                                                        | Some f, Some s -> Some(f, s) |_->None
                                                                                                                                                | _ -> None )
                let serTrp(sF,sS,sT)      : Ser<'a *'b*'c > = (fun (f,s,t) -> sprintf "[%s, %s, %s]" (fst sF f) (fst sS s)  (fst sT t)) , (fun j -> j.tryArray () 
                                                                                                                                                    |> function 
                                                                                                                                                        | Some [| j1 ;j2; j3|]   -> match snd sF j1, snd sS j2, snd sT j3 with
                                                                                                                                                                                    | Some f, Some s, Some t -> Some(f, s, t) |_-> None
                                                                                                                                                        | _ -> None ) 
                let serMap serKey serElm : Ser<Map<'k, 'e>> =   serDup(serKey, serElm)
                                                                |> serSeq 
                                                                |> (fun serKVPs -> (Seq.map (fun kvp -> kvp.Key, kvp.Value) >> fst serKVPs) , (snd serKVPs >> Option.map Map) )
            
            
        /// Essentials that cannot run in Javascript (WebSharper)
        [< AutoOpen >]
        module LibraryNoJS =
            let rec getNamespace (t:System.Type) =
                match t.DeclaringType with
                | null -> match t.Namespace with null -> "" | ns -> ns + "."
                | dt   -> getNamespace dt + dt.Name + "."
            
            let rec getTypeName (t:System.Type) =
                if t.IsArray then getTypeName (t.GetElementType()) + "[]" else
                let ns    = getNamespace t
                let name  = if   t.Name = "FSharpOption`1"                then "Option"
                            elif t.Name = "FSharpList`1"                  then "List"
                            elif ns     = "Microsoft.FSharp.Core."
                              || ns     = "Microsoft.FSharp.Collections." then t.Name   
                            else  ns + t.Name
                let name2 = name.Split('`').[0]
                let parms = t.GenericTypeArguments |> Seq.map getTypeName |> String.concat ","
                if parms = "" then name2 else sprintf "%s<%s>" name2 parms
            
            module DiscUnion =
                open FSharp.Reflection
            
                let simple<'U> =
                    FSharpType.GetUnionCases typeof<'U>
                    |> Seq.filter (fun c -> c.GetFields() |> Seq.isEmpty )
                    |> Seq.map (fun c -> c.Name)
                    |> Seq.toArray
            
                let caseTuple (v:'T) = 
                    let c, vs = FSharpValue.GetUnionFields(v, typeof<'T>)
                    let types = c.GetFields() |> Array.map (fun p -> p.PropertyType)
                    if types.Length = 1 then c.Name, types.[0], vs.[0] else
                    let ttype = FSharpType.MakeTupleType(types)
                    c.Name, ttype, FSharpValue.MakeTuple(vs, ttype)
            
                let caseArray (v:'T) = 
                    let c, vs = FSharpValue.GetUnionFields(v, typeof<'T>)
                    let types = c.GetFields() |> Array.map (fun p -> p.PropertyType.FullName)
                    c.Name, Array.zip types vs
            
                let caseInfos<'T>            = FSharpType.GetUnionCases typeof<'T>
                let caseInfo< 'T> (s:string) = caseInfos<'T> |> Seq.find (fun c -> c.Name = s)
            
            //#r @"..\packages\FSharp.Data\lib\net45\FSharp.Data.dll"
            module Serializer =
                open Serializer
                open FSharp.Data
            
                let rec getJsonIntermediate df di ds db da (j:JsonValue) : JsonIntermediate =
                    let jsonInt = getJsonIntermediate df di ds db da
                    {
                        tryFloat    = fun () -> (match j with JsonValue.Float   v ->       v |> Some | JsonValue.Number v -> float v |> Some    |_-> None) |> Option.orElseWith df
                        tryInt      = fun () -> (match j with JsonValue.Float   v -> int64 v |> Some | JsonValue.Number v -> int64 v |> Some    |_-> None) |> Option.orElseWith di
                        tryString   = fun () -> (match j with JsonValue.String  v ->       v |> Some                                            |_-> None) |> Option.orElseWith ds
                        tryBool     = fun () -> (match j with JsonValue.Boolean v ->       v |> Some                                            |_-> None) |> Option.orElseWith db
                        tryArray    = fun () -> (match j with JsonValue.Array   v ->       v |> Array.map jsonInt |> Some                       |_-> None) |> Option.orElseWith (fun () -> da  jsonInt   )
                        tryField    = fun fl -> j.TryGetProperty fl |> Option.map jsonInt                                                                 
                        isObject    = fun () -> (match j with JsonValue.Record  _ ->       true |_-> false)
                        isNull      = fun () -> (match j with JsonValue.Null      ->       true |_-> false)
                    }
            
            
                let deserialize df di ds db da (ser: Serializer.Ser<_>) js = 
                    JsonValue.TryParse js //|>! print
                    |> Option.map  (getJsonIntermediate df di ds db da)
                    |> Option.bind (snd ser)
            
                let tryDeserialize ser = 
                    deserialize
                        (fun _   -> None)
                        (fun _   -> None)
                        (fun _   -> None)
                        (fun _   -> None)
                        (fun _   -> None)
                        ser
            
                let deserializeWithDefs ser = 
                    deserialize
                        (fun _   -> Some 0.0                          )
                        (fun _   -> Some 0L                           )
                        (fun _   -> Some ""                           )
                        (fun _   -> Some false                        )
                        (fun _   -> Some [||]                         )
                        ser
            
                let deserializeWithFail ser = 
                    deserialize
                        (fun _   -> failwith  "Error expecting float"    )
                        (fun _   -> failwith  "Error expecting int"      )
                        (fun _   -> failwith  "Error expecting string"   )
                        (fun _   -> failwith  "Error expecting bool"     )
                        (fun _   -> failwith  "Error expecting array"    )
                        ser
            
                open FSharp.Reflection
            
                let inline serObj ((ser, deser):Ser<'T>) : string * Ser<obj> = typeof<'T> |> getTypeName, (unbox >> ser, deser >> Option.map box)
            
                let serDU<'DU when 'DU : equality> (sers : (string * Ser<obj>) seq) =
                    let cases  = FSharpType.GetUnionCases             typeof<'DU>
                    let dCases =
                        cases
                        |> Array.map (fun case ->
                            if case.GetFields().Length = 0 then
                                let serC         _ = sprintf "{%A:1}" case.Name
                                let deserC       _ = FSharpValue.MakeUnion(case, [||]) :?> 'DU |> Some 
                                case.Tag, (serC, deserC)
                            else
                                let sers2 =
                                    case.GetFields() |> Array.map(fun fld ->
                                        let tn = fld.PropertyType  |> getTypeName
                                        sers 
                                        |> Seq.tryPick(fun (nm, ser) -> if nm = tn then Some ser else None)
                                        |> Option.defaultWith (fun () -> 
                                            sers |> Seq.map fst |> String.concat ", "
                                            |> failwithf "serDU: Could not find Ser<%s> for %s. Provided: %s" tn (typeof<'DU> |> getTypeName) 
                                        )
                                    ) 
                                let getValues      = box<'DU> >> FSharpValue.PreComputeUnionReader case 
                                let setValues      = FSharpValue.PreComputeUnionConstructor case >> unbox<'DU>
                                let serC (v:'DU) =
                                    Seq.zip (getValues v) sers2
                                    |> Seq.map (fun (vi, seri) -> fst seri vi )
                                    |> String.concat ", "
                                    |> sprintf "{%A:[%s]}" case.Name
                                let deserC (j:JsonIntermediate) = 
                                    match j with 
                                    | Field case.Name j2 ->
                                        match j2.tryArray () with
                                        | None -> None
                                        | Some js -> 
                                        Array.zip js sers2
                                        |> Array.choose (fun (ji, seri) -> snd seri ji)
                                        |> setValues
                                        |> Some
                                    |_-> None 
                                case.Tag, (serC, deserC)
                        ) |> dict
                    let readTag   = box<'DU> >> FSharpValue.PreComputeUnionTagReader typeof<'DU> >> fun i -> dCases.[i]
                    let serDU   v = (readTag v |> fst) v
                    let deserDU j =
                        let case =  cases |> Seq.tryPick(fun case -> match j with Field case.Name _ -> Some case |_-> None) |> Option.defaultWith (fun () -> failwithf "Could not find DU element %A" j)
                        snd dCases.[case.Tag] j
                    serDU, deserDU
            
                let serDUt (sers : (string * Ser<obj>) seq) (ttype:System.Type) =
                    let cases  = FSharpType.GetUnionCases ttype
                    let dCases =
                        cases
                        |> Array.map (fun case ->
                            if case.GetFields().Length = 0 then
                                let serC         _ = sprintf "{%A:1}" case.Name
                                let deserC       _ = FSharpValue.MakeUnion(case, [||]) :?> 'DU |> Some 
                                case.Tag, (serC, deserC)
                            else
                                let sers2 =
                                    case.GetFields() |> Array.map(fun fld ->
                                        let tn = fld.PropertyType |> getTypeName
                                        sers 
                                        |> Seq.tryPick(fun (nm, ser) -> if nm = tn then Some ser else None)
                                        |> Option.defaultWith (fun () -> 
                                            sers |> Seq.map fst |> String.concat ", "
                                            |> failwithf "serDU: Could not find Ser<%s> for %s. Provided: %s" tn (ttype |> getTypeName) 
                                        )
                                    ) 
                                let getValues      = FSharpValue.PreComputeUnionReader case 
                                let setValues      = FSharpValue.PreComputeUnionConstructor case
                                let serC v =
                                    Seq.zip (getValues v) sers2
                                    |> Seq.map (fun (vi, seri) -> fst seri vi )
                                    |> String.concat ", "
                                    |> sprintf "{%A:[%s]}" case.Name
                                let deserC (j:JsonIntermediate) = 
                                    match j with 
                                    | Field case.Name j2 ->
                                        match j2.tryArray () with
                                        | None -> None
                                        | Some js -> 
                                        Array.zip js sers2
                                        |> Array.choose (fun (ji, seri) -> snd seri ji)
                                        |> setValues
                                        |> Some
                                    |_-> None 
                                case.Tag, (serC, deserC)
                        ) |> dict
                    let readTag   = FSharpValue.PreComputeUnionTagReader ttype >> fun i -> dCases.[i]
                    let serDU   v = (readTag v |> fst) v
                    let deserDU j =
                        let case =  cases |> Seq.pick(fun case -> match j with Field case.Name _ -> Some case |_-> None)
                        snd dCases.[case.Tag] j
                    serDU, deserDU
                    
            module Default =
                open FSharp.Reflection
            
                let defaults vs = vs |> Seq.map (fun v -> v.GetType().FullName, v ) |> dict
            
                let defs = 
                    defaults [
                        box 0
                        box 0L
                        box 0.
                        box 0.F
                        box ""
                        box false
                        box System.Guid.Empty
                        box System.DateTime.MinValue
                    ]
            
                let rec defaultValue defs (t:System.Type) : obj =
                    match (defs:System.Collections.Generic.IDictionary<string, obj>).TryGetValue t.FullName with
                    | true , v -> v
                    | false, _ ->
                    if t.IsArray then 
                        System.Array.CreateInstance(t.GetElementType(), 0) |> box
                    else        
                    let c = t.GetConstructor System.Type.EmptyTypes
                    if  isNull c |> not then
                        c.Invoke [||]
                    elif FSharpType.IsRecord t then
                        FSharpType.GetRecordFields t
                        |> Array.map (fun fld -> fld.PropertyType )
                        |> createArray (defaultValue defs)
                        |> fun os -> FSharpValue.MakeRecord(t, os)
                    elif FSharpType.IsTuple t then
                        FSharpType.GetTupleElements t
                        |> createArray (defaultValue defs)
                        |> fun os -> FSharpValue.MakeTuple(os, t)
                    elif FSharpType.IsUnion t then
                        let case = FSharpType.GetUnionCases t |> Seq.head
                        case.GetFields()
                        |> Array.map (fun fld -> fld.PropertyType )
                        |> createArray (defaultValue defs)
                        |> fun os -> FSharpValue.MakeUnion(case, os)
                    else failwithf "Could no create default for %s" t.FullName
            
                and createArray defs (ts : System.Type []) = ts |> Array.map defs
            
                let inline value<'T> : 'T = typeof<'T> |> defaultValue defs |> unbox
            
            
    
    module Prozper =
        [< AutoOpen >]
        module TypesV0 =
            type LatestType = TypeV0
        
            type IdAliado     = IdAliado     of string          with member this.Id = match this with IdAliado    id -> id
            type IdAuthorize  = IdAuthorize  of string          with member this.Id = match this with IdAuthorize id -> id
            type IdAddress    = IdAddress    of string          with member this.Id = match this with IdAddress   id -> id
            type IdPayment    = IdPayment    of string          with member this.Id = match this with IdPayment   id -> id
        
            type StatusAliado =
            | CuentaCreada
            | DatosBancariosIngresados
            | Activo
            | Inactivo
                with
                    override this.ToString() = sprintf "%A" this
        
            type TipoAliado =
            | Master
            | Regular
                with
                    override this.ToString() = sprintf "%A" this
        
            type Pais =
            | USA
            | Venezuela 
            | Argentina
            | OtroP of string
                with 
                    static member tryParse (s:string) = 
                        match s.Trim().ToUpper() with
                        | ""               -> None    
                        | "EEUU" | "UNITED STATES"  | "UNITED STATES OF AMERICA" | "US" | "E.E.U.U." | "AMERICA"
                        | "USA"            -> Some <| USA
                        | "VENEZUELA"      -> Some <| Venezuela
                        | "ARGENTINA"      -> Some <| Argentina
                        | _                -> Some <| (OtroP <| s.Trim() )
                    override this.ToString() = match this with OtroP s -> s | v -> sprintf "%A" v
        
            type Estado =
            | Texas
            | Florida
            | OtroS of string
                with 
                    static member tryParse (s:string) = 
                        match s.Trim().ToUpper() with
                        | ""               -> None    
                        | "TX"
                        | "TEXAS"          -> Some <| Texas
                        | "FL"
                        | "FLORIDA"        -> Some <| Florida
                        | _                -> Some <| (OtroS <| s.Trim() )
                    override this.ToString() = match this with OtroS s -> s | v -> sprintf "%A" v
        
            type Territorio =
            | Estado of Estado
        
            type Emisor =
            | Pais       of Pais
            | Territorio of Territorio
        
            type Documento =
            | Pasaporte        of string
            | Cedula           of string
            | LicenciaConducir of string
        
            type Identificacion = {
                emisor    : Emisor
                documento : Documento
                emision   : System.DateTime
                vence     : System.DateTime
            }
        
            type NumeroCuenta   = NumeroCuenta  of string       with member this.Id = match this with NumeroCuenta  id -> id
            type NumeroTarjeta  = NumeroTarjeta of string       with member this.Id = match this with NumeroTarjeta id -> id
            type Expiracion     = Expiracion    of string       with member this.Id = match this with Expiracion    id -> id
            type RoutingNumber  = RoutingNumber of string       with member this.Id = match this with RoutingNumber id -> id 
        
            type TipoTarjeta     = 
            | Visa
            | MasterCard
            | Amex
            | Otra of string
                with 
                    static member tryParse (s:string) = 
                        match s.Trim().ToUpper() with
                        | ""                 -> None    
                        | "VISA"             -> Some <| Visa
                        | "MASTERCARD"       -> Some <| MasterCard
                        | "AMEX"
                        | "AMERICAN EXPRESS" -> Some <| Amex
                        | _                  -> Some <| (Otra <| s.Trim() )
                    override this.ToString() = match this with Otra s -> s | v -> sprintf "%A" v
        
            type TipoCuenta     = 
            | Ahorro
            | Corriente
            | Otra of string
                with 
                    static member tryParse (s:string) = 
                        match s.Trim().ToUpper() with
                        | ""               -> None    
                        | "SAVINGS"
                        | "AHORRO"         -> Some <| Ahorro
                        | "CHECKING"
                        | "CORRIENTE"      -> Some <| Corriente
                        | _                -> Some <| (Otra <| s.Trim() )
                    override this.ToString() = match this with Otra s -> s | v -> sprintf "%A" v
        
            type CuentaBancaria = {
                titular     : string
                banco       : string
                tipo        : TipoCuenta
                numero      : NumeroCuenta
                routing     : RoutingNumber
            }
        
            type TarjetaCredito = {
                titular     : string
                tipoTarjeta : TipoTarjeta
                numero      : NumeroTarjeta
                expiracion  : Expiracion
            }
        
            type ConceptoPago =
            | PagoAfiliacion
            | PagoComision
            | Otro of string
                with
                    override this.ToString() = match this with Otro s -> s | v -> sprintf "%A" v
        
            type Transaccion = {
                fechaPago      : System.DateTime
                ano            : int
                periodo        : int
                monto          : int
                idAliado       : IdAliado
                concepto       : ConceptoPago
                transaccion    : string
            }
        
            type TipoDireccion = 
            | Habitacion
            | Oficina
            | ServicioPostal
            | Otro of string
                with 
                    static member tryParse (s:string) = 
                        match s.Trim() with
                        | ""               -> None    
                        | "Habitacion"     -> Some <| Habitacion
                        | "Oficina"        -> Some <| Oficina
                        | "ServicioPostal" -> Some <| ServicioPostal
                        | s                -> Some <| Otro s
                    override this.ToString() = match this with Otro s -> s | v -> sprintf "%A" v
        
            type ZonaPostal = ZonaPostal of string
                with 
                    static member tryParse (s:string) = if s.Trim() <> "" then Some (ZonaPostal <| s.Trim()) else None
                    override this.ToString() = match this with ZonaPostal s -> s
        
            type Direccion = {
                authorizeIdR  : Result<IdAddress, string>
                tipoDireccion : TipoDireccion
                linea1        : string
                linea2        : string
                ciudad        : string
                estado        : Estado
                pais          : Pais
                zonaPostal    : ZonaPostal
            }
        
            type CorreoElectronico = EMail    of string
                with override this.ToString() = match this with EMail c -> c
                
            type TipoTelefono =
            | Movil
            | Oficina
            | Habitacion
            | Voip
                with 
                    static member tryParse = function
                        | "Movil"      -> Some Movil
                        | "Oficina"    -> Some Oficina
                        | "Habitacion" -> Some Habitacion
                        | _            -> None    
                    override this.ToString() = sprintf "%A" this
        
            type Telefono          = {
                tipoTelefono : TipoTelefono
                codigoPais   : string
                codigoArea   : string
                numero       : string
                extension    : string
                mensajes     : bool
            }
        
            type Contacto =
            | Direccion         of Direccion
            | CorreoElectronico of CorreoElectronico
            | Telefono          of Telefono
            | Mensajeria        of string
            | PaginaWeb         of string
            | SocialMedia       of string
        
            type Genero =
            | Masculino
            | Femenino
            | Empresa
                with 
                    static member tryParse (s:string) = 
                        match s.Trim() with
                        | "Masculino"      -> Some <| Masculino
                        | "Femenino"       -> Some <| Femenino
                        | "Empresa"        -> Some <| Empresa
                        | _                -> None    
        
            type DatosPersonales = {
                titulo          : string option
                nombre1         : string
                nombre2         : string
                apellido1       : string
                apellido2       : string
                nacionalidad    : Pais
                genero          : Genero
                fechaNacimiento : System.DateTime
            }
        
            type CuentaPago =
            | CuentaBancaria            of CuentaBancaria
            | TarjetaCredito            of TarjetaCredito
            | TransferenciaElectronica  of string
        
            type StatusFormaPago =
            | NuevaFormaPago
            | Registrada      of          System.DateTime option
            | RegistroFallido of string * System.DateTime option
        
            type FormaPago = {
                nombre          : string
                authorizeIdR    : Result<IdPayment, string>
                cuentaPago      : CuentaPago
            }
        
            type TipoMensaje = 
            | Alerta
            | Informacion
            | Saludo
        
            type Remitente =
            | Prozper
            | Aliado of IdAliado
            | OtroR  of string
        
            type Mensaje = {
                tipo      : TipoMensaje
                leido     : System.DateTime option
                fecha     : System.DateTime
                texto     : string
                remitente : Remitente
            }
        
            type Aliado = {
                id              : IdAliado
                idPadreO        : IdAliado option
                datosPersonales : DatosPersonales
                contactos       : Contacto       []
                identificacion  : Identificacion []
                formasPago      : FormaPago      []
                transacciones   : Transaccion    []
                mensajes        : Mensaje        []
                isInternal      : bool
                status          : StatusAliado
                tipo            : TipoAliado
                fechaRegistro   : System.DateTime
                fechaStatus     : System.DateTime
                nReferidos      : int
                nRefActivos     : int
                nDescendientes  : int
                nDescActivos    : int
                comision        : int
                nivel           : int
            }
        
            type PremisasCalculo = {
                comisionReferidosRegular     : int
                comisionReferidosMaster      : int
                comisionDescendientesMaster  : int
                comisionDescendientesRegular : int
                montoAfiliacion              : int
                numeroReferidosMaster        : int
                diaCorte1                    : int
                diaCorte2                    : int
            }
        
            let premisasCalculo = {
                comisionReferidosRegular     = 15
                comisionReferidosMaster      = 25
                comisionDescendientesMaster  = 25
                comisionDescendientesRegular =  0
                montoAfiliacion              = 75
                numeroReferidosMaster        = 31
                diaCorte1                    = 15
                diaCorte2                    = 22
            }
        
            type Modelo = {
                idAliado      : IdAliado
                aliados       : Aliado []
                anoActual     : int
                periodoActual : int
                premisas      : PremisasCalculo
                nevento       : int64
            }
        
            let telVacio = {            
                tipoTelefono = Movil
                codigoPais   = ""
                codigoArea   = ""
                numero       = ""
                extension    = ""
                mensajes     = false
            }
        
            let dirVacio = {
                authorizeIdR  = Error ""
                tipoDireccion = TipoDireccion.Habitacion
                linea1        = ""
                linea2        = ""
                ciudad        = ""
                estado        = OtroS ""
                pais          = OtroP ""
                zonaPostal    = ZonaPostal ""
            }
        
            let tarVacio = {            
                tipoTarjeta  = Visa
                numero       = NumeroTarjeta ""
                expiracion   = Expiracion    ""
                titular      = ""
            }
        
            let ctaVacio = {            
                banco        = ""
                numero       = NumeroCuenta ""
                tipo         = Ahorro
                titular      = ""
                routing      = RoutingNumber ""
            }
        
        [< AutoOpen >]
        module TypesV1 =
            type LatestType = TypeV1
        
            type CorreoElectronico = {
                email       : string
                enviado     : System.DateTime option
                recibido    : System.DateTime option
            }
                with override this.ToString() = this.email
        
            type Contacto =
            | Direccion         of Direccion
            | CorreoElectronico of CorreoElectronico
            | Telefono          of Telefono
            | Mensajeria        of string
            | PaginaWeb         of string
            | SocialMedia       of string
        
            type Aliado = {
                id              : IdAliado
                authorizeIdR    : Result<IdAuthorize, string>
                idPadreO        : IdAliado     option
                datosPersonales : DatosPersonales
                contactos       : Contacto       []
                identificacion  : Identificacion []
                formasPago      : FormaPago      []
                transacciones   : Transaccion    []
                mensajes        : Mensaje        []
                isInternal      : bool
                status          : StatusAliado
                tipo            : TipoAliado
                fechaRegistro   : System.DateTime
                fechaStatus     : System.DateTime
                nReferidos      : int
                nRefActivos     : int
                nDescendientes  : int
                nDescActivos    : int
                comision        : int
                nivel           : int
            }
        
            type Modelo = {
                idAliado      : IdAliado
                aliados       : Aliado []
                anoActual     : int
                periodoActual : int
                premisas      : PremisasCalculo
                nevento       : int64
            }
        
            let modeloVacio = {
                idAliado      = IdAliado ""
                aliados       = [||]
                anoActual     = System.DateTime.Now.Year
                periodoActual = System.DateTime.Now.Month
                premisas      = premisasCalculo
                nevento       = 0L
            }
        
            let correoVacio = {
                email       = ""
                enviado     = None
                recibido    = None
            }
        
        
        module Aliado =
            open Operators
        
            let statusActual ano mes al  =
                al.transacciones
                |> Array.tryFind (fun t -> t.idAliado = al.id 
                                        && t.ano      = ano
                                        && t.periodo  = mes
                                        && t.concepto = PagoAfiliacion)
                |> Option.map    (fun _ ->  Activo )
                |> Option.defaultValue    Inactivo
        
            open System.Collections.Generic
        
            let premisas pre al =
                let comRef, comDes = match al.tipo  with
                                     | Regular -> pre.comisionReferidosRegular, pre.comisionDescendientesRegular
                                     | Master  -> pre.comisionReferidosMaster , pre.comisionDescendientesMaster
                match al.status with
                | Activo -> comRef, comDes
                | _      -> 0     , 0
        
            let comision pre al = 
                let comRef, comDes = premisas pre al
                al.nRefActivos * comRef, al.nDescActivos * comDes
        
            type Buscar = {
                hijosDe        : (IdAliado -> IdAliado [])
                nivelDe        : (IdAliado option -> int)
                aliado         : (IdAliado -> Aliado)
                aliadoO        : (IdAliado -> Aliado option)
                hijos          : (Aliado -> Aliado [])
                descendientes  : (Aliado -> Aliado [])
            }
        
            let busqueda aliados =
                let padres               = aliados 
                                           |> Seq.map(fun al -> al.idPadreO, al.id) 
                                           |> Seq.groupBy fst 
                                           |> Seq.map(fun (pO, ch) -> pO, ch |> Seq.map snd |> Seq.toArray) |> Map
                let aliadosMap           = aliados |> Seq.map (fun al -> al.id, al) |> Map
                let aliadoO          id  = match aliadosMap.TryGetValue id with
                                           | true, al -> Some al
                                           | _        -> None
                let aliado           id  = try aliadosMap.[id] with e -> failwithf "buscarAliado failed: %A" id
                let hijosDe          idO = match padres.TryGetValue (Some idO) with
                                           | true, hijos -> hijos
                                           | _           -> [||]
                let rec nivelDe      idO = idO |> Option.bind aliadoO |> Option.map (fun al -> 1 + nivelDe al.idPadreO) |> Option.defaultValue 0
                let hijos             al = hijosDe al.id |> Array.choose aliadoO
                let rec descendientes al =
                    [|
                        for h in hijos al do
                            yield                      h
                            yield! descendientes h
                    |]
                {
                    hijosDe       = hijosDe       
                    nivelDe       = nivelDe       
                    aliado        = aliado        
                    aliadoO       = aliadoO       
                    hijos         = hijos         
                    descendientes = descendientes 
                }
        
        
            let actualizarAliados modelo =
                let  buscar            = busqueda modelo.aliados
                let pre                = modelo.premisas
                let rec aliadoActualizado alid =
                    let al             = buscar.aliado alid
                    let hijos          = buscar.hijosDe al.id |> Seq.map aliadoActualizadoM |> Seq.cache
                    let status         = al.status //statusActual modelo.anoActual modelo.periodoActual al
                    let nReferidos     = hijos |> Seq.length
                    let nRefActivos    = hijos |> Seq.filter (fun al -> al.status = Activo && al.tipo = Regular) |> Seq.length
                    let nDescendientes = hijos |> Seq.sumBy  (fun al -> al.nDescendientes + al.nReferidos )
                    let nDescActivos   = hijos |> Seq.sumBy  (fun al -> al.nDescActivos   + al.nRefActivos)
                    let tipo           = if nRefActivos >= pre.numeroReferidosMaster then Master else Regular
                    let nivel          = 1 + buscar.nivelDe al.idPadreO
                    let al' =
                        { al with
                            status         = status
                            tipo           = tipo
                            nReferidos     = nReferidos    
                            nRefActivos    = nRefActivos   
                            nDescendientes = nDescendientes
                            nDescActivos   = nDescActivos  
                            fechaStatus    = System.DateTime()
                            nivel          = nivel
                        }
                    let comRef, comDes = comision pre al'
                    { al' with comision = comRef + comDes}
                and aliadoActualizadoM = Memoize.memoize aliadoActualizado
        
                modelo.aliados 
                |> Seq.map (fun al -> al.id)
                |> Seq.map aliadoActualizadoM
                |> Seq.toArray
        
            //let actualizarModelEf () = eff {
            //    let! modelo     = State.get()
            //    do! State.put { modelo with aliados = actualizarAliados modelo }
            //    ()
            //}
        
            let empty = {
                datosPersonales = {
                                        titulo          = None
                                        nombre1         = ""
                                        nombre2         = ""
                                        apellido1       = ""
                                        apellido2       = ""
                                        nacionalidad    = USA
                                        genero          = Masculino
                                        fechaNacimiento = System.DateTime(2000, 1, 1)
                                    }
                id              =  IdAliado ""
                authorizeIdR    =  Error ""
                idPadreO        =  None
                contactos       =  [||]
                identificacion  =  [||]
                formasPago      =  [||]
                transacciones   =  [||]
                mensajes        =  [||]
                isInternal      =  false
                status          =  Inactivo
                tipo            =  Regular
                fechaRegistro   =  System.DateTime(2000, 1, 1)
                fechaStatus     =  System.DateTime(2000, 1, 1)
                nReferidos      =  0
                nRefActivos     =  0
                nDescendientes  =  0
                nDescActivos    =  0
                comision        =  0
                nivel           =  0
            }
        
            let nombre dp = 
                let titulo   = dp.titulo |> Option.map ((+) " ") |> Option.defaultValue ""
                let apellido = if dp.apellido1 = "" then "" else (dp.apellido1 + " " + dp.apellido2).Trim() + ", "
                titulo + apellido + dp.nombre1 + " " + dp.nombre2
        
            let nombre2 dp = 
                let titulo   = dp.titulo |> Option.map ((+) " ") |> Option.defaultValue ""
                titulo + (dp.nombre1 + " " + dp.nombre2).Trim() + " " + (dp.apellido1 + " " + dp.apellido2).Trim()
        
        type DataEvento =
        | AgregarAliados            of (Aliado[]                                                   )
        | AgregarAliado             of (Aliado                                                     )
        | InvitarPotencialesAliados of (IdAliado * string []                                       )
        | RegistroNuevo             of (IdAliado * DatosPersonales * IdAliado option * Contacto [] )
        | ActualizarDatosPersonales of (IdAliado * DatosPersonales                                 )
        | ActualizarContactos       of (IdAliado * Contacto  []                                    )
        | ActualizarFormasPago      of (IdAliado * FormaPago []                                    )
        | CorreoVerificacionEnviado of (IdAliado * string                                          )
        | CorreoVerificado          of (IdAliado * string                                          )
        | ActualizarAuthorizeId     of (IdAliado * Result<IdAuthorize, string>                     )
        | ActualizarPagoAuthorizeId of (IdAliado * CuentaPago * Result<IdPayment, string>          )
        
        type Evento = {
            nevento : int64
            aliadoO : IdAliado option
            data    : DataEvento
        }
        
        type Respuesta =
        | ROk
        | NuevoRegistro        of string
        | Mensaje              of string
        
        
        module Eventos =
        
            type TipoDatos = TipoDatos of nombre:string * tipos:string
        
            type ResultadoManejador = Modelo -> AsyncResultM<Modelo * Respuesta, unit>
        
            type ObjetoDatos<'T> = {
                tipoDatos : TipoDatos
                datos     : 'T
            }
        
            type ManejadorDatos<'T> = {
                tipoDatos  : TipoDatos
                manejadorF : ObjetoDatos<'T> -> ResultadoManejador
            }
        
            let Manejadores = System.Collections.Generic.Dictionary<TipoDatos, ManejadorDatos<obj>>()
        
            let deDatosGen (msg: ObjetoDatos<obj>) : ObjetoDatos<_> = {
                tipoDatos = msg.tipoDatos
                datos     = unbox msg.datos
            }    
        
            let registrarManejador nombre (manejadorF:ObjetoDatos<'T> -> ResultadoManejador) =
                let manejador  = {
                    tipoDatos  = TipoDatos (nombre, typeof<'T> |> getTypeName) |>! print
                    manejadorF = deDatosGen >> manejadorF
                }
                Manejadores.Add(manejador.tipoDatos, manejador )
        
            let registrarManejadorf nombre (manejadorF:'T -> ResultadoManejador) =
                registrarManejador  nombre (fun oDatos -> manejadorF oDatos.datos)
        
            let manejadorGenerico (msg:ObjetoDatos<obj>) : ResultadoManejador =
                match Manejadores.TryGetValue msg.tipoDatos with
                | false, _         -> failwithf "No Handler for message: %A" msg
                | true , manejador -> manejador.manejadorF msg
        
            let addNewAliados (als1: Aliado []) (als2: Aliado []) : Aliado [] =
                als1 |> Seq.filter(fun a -> als2 |> Seq.exists (fun b -> a.id = b.id ) |> not ) |> Seq.append als2 |> Seq.toArray
        
            let registroNuevo (idA, datos:DatosPersonales, padre, contactos) (modelo: Modelo) : AsyncResultM<Modelo * Respuesta, unit> = asyncResultM {
                match   contactos
                        |> Seq.tryPick(function CorreoElectronico email -> Some email |_-> None ) with
                | None        -> return! errorMsgf "No se encontro Correo Electronico: %A" datos |> ErrorM
                | Some correo ->
                if  modelo.aliados
                    |> Seq.exists(fun al ->
                        al.contactos
                        |> Seq.exists(function CorreoElectronico correo2 -> correo = correo2 |_-> false ) 
                    )
                    then return! errorMsgf "Correo Electronico ya esta registrado: %A" correo |> ErrorM
                else
                if modelo.aliados |> Seq.exists (fun al -> al.id = idA) 
                    then return! errorMsgf "Id ya esta en uso: %A" idA                        |> ErrorM
                else
                let now = System.DateTime.Now
                let aliado = {
                    datosPersonales =  datos
                    id              =  idA
                    authorizeIdR    =  Error ""
                    idPadreO        =  padre
                    contactos       =  contactos
                    identificacion  =  [||]
                    formasPago      =  [||]
                    transacciones   =  [||]
                    mensajes        =  [||]
                    isInternal      =  false
                    status          =  CuentaCreada
                    tipo            =  Regular
                    fechaRegistro   =  now
                    fechaStatus     =  now
                    nReferidos      =  0
                    nRefActivos     =  0
                    nDescendientes  =  0
                    nDescActivos    =  0
                    comision        =  0
                    nivel           =  0
                }
                return
                    { modelo with aliados = Array.append modelo.aliados [| aliado |] }
                ,   [ datos.nombre1 ; datos.nombre2 ; datos.apellido1 ; datos.apellido2 ] 
                    |> String.concat " "
                    |> NuevoRegistro  
            }
        
            let cambiaAliado ida   f (modelo:Modelo) = { modelo with aliados    = modelo.aliados    |> Array.map (fun al -> if al.id = ida then f al else al )}
            let cambiaCorreo email f (aliado:Aliado) = { aliado with contactos  = aliado.contactos  |> Array.map (function CorreoElectronico c when c.email = email -> f c |> CorreoElectronico | co -> co )}
            let cambiaFormaPago cp f (aliado:Aliado) = { aliado with formasPago = aliado.formasPago |> Array.map (fun fp -> if fp.cuentaPago = cp then f fp else fp ) }
            let cambiaStatusCorreo ida email f = cambiaAliado ida (cambiaCorreo email  f)
        
            let actualizarDatosPersonales (idA, datos:DatosPersonales) (modelo: Modelo) : AsyncResultM<Modelo * Respuesta, unit> = asyncResultM {
                return
                    cambiaAliado idA (fun al -> { al with datosPersonales = datos }) modelo
                ,   Mensaje <| "Datos personales actualizados!" 
            }
        
            let actualizarAuthorizeId   (idA, authorizeIdR) (modelo: Modelo) : AsyncResultM<Modelo * Respuesta, unit> = asyncResultM {
                return
                    cambiaAliado idA (fun al -> { al with authorizeIdR = authorizeIdR }) modelo
                ,   Mensaje <| "AuthorizeId actualizada" 
            }
        
            let actualizarPagoAuthorizeId (idA, cuenta, paymentIdR : Result<IdPayment, string> )  (modelo: Modelo) : AsyncResultM<Modelo * Respuesta, unit> = asyncResultM {
                return
                    cambiaAliado idA (cambiaFormaPago cuenta (fun fp -> { fp with authorizeIdR = paymentIdR }) ) modelo
                ,   Mensaje <| "AuthorizeId actualizada" 
            }
        
            let actualizarContactos (idA, contactos:Contacto[]) (modelo: Modelo) : AsyncResultM<Modelo * Respuesta, unit> = asyncResultM {
                return
                    cambiaAliado idA (fun al -> { al with contactos = contactos }) modelo
                ,   Mensaje <| "Contactos actualizados!" 
            }
        
            let actualizarFormasPago (idA, formasPago:FormaPago[]) (modelo: Modelo) : AsyncResultM<Modelo * Respuesta, unit> = asyncResultM {
                return
                    cambiaAliado idA (fun al -> { al with formasPago = formasPago }) modelo
                ,  Mensaje <| "Formas de pago actualizadas!" 
            }
        
            let agregarAliado  aliado  modelo = asyncResultM { return { modelo with Modelo.aliados = addNewAliados [| aliado  |] modelo.aliados }, ROk }
            let agregarAliados aliados modelo = asyncResultM { return { modelo with Modelo.aliados = addNewAliados    aliados    modelo.aliados }, ROk }
        
            let correoVerificacionEnviado (ida, correo)  (modelo: Modelo) : AsyncResultM<Modelo * Respuesta, unit> = asyncResultM {
                return
                    cambiaStatusCorreo ida correo (fun c -> { c with enviado = Some System.DateTime.Now }) modelo
                ,   ROk
            }
        
            let correoVerificado          (ida, correo)  (modelo: Modelo) : AsyncResultM<Modelo * Respuesta, unit> = asyncResultM {
                return
                    cambiaStatusCorreo ida correo (fun c -> { c with recibido = Some System.DateTime.Now }) modelo
                ,   ROk
            }
        
            let actualizarEstado (modelo: Modelo, evento: Evento) = asyncResultM {
                if modelo.nevento <> -1L && modelo.nevento + 1L <> evento.nevento then 
                    failwithf "Evento fuera de secuencia: %d %d" modelo.nevento evento.nevento
                let case, tuple, data = DiscUnion.caseTuple evento.data
                let objData           = {
                    tipoDatos         = TipoDatos(case, tuple |> getTypeName)
                    datos             = data
                }
                return! manejadorGenerico objData modelo
            }
        
            let eventoNoImplementado ev (modelo: Modelo) : AsyncResultM<Modelo * Respuesta, unit> = asyncResultM {
                return! errorMsgf "Evento no Implementado: %A" ev |> ErrorM
            } 
        
            let invitarPotencialesAliados ev = eventoNoImplementado ev
        type IAmbiente = 
            interface
                /// nuevoEvento (usuario:string) (nombre:string) (evento:string) (tipo:string) : AsyncResultM<long, unit>
                abstract member nuevoEvento      : string ->  string -> string -> string -> AsyncResultM<int64, unit>
                abstract member ultimoEvento     : unit   ->  int64 option
                abstract member leerEventos      : int64  ->  AsyncResultM<(int64 * string * string * string * string * System.DateTime) [], unit>
                abstract member leerTipos        : unit   ->  string           []
                abstract member leerEventosTipos : unit   -> (string * string) []
                abstract member guardarEstado    : int64  ->  string ->  AsyncResultM<unit, unit>
                abstract member obtenerEstado    : unit   ->  AsyncResultM<(int64 * string) option, unit>
                abstract member nombreAmbiente   : unit   -> string
            end
        
        
        let mutable ambiente : IAmbiente = 
            { new IAmbiente with 
                member __.ultimoEvento     ()  = Some 0L
                member __.leerTipos        ()  = [||]   
                member __.leerEventosTipos ()  = [||]   
                member __.nuevoEvento      (usuario:string) (nombre:string) (evento:string) (tipo:string) = AsyncResultM.errorMsgf "not implemented"
                member __.leerEventos      n   = AsyncResultM.errorMsgf "not implemented"
                member __.guardarEstado    n s = AsyncResultM.errorMsgf "not implemented"
                member __.obtenerEstado    ()  = AsyncResultM.errorMsgf "not implemented"
                member __.nombreAmbiente   ()  = "not implemented"
            }
        
        
        module CodigoGenerado =
            type EventoTipos = 
            | ActualizarDatosPersonales_V0  of (IdAliado * DatosPersonales)
            | ActualizarFormasPago_V0 of System.Tuple<TypesV0.IdAliado,TypesV0.FormaPago[]>
            | AgregarAliado_V1 of TypesV1.Aliado
            | CorreoVerificacionEnviado_V0 of System.Tuple<TypesV0.IdAliado,System.String>
            | RegistroNuevo_V1 of System.Tuple<TypesV0.IdAliado,TypesV0.DatosPersonales,Option<TypesV0.IdAliado>,TypesV1.Contacto[]>
        
        module Serializador =
            open Serializer
            open System
        
            [< AutoOpen >]
            module TypesV0 =
                open TypesV0
            
                let serDate : Ser<System.DateTime> = 
                    (  fun (d:System.DateTime ) -> d.ToString("u") |> sprintf "%A"                )
                    , (fun (j:JsonIntermediate) -> j.tryString() |> Option.bind ParseO.parseDateO )
        
                let serIdAliado          = serDU<IdAliado         > [   serObj serString            ]    
                let serIdAuthorized      = serDU<IdAuthorize      > [   serObj serString            ]    
                let serIdPayment         = serDU<IdPayment        > [   serObj serString            ]    
                let serIdAddress         = serDU<IdAddress        > [   serObj serString            ]    
                let serTipoAliado        = serDU<TipoAliado       > [   serObj serString            ]
                let serPais              = serDU<Pais             > [   serObj serString            ]    
                let serEstado            = serDU<Estado           > [   serObj serString            ]    
                let serTerritorio        = serDU<Territorio       > [   serObj serEstado            ]   
                let serEmisor            = serDU<Emisor           > [   serObj serPais
                                                                        serObj serTerritorio        ]
                let serDocumento         = serDU<Documento        > [   serObj serString            ]    
                let serNumeroCuenta      = serDU<NumeroCuenta     > [   serObj serString            ]    
                let serNumeroTarjeta     = serDU<NumeroTarjeta    > [   serObj serString            ]
                let serExpiracion        = serDU<Expiracion       > [   serObj serString            ]
                let serRoutingNumber     = serDU<RoutingNumber    > [   serObj serString            ]    
                let serTipoCuenta        = serDU<TipoCuenta       > [   serObj serString            ]    
                let serStatusAliado      = serDU<StatusAliado     > [   serObj serString            ]    
                let serConceptoPago      = serDU<ConceptoPago     > [   serObj serString            ]    
                let serTipoDireccion     = serDU<TipoDireccion    > [   serObj serString            ]    
                let serZonaPostal        = serDU<ZonaPostal       > [   serObj serString            ]    
                let serCorreoElectronico = serDU<CorreoElectronico> [   serObj serString            ]    
                let serTipoTelefono      = serDU<TipoTelefono     > [   serObj serString            ]    
                let serGenero            = serDU<Genero           > [   serObj serString            ]    
                let serTipoMensaje       = serDU<TipoMensaje      > [   serObj serString            ]
        
                let serIdAuthorizedR     = serDU<Result<IdAuthorize, string>> [   serObj serString ; serObj serIdAuthorized ]    
                let serIdPaymentR        = serDU<Result<IdPayment  , string>> [   serObj serString ; serObj serIdPayment    ]    
                let serIdAddressR        = serDU<Result<IdAddress  , string>> [   serObj serString ; serObj serIdAddress    ]    
        
                let serIdentificacion : Ser<Identificacion> = 
                    [|
                        serEmisor    |> serField "emisor"    (fun s -> s.emisor    ) (fun v s -> { s with emisor    = v } )
                        serDocumento |> serField "documento" (fun s -> s.documento ) (fun v s -> { s with documento = v } )
                        serDate      |> serField "emision"   (fun s -> s.emision   ) (fun v s -> { s with emision   = v } )
                        serDate      |> serField "vence"     (fun s -> s.vence     ) (fun v s -> { s with vence     = v } )
                    |] |> serRecord LibraryNoJS.Default.value<_>
        
                let serCuentaBancaria : Ser<CuentaBancaria> =
                    [|
                        serString        |> serField "titular" (fun (s:CuentaBancaria) -> s.titular) (fun v s -> { s with titular = v } )   
                        serString        |> serField "banco"   (fun  s                 -> s.banco  ) (fun v s -> { s with banco   = v } )   
                        serTipoCuenta    |> serField "tipo"    (fun  s                 -> s.tipo   ) (fun v s -> { s with tipo    = v } )        
                        serNumeroCuenta  |> serField "numero"  (fun  s                 -> s.numero ) (fun v s -> { s with numero  = v } )          
                        serRoutingNumber |> serField "routing" (fun  s                 -> s.routing) (fun v s -> { s with routing = v } )           
                    |] |> serRecord LibraryNoJS.Default.value<_>
        
                let serTarjetaCredito : Ser<TarjetaCredito> =
                    [|
                        serExpiracion    |> serField "expiracion" (fun s -> s.expiracion) (fun v s -> { s with expiracion = v } )   
                        serString        |> serField "titular"    (fun s -> s.titular   ) (fun v s -> { s with titular    = v } )   
                        serNumeroTarjeta |> serField "numero"     (fun s -> s.numero    ) (fun v s -> { s with numero     = v } )          
                    |] |> serRecord LibraryNoJS.Default.value<_>
        
                let serTransaccion : Ser<Transaccion> = 
                    [|
                        serDate          |> serField "fechaPago"   (fun s -> s.fechaPago  ) (fun v s -> { s with fechaPago   = v } ) 
                        serInt           |> serField "ano"         (fun s -> s.ano        ) (fun v s -> { s with ano         = v } )
                        serInt           |> serField "periodo"     (fun s -> s.periodo    ) (fun v s -> { s with periodo     = v } )
                        serInt           |> serField "monto"       (fun s -> s.monto      ) (fun v s -> { s with monto       = v } )
                        serIdAliado      |> serField "idAliado"    (fun s -> s.idAliado   ) (fun v s -> { s with idAliado    = v } )     
                        serConceptoPago  |> serField "concepto"    (fun s -> s.concepto   ) (fun v s -> { s with concepto    = v } )         
                        serString        |> serField "transaccion" (fun s -> s.transaccion) (fun v s -> { s with transaccion = v } )   
                    |] |> serRecord LibraryNoJS.Default.value<_>
        
                let serDireccion : Ser<Direccion> = 
                    [|
                        serTipoDireccion |> serField "tipoDireccion" (fun s -> s.tipoDireccion) (fun v s -> { s with tipoDireccion = v } )
                        serString        |> serField "linea1"        (fun s -> s.linea1       ) (fun v s -> { s with linea1        = v } )
                        serString        |> serField "linea2"        (fun s -> s.linea2       ) (fun v s -> { s with linea2        = v } )
                        serString        |> serField "ciudad"        (fun s -> s.ciudad       ) (fun v s -> { s with ciudad        = v } )
                        serPais          |> serField "pais"          (fun s -> s.pais         ) (fun v s -> { s with pais          = v } )
                        serZonaPostal    |> serField "zonaPostal"    (fun s -> s.zonaPostal   ) (fun v s -> { s with zonaPostal    = v } )
                    |] |> serRecord LibraryNoJS.Default.value<_>
        
                let serTelefono : Ser<Telefono> =
                    [|
                        serTipoTelefono |> serField "tipoTelefono" (fun s -> s.tipoTelefono) (fun v s -> { s with tipoTelefono = v } )
                        serString       |> serField "codigoPais"   (fun s -> s.codigoPais  ) (fun v s -> { s with codigoPais   = v } )
                        serString       |> serField "codigoArea"   (fun s -> s.codigoArea  ) (fun v s -> { s with codigoArea   = v } )
                        serString       |> serField "numero"       (fun s -> s.numero      ) (fun v s -> { s with numero       = v } )
                        serString       |> serField "extension"    (fun s -> s.extension   ) (fun v s -> { s with extension    = v } )
                        serBool         |> serField "mensajes"     (fun s -> s.mensajes    ) (fun v s -> { s with mensajes     = v } )
                    |] |> serRecord LibraryNoJS.Default.value<_>
        
                let serContacto          = serDU<Contacto         > [   serObj serString     
                                                                        serObj serTelefono
                                                                        serObj serCorreoElectronico
                                                                        serObj serDireccion         ]
                let serCuentaPago        = serDU<CuentaPago       > [   serObj serString              
                                                                        serObj serTarjetaCredito
                                                                        serObj serCuentaBancaria    ]
                let serRemitente         = serDU<Remitente        > [   serObj serIdAliado
                                                                        serObj serString            ]
        
                let serFormaPago : Ser<FormaPago> =
                    [|
                        serCuentaPago            |> serField "cuentaPago"  (fun s -> s.cuentaPago   ) (fun v s -> { s with cuentaPago   = v } )
                        serString                |> serField "nombre"      (fun s -> s.nombre       ) (fun v s -> { s with nombre       = v } )
                        serIdPaymentR            |> serField "authorizeId" (fun s -> s.authorizeIdR ) (fun v s -> { s with authorizeIdR = v } )
                    |] |> serRecord LibraryNoJS.Default.value<_>
        
                let serDatosPersonales : Ser<DatosPersonales> =
                    [|
                        serString        |> serOpt  |> serField "titulo"          (fun s -> s.titulo         ) (fun v s -> { s with titulo          = v } )
                        serString                   |> serField "nombre1"         (fun s -> s.nombre1        ) (fun v s -> { s with nombre1         = v } )
                        serString                   |> serField "nombre2"         (fun s -> s.nombre2        ) (fun v s -> { s with nombre2         = v } )
                        serString                   |> serField "apellido1"       (fun s -> s.apellido1      ) (fun v s -> { s with apellido1       = v } )
                        serString                   |> serField "apellido2"       (fun s -> s.apellido2      ) (fun v s -> { s with apellido2       = v } )
                        serPais                     |> serField "nacionalidad"    (fun s -> s.nacionalidad   ) (fun v s -> { s with nacionalidad    = v } )
                        serGenero                   |> serField "genero"          (fun s -> s.genero         ) (fun v s -> { s with genero          = v } )
                        serDate                     |> serField "fechaNacimiento" (fun s -> s.fechaNacimiento) (fun v s -> { s with fechaNacimiento = v } )
                    |] |> serRecord LibraryNoJS.Default.value<_>
        
                let serMensaje : Ser<Mensaje> =
                    [|
                        serTipoMensaje           |> serField "tipo"      (fun (s:Mensaje) -> s.tipo     ) (fun v s -> { s with tipo      = v } )
                        serDate        |> serOpt |> serField "leido"     (fun (s:Mensaje) -> s.leido    ) (fun v s -> { s with leido     = v } )
                        serDate                  |> serField "fecha"     (fun (s:Mensaje) -> s.fecha    ) (fun v s -> { s with fecha     = v } )
                        serString                |> serField "texto"     (fun (s:Mensaje) -> s.texto    ) (fun v s -> { s with texto     = v } )
                        serRemitente             |> serField "remitente" (fun (s:Mensaje) -> s.remitente) (fun v s -> { s with remitente = v } )
                    |] |> serRecord LibraryNoJS.Default.value<_>
        
                let serAliado : Ser<Aliado> =
                    [|
                        serIdAliado                    |> serField "id"              (fun s -> s.id             ) (fun v s -> { s with id              = v } )
                        serIdAliado         |> serOpt  |> serField "idPadreO"        (fun s -> s.idPadreO       ) (fun v s -> { s with idPadreO        = v } )
                        serIdentificacion   |> serArr  |> serField "identificacion"  (fun s -> s.identificacion ) (fun v s -> { s with identificacion  = v } )
                        serDatosPersonales             |> serField "datosPersonales" (fun s -> s.datosPersonales) (fun v s -> { s with datosPersonales = v } )
                        serContacto         |> serArr  |> serField "contactos"       (fun s -> s.contactos      ) (fun v s -> { s with contactos       = v } )
                        serFormaPago        |> serArr  |> serField "formasPago"      (fun s -> s.formasPago     ) (fun v s -> { s with formasPago      = v } )
                        serTransaccion      |> serArr  |> serField "transacciones"   (fun s -> s.transacciones  ) (fun v s -> { s with transacciones   = v } )
                        serMensaje          |> serArr  |> serField "mensajes"        (fun s -> s.mensajes       ) (fun v s -> { s with mensajes        = v } )
                        serBool                        |> serField "isInternal"      (fun s -> s.isInternal     ) (fun v s -> { s with isInternal      = v } )
                        serStatusAliado                |> serField "status"          (fun s -> s.status         ) (fun v s -> { s with status          = v } )
                        serTipoAliado                  |> serField "tipo"            (fun s -> s.tipo           ) (fun v s -> { s with tipo            = v } )
                        serDate                        |> serField "fechaRegistro"   (fun s -> s.fechaRegistro  ) (fun v s -> { s with fechaRegistro   = v } )
                        serDate                        |> serField "fechaStatus"     (fun s -> s.fechaStatus    ) (fun v s -> { s with fechaStatus     = v } )
                        serInt                         |> serField "nReferidos"      (fun s -> s.nReferidos     ) (fun v s -> { s with nReferidos      = v } )
                        serInt                         |> serField "nRefActivos"     (fun s -> s.nRefActivos    ) (fun v s -> { s with nRefActivos     = v } )
                        serInt                         |> serField "nDescendientes"  (fun s -> s.nDescendientes ) (fun v s -> { s with nDescendientes  = v } )
                        serInt                         |> serField "nDescActivos"    (fun s -> s.nDescActivos   ) (fun v s -> { s with nDescActivos    = v } )
                        serInt                         |> serField "comision"        (fun s -> s.comision       ) (fun v s -> { s with comision        = v } )
                        serInt                         |> serField "nivel"           (fun s -> s.nivel          ) (fun v s -> { s with nivel           = v } )
                    |] |> serRecord LibraryNoJS.Default.value<_>
        
                let serPremisasCalculo : Ser<PremisasCalculo> =
                    [|
                        serInt  |> serField "comisionReferidosRegular"     (fun s -> s.comisionReferidosRegular    ) (fun v s -> { s with comisionReferidosRegular     = v } )
                        serInt  |> serField "comisionReferidosMaster"      (fun s -> s.comisionReferidosMaster     ) (fun v s -> { s with comisionReferidosMaster      = v } )
                        serInt  |> serField "comisionDescendientesMaster"  (fun s -> s.comisionDescendientesMaster ) (fun v s -> { s with comisionDescendientesMaster  = v } )
                        serInt  |> serField "comisionDescendientesRegular" (fun s -> s.comisionDescendientesRegular) (fun v s -> { s with comisionDescendientesRegular = v } )
                        serInt  |> serField "montoAfiliacion"              (fun s -> s.montoAfiliacion             ) (fun v s -> { s with montoAfiliacion              = v } )
                        serInt  |> serField "numeroReferidosMaster"        (fun s -> s.numeroReferidosMaster       ) (fun v s -> { s with numeroReferidosMaster        = v } )
                        serInt  |> serField "diaCorte1"                    (fun s -> s.diaCorte1                   ) (fun v s -> { s with diaCorte1                    = v } )
                        serInt  |> serField "diaCorte2"                    (fun s -> s.diaCorte2                   ) (fun v s -> { s with diaCorte2                    = v } )
                    |] |> serRecord LibraryNoJS.Default.value<_>
        
                let serModelo : Ser<Modelo> = 
                    [|
                        serIdAliado                   |> serField "idAliado"      (fun s -> s.idAliado      ) (fun v s -> { s with idAliado      = v } )
                        serAliado           |> serArr |> serField "aliados"       (fun s -> s.aliados       ) (fun v s -> { s with aliados       = v } )
                        serInt                        |> serField "anoActual"     (fun s -> s.anoActual     ) (fun v s -> { s with anoActual     = v } )
                        serInt                        |> serField "periodoActual" (fun s -> s.periodoActual ) (fun v s -> { s with periodoActual = v } )
                        serPremisasCalculo            |> serField "premisas"      (fun s -> s.premisas      ) (fun v s -> { s with premisas      = v } )
                    |] |> serRecord LibraryNoJS.Default.value<_>
        
            [< AutoOpen >]
            module TypesV1 =
                open TypesV0
                open TypesV1
        
                let serCorreoElectronico : Ser<CorreoElectronico> = 
                    [|
                        serString         |> serField "email"    (fun s -> s.email    ) (fun v s -> { s with email    = v } )
                        serDate |> serOpt |> serField "enviado"  (fun s -> s.enviado  ) (fun v s -> { s with enviado  = v } )
                        serDate |> serOpt |> serField "recibido" (fun s -> s.recibido ) (fun v s -> { s with recibido = v } )
                    |] |> serRecord LibraryNoJS.Default.value<_>
        
                let serContacto          = serDU<Contacto         > [   serObj serString     
                                                                        serObj serTelefono
                                                                        serObj serCorreoElectronico
                                                                        serObj serDireccion         ] 
        
                let serAliado : Ser<Aliado> =
                    [|
                        serIdAliado                    |> serField "id"              (fun s -> s.id             ) (fun v s -> { s with id              = v } )
                        serIdAuthorizedR               |> serField "idAuthorized"    (fun s -> s.authorizeIdR   ) (fun v s -> { s with authorizeIdR    = v } )
                        serIdAliado         |> serOpt  |> serField "idPadreO"        (fun s -> s.idPadreO       ) (fun v s -> { s with idPadreO        = v } )
                        serIdentificacion   |> serArr  |> serField "identificacion"  (fun s -> s.identificacion ) (fun v s -> { s with identificacion  = v } )
                        serDatosPersonales             |> serField "datosPersonales" (fun s -> s.datosPersonales) (fun v s -> { s with datosPersonales = v } )
                        serContacto         |> serArr  |> serField "contactos"       (fun s -> s.contactos      ) (fun v s -> { s with contactos       = v } )
                        serFormaPago        |> serArr  |> serField "formasPago"      (fun s -> s.formasPago     ) (fun v s -> { s with formasPago      = v } )
                        serTransaccion      |> serArr  |> serField "transacciones"   (fun s -> s.transacciones  ) (fun v s -> { s with transacciones   = v } )
                        serMensaje          |> serArr  |> serField "mensajes"        (fun s -> s.mensajes       ) (fun v s -> { s with mensajes        = v } )
                        serBool                        |> serField "isInternal"      (fun s -> s.isInternal     ) (fun v s -> { s with isInternal      = v } )
                        serStatusAliado                |> serField "status"          (fun s -> s.status         ) (fun v s -> { s with status          = v } )
                        serTipoAliado                  |> serField "tipo"            (fun s -> s.tipo           ) (fun v s -> { s with tipo            = v } )
                        serDate                        |> serField "fechaRegistro"   (fun s -> s.fechaRegistro  ) (fun v s -> { s with fechaRegistro   = v } )
                        serDate                        |> serField "fechaStatus"     (fun s -> s.fechaStatus    ) (fun v s -> { s with fechaStatus     = v } )
                        serInt                         |> serField "nReferidos"      (fun s -> s.nReferidos     ) (fun v s -> { s with nReferidos      = v } )
                        serInt                         |> serField "nRefActivos"     (fun s -> s.nRefActivos    ) (fun v s -> { s with nRefActivos     = v } )
                        serInt                         |> serField "nDescendientes"  (fun s -> s.nDescendientes ) (fun v s -> { s with nDescendientes  = v } )
                        serInt                         |> serField "nDescActivos"    (fun s -> s.nDescActivos   ) (fun v s -> { s with nDescActivos    = v } )
                        serInt                         |> serField "comision"        (fun s -> s.comision       ) (fun v s -> { s with comision        = v } )
                        serInt                         |> serField "nivel"           (fun s -> s.nivel          ) (fun v s -> { s with nivel           = v } )
                    |] |> serRecord LibraryNoJS.Default.value<_>
        
                let serModelo : Ser<Modelo> = 
                    [|
                        serInt64                      |> serField "nevento"       (fun s -> s.nevento       ) (fun v s -> { s with nevento       = v } )
                        serIdAliado                   |> serField "idAliado"      (fun s -> s.idAliado      ) (fun v s -> { s with idAliado      = v } )
                        serAliado           |> serArr |> serField "aliados"       (fun s -> s.aliados       ) (fun v s -> { s with aliados       = v } )
                        serInt                        |> serField "anoActual"     (fun s -> s.anoActual     ) (fun v s -> { s with anoActual     = v } )
                        serInt                        |> serField "periodoActual" (fun s -> s.periodoActual ) (fun v s -> { s with periodoActual = v } )
                        serPremisasCalculo            |> serField "premisas"      (fun s -> s.premisas      ) (fun v s -> { s with premisas      = v } )
                    |] |> serRecord LibraryNoJS.Default.value<_>
        
            open FSharp.Reflection
        
            let serObject : Ser<obj> = (fun o -> o.GetType().ToString() |> sprintf "%A"), (fun _ -> None)
        
            let serSerializadoresEventos =
                let sers = System.Collections.Generic.Dictionary<_,_>()
                [
                    serObj         serObject
                    serObj         serString
                    serObj         serAliado
                    serObj         serIdAliado
                    serObj         serIdAuthorized
                    serObj (serOpt serIdAliado )
                    serObj (serArr serContacto )
                    serObj (serArr serFormaPago)
                    serObj (serArr serAliado   )
                    serObj (serArr serString   )
                    serObj         serDatosPersonales
                    serObj         serIdAuthorizedR
                    serObj         serCuentaPago
                    serObj         serIdPaymentR
                ] |> Seq.iter sers.Add
                sers
        
            let rec registrarSerializadorParaTipos (ts:System.Type []) =
                if Seq.length ts <= 1 then () else
                let tupleType = FSharpType.MakeTupleType ts
                let tname     = getTypeName tupleType
                if serSerializadoresEventos.ContainsKey tname then () else
                let sers      = ts |> Array.map (fun t ->   let tname = getTypeName  t
                                                            serSerializadoresEventos 
                                                            |> Dict.tryGetValue tname 
                                                            |> Option.defaultWith (fun () -> failwithf "Serializador no encontrado: %s" tname) )
                let getValues = FSharpValue.PreComputeTupleReader      tupleType
                let setValues = FSharpValue.PreComputeTupleConstructor tupleType
                let serC    v = Seq.zip (getValues v) sers
                                |> Seq.map (fun (vi, seri) -> fst seri vi )
                                |> String.concat ", "
                                |> sprintf "[%s]"
                let deserC (j:JsonIntermediate) = 
                                match j.tryArray () with
                                | None -> None
                                | Some js -> 
                                Array.zip js sers
                                |> Array.choose (fun (ji, seri) -> snd seri ji)
                                |> setValues
                                |> Some
                serSerializadoresEventos.Add(tname, (serC, deserC))
        
            and registrarSerializadoresParaDU (ttype:System.Type) =
                FSharpType.GetUnionCases ttype
                |> Seq.iter(fun case ->
                    let ts = case.GetFields() |> Array.map(fun p -> p.PropertyType) 
                    ts |> Seq.iter registrarSerializadorPara 
                    ts |> registrarSerializadorParaTipos
                )
        
            and registrarSerializadorPara (ttype:System.Type) =
                let tname = getTypeName ttype
                if serSerializadoresEventos.ContainsKey tname then () else
                if   FSharpType.IsUnion ttype then 
                    registrarSerializadoresParaDU ttype
                    if serSerializadoresEventos.ContainsKey tname then () else
                    let ser = Serializer.serDUt (Seq.zip serSerializadoresEventos.Keys serSerializadoresEventos.Values) ttype
                    serSerializadoresEventos.Add(tname, ser)
                elif FSharpType.IsTuple ttype then
                    let ts = FSharpType.GetTupleElements ttype
                    ts |> Seq.iter registrarSerializadorPara
                    registrarSerializadorParaTipos ts
                else
                    failwithf "Could not register serializer for: %s" tname
        
            registrarSerializadorPara typeof<DataEvento>
        
            let obtenerSerializador tipoEvento = 
                serSerializadoresEventos 
                |> Dict.tryGetValue tipoEvento
                |> Option.defaultWith (fun () -> failwithf "Could not find deserializer for %s" tipoEvento)
        
        
            let registrarF evento (f : 'T -> Eventos.ResultadoManejador) =
                Eventos.registrarManejadorf evento f
                registrarSerializadorPara typeof<'T>
        
            print "serializers:"
            serSerializadoresEventos.Keys |> Seq.iter print
        
            open CodigoGenerado
        
            let chequearEventosEnBD et =
                match et with
                | ActualizarDatosPersonales_V0  v -> Eventos.actualizarDatosPersonales  v
                | ActualizarFormasPago_V0       v -> Eventos.actualizarFormasPago       v
                | AgregarAliado_V1              v -> Eventos.agregarAliado              v
                | RegistroNuevo_V1              v -> Eventos.registroNuevo              v
                | CorreoVerificacionEnviado_V0  v -> Eventos.correoVerificacionEnviado  v
        
            let chequearEventos ev =
                match ev with
                | AgregarAliado                 v -> Eventos.agregarAliado              v
                | AgregarAliados                v -> Eventos.agregarAliados             v
                | RegistroNuevo                 v -> Eventos.registroNuevo              v
                | ActualizarDatosPersonales     v -> Eventos.actualizarDatosPersonales  v
                | ActualizarContactos           v -> Eventos.actualizarContactos        v
                | ActualizarFormasPago          v -> Eventos.actualizarFormasPago       v
                | CorreoVerificacionEnviado     v -> Eventos.correoVerificacionEnviado  v
                | CorreoVerificado              v -> Eventos.correoVerificado           v
                | InvitarPotencialesAliados     v -> Eventos.invitarPotencialesAliados  v
                | ActualizarAuthorizeId         v -> Eventos.actualizarAuthorizeId      v
                | ActualizarPagoAuthorizeId     v -> Eventos.actualizarPagoAuthorizeId  v
        
            registrarF "AgregarAliado"             Eventos.agregarAliado
            registrarF "AgregarAliados"            Eventos.agregarAliados
            registrarF "RegistroNuevo"             Eventos.registroNuevo
            registrarF "ActualizarDatosPersonales" Eventos.actualizarDatosPersonales
            registrarF "ActualizarContactos"       Eventos.actualizarContactos
            registrarF "ActualizarFormasPago"      Eventos.actualizarFormasPago
            registrarF "CorreoVerificacionEnviado" Eventos.correoVerificacionEnviado
            registrarF "CorreoVerificado"          Eventos.correoVerificado
            registrarF "InvitarPotencialesAliados" Eventos.invitarPotencialesAliados
            registrarF "ActualizarAuthorizeId"     Eventos.actualizarAuthorizeId
            registrarF "ActualizarPagoAuthorizeId" Eventos.actualizarPagoAuthorizeId
        
            //SQLServer.leerTipos()
            //|> Seq.iter (fun t ->
            //    if serSerializadoresEventos.ContainsKey t |> not then
            //        failwithf "Serializador no encontrado para tipo %s" t
            //)
        //
            //SQLServer.leerEventosTipos()
            //    |> Seq.iter (fun t ->
            //    if Eventos.TipoDatos t |> Eventos.Manejadores.ContainsKey |> not then
            //        failwithf "Manejador no encontrado para evento %A" t
            //)
        
        
        module AsyncArrow =
        
            type AsyncArrow<'a, 'b> = 'a -> AsyncResultM<'b, unit>
        
            let mapInput   f (aa: AsyncArrow<_, _>) : AsyncArrow<_,          _   > = f >> aa
            let mapOutput  f (aa: AsyncArrow<_, _>) : AsyncArrow<_,          _   > = aa >> (AsyncResultM.bind (f >> AsyncResultM.rtn) )
            let mapBoth    f (aa: AsyncArrow<_, _>) : AsyncArrow<_,          _   > = fun i -> i |> mapOutput (f i) aa
            let bindInput (f: AsyncArrow<_, _>)  (aa: AsyncArrow<_, _>) : AsyncArrow<_,          _   > = f  >> (AsyncResultM.bind  aa                     )
            let bindOutput(f: AsyncArrow<_, _>)  (aa: AsyncArrow<_, _>) : AsyncArrow<_,          _   > = aa >> (AsyncResultM.bind  f                      )
            let bindBoth   f (aa: AsyncArrow<_, _>) : AsyncArrow<_,          _   > = mapBoth f aa |> bindOutput id
            let getResultM   (aa: AsyncArrow<_,'r>) : AsyncArrow<_, ResultM<'r,_>> = aa >> AsyncResultM.getResultM
            let absorbO    m (aa: AsyncArrow<_, _>) : AsyncArrow<_,          _   > = aa >> AsyncResultM.absorbO m
            let absorbR      (aa: AsyncArrow<_, _>) : AsyncArrow<_,          _   > = aa >> AsyncResultM.absorbR  
        
            let mapFst     f (a, b) = (f a,   b)
            let mapSnd     f (a, b) = (  a, f b)
        
            let (>=>) = bindInput
            let map f = f >> AsyncResultM.rtn
            let tee (f: AsyncArrow<_, _>) (aa: AsyncArrow<'a, 'b>) : AsyncArrow<'a, 'b> = aa >=> (fun v -> f v |> AsyncResultM.map (fun () -> v) )
        
        module ManejadorEventos =
            open AsyncArrow
        
            type SerialEvento = {
                nombre  : string
                tipo    : string
                json    : string
                data    : obj
            }
        
            type SerialEventoU = {
                usuario   : string
                serEvento : SerialEvento
            }
        
            type SerialEventoN = {
                nevento    : int64
                serEventoU : SerialEventoU
            }
        
            let serializarEvento (evento : DataEvento) =
                let  name, ttype, obj = DiscUnion.caseTuple evento
                let  tname            = ttype |> getTypeName
                let  ser              = Serializador.obtenerSerializador tname
                {   nombre            = name
                    tipo              = tname
                    json              = fst ser obj
                    data              = obj
                }
        
            let guardarSerialEventoU (serEventoU :  SerialEventoU) = 
                ambiente.nuevoEvento
                    serEventoU.usuario
                    serEventoU.serEvento.nombre
                    serEventoU.serEvento.json
                    serEventoU.serEvento.tipo
        
        
            let guardarEvento =
                    map (fun (evento:Evento) -> evento.data)
                >=> map serializarEvento
                 |> mapBoth (fun (evento:Evento) serEvento -> 
                        evento.aliadoO 
                        |> Option.map(fun (IdAliado usuario) -> { usuario = usuario ; serEvento  = serEvento })
                        |> ResultM.ofOption (fun () -> errorMsgf "Aliado es Nulo para evento %A" evento)
                    )
                 |> absorbR
                >=> (   guardarSerialEventoU
                    |>  mapBoth (fun serEventoU nevento  -> { nevento = nevento ; serEventoU = serEventoU } )
                    )
        
            let deserializarEvento (serEvento : SerialEvento) =
                let ser = Serializador.obtenerSerializador serEvento.tipo
                match Serializer.deserializeWithDefs ser serEvento.json with
                | Some data -> data
                | None      -> failwithf "No se pudo deserializar el Evento: %A" serEvento
        
            let manejadorGenerico (modelo , msg         ) = Eventos .manejadorGenerico msg     modelo
            let guardarEstado0    (nevento, serialModelo) = ambiente.guardarEstado     nevento serialModelo
            let obtenerEstado0    ()                      = ambiente.obtenerEstado     ()
        
            let serial2TipoDatos (serEventoN: SerialEventoN) =
                {
                    Eventos.tipoDatos = Eventos.TipoDatos(serEventoN.serEventoU.serEvento.nombre, serEventoN.serEventoU.serEvento.tipo)
                    Eventos.datos     = serEventoN.serEventoU.serEvento.data
                }
        
            let evento2TipoDatos (evento:Evento) =
                let case, tuple, data = DiscUnion.caseTuple evento.data
                {
                    Eventos.tipoDatos = Eventos.TipoDatos(case, tuple |> getTypeName)
                    Eventos.datos     = data
                }
        
            open Serializador
        
            let guardarEstado  =
                map (fun (modelo:Modelo) -> modelo.nevento, modelo |> Serializer.serialize serModelo )
                >=> guardarEstado0
        
            let obtenerEstado  =
                    obtenerEstado0
                >=> map (Option.map snd                                         )
                >=> map (Option.map (Serializer.deserializeWithDefs serModelo)  )
                >=> map (Option.defaultValue  (Some modeloVacio)                )
                 |> absorbO   (fun () -> errorMsgf "Modelo no fue deserializado")
        
            let pairEstado : AsyncArrow<_,_> =
                (fun ev ->
                    obtenerEstado
                    >=> map (fun s -> s, ev)
                    <| ()
                )
        
            let separarEstado (modeloI:Modelo, eventoSerialN : SerialEventoN) oR =  
                let modelo = oR |> ResultM.map fst |> ResultM.defaultValue modeloI
                let resp   = oR |> ResultM.map snd
                { modelo with nevento = eventoSerialN.nevento }, resp
        
            let ejecutarEventoSerial =
                    pairEstado
                >=> (   map (mapSnd serial2TipoDatos)
                    >=> manejadorGenerico
                     |> getResultM
                     |> mapBoth separarEstado
                    )
                 |> tee (fst >> guardarEstado)
                >=> map  snd
                 |> absorbR
        
            let ejecutarEventoNuevo =
                    guardarEvento
                >=> ejecutarEventoSerial
        
        
        module Rpc =
            open WebSharper
            open WebSharper.JavaScript
            open AsyncArrow
        
            let serverEndPoint = "http://localhost:7071/api/"
        
            let invoke (fname:string) (p:string) = asyncResultM {
                let! resp = JS.Fetch(serverEndPoint + fname, RequestOptions( Mode = RequestMode.Cors)) |> Promise.AsAsync
                let! text = resp.Text() |> Promise.AsAsync
                return text
            }
        
            let registroRpcs = System.Collections.Generic.Dictionary<_, _>()
        
            let inline doRpc (f: AsyncArrow<'P, 'R>) fname =
                let serializeP   (p:        'P            ) : string            = Json.Serialize p
                let serializeR   (p:ResultM<'R    , unit> ) : string            = Json.Serialize p
                let deserializeP (s:        string        ) : 'P                = Json.Deserialize s
                let deserializeR (s:        string        ) : ResultM<'R, unit> = Json.Deserialize s
                let server = (deserializeP >> f            >> Async.map serializeR                 )
                registroRpcs.Add(fname, server)
                server
              , (serializeP   >> invoke fname >> Async.map (ResultM.bind deserializeR))
        
        
            let _, ejecutarEventoNuevo = doRpc ManejadorEventos.ejecutarEventoNuevo "ejecutarEventoNuevo"
            let _, obtenerEstado       = doRpc ManejadorEventos.obtenerEstado       "obtenerEstado"
        
        
        
        module AmbienteAzure =
            open System
            open System.IO
        
            let archivoUltimoEvento =  "ultimoEvento.txt"
            let archivoUltimoEstado =  "ultimoEstado.txt"
            let archivoEstado       =  "estado.txt"
            let archivoEventos      =  "eventos.txt"
            let carpetaAmbiente     = @"%HOME%\data\MyFunctionAppData"
        
            let carpeta                = System.Environment.ExpandEnvironmentVariables(carpetaAmbiente).Replace("%", "")
            let nombreCompleto archivo = Path.Combine(carpeta, archivo)
            let existe         archivo = nombreCompleto archivo |> File.Exists
        
            let escribirArchivo archivo texto = 
                Directory.CreateDirectory carpeta |> ignore // noop if it already exists
                File.WriteAllText(nombreCompleto archivo, texto)
        
            let obtenerTextoArchivo archivo =
                if   existe archivo 
                then nombreCompleto archivo |> File.ReadAllText |> Some 
                else None
        
            let guardarEstado (n:int64) s = asyncResultM {
                escribirArchivo archivoUltimoEstado <| n.ToString()
                escribirArchivo archivoEstado       <| s
            }
        
            let obtenerEstado = asyncResultM {
                let nO = obtenerTextoArchivo archivoUltimoEstado |> Option.bind ParseO.parseInt64O 
                let tO = obtenerTextoArchivo archivoEstado
                match nO, tO with
                | Some n, Some t -> return Some (n,t)
                | _              -> return None
            }
        
            let ultimoEvento() = obtenerTextoArchivo archivoUltimoEvento |> Option.bind ParseO.parseInt64O 
        
            let nuevoEvento (usuario:string) (nombre:string) (evento:string) (tipo:string) = asyncResultM {
                let nextEvento = 1L + (ultimoEvento() |> Option.defaultValue 0L)
                Directory.CreateDirectory carpeta |> ignore // noop if it already exists
                File.AppendAllLines(nombreCompleto archivoEventos, [| sprintf "%A, %A, %A, %A" nextEvento usuario nombre tipo ; evento|])
                escribirArchivo archivoUltimoEvento <| nextEvento.ToString()
                return nextEvento
            }
        
            let setAmbiente() =
                ambiente <- {
                    new IAmbiente with 
                        member __.ultimoEvento     ()  = ultimoEvento()
                        member __.leerTipos        ()  = [||]   
                        member __.leerEventosTipos ()  = [||]   
                        member __.nuevoEvento      (usuario:string) (nombre:string) (evento:string) (tipo:string) = nuevoEvento usuario nombre evento tipo
                        member __.leerEventos      n   = AsyncResultM.errorMsgf "not implemented"
                        member __.guardarEstado    n s = guardarEstado n s
                        member __.obtenerEstado    ()  = obtenerEstado
                        member __.nombreAmbiente   ()  = "azure"
                }
        
        module AmbienteMemoria =
        
            let ultimoEvento  = ref 0L
            let eventos       = ref [| |]
            let ultimoEstadoO = ref None
            let estadoO       = ref None
        
            let setAmbiente() =
                ambiente <- {
                    new IAmbiente with
                    member __.ultimoEvento     ()  = Some !ultimoEvento
                    member __.leerTipos        ()  = [||]   
                    member __.leerEventosTipos ()  = [||]   
                    member __.nuevoEvento      (usuario:string) (nombre:string) (evento:string) (tipo:string) = asyncResultM {
                        ultimoEvento := !ultimoEvento + 1L
                        eventos := Array.append !eventos [| !ultimoEvento, usuario, nombre, tipo, evento, System.DateTime.Now |]
                        return !ultimoEvento
                    }
                    member __.leerEventos      n   = asyncResultM {
                        return (!eventos).[int (n-1L) ..] 
                    }
                    member __.guardarEstado    n s = asyncResultM {
                        ultimoEstadoO := Some n
                        estadoO       := Some s
                    }
                    member __.obtenerEstado    ()  = 
                        asyncResultM {
                            return !ultimoEstadoO |> Option.bind(fun n -> !estadoO |> Option.map(fun e -> n, e))
                        }
                    member __.nombreAmbiente   ()  = "memoria"
                }
                
        
                
        //[< JavaScript false >]
        module Sample =
            let data = """
        Alvarado, Rossana	Interview Group
        Andreac	Interview Group
        Bustamante, Patricia	Interview Group
        Calderon, Ailyn	Interview Group
        De Copello, Isbelia	Interview Group
        Life Beyond Borders	Interview Group
        Moya, Adelaida	Interview Group
        Nava, Jeylin	Interview Group
        Villarreal, Lola	Ocanto, Blas
        Zapata, Martha Liliana	Ocanto, Blas
        Ocanto, Blas	Interview Group
        Rendiles, Geline	Interview Group
        Abou Asaff, Amir	Segovia, Liseth
        Alejandra Espinoza, Maria	Segovia, Liseth
        Aleman, Robert	Segovia, Liseth
        ., Mabelis	Barreto, Bianeys
        Barreto, Bianeys	Segovia, Liseth
        Bracho, Julio	Segovia, Liseth
        Bukowitz, Silvia	Segovia, Liseth
        Ciccolella, Enzo	Segovia, Liseth
        Colmenares, Oscar	Segovia, Liseth
        Cortese, Enza	Segovia, Liseth
        Cristina Petrill, Maria	Segovia, Liseth
        De Los Angeles Pache, Maria	Segovia, Liseth
        Enrique Leal Jimenez, Walfredo	Segovia, Liseth
        Fernanda Pirela, Maria	Esperanza Rubiano, Maria
        Esperanza Rubiano, Maria	Segovia, Liseth
        Espina, Marien	Segovia, Liseth
        Espina, Sagrario	Segovia, Liseth
        Estrada, Sorena	Segovia, Liseth
        Fernanda Molero, Maria	Segovia, Liseth
        Fernandez, Lidiana	Segovia, Liseth
        Acosta, Francis	Garcia, Javier
        Eduardo Garcia, Javier	Garcia, Javier
        Orozco, David	Garcia, Javier
        Virginia Mago Beaufo, Maria	Garcia, Javier
        Garcia, Javier	Segovia, Liseth
        Glenn, Estepfanny	Segovia, Liseth
        Hans Rojas, Otto	Segovia, Liseth
        Leonarduzzi, Gianluca	Segovia, Liseth
        Martinez Noguera, Rossy	Segovia, Liseth
        Molleda, Marilyn	Segovia, Liseth
        Nardelli, Claudia	Molleda, Rosalyn
        Urdaneta, Dayana	Molleda, Rosalyn
        Villalobos, Andreus	Molleda, Rosalyn
        Molleda, Rosalyn	Segovia, Liseth
        Nayvely	Segovia, Liseth
        Olivieri, Giuseppe	Segovia, Liseth
        Pachano, Maria	Segovia, Liseth
        Paez, Endrys	Segovia, Liseth
        Paz, Misleny	Segovia, Liseth
        Pedroza, Manuel	Segovia, Liseth
        Perozo Romero, Liz	Segovia, Liseth
        Pina, Yanetsy	Segovia, Liseth
        Representaciones Continental Internacional 	Segovia, Liseth
        Romero, Roman	Segovia, Liseth
        Roo, Leonardo	Segovia, Liseth
        Soto, Ileana	Segovia, Liseth
        Suarez, Veronica	Segovia, Liseth
        Tepeyac Travel C.a	Segovia, Liseth
        Ucros, Luz	Segovia, Liseth
        Valbuena, Hilda	Segovia, Liseth
        Vasquez, Irvanis	Segovia, Liseth
        Segovia, Liseth	Interview Group
        A Menegaldo, Jose	V Boscan, Gretha
        Adolfo Velasquez De, Gustavo	V Boscan, Gretha
        Al Aaias, Feras	V Boscan, Gretha
        America Beck	V Boscan, Gretha
        Antunez, Victor	V Boscan, Gretha
        Arraiz, Jenniffer	V Boscan, Gretha
        Arribas, Francisco	V Boscan, Gretha
        Aseca Internacional 	V Boscan, Gretha
        Bastidas, Genesis	V Boscan, Gretha
        Alfredo Ocando, Luis	Belloso, Linaura
        Matos Villalobos, Sofia	Avila, Naivelin
        Avila, Naivelin	Belloso, Linaura
        Delgado, Rodolfo	Belloso, Linaura
        Herrera, Omar	Belloso, Linaura
        Martinez, Marielina	Belloso, Linaura
        Montiel, Mercedes	Belloso, Linaura
        Petit, Bianca	Belloso, Linaura
        Romero, Ana	Belloso, Linaura
        Belloso, Linaura	V Boscan, Gretha
        Belloso, Lizbecth	V Boscan, Gretha
        Boscan, Gretha	V Boscan, Gretha
        Briceno, Guido	V Boscan, Gretha
        Camacho, Clara	V Boscan, Gretha
        Cecilia Araguainamo, Maria	V Boscan, Gretha
        Cesar Tabares Ramire, Paulo	V Boscan, Gretha
        Dagnino, Patricia	V Boscan, Gretha
        David Rincon, Jose	V Boscan, Gretha
        Garces, Militza	V Boscan, Gretha
        Garcia, Andreina	V Boscan, Gretha
        Gonzalez, Maria	V Boscan, Gretha
        Guerrero, Karttier	V Boscan, Gretha
        Bracho, Monica	Hernandez, Alejandro
        Paz, Vanessa	Hernandez, Alejandro
        Hernandez, Alejandro	V Boscan, Gretha
        Hernandez, Valentina	V Boscan, Gretha
        Inciarte, Martin	V Boscan, Gretha
        Inciarte, Milagros	V Boscan, Gretha
        Iragorry, Eduardo	V Boscan, Gretha
        Jimenez, Graciela	V Boscan, Gretha
        Jose Gonzalez, Maria	V Boscan, Gretha
        Jose Negron Briceno, Egdo	V Boscan, Gretha
        Leal, Edith	V Boscan, Gretha
        Linares, Marcos	V Boscan, Gretha
        Machado, Mairim	V Boscan, Gretha
        Marina Sideregts, Luz	V Boscan, Gretha
        Martinez, Edgar	V Boscan, Gretha
        Martinez, Fernando	V Boscan, Gretha
        Matos, Humberto	V Boscan, Gretha
        Acosta, Patricia	Ocando, Ricardo
        Leon, Andres	Ocando, Ricardo
        Ocando, Andres	Ocando, Ricardo
        Perez, Alirio	Ocando, Ricardo
        Ocando, Ricardo	V Boscan, Gretha
        Osorio Tudares, Elizabeth	V Boscan, Gretha
        Ozuna, Marilen	V Boscan, Gretha
        Alvarado Leal, Yuneira	Requena, Franklin
        Andrea Avila, Maria	Requena, Franklin
        Castellanos, Jorge	Requena, Franklin
        Cruz, Ligmari	Requena, Franklin
        Monroy, Cindy	Requena, Franklin
        Sanchez, Anamaria	Requena, Franklin
        Requena, Franklin	V Boscan, Gretha
        Reyes, Gabriel	V Boscan, Gretha
        Veneturismo C.a	Romero, Anasofia
        Romero, Anasofia	V Boscan, Gretha
        Socorro, Elena	V Boscan, Gretha
        Soto, Gelinotte	V Boscan, Gretha
        Urdaneta, Fernando	V Boscan, Gretha
        Montiel, Maria	Zambrano, Aliana
        Zambrano, Aliana	Velasquez, Daniel
        Velasquez, Daniel	V Boscan, Gretha
        Velasquez, Elizabeth	V Boscan, Gretha
        Vicente Matos, Jose	V Boscan, Gretha
        Xiomara Morillo, Yris	V Boscan, Gretha
        Zerpa, Maiher	V Boscan, Gretha
        V Boscan, Gretha	Interview Group
        Interview Group	Prozper
            """
        
            let keys = """
        212 Universal Group
        America Travel Inc.
        Asegura International
        Barreto, Cesar
        Bianchi, Isabel
        Bracho, Willian
        Buloz Asesores De Se, Gamez
        Caribbean Life
        Caribbean Vacations By Cbinc
        Castro, Lizber
        Cma Global Partners
        Crown Consulting Av
        Crown Consulting Group
        Dream Of Liberty Llc
        Echeverria Seguros
        Erasmus Travel Assistance
        Everest International Group
        Family Global Care
        Global Axis 3000 Llc 
        Global Group
        Global Latinoamerica
        Global Solutions Services Llc
        Globalsi
        Guanchez, Kelly
        Guatemala Best Assurance
        Imna International Group
        Inprofis Group
        Interview Group
        Itp Travel
        Jaimes, ManuelDavid
        Jose Jimenez M, Maria
        Joubert, Johann
        Leonardo Colmenares, Jose
        Life And Health Global Group Lp
        Manzini, Flor
        Mas Ota
        Melian, Jennifer
        Orange Ta
        Orange Travel Assist Co
        Paez, Amaryllis
        Paseo Vacations
        Producers Financial Group 
        Protector Plan
        Quorum Corretaje De Seguros
        Rivas, Mireya
        Silva, Vaneska
        Stg Travel
        Suarez, Margarita
        Todo Seguros
        Uno, AgenteDe Prueba
        Unsiter
        Vega Corp
        Vitality Insurance
        Weston Travel Services
        Yv Travels
        305 Venezuela
        360 Travelers
        360 Travelers
        A Gonzalez R, JesÚs
        A Ocando, Ricardo
        A Rodriguez, Jesus
        A. Gomez, Pedro
        Abbate, Anibal
        Abc Travel
        Abilahoud, Luis
        Abiros Corp.
        Abp Advisors Llc
        Advanced Financial Partners
        Afredo Kretschmar Ri, Carlos
        Agencia Macs - Mauricio Alfonso
        Agencias Carlos Zapata
        Aguiar, Milagros
        Aguirre, Luisana
        Alargentina
        Alba Tours
        Alberto Bello Quijad, Julio
        Alejandra Arcay Corr, Maria
        Alexis Torres, Yury
        Alfonzo, Raquel
        Alpe Viajes
        Alse Group
        Alvarado, Lisbeth
        Alvarado, Rossana
        Alvarez, Elimar
        Alvarez, Luz
        Alvarez, Manuel
        Alzolay, Rossana
        Amena Corp
        Anais Delnardo International Group
        Andina Tour Ltda.
        Andrade, Mario
        Andrade, Reinardo
        Andreac
        Andreina Lopez, Maria
        Angelica Materan B., Ma.
        Angelicam
        Angulo, Fabiola
        Antares Viajes Y Turismo 
        Antonieta Zapata Rot, Maria
        Antonini, Victor
        Antonio Joseph Furia, Jose
        Antonio Urbina Ceden, Edgar
        Aredondo Seguros
        Arguinzones, Michell
        Ariza, Hilda
        Armando Garcia Perez, Adner
        Arturo Osorio Torne, Noel
        Aserfin Alliance
        Asesores Profesionales Del Turismo
        Asociacion De Golfistas Senior De Colombia
        Av1
        Av11
        Av19
        Av2
        Av21
        Av33
        Av34
        Av43 
        Av44
        Av56
        Av59
        Av69
        Av70
        Av75
        Av78
        Av81
        Av82
        Av83
        Av90
        Av94
        Av98
        Av99
        Aves Tours Ltda
        Azuaje, Daniel
        Barcha Trails Ltda
        Barrondo, Edurne
        Bart Travel, Vip
        Bautista, Ervis
        Bautista, Valeria
        Beacon Travel
        Belisa Traveling
        Benic, Yoris
        Bethke, Hildegard
        Bianchi Insurance Group
        Blanco, Alberto
        Blanco, Nadeska
        Blasioli Tedeschi, Antonionicolas
        Blaya Corredores De Seguros 
        Bolivia, Julio
        Booking Assistance
        Boos, Brent
        Boscan O, Maribel
        Boscan, Isabel
        Boscan, Katherine
        Boscan, Maribel
        Botello, Marco
        Bracamonte, Anais
        Bravo Alvarez, JoseRafael
        Briceno, Migdalia
        Buen Viento &amp; Buena Mar
        Buompatre, Judith
        Bustamante, Patricia
        C. Hadjian, Keny
        C.a .asesores De Seguros Y Riesgos
        Ca, Yo Soy Tu Asesor
        Cabrera Mesa, Antoniojose
        Calderon, Ailyn
        Camacho Parra, Alexisabraham
        Camacho, Victor
        Capital Assurance
        Caraballo, Miroslaba
        Cardenas, Maribel
        Caribbean Life No
        Carlos Venegas, Juan
        Carlosvgr
        Carrion, Marlene
        Casiero, Miguel
        Centro De Cruceros Sas
        Cerpa, Erika
        Chang, Jean
        Chim Lam, Gricel
        Choconta, Maryory
        Chuao Corp
        Cobo, Adonai
        Comparaonline Colombia
        Consorcio Isic
        Constanza Alvarado G, Ilse
        Contreras, Karen
        Coplan Salud
        Corban, Daniella
        Corona, Carlos
        Coronado &amp; Corporation 
        Corp Travel Colombia S.a.s
        Cristina Molina Caru, Yoseph
        Cruceros Selectos Internacionales Bog
        Cruceros Selectos Internacionales Sas
        Cruzando Fronteras
        Ctm - S.a.s
        Cvecuador
        D Rubio Blanco, Jessica
        D&amp;f International
        Daniel Aular Malave, Jorge
        Dario Montes Sanchez, Ruben
        Dary Duran Florez, Luz
        Davila S., Judith
        De Copello, Isbelia
        De Vida, Pan
        Del Nardo, Gracia
        Del Pilar Camargo, Maria
        Del Valle, Luathany
        Deluxe Reps Sas
        Diaz, Francia
        Dominguez, Elainer
        Doral Travel
        Dreams Travel, Ca
        Duxan&#039;s
        E Diaz, Omaira
        E Gonzalez S, Mercedes
        Edval Seguros
        Elias Flores Zerpa, Campo
        Elvira Lucena Colmen, Maria
        Enrique Gil Gutierre, Jorge
        Enrique Villegas Jim, Gonzalo
        Enterprise, Katsil
        Entrenamiento Colombia
        Envoys
        Esis, Omer
        Espino, Yajilke
        Espinoza, Marlene
        Estrada, Carmeneugenia
        Eugenia Altuve Brice, Maria
        Express Turismo &amp; Marketing
        Extravaganza Viajes Y Turismo
        Fenix Eventos Viajes Y Turismo
        Fernandez, Virginia
        Fernando Ortiz B., David
        Filice, MariaTeresa
        Florida Insurance Usa
        Fontana, Maria
        Fossi, Luis
        Francia Chile
        Franco, Pancho
        Frascione, Enza
        Fuenmayor, Eduardo
        G&amp;b Corredores De Seguros
        Gabriela Benezra, Maria
        Gabriela Sanguinetti, Maria
        Gannem, Omar
        Garces Jaramillo, JoseJaime
        Gaviria L., Liliana
        Gcali
        Gerencia Patrimonial
        Gilberto Roche Marqu, Daniel
        Global Advisors
        Global De Seguros
        Global Protection Advisers Ldt
        Globalsi Barquisimeto
        Globalsi Caracas
        Globalsi Maracaibo
        Globalsi Oriente
        Globalsi Valencia
        Godoy, Griset
        Goldman, Mauricio
        Gonzalez Coll, Francisco
        Gonzalez, Jimmy
        Gonzalez, Wissleyla
        Graciela Alzuru, Maria
        Gsc Asesoria Corporativa De Seguros
        Guanchez Col, Kelly
        Guanchez, Luis
        Guateasistencias
        Guerrero, Alianaamarilis
        Gustavo Espinoza Bos, Pedro
        Gutierrez Solano, Gerardo
        Gutierrez, Margarita
        Gutierrez, Nestor
        Guzman G., Suleyma
        Harmony Travels
        Hc Seguros
        Heras, Carlos
        Hernandez Bozo, Iria
        Hernandez Mederos, DouglasAntonio
        Hernandez, Cesar
        Herrera, Mauricio
        Herrera, Veronica
        Hidalgo, Gabriela
        Horizons Insurance And Financial Services Inc
        Hugo Morales Garcia, Victor
        Hung, Azael
        Idealtour Ltda
        Indaloasesores C,a
        Ines Luna, Maria
        Integra Mayorista
        Integral Group Solution Sas
        Integro AsesorÍas Y Servicios
        Inversiones Emenco Inc
        Isaac Fernandez, Anamercedes
        Isabel Bejarano, Maria
        It Representaciones Turisticas
        Javier Bracho, Eli
        Jesus, Romero
        Jimenez, Pedro
        Jiron, Carlos
        Jl Camejo Asesores De Seguros
        Joania Tours
        Jose Gomez Velasquez, Miguel
        Jose Gonzalez, Gustavo
        Jose Jimenez, Maria
        Jose Torrealba Ramir, Wilmer
        Jpg Associates
        Kristina Antonorsi Asegurate
        Kubler, Erika
        Kugler, Mariluz
        L&amp;m International
        Lairet, Santos
        Larrazabal, Andreina
        Leader Life
        Lechin Associates
        Leon, Evencio
        Lets Go Travel
        Levip
        Life Beyond Borders
        Lillys Travel Assist
        Lilue, Cynthia
        Lodeiro De Dopazo, Susana
        Lon, Martin
        Lopez Corredor De Se, Gustavo
        Lopez, Sherllys
        Loreto, Jorge
        Lugo, Julio
        Luis Chambuco, Jose
        Luis Della Sala, Jorge
        Luis Pena Agencia
        Luis Perez Pena, Pedro
        M Anton R, Jindy
        Madrugale.com
        Magallanes, Ana
        Malave, Yelitza
        Manuela Goncalves, Maria
        Maria Angarita C, Olga
        Maribel Ortiz Perez, Fulvia
        Marmol, Ninoska
        Martinez De Oropeza, Yanna
        Martinez, Eglee
        Martinez, JoseRaul
        Martinez, Rachel
        Mata Asesores, Machado
        Mata, Alejandro
        Mater Dei
        Medigases S.a.s
        Medina, Luis
        Megatiquete.com
        Melo, Fridel
        Melul, Salomon
        Mena, Lisbeth
        Meneses, Karina
        Mikkelson &amp; Gomez
        Milagros Pastran, Maria
        Minaya, Luissana
        Mjpp Vzla
        Mjs &amp; Asociados
        Mm Insurance 
        Molina Lovera, Rita
        Molina, Hania
        Molina, Janette
        Morales, Mariela
        Moya, Adelaida
        Mujica, Velis
        Mundial De Asistencias S.a.s
        Mundial De Cruceros 
        Nava, Jeylin
        Net Insurance Inc
        Netbrokers
        New Port Sas
        Now Insured
        Nunez Gonzalez, Isabel
        NuÑez, Oscar
        O&amp;j Agencia De Viaje Virtual 
        Ocanto, Blas
        Olivares Gil, AngelicaMaria
        Operando Viajes &amp; Turismo Ltda
        Orangereps
        Orangetravelcol
        Ordaz, Douglas
        Organizacion Park Way Viajes Y Turismo Sas
        Ortiz Corredor De Se, Eduardo
        Ospina Y., Elizabeth
        Otaiza Ferrer, Phyllys
        Pablo Hernandez Fons, Juan
        Pacheco, Ivory
        Padilla, Gustavo
        Panama, Evelyn
        Panamericana De Viajes
        Paqarina Go Travel S.a.s
        Paris Travel C.a
        Pelaez, Adriana
        Pena, Luis
        Penuela, Natalia
        Perez De Castillo, Eglee
        Peru, Karla
        Pina, Andreina
        Pirela, Lara
        Planchart, Celia
        Planes Turisticos.com
        Plazas, Sol
        Polanco, Oswaldo
        Prado, Marcel
        Preferred International&amp;associates
        Price Agencies
        Prius Reinsurance Brokers, N. V.
        Promotora Neptuno
        Protector Plan Av
        Quispe Vargas, Raul
        Rada, Gabriela
        Rahn, Kathleen
        Ramirez Sanchez, Carlosarturo
        Ramirez, Zuday
        Ramos, Emil
        Rangel, NaylethYoconda
        Ranuarez, Griselda
        Rendiles, Geline
        Representur Ltda
        Reserveya.com
        Resguarda Usa
        Reyes, Gladys
        Reyes, Oswaldo
        Rhino Travel Assist
        Rivas, Merly
        Rivero, Enania
        Rodil Sojo, Rosa
        Rodriguez Casado, Alonso
        Rodriguez, Fernando
        Rodriguez, Pavell
        Rojas, Deisy
        Rojas, R
        Rojas, Ricardo
        Rojask
        Romano, Filomena
        Romero Fajardo, Narmary
        Ros Diaz, Cristina
        Rosa Rodriguez, Maria
        Rosa Segovia Seg.
        Rosas, Monica
        Rosmarca Corp
        Rtravel
        Rubio, German
        Ruiz, Anamaria
        Ruta Gay Colombia S.a.s
        Saavedra Salcedo, Guillermo
        Saez, Carladaniela
        Sagarzazu Rodriguez, Carlosrafael
        Salazar Vergel, Marlon
        San Telmo Tours
        Sanchez, Alirio
        Sanchez, Williams
        Santa Cruz, Elisa
        Santana, Pablo
        Sarmiento Polo, Juliana
        Sat Mayorista
        Segovia, Liseth
        Segovia, Rosa
        Segura Arias, Carolina
        Seguros Chiapas
        Siempreco
        Sierra Barrios, Johan
        Sigma International Insurance Brokers
        Simon Hernandez Bozo, Luis
        Simon Ricardo, Lic
        Sira, Carlos
        Smm - Col
        Sol Travel Services
        Solorzano, Simon
        Soluciones Integrales Jtf
        Spg Travel S.a.s
        Stagno, Franchesca
        Stella Maris Turismo
        Stelluti, Enza
        T Corrente, Claudia
        Tarcisio Silva L, Darwin
        Ten Assist, Ten Assist
        The Gallery Travel 
        Tibari, Edmundo
        Tickets And Travel
        Tours Travel And Business Ltda
        Travel Alliances
        Travel Coach By Sa
        Travel Link S.a.s
        Treasure Viajes
        Triana, Alvaro
        Trip Ya, Orlando
        Trujillo, Patricia
        Tu Agente De Viajes Pzo
        Tu Agente Online
        Tudela, Andrea
        Turishuila S.a.s
        Turistas.com
        Tutiquete Express
        Umanchuk, Jorge
        V Boscan, Gretha
        Vacaciones Por El Mundo
        Valderrama, Natalia
        Valero, Yuraima
        Valles, Luis
        Vargas, Marbelys
        Vasquez, Karla
        Vc World Wide Group
        Velazco, Justiniano
        Velez Tours Sas
        Velice Financial Services Ltd
        Venesolution Corp.
        Venezuela Travel Assist
        Vespa, Luis
        Viaja Seguro
        Viajando Representaciones
        Viajes Country S.a.s
        Viajes Horizonte
        Viajes Meridiano Ltda
        Viajes Mora
        Viajes Oneresglobe Ca
        Viajes Y Eventos 360
        Vialibre
        Vieras, Mirtha
        Villaroel, Ricardo
        Villas Multiservices
        Villegas, Angelo
        Villegas, Enrique
        Villegas, JulioCesar
        Villegas, Mauricio
        Wheeler, Linda
        Yajure, Daniella
        Yaniris Gil Centeno, Ennys
        Yepez, Carlos
        Yisbel Torres Rodrig, Oneida
        Zambrano, Evelin
        Zapata Rotundo, Carlosfrancisco
        Zoturvenca
        Zubillaga Jimenez, Antoniojose
        ., Luzmary
        ., Montezelba
        A Menegaldo, Jose
        Abetancourt Seguros
        Abou Asaff, Amir
        Acevedo, Rosangely
        Acurero Mudafar, Elvis
        Adolfo Velasquez De, Gustavo
        Agencia, YouTravel
        Aguilar, Julio
        Aguilera, Patricia
        Aguilera, Syl
        Agutierrez Seguros
        Al Aaias, Feras
        Alacayo, Abigail
        Alejandra Espinoza, Maria
        Alejandra Tovar L., Maria
        Aleman, Robert
        Alfredo Matos, Jose
        Aliendres Ortega, RicciVinicia
        Almao, Marion
        Almao, Vanessa
        Alvarez, Margy
        Amado, Douglas
        Amador, Silvia
        Ambato Travel
        America Beck
        Angel, Fuentes
        Angelica PiÑero, Maria
        Antonio Zuloaga Yane, Ramon
        Antunez, Victor
        Araujo, Rolando
        Arc Seguros
        Arce Gomez, DouglasEulises
        Arguinzones, Alfredo
        Arias, Douglas
        Armas, Laura
        Arraiz, Jenniffer
        Arribas, Francisco
        Arroyo, Xioeli
        Artico Travel C.a 
        Arvelo, Haydi
        Aseca Internacional 
        Aurelis, Zamora
        Avilan, Marbelys
        Avilan, Oswaldo
        Avioteles
        Awak, Georges
        Aymerich 
        Baena, Andrea
        Baena, Silvia
        Bandres, Gloria
        Barreto, Bianeys
        Barrondo S., Maite
        Bastidas, Genesis
        Bello, Mariadela
        Belloso, Linaura
        Belloso, Lizbecth
        Belmonte, JoseGabriel
        Bermudez, Daniela
        Bermudez, Ligia
        Biztravel
        Blanco G, Mili
        Bonnefil L, Dominique
        Borges Insurance Ser, Bermudez
        Boscan, Gretha
        Bracho, Julio
        Brandt, Nerwill
        Brea Borges, Irving
        Briceno, Guido
        BriceÑo, Lorena
        Briceno, Marianela
        Briceno, Maribel
        Brito, Luis
        Buchin Insurance
        Bukowitz, Silvia
        Bulhosen, Yaccutt
        Burkert, Carmen
        Calima, Over
        Calvo, Luis
        Camacho, Clara
        Cantabriatur
        Cantunez Seguros
        Canualka Travel C.a
        Capobianco, Maria
        Caraballo, Mayerlin
        Carballido, Diego
        Cardona, Vivian
        Carolina Mendoza, Haydee
        Carrillo, Marlit
        Carrillo, Yesica
        Cartagena Travel &amp; Tours
        Castaneda De Daniel., Ana
        Castillo Travel
        Castillo, Alexandra
        Cecilia Araguainamo, Maria
        Cedeno, Karina
        Celi, JorgeL
        Centeno, Daniela
        Cesar Tabares Ramire, Paulo
        Christianm
        Ciccolella, Enzo
        Clarity
        Colmenares, Oscar
        Colon Travel
        Concepcion Hilders, Maria
        Concord Travel
        Contrataciones Turisticas
        Contreras, Daisy
        Coronado, Claudia
        Coronel
        Correa, Marianela
        Cortese, Enza
        Corti Guerrero, Carolina
        Credondo Seguros
        Cristina Pantoja
        Cristina Petrill, Maria
        Cundancin, Rubjuly
        Dagnino, Patricia
        Dao, Maria
        David Rincon, Jose
        De La Cruz, Sergio
        De La Rosa, Silvia
        De Los Angeles Pache, Maria
        De Olival, Diana
        De Oliveira, Maikel
        De Paz, Sabrina
        Delgado, Jessica
        Diaz
        Dib, Sheila
        Digitravel
        Dominguez, Monica
        Duarte, David
        Duque, Luz
        Duran, MarcosAgoturismo
        E, Maria
        Ecua Explorer
        Edg Mentors
        Eduardom
        Ee Seguros De Viaje
        El Principito Travel &amp; Services C.a
        Elatravel
        Elena Lilue, Maria
        Elena Villalobos Riv, Daisy
        Enrique Leal Jimenez, Walfredo
        Escalante, Annie
        Escobar, Angela
        Esperanza Rubiano, Maria
        Espina, Marien
        Espina, Sagrario
        Espinoza, Lisbeth
        Esther Andrade, Maria
        Estrada, Sorena
        Evasquez Seguros
        Fantasy Vacations Club, C.a.
        Febres, Jesus
        Fernanda Molero, Maria
        Fernandez, Frank
        Fernandez, Leonel
        Fernandez, Lidiana
        Fernandez, Zoraida
        Fernando Alizo, Luis
        Ferrer, Kathie
        Fineworld 
        Frias, Luis
        Frivas Seguros
        Gabriela Delgado, Maria
        Galem Travel
        Gallardo, Ana
        Gamboa, Dubraska
        Garces, Militza
        Garcia, Andreina
        Garcia, Antonio
        Garcia, German
        Garcia, Hermes
        Garcia, Jaime
        Garcia, Javier
        Garcia, Luis
        Garcia, Sebastian
        Garcia, Yaribet
        Garrido, Vaneska
        Gelves, Adrian
        Geronimo Perez, Luis
        Gerstel, Irma
        Ggonzalez Seguros
        Gil, Ana
        Ginestra, Noel
        Glenn, Estepfanny
        Gold Vip
        Golden Tours
        Goldman, David
        Gonzalez, Adriana
        Gonzalez, Auristela
        Gonzalez, Carlos
        Gonzalez, Maria
        Gonzalez, Yaneth
        Gregorio Silva Alvar, Jorge
        Grima, Marjorie
        Grupo Peru Viajes
        Guerra, Auristela
        Guerrero, Karttier
        Hans Rojas, Otto
        Hb Viajes
        He, WenlianWen
        Hernandez, Alejandro
        Hernandez, Lourdes
        Hernandez, Valentina
        Hernandez, Wilkerman
        Herrera, Bertha
        Hilario Gomez, Luis
        Hugo Santamaria Mila, Victor
        Huncrisr
        Hurtado, Domingo
        Idarraga, Isabel
        Iglesias, Miguel
        Ilumina Travel
        Imaginate Viajes
        Inciarte, Martin
        Inciarte, Milagros
        Invierta Seguros Corp
        Iragorry, Eduardo
        Iriarte, Joselyn
        Isasis, Emily
        Iturbe, Carlos
        Iventurella Seguros
        Izaguirre, Alex
        Jbarrington Seguros
        Jcaceres Seguros
        Jcastillo Seguros
        Jcermeno Seguros
        Jenny, Perozo
        Jhernandez Seguros
        Jimenez, Graciela
        Jimenez, Moises
        Jnc Tours
        Jose Gonzalez, Maria
        Jose Negron Briceno, Egdo
        Landaeta, Sonia
        Larez, Alcirelis
        Lbg Insurance
        Leal, Edith
        Leben Insurance Brokers
        Leon, Benny
        Leonarduzzi, Gianluca
        Lewisjime
        Lgil Seguros
        Linares, Marcos
        Lmartinez Seguros
        Lopez Zamora, Omar
        Lopez, Belkis
        Loyo, German
        Lozano, Desire
        Lozano, Marco
        Lsanchez
        Lsarmiento Seguros
        Machado, Mairim
        Manuel
        Marbel Travel Assist
        Maria, Suarez
        Marielba
        Marin Moncada, Nattaly
        Marin, Sandra
        Marina Sideregts, Luz
        Maritere
        Marliseth8aa
        Marmol, Victor
        Marquez Teran, Yolimar
        Martin Fakes &amp; Asociados
        Martin, Virginia
        Martinez Noguera, Rossy
        Martinez, Ambar
        Martinez, Edgar
        Martinez, Fernando
        Martinez, Javier
        Martinez, Yuly
        Marve Renta Car
        Marychinchilla
        Marzo C, Damian
        Massiani, Gustavo
        Master One
        Matilde Martin, Ester
        Matos, Humberto
        Maurera, Yanira
        Mauricio, Luis
        Maxi Tours
        Maxi Travel Assist
        Mcupare Seguros
        Medina, Alexis
        Medinas
        Melean, Mariela
        Mendez Corretaje
        Mercys Tours Ca
        Michelle Travel Assist
        Migueltravel
        Miki Travel
        Millan, Yusbeth
        Miranda, Alberto
        Mk Agencia De Viaje
        Mmarquez Seguros
        Mmillan
        Mmundarain Seguros
        Molleda, Marilyn
        Molleda, Rosalyn
        Monica Travel
        Montes, Carolina
        Monteverde, Mercedes
        Montoya, Patricia
        Morales, Alexandra
        Moraos, Anamercedes
        Moreno Asesor De Vid, Luis
        Mota, Luzmary
        Mpacheco
        Mujica, Damaris
        Mujica, Gabriela
        Mundirama
        Mundo Viajes
        Naser, Lilian
        Nass, Carlos ReneVillasmil
        Nayvely
        Nc Ferrer Seguros
        Newage Promotion
        Nievesa Tours S.a.c 
        Noguera, Angela
        Notaria
        Nucete, Rafael
        Nunez, Dulce
        Nunez, Ninoska
        Obrett Seguros
        Ocando, Ricardo
        Oceanic Travel
        Odriozola, Nekane
        Ojeda, Iranell
        Okarinac
        Olivieri, Giuseppe
        Ordaz, Andreina
        Oronoz, Yelitza
        Orta, Ailiva
        Osorio Tudares, Elizabeth
        Osuna Lopez, Sergio
        Ozuna, Marilen
        Pachano, Maria
        Padovan, Kathiuska
        Paez, Endrys
        Paez, Yasibit
        Pages, Jaime
        Palacios, Raquel
        Palma, Carlos
        Parraga, Rebeca
        Pascal, Tibisay
        Pasquale, Kenia
        Paul Ginestra, Jean
        Paula Esis, Maria
        Paulina Travel Assist
        Paz, Heliangelus
        Paz, Josie
        Paz, Misleny
        Pedroza Casas, Alfredo
        Pedroza, Manuel
        Pelaez, Josandra
        Peraza, Rebeca
        Perez Von Seggern, Ernesto
        Perez, Gustavo
        Perez, Mariluz
        Perez, Rebeca
        Perez, Urquia
        Perozo Romero, Liz
        Perozo, Jenny
        Pimentel, Isabel
        Pina, Yanetsy
        Pineda, Gledys GregoriaGutierrez
        Platinium Travel Llc
        Plaza, Isabela
        Ponte, Asia
        Portillo, Petra
        Prieto, Adolfo
        Princeturismo C.a.
        Qsuarez
        Quijada, Omary
        Quintanar, Ana
        Quovadis
        Rada, Desiree
        Rafael Gamus, Jose
        Ramirez, Angela
        Ramon Hernandez D, Orasil
        Ramos
        Rams Motors
        Regueiro Ignasi, Andreina
        Representaciones Continental Internacional 
        Requena, Franklin
        Reyes, Gabriel
        Reyna, Dubraska
        Rincon, Milagros
        Rios, Orangel
        Rivas, Rebeca
        Roble, Maria
        Robledo, Raquel
        Roblex Group
        Rodriguez, Alvaro
        Rodriguez, Eduardo
        Rodriguez, Ernesto
        Rodriguez, Jeannette
        Rojas, Carlos
        Rojas, Henry
        Rojas, Jose
        Rojas, Rosa
        Rojas, Roxana
        Roldan, Carolina
        Romero Zaffaroni, Carlos
        Romero, Adriannys
        Romero, Anasofia
        Romero, Roman
        Rondon, Virginia
        Roo, Leonardo
        Rovero, Sandra
        Roymar Viajes Y Turismo
        Rubio, CristinaDe
        Salamia, Lis
        Salazar, Ana
        Salazar, Gustavo
        Salazar, Lissett
        Salcedoc
        Salinas, MariaAmericana
        Salomon, Mauricio
        Samantha Farias
        Sanchez J, Ilcia
        Sanchez, Felix
        Sanchez, Juan
        Sanchez, Karem
        Sandra Del Valle Marin Int.
        Sanguino, Gregori
        Santa Paula Travel
        Santos, RicardoYagual
        Secura Group
        Serrano, Gabriela
        Shoda, Michelle
        Sibada, Marianny
        Siso, Susan
        Skyline Tours
        Socorro, Elena
        Solano, Madeleine
        Solutions Life
        Soto, Gelinotte
        Soto, Ileana
        Stella Berlingeri, Maris
        Suarez, Veronica
        Sue, Rafael
        Super Nice Renta Car
        Tepeyac Travel C.a
        Thamt
        The Dream Maker
        Time To Travel
        Tinoco Y Asociados
        Toro, Marisabel
        Torres, MiguelA
        Torres, RobertoGuarin
        Tovar, Ismael
        Tovar, Luirene
        Travel Kruiz
        Travel Live
        Ucros, Luz
        Ugarit
        Urbina, JuanCarlos
        Urdaneta, Fernando
        Urdaneta, Tahiry
        Valbuena, Hilda
        Valderrama Rosales, Nelly
        Vasquez, Irvanis
        Velasquez, Daniel
        Velasquez, Elizabeth
        Venezia Travel
        Viajes Royal Global
        Viaxum Travel Peru
        Vicente Matos, Jose
        Villamizar, Jonathan
        Villarreal, Lola
        Villegas, Laura
        Virginia Gonzalez, Maria
        Wilkermanp
        Xiomara Morillo, Yris
        Y. Brandt, Nerwill
        Yagual, ReynaAsesor
        Yaisi
        Yanes, Carmen
        Yanira Linares Marti, Karem
        Yelitzaoro
        Yvelice Silva Aguirr, Josefina
        Zadra, Juan
        Zamora, Aureliz
        Zapata, Martha Liliana
        Zdelgado Seguros
        Zerpa, Maiher
        Zhen, Shengquan
        Zulimart
        , Nelson
        ., Johana
        ., Mabelis
        ., Nuriluz
        Acero, Nicolay
        Acl Soluciones, C.a
        Acosta, Francis
        Acosta, Patricia
        Aerotravel
        Aeroworld Peru
        Afreites Seguros
        Agencia Esther Paez
        Alfonzo, Laura
        Alfredo Ocando, Luis
        Alvarado Leal, Yuneira
        Andrea Avila, Maria
        Andreina Dominguez R, Samantha
        Ann Shaw, Mery
        Arianysa
        Atencio, Carlos
        Avila, Naivelin
        Azuaje, Joselyn
        Barillas, Morena
        Bcd Travel - Turvisa Zona 10
        Bello, Pablo
        Beltran, Yolanda
        Benitez, Benjamina
        Black Miles
        Bob Travel 1 Inc
        Bonadies, Rafael
        Boscan, Ada
        Bracho, Monica
        Briceno &amp; Asociados
        Brivas Seguros
        C. Morello, Carmen
        Cabrera, Hector
        Campos, Oskarina
        Capo, Alonso
        Caraco, Cristina
        Carrero, Raul
        Castellanos, Jorge
        Castillejo, Andrew
        Cedeno, Joseluis
        Ceibal Tours
        Cespinoza Seguros
        Cianci, Assunta
        City Travel
        Cmoessati Seguros
        Colina, Karina
        Cordoba, Alejandro
        CorporaciÓn Cyl 22
        Costa Del Mar Travel And Services
        Cruz, Ligmari
        Da Costa, Mariela
        Davila, Sandra
        De Aguiar, Cesarina
        De Los Angeles Baden, Maria
        Delgado, Rodolfo
        Devora&#039;s Travel
        Diaz Otero &amp; Asociados
        Dmendez Seguros
        Eduardo Garcia, Javier
        Erodriguez Seguros
        Escalona, Carlos
        Estrada, Andres
        Exchange, Friendly
        Express Tours
        Falen Travel Agency
        Felipe Rodriguez, Ramon
        Fernanda Pirela, Maria
        Fertur Travel
        Galindez, Gilmerth
        Gdemma Seguros
        Gil, Dusady
        Gmalave Seguros
        Godoy, Gustavo
        Gonzalez, Raul
        Granes, Katty
        Guatemala Nature
        Gutierrez, Breddy
        Gutierrez, Emiro
        Halvarez Seguros
        Hernandez, Andrea
        Hernandez, Marisela
        Hernandez, Miguel
        Herrera, Omar
        Ibarra, Eduardo
        Inamet
        Insurance Agency Llc, Svalencia
        Jarace Seguros
        Jbrea &amp; Asociados
        Jimenez, Andreina
        Jimenez, Leomary
        JordoÑez Seguros
        Jose Amado, Douglas
        Jsalazar Seguros
        Karina Rojas, Karla
        Kenny Travel
        La Nusta
        Laneve, Rosa
        Latin Spirit Travel
        Leal, Alvaro
        Leal, Anauris
        Lebran 
        Leon, Andres
        Lguzman Seguros
        Lopez, Iscarel
        Lopez, Lignery
        Lores, Lis
        Los Campitos Tours
        Lpacheco
        Machado, Carlos
        Marquez, Angelica
        Marquis, Oscar
        Marte&#039;s Tax Services
        Martinez, Cris
        Martinez, Kisbel
        Martinez, Marielina
        Matos, Luis
        Maxima Travel
        Mendez, Deborah
        Meneses, Laura
        Merida Travel Services Llc
        Mluces Seguros
        Moncada, Carlos
        Monroy, Cindy
        Montiel, Mercedes
        Montiel, Veronica
        Morales, Mayra
        Morales, Nilfida
        Multidestinos
        Mundo Turismo
        Nancy´s Travel
        Nardelli, Claudia
        Natera, Zullyra
        Netcomtravel
        Norelikac
        Noriega &amp; Asociados
        Ocando, Andres
        Ochoa, Cesar
        Ochoa, Marianela
        Orozco, David
        Ortega, Erika
        Ortega, Marianella
        Pacheco, Mireya
        Palacios, Anamaria
        Paz, Vanessa
        Perdomo, Yanny
        Pereira &amp; Asociados
        Perez, Alberto
        Perez, Alirio
        Petit, Bianca
        Pinango, Olga
        Ponce, Ericson
        Prisko Tours
        Punto Ecuador
        Punto Multiservices
        Quinones, Nataly
        Regardiz, Eleumarys
        Renatours
        Renwick, Rafael
        Reyes, Jolbelys
        Rlengua
        Rodriguez, Ángel
        Rodriguez, Aura
        Rodriguez, Katia
        Rodriguez, Katiana
        Rodriguez, Leonardo
        Rojas, Morela
        Romero, Ana
        Romero, Sonia
        Ronel Tours
        Ruiz, Joe
        Rumbos Tours
        Salazar Alcala, Daniella
        Salcedo, Carmenvictoria
        Samara Tours
        Sanchez &amp; Asociados
        Sanchez, Anamaria
        Sanchez, Jim
        Seguros Krmaura
        Seguros, Lrivera
        Silva, Mariangela
        Soles, Lorena
        Suarez, Eoliberth
        Suarez, Neyma
        Surga, Jeannette
        Surga, Yelizta
        T&amp;h Multiservices
        Tours Y Eventos Vip
        Turismo Inkaiko
        Urdaneta, Dayana
        Utrera, Friendherlyn
        Vanegash, Robinson
        Vasquez, Cristobal
        Velasquez, Santiago
        Veneturismo C.a
        Viajes Panamericana
        Viajes Primavera
        Viajesjf
        Vicente Gonzalez Gar, Jose
        Villalobos, Andreus
        Villasmil, Ruthmary
        Virginia Mago Beaufo, Maria
        Viva Operador
        Volare
        Vuela Club
        Wilsons Travel And Services
        Zambrano, Aliana
        Alejandra Figueira, Maria
        Aracay Tours
        Campitos Tours
        Carolines Travel
        Matos Villalobos, Sofia
        Matos, Deyanira
        Montiel, Maria
        Pianezzola, Sandra
        Pineda, Marianyeli
        Rivero, Iskra
        Ruta Carlucci, Guiseppe
        Terrone Ruta, Nunzio
        Visbal, Debora
        Prozper
        """
        
            let statuss = """
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        INACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        INACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        INACTIVO
        ACTIVO
        INACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        INACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        INACTIVO
        INACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        INACTIVO
        INACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        INACTIVO
        INACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        INACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        INACTIVO
        ACTIVO
        INACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        INACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        INACTIVO
        INACTIVO
        INACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        INACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        INACTIVO
        INACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        INACTIVO
        INACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        INACTIVO
        INACTIVO
        ACTIVO
        INACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        INACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        INACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        INACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        INACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        INACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        ACTIVO
        """
        
            let getLines = String.splitByChar '\n'
                        >> Seq.map String.trim
                        >> Seq.filter ((<>) "")
        
            let statuses =
                Seq.zip (getLines keys) (getLines statuss) |> Map
        
            let aliados =
                getLines data
                |> Seq.map (String.splitByChar '\t')
                |> Seq.map (fun p -> p.[0], Seq.last p)
                |> Seq.map (fun (p1, p2) -> 
                    try statuses.[p1]
                    with e -> printfn "not found %A" p1 ; "INACTIVO"
                    , p1, p2)
                |> Seq.map (fun (sta, p1, p2) ->
                    let apellido, nombre, genero = 
                        match p1.Split ',' with
                        | [| ap ; nm |] -> ap.Trim(), nm.Trim(), Femenino
                        | _             -> ""       , p1.Trim(), Empresa
                    {
                        id              = IdAliado p1
                        authorizeIdR    = Error ""
                        idPadreO        = IdAliado p2 |> Some
                        identificacion  = [||]
                        datosPersonales = {
                                            titulo          = None
                                            nombre1         = nombre
                                            nombre2         = ""
                                            apellido1       = apellido
                                            apellido2       = ""
                                            nacionalidad    = Venezuela
                                            genero          = genero
                                            fechaNacimiento = System.DateTime.Now
                        }
                        contactos       = [||]
                        formasPago      = [||]
                        transacciones   = [||]
                        mensajes        = [||]
                        isInternal      = false
                        status          = if sta = "ACTIVO" then Activo else Inactivo
                        tipo            = Regular
                        fechaRegistro   = System.DateTime.Now
                        fechaStatus     = System.DateTime.Now
                        nReferidos      = 0
                        nRefActivos     = 0
                        nDescendientes  = 0
                        nDescActivos    = 0
                        comision        = 0
                        nivel           = 0
                    }
                )
        
            let modelo = {
                idAliado      = IdAliado "admin"
                aliados       = aliados |> Seq.toArray
                anoActual     = 2019
                periodoActual = 1
                premisas      = premisasCalculo
                nevento       = -2L
            }
        
            //Aliado.actualizarAliados modelo
            //|> Seq.iter print
        
        
        //#define NOFMK --noframework
        
            
        //#nowarn "52"
        //#nowarn "1182"
        //#nowarn "1178"
        
        module AddSamples =
        
            let addSamples() =
                Sample.aliados 
                    |> Seq.iter (fun al ->
                        { data    = DataEvento.AgregarAliado al
                          aliadoO = Some <| IdAliado "Server"
                          nevento = 0L
                        }
                        |> ManejadorEventos.ejecutarEventoNuevo 
                        |> AsyncResultM.iterpS print)
        