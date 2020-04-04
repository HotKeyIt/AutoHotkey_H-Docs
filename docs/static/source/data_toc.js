toc = [
  {label:"Quick Reference",path:"AutoHotkey.htm"},
  {label:"AutoHotkey v2 Help",path:"AutoHotkeyV2.chm::/docs/AutoHotkey.htm"},
  {label:"Recent AutoHotkey_H Changes",path:"ChangeLog.htm"},
  {label:"Command and Function Index",path:"commands/index.htm"},
  {label:"AutoHotkey Module",children:
  [
    {label:"About AutoHotkey Module",path:"AutoHotkeyDll.htm"},
    {label:"AutoHotkey COM Interface",path:"COMInterface.htm"},
    {label:"Create Thread",children:
    [
      {label:"ahkdll",path:"commands/ahkdll.htm"},
      {label:"ahktextdll",path:"commands/ahktextdll.htm"},
      {label:"AhkThread",path:"commands/AhkThread.htm"},
      {label:"AhkExported",path:"commands/AhkExported.htm"}
    ]},
    {label:"Working with threads",children:
    [
      {label:"ahkgetvar",path:"commands/ahkgetvar.htm"},
      {label:"ahkassign",path:"commands/ahkassign.htm"},
      {label:"ahkLabel",path:"commands/ahkLabel.htm"},
      {label:"ahkFunction",path:"commands/ahkFunction.htm"},
      {label:"ahkPostFunction",path:"commands/ahkPostFunction.htm"}
    ]},
    {label:"Add or Execute New Code",children:
    [
      {label:"ahkExec",path:"commands/ahkExec.htm"},
      {label:"addScript",path:"commands/addScript.htm"},
      {label:"addFile",path:"commands/addFile.htm"}
    ]},
    {label:"Control Thread",children:
    [
      {label:"ahkPause",path:"commands/ahkPause.htm"},
      {label:"ahkReady",path:"commands/ahkReady.htm"},
      {label:"ahkReload",path:"commands/ahkReload.htm"},
      {label:"ahkTerminate",path:"commands/ahkTerminate.htm"}
    ]},
    {label:"Low Level / Advanced",children:
    [
      {label:"ahkFindFunc",path:"commands/ahkFindFunc.htm"},
      {label:"ahkFindLabel",path:"commands/ahkFindLabel.htm"},
      {label:"ahkExecuteLine",path:"commands/ahkExecuteLine.htm"},
      {label:"ahkgetvar",path:"commands/ahkgetvar.htm"}
    ]}
  ]},
  {label:"Binary",children:
  [
    {label:"BinToHex",path:"commands/BinToHex.htm"},
    {label:"HexToBin",path:"commands/HexToBin.htm"},
    {label:"ObjDump",path:"commands/ObjDump.htm"},
    {label:"ObjLoad",path:"commands/ObjLoad.htm"}
  ]},
  {label:"Cast",path:"commands/Cast.htm",children:
  [
    {label:"Cast",path:"commands/Cast.htm"},
    {label:"ToChar",path:"commands/ToChar.htm"},
    {label:"ToInt",path:"commands/ToInt.htm"},
    {label:"ToShort",path:"commands/ToShort.htm"},
    {label:"ToUChar",path:"commands/ToUChar.htm"},
    {label:"ToUInt",path:"commands/ToUInt.htm"}
  ]},
  {label:"External Libraries",children:
  [
    {label:"DynaCall",path:"commands/DynaCall.htm"},
    {label:"MCodeH",path:"commands/MCodeH.htm"},
    {label:"WinApi",path:"commands/WinApi.htm",children:[
      {label:"Macros",children:
      [
        {label:"HIBYTE",path:"commands/HIBYTE.htm"},
        {label:"HIWORD",path:"commands/HIWORD.htm"},
        {label:"LOBYTE",path:"commands/LOBYTE.htm"},
        {label:"LOWORD",path:"commands/LOWORD.htm"},
        {label:"MAKELANGID",path:"commands/MAKELANGID.htm"},
        {label:"MAKELCID",path:"commands/MAKELCID.htm"},
        {label:"MAKELONG",path:"commands/MAKELONG.htm"},
        {label:"MAKELPARAM",path:"commands/MAKELPARAM.htm"},
        {label:"MAKELRESULT",path:"commands/MAKELRESULT.htm"},
        {label:"MAKEWORD",path:"commands/MAKEWORD.htm"},
        {label:"MAKEWPARAM",path:"commands/MAKEWPARAM.htm"}
      ]},
    ]},
    {label:"COM",children:
    [
      {label:"ComObjDll",path:"commands/ComObjDll.htm"},
    ]}
  ]},
  {label:"File, Directory and Disk",children:
  [
    {label:"FileReplace",path:"commands/FileReplace.htm"},
  ]},
  {label:"Graphical User Interfaces",children:
  [
    {label:"Progress",path:"commands/Progress.htm"},
    {label:"SplashImage",path:"commands/SplashImage.htm"},
    {label:"SplashTextOn",path:"commands/SplashTextOn.htm"},
  ]},
  {label:"Memory Module",children:
  [
    {label:"MemoryModule",path:"MemoryModule.htm"},
    {label:"MemoryLoadLibrary",path:"commands/MemoryLoadLibrary.htm"},
    {label:"MemoryGetProcAddress",path:"commands/MemoryGetProcAddress.htm"},
    {label:"MemoryFreeLibrary",path:"commands/MemoryFreeLibrary.htm"},
    {label:"MemoryFindResource",path:"commands/MemoryFindResource.htm"},
    {label:"MemorySizeofResource",path:"commands/MemorySizeofResource.htm"},
    {label:"MemoryLoadResource",path:"commands/MemoryLoadResource.htm"},
    {label:"MemoryLoadString",path:"commands/MemoryLoadString.htm"},
    {label:"ResourceLoadLibrary",path:"commands/ResourceLoadLibrary.htm"}
  ]},
  {label:"Misc.",children:
  [
    {label:"IsBOM",path:"commands/IsBOM.htm"},
    {label:"Object features",path:"commands/ObjectExtended.htm"},
    {label:"Macro",path:"commands/Macro.htm"},
  ]},
  {label:"String",children:
  [
    {label:"StrPutVar",path:"commands/StrPutVar.htm"},
  ]},
  {label:"Struct",children:
  [
    {label:"Struct",path:"commands/Struct.htm"},
    {label:"sizeof",path:"commands/sizeof.htm"},
    {label:"Built-in Data Types",path:"StructTypes.htm"}
  ]},
  {label:"Threads",children:
  [
    {label:"With AutoHotkey.dll",children:
    [
      {label:"ahkdll",path:"commands/ahkdll.htm"},
      {label:"ahktextdll",path:"commands/ahktextdll.htm"},
      {label:"AhkThread",path:"commands/AhkThread.htm"},
      {label:"AhkExported",path:"commands/AhkExported.htm"},
      {label:"Methods",children:
      [
        {label:"addFile",path:"commands/addFile.htm"},
        {label:"addScript",path:"commands/addScript.htm"},
        {label:"ahkassign",path:"commands/ahkassign.htm"},
        {label:"ahkExec",path:"commands/ahkExec.htm"},
        {label:"ahkExecuteLine",path:"commands/ahkExecuteLine.htm"},
        {label:"ahkFindLabel",path:"commands/ahkFindLabel.htm"},
        {label:"ahkFunction",path:"commands/ahkFunction.htm"},
        {label:"ahkgetvar",path:"commands/ahkgetvar.htm"},
        {label:"ahkLabel",path:"commands/ahkLabel.htm"},
        {label:"ahkPause",path:"commands/ahkPause.htm"},
        {label:"ahkPostFunction",path:"commands/ahkPostFunction.htm"},
        {label:"ahkReady",path:"commands/ahkReady.htm"},
        {label:"ahkReload",path:"commands/ahkReload.htm"},
        {label:"ahkTerminate",path:"commands/ahkTerminate.htm"}
      ]}
    ]},
    {label:"Without AutoHotkey.dll",children:
    [
      {label:"ExeThread",path:"commands/ExeThread.htm"},
      {label:"ThreadObj",path:"commands/ThreadObj.htm"},
      {label:"NewThread",path:"commands/NewThread.htm"}
    ]},
    {label:"Thread Management",children:
    [
      {label:"Alias",path:"commands/Alias.htm"},
      {label:"CriticalObject",path:"commands/CriticalObject.htm"},
      {label:"CriticalSection",path:"commands/CriticalSection.htm"},
      {label:"ObjShare",path:"commands/ObjShare.htm"}
    ]}
  ]},
  {label:"Zip Library",children:
  [
    {label:"UnZip",path:"commands/UnZip.htm"},
    {label:"UnZipBuffer",path:"commands/UnZipBuffer.htm"},
    {label:"UnZipRawMemory",path:"commands/UnZipRawMemory.htm"},
    {label:"ZipAddBuffer",path:"commands/ZipAddBuffer.htm"},
    {label:"ZipAddFile",path:"commands/ZipAddFile.htm"},
    {label:"ZipAddFolder",path:"commands/ZipAddFolder.htm"},
    {label:"ZipCloseBuffer",path:"commands/ZipCloseBuffer.htm"},
    {label:"ZipCloseFile",path:"commands/ZipCloseFile.htm"},
    {label:"ZipCreateBuffer",path:"commands/ZipCreateBuffer.htm"},
    {label:"ZipCreateFile",path:"commands/ZipCreateFile.htm"},
    {label:"ZipInfo",path:"commands/ZipInfo.htm"},
    {label:"ZipOptions",path:"commands/ZipOptions.htm"},
    {label:"ZipRawMemory",path:"commands/ZipRawMemory.htm"}
  ]},
  {label:"#Directives",children:
  [
    {label:"#CriticalObjectSleepTime",path:"commands/_CriticalObjectSleepTime.htm"},
    {label:"#CriticalObjectTimeOut",path:"commands/_CriticalObjectTimeOut.htm"},
    {label:"#DefineDefault[Object/Array/Map]Value",path:"commands/_DefineDefaultObjectValue.htm"},
    {label:"#DllImport",path:"commands/_DllImport.htm"},
    {label:"#WarnContinuableException",path:"commands/_WarnContinuableException.htm"}
  ]}
];
