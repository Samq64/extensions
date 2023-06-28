(function (Scratch) {
  "use strict";

  //?Note to garboMuffin I use this class called "ExtensionBuilder" that I made to make the workflow faster so I don't have to spend as much time checking and modifying JSON data.
  //?Also I really like the syntax compared to JSON.

  /* eslint-disable */
  class ExtensionBuilder{constructor(t,n,i,l){this.internal={},this.internal.JSON={blocks:[],menus:{}},this.runtime=Scratch.vm.runtime,this.internal.defaultFunction={code(){console.log("This block has no code")},arguments:{}},this.addDocs=t=>{this.internal.JSON.docsURI=t},this.addBlock=(t,n,i,l,e,s)=>{l=l||this.internal.defaultFunction.code,this[n]=l,s=s||{};let o=s;o.disableMonitor||(o.disableMonitor=!0),o.opcode=n,o.blockType=i,o.text=t,o.arguments=e||this.internal.defaultFunction.arguments;let r=this.internal.JSON.blocks.length;return this.internal.JSON.blocks.push(o),this.internal.JSON.blocks[r].addArgument=(t,n,i,l)=>{if(null==(i=i||null))switch(typeof n){case"string":default:i=Scratch.ArgumentType.STRING;break;case"boolean":i=Scratch.ArgumentType.BOOLEAN;break;case"number":case"bigint":i=Scratch.ArgumentType.NUMBER}return null==n?this.internal.JSON.blocks[r].arguments[t]={type:i}:this.internal.JSON.blocks[r].arguments[t]={type:i,defaultValue:n},(l=l||null)&&"string"==typeof l&&(this.internal.JSON.blocks[r].arguments[t].menu=l),this.internal.JSON.blocks[r]},this.internal.JSON.blocks[r].setIcon=t=>(this.internal.JSON.blocks[r].blockIconURI=t,this.internal.JSON.blocks[r]),this.internal.JSON.blocks[r].setFilter=t=>(t=t||Scratch.TargetType.SPRITE,this.internal.JSON.blocks[r].filter=t,this.internal.JSON.blocks[r]),this.internal.JSON.blocks[r].hideBlock=()=>(this.internal.JSON.blocks[r].hideFromPalette=!0,this.internal.JSON.blocks[r]),this.internal.JSON.blocks[r].stopMoniter=()=>(this.internal.JSON.blocks[r].disableMonitor=!0,this.internal.JSON.blocks[r]),this.internal.JSON.blocks[r].setEdgeActivation=t=>(this.internal.JSON.blocks[r].isEdgeActivated=t,this.internal.JSON.blocks[r]),this.internal.JSON.blocks[r].addImage=(t,n,i)=>{i=i||!1;let l={type:Scratch.ArgumentType.IMAGE,dataURI:n,flipRTL:i};return this.internal.JSON.blocks[r].arguments[t]=l,this.internal.JSON.blocks[r]},this.internal.JSON.blocks[r]},this.addMenu=(t,n,i)=>{i=i||!1,"function"==typeof n?(this[t+"Function"]=n,this.internal.JSON.menus[t]={items:t+"Function"}):this.internal.JSON.menus[t]={items:n},this.internal.JSON.menus[t].acceptReporters=i},this.addButton=(t,n,i)=>{n=n||this.internal.defaultFunction.code,i=i||"Button",this["button_"+t]=n;let l={};l.func="button_"+t,l.blockType=Scratch.BlockType.BUTTON,l.text=i;let e=this.internal.JSON.blocks.length;return this.internal.JSON.blocks[e]=l,this.internal.JSON.blocks[e]},this.addDivider=()=>{this.internal.JSON.blocks.push("---")},this.addLabel=t=>{t=t||"N/A";let n={opcode:"__NOUSEOPCODE",blockType:"label",text:t};this.internal.JSON.blocks.push(n)},this.__NOUSEOPCODE=()=>{},this.internal.createBase=()=>{if(t=t||"Extension",n=n||"extension",this.internal.JSON.name=t,this.internal.JSON.id=n,(i=i||{}).blockColor=i.blockColor||null,i.inputColor=i.inputColor||null,i.outlineColor=i.outlineColor||null,null!=i.blockColor){let e=i.blockColor;e>8947848?this.internal.colors=[e,e-197379,e-394758,]:this.internal.colors=[e,e+197379,e+394758,],i.inputColor,this.internal.colors[1]=i.inputColor,i.outlineColor,this.internal.colors[2]=i.outlineColor,this.internal.JSON.color1=this.internal.colors[0],this.internal.JSON.color2=this.internal.colors[1],this.internal.JSON.color3=this.internal.colors[2]}(l=l||{}).blockIconUri=l.blockIconUri||null,l.menuIconUri=l.menuIconUri||l.blockIconUri||null,this.menuUri=l.menuIconUri,this.blockIco=l.blockIconUri,this.docsUri=null},this.internal.createBase(),this.setColors=(t,n,i)=>{t="string"==typeof t?t:(t+0).toString(16),n="string"==typeof n?n:(n+0).toString(16),i="string"==typeof i?i:(i+0).toString(16),this.internal.colors=[0,0,0],this.internal.colors[0]=t,this.internal.colors[1]=n,this.internal.colors[2]=i,this.internal.JSON.color1=t,this.internal.JSON.color2=n,this.internal.JSON.color3=i},this.setMenuIcon=t=>{this.internal.JSON.menuIconURI=t},this.setGlobalBlockIcon=t=>{this.internal.JSON.blockIconURI=t},this.runHat=t=>{this.runtime.startHats(this.internal.JSON.id+"_"+t)},this.getInfo=()=>this.internal.JSON,this.register=()=>{Scratch.extensions.register(this)}}}
  /* eslint-enable */

  const menuIco =
    "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIzMi45OTk3MiIgaGVpZ2h0PSIzMi44ODIwNyIgdmlld0JveD0iMCwwLDMyLjk5OTcyLDMyLjg4MjA3Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjI0LC0xNjMuOTk5OTMpIj48ZyBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpc1BhaW50aW5nTGF5ZXImcXVvdDs6dHJ1ZX0iIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG5vcm1hbCI+PHBhdGggZD0iTTIyOC43NTMsMTk0LjYwMmwtNC4yNSwxLjc4bDEuNzgzLC00LjIzN2MxLjIxOCwtMi44OTIgMi45MDcsLTUuNDIzIDUuMDMsLTcuNTM4bDE5Ljc1LC0xOS42NzdjMC44NDYsLTAuODQyIDIuNjUsLTAuNDEgNC4wMzIsMC45NjdjMS4zOCwxLjM3NSAxLjgxNiwzLjE3MyAwLjk3LDQuMDE1bC0xOS43NSwxOS42NzhjLTIuMTIzLDIuMTE2IC00LjY2NCwzLjggLTcuNTY1LDUuMDEyIiBmaWxsPSIjZmZmZmZmIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHN0cm9rZT0iIzU3NWU3NSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PHBhdGggZD0iTTIzNi44NTgsMTczLjQyOGMwLDAgMi42MTYsMi4yMiA0LjM1LC0xLjU0NmMzLjc1MiwtOC4xNSA4LjIwMiwtNS43NzIgOC4yMDIsLTUuNzcyIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHN0cm9rZT0iIzU3NWU3NSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PHBhdGggZD0iTTI1Ni40MiwxNjguODI1YzAsMC40NjMgLTAuMTQsMC44NzMgLTAuNDMyLDEuMTY0bC05LjMzNSw5LjNjMC4yODIsLTAuMjkgMC40MSwtMC42NjggMC40MSwtMS4xMmMwLC0wLjg3NCAtMC41MDcsLTEuOTYzIC0xLjQwNiwtMi44NjhjLTEuMzYyLC0xLjM1OCAtMy4xNDcsLTEuOCAtNC4wMDIsLTAuOTlsOS4zMzUsLTkuMzAxYzAuODQ0LC0wLjg0IDIuNjUsLTAuNDEgNC4wMzUsMC45NmMwLjg5OCwwLjkwNCAxLjM5NiwxLjk4MiAxLjM5NiwyLjg1NU0yMzAuNTE1LDE5My43NzRjLTAuNTczLDAuMzAyIC0xLjE1NywwLjU3IC0xLjc2NCwwLjgzbC00LjI1MSwxLjc3OGwxLjc4NiwtNC4yMzVjMC4yNTgsLTAuNjA0IDAuNTMsLTEuMTg2IDAuODMzLC0xLjc1N2MwLjY5LDAuMTgzIDEuNDQ4LDAuNjI1IDIuMTA4LDEuMjgyYzAuNjYsMC42NTggMS4xMDIsMS40MTIgMS4yODcsMi4xMDIiIGZpbGw9IiM0Yzk3ZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSIjNTc1ZTc1IiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48cGF0aCBkPSJNMjU2LjQ5OCwxNjguNzQ4YzAsMC40NjQgLTAuMTQsMC44NzQgLTAuNDMzLDEuMTY1bC0xOS43NDIsMTkuNjhjLTIuMTMsMi4xMSAtNC42NzMsMy43OTMgLTcuNTcyLDUuMDFsLTQuMjUxLDEuNzc3bDAuOTc0LC0yLjMxNmwxLjkyNSwtMC44MDhjMi44OTgsLTEuMjE4IDUuNDQsLTIuOSA3LjU3LC01LjAxbDE5Ljc0MywtMTkuNjhjMC4yOTIsLTAuMjkyIDAuNDMyLC0wLjcwMiAwLjQzMiwtMS4xNjVjMCwtMC42NDYgLTAuMjcsLTEuNCAtMC43OCwtMi4xMjJjMC4yNSwwLjE3MiAwLjUsMC4zNzcgMC43MzcsMC42MTRjMC44OTgsMC45MDUgMS4zOTYsMS45ODMgMS4zOTYsMi44NTYiIGZpbGw9IiM1NzVlNzUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSIjNTc1ZTc1IiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIG9wYWNpdHk9IjAuMTUiLz48cGF0aCBkPSJNMjM4LjQ1LDE3Mi44M2MwLDAuNSAtMC40MDQsMC45MDUgLTAuOTA0LDAuOTA1Yy0wLjUsMCAtMC45MDUsLTAuNDA1IC0wLjkwNSwtMC45MDRjMCwtMC41IDAuNDA3LC0wLjkwMyAwLjkwNiwtMC45MDNjMC41LDAgMC45MDQsMC40MDQgMC45MDQsMC45MDR6IiBmaWxsPSIjNTc1ZTc1IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHN0cm9rZT0iIzU3NWU3NSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PHBhdGggZD0iTTI0NC45OTgwNywxODcuMDUyOThoOS41MTc2NSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJub256ZXJvIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIi8+PHBhdGggZD0iTTI0OS43NTY4OSwxOTEuODExOHYtOS41MTc2NSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJub256ZXJvIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIi8+PC9nPjwvZz48L3N2Zz48IS0tcm90YXRpb25DZW50ZXI6MTY6MTYuMDAwMDY5MjMwODQyMTQzLS0+";
  const blockIco =
    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+cGVuLWljb248L3RpdGxlPjxnIHN0cm9rZT0iIzU3NUU3NSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjxwYXRoIGQ9Ik04Ljc1MyAzNC42MDJsLTQuMjUgMS43OCAxLjc4My00LjIzN2MxLjIxOC0yLjg5MiAyLjkwNy01LjQyMyA1LjAzLTcuNTM4TDMxLjA2NiA0LjkzYy44NDYtLjg0MiAyLjY1LS40MSA0LjAzMi45NjcgMS4zOCAxLjM3NSAxLjgxNiAzLjE3My45NyA0LjAxNUwxNi4zMTggMjkuNTljLTIuMTIzIDIuMTE2LTQuNjY0IDMuOC03LjU2NSA1LjAxMiIgZmlsbD0iI0ZGRiIvPjxwYXRoIGQ9Ik0yOS40MSA2LjExcy00LjQ1LTIuMzc4LTguMjAyIDUuNzcyYy0xLjczNCAzLjc2Ni00LjM1IDEuNTQ2LTQuMzUgMS41NDYiLz48cGF0aCBkPSJNMzYuNDIgOC44MjVjMCAuNDYzLS4xNC44NzMtLjQzMiAxLjE2NGwtOS4zMzUgOS4zYy4yODItLjI5LjQxLS42NjguNDEtMS4xMiAwLS44NzQtLjUwNy0xLjk2My0xLjQwNi0yLjg2OC0xLjM2Mi0xLjM1OC0zLjE0Ny0xLjgtNC4wMDItLjk5TDMwLjk5IDUuMDFjLjg0NC0uODQgMi42NS0uNDEgNC4wMzUuOTYuODk4LjkwNCAxLjM5NiAxLjk4MiAxLjM5NiAyLjg1NU0xMC41MTUgMzMuNzc0Yy0uNTczLjMwMi0xLjE1Ny41Ny0xLjc2NC44M0w0LjUgMzYuMzgybDEuNzg2LTQuMjM1Yy4yNTgtLjYwNC41My0xLjE4Ni44MzMtMS43NTcuNjkuMTgzIDEuNDQ4LjYyNSAyLjEwOCAxLjI4Mi42Ni42NTggMS4xMDIgMS40MTIgMS4yODcgMi4xMDIiIGZpbGw9IiM0Qzk3RkYiLz48cGF0aCBkPSJNMzYuNDk4IDguNzQ4YzAgLjQ2NC0uMTQuODc0LS40MzMgMS4xNjVsLTE5Ljc0MiAxOS42OGMtMi4xMyAyLjExLTQuNjczIDMuNzkzLTcuNTcyIDUuMDFMNC41IDM2LjM4bC45NzQtMi4zMTYgMS45MjUtLjgwOGMyLjg5OC0xLjIxOCA1LjQ0LTIuOSA3LjU3LTUuMDFsMTkuNzQzLTE5LjY4Yy4yOTItLjI5Mi40MzItLjcwMi40MzItMS4xNjUgMC0uNjQ2LS4yNy0xLjQtLjc4LTIuMTIyLjI1LjE3Mi41LjM3Ny43MzcuNjE0Ljg5OC45MDUgMS4zOTYgMS45ODMgMS4zOTYgMi44NTYiIGZpbGw9IiM1NzVFNzUiIG9wYWNpdHk9Ii4xNSIvPjxwYXRoIGQ9Ik0xOC40NSAxMi44M2MwIC41LS40MDQuOTA1LS45MDQuOTA1cy0uOTA1LS40MDUtLjkwNS0uOTA0YzAtLjUuNDA3LS45MDMuOTA2LS45MDMuNSAwIC45MDQuNDA0LjkwNC45MDR6IiBmaWxsPSIjNTc1RTc1Ii8+PC9nPjwvc3ZnPg==";

  const extension = new ExtensionBuilder("Pen+", "penP", null, {
    blockIconUri: blockIco,
    menuIconUri: menuIco,
  });
  extension.internal.JSON.menuIconURI = menuIco;
  extension.internal.JSON.blockIconURI = blockIco;

  //?some smaller optimizations just store the multiplacation for later
  const f32_4 = 4 * Float32Array.BYTES_PER_ELEMENT;
  const f32_8 = 8 * Float32Array.BYTES_PER_ELEMENT;
  const f32_10 = 10 * Float32Array.BYTES_PER_ELEMENT;
  const d2r = 0.0174533;

  //?Declare most of the main repo's we are going to use around the scratch vm
  const vm = Scratch.vm;
  const runtime = vm.runtime;
  const renderer = runtime.renderer;
  const shaderManager = renderer._shaderManager;

  const canvas = renderer.canvas;
  const gl = renderer._gl;
  let currentFilter = gl.NEAREST;

  if (!Scratch.vm.extensionManager.isExtensionLoaded("pen")) {
    runtime.extensionManager.loadExtensionIdSync("pen");
  }

  const checkForPen = (util) => {
    const curTarget = util.target;
    const customState = curTarget["_customState"];
    if (!customState["Scratch.pen"]) {
      customState["Scratch.pen"] = {
        penDown: false,
        color: 66.66,
        saturation: 100,
        brightness: 100,
        transparency: 0,
        _shade: 50,
        penAttributes: {
          color4f: [0, 0, 1, 1],
          diameter: 1,
        },
      };
    }
  };

  let stagePenContext = !Scratch.vm.renderer["_penSkinId"]
    ? Scratch.vm.renderer.createPenSkin()
    : renderer["_penSkinId"];

  //?If no pen shader initilize it because we have to.
  if (shaderManager._shaderCache.line.length == 0) {
    Scratch.vm.renderer.penLine(
      Scratch.vm.renderer._penSkinId,
      {
        //Default pen attributes
        color4f: [0, 0, 1, 1],
        diameter: 1,
      },
      0,
      0,
      0,
      0
    );
  }

  //*Define PEN+ variables >:)
  const triangleDefaultAttributes = [
    // U V  TINT R G B  Z W transparency U V  TINT R G B  Z W transparency U V  TINT R G B  Z W transparency
    0,
    0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1,
    1,
  ];
  const squareDefaultAttributes = [
    // width* height*  rotation
    1, 1, 90,
  ];

  const triangleAttributesOfAllSprites = {}; //!it dawned on me I have to do this

  const squareAttributesOfAllSprites = {}; //?Doing this for part 2

  //?Get Shaders
  const penPlusShaders = {
    untextured: {
      Shaders: {
        vert: `
                attribute vec4 a_position;
                attribute vec4 a_color;
                varying vec4 v_color;

                void main()
                {
                  v_color = a_color;
                  gl_Position = a_position * vec4(a_position.w,a_position.w,1,1);
                }
            `,
        frag: `
                varying highp vec4 v_color;

                void main()
                {
                  gl_FragColor = v_color;
                  gl_FragColor.rgb *= gl_FragColor.a;
                }
            `,
      },
      ProgramInf: null,
    },
    textured: {
      Shaders: {
        vert: `
                attribute vec4 a_position;
                attribute vec4 a_color;
                attribute vec2 a_texCoord;
                
                varying vec4 v_color;
                varying vec2 v_texCoord;
                
                void main()
                {
                    v_color = a_color;
                    v_texCoord = a_texCoord;
                    gl_Position = a_position * vec4(a_position.w,a_position.w,1,1);
                }
            `,
        frag: `
                uniform sampler2D u_texture;

                varying highp vec2 v_texCoord;

                varying highp vec4 v_color;
                
                void main()
                {
                    gl_FragColor = texture2D(u_texture, v_texCoord) * v_color;
                    gl_FragColor.rgb *= gl_FragColor.a;
                }
            `,
      },
      ProgramInf: null,
    },
    pen: {
      program: shaderManager._shaderCache.line[0].program,
    },
    createAndCompileShaders: (vert, frag) => {
      //? compile vertex Shader
      const vertShader = gl.createShader(gl.VERTEX_SHADER);
      try {
        gl.shaderSource(vertShader, vert.trim());
        gl.compileShader(vertShader);
        if (!gl.getShaderParameter(vertShader, gl.COMPILE_STATUS)) {
          throw gl.getShaderInfoLog(vertShader);
        }
      } catch (error) {
        console.error(error);
      }

      //? compile fragment Shader
      const fragShader = gl.createShader(gl.FRAGMENT_SHADER);
      try {
        gl.shaderSource(fragShader, frag.trim());
        gl.compileShader(fragShader);
        if (!gl.getShaderParameter(fragShader, gl.COMPILE_STATUS)) {
          throw gl.getShaderInfoLog(fragShader);
        }
      } catch (error) {
        console.error(error);
      }

      //? compile program
      const program = gl.createProgram();
      try {
        gl.attachShader(program, vertShader);
        gl.attachShader(program, fragShader);
        gl.linkProgram(program);
        if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
          throw gl.getProgramInfoLog(program);
        }

        gl.validateProgram(program);
        if (!gl.getProgramParameter(program, gl.VALIDATE_STATUS)) {
          throw gl.getProgramInfoLog(program);
        }
      } catch (error) {
        console.error(error);
      }

      return {
        program: program,
        vert: vertShader,
        frag: fragShader,
      };
    },
  };

  //? Create program info
  penPlusShaders.untextured.ProgramInf = penPlusShaders.createAndCompileShaders(
    penPlusShaders.untextured.Shaders.vert,
    penPlusShaders.untextured.Shaders.frag
  );
  penPlusShaders.textured.ProgramInf = penPlusShaders.createAndCompileShaders(
    penPlusShaders.textured.Shaders.vert,
    penPlusShaders.textured.Shaders.frag
  );

  //?Untextured
  const a_position_Location_untext = gl.getAttribLocation(
    penPlusShaders.untextured.ProgramInf.program,
    "a_position"
  );
  const a_color_Location_untext = gl.getAttribLocation(
    penPlusShaders.untextured.ProgramInf.program,
    "a_color"
  );

  gl.enableVertexAttribArray(a_position_Location_untext);
  gl.enableVertexAttribArray(a_color_Location_untext);

  //?Textured
  const a_position_Location_text = gl.getAttribLocation(
    penPlusShaders.textured.ProgramInf.program,
    "a_position"
  );
  const a_color_Location_text = gl.getAttribLocation(
    penPlusShaders.textured.ProgramInf.program,
    "a_color"
  );
  const a_textCoord_Location_text = gl.getAttribLocation(
    penPlusShaders.textured.ProgramInf.program,
    "a_texCoord"
  );

  const u_texture_Location_text = gl.getUniformLocation(
    penPlusShaders.textured.ProgramInf.program,
    "u_texture"
  );

  gl.enableVertexAttribArray(a_position_Location_text);
  gl.enableVertexAttribArray(a_color_Location_text);
  gl.enableVertexAttribArray(a_textCoord_Location_text);

  const vertexBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
  gl.bindBuffer(gl.ARRAY_BUFFER, null);

  //?Override pen Clear with pen+
  renderer.penClear = (penSkinID) => {
    //Pen+ Overrides default pen Clearing
    gl.clear(gl.DEPTH_BUFFER_BIT);
    //? ^ just clear the depth buffer for when its added.

    //Old clearing
    renderer.dirty = true;
    const skin = /** @type {PenSkin} */ renderer._allSkins[penSkinID];
    skin.clear();
  };

  //define defaults
  gl.disable(gl.DEPTH_TEST);
  gl.depthFunc(gl.NEVER);

  let vertexBufferData = null;
  let texVertexBufferData = null;

  //?Have this here for ez pz tri drawing on the canvas
  const drawTri = (curProgram, x1, y1, x2, y2, x3, y3, penColor, targetID) => {
    //? get triangle attributes for current sprite.
    const triAttribs = triangleAttributesOfAllSprites[targetID];

    if (triAttribs) {
      vertexBufferData = new Float32Array([
        x1,
        -y1,
        -triAttribs[5],
        triAttribs[6],
        penColor[0] * triAttribs[2],
        penColor[1] * triAttribs[3],
        penColor[2] * triAttribs[4],
        penColor[3] * triAttribs[9],

        x2,
        -y2,
        -triAttribs[13],
        triAttribs[14],
        penColor[0] * triAttribs[10],
        penColor[1] * triAttribs[11],
        penColor[2] * triAttribs[12],
        penColor[3] * triAttribs[15],

        x3,
        -y3,
        -triAttribs[21],
        triAttribs[22],
        penColor[0] * triAttribs[18],
        penColor[1] * triAttribs[19],
        penColor[2] * triAttribs[20],
        penColor[3] * triAttribs[23],
      ]);
    } else {
      vertexBufferData = new Float32Array([
        x1,
        -y1,
        1,
        1,
        penColor[0],
        penColor[1],
        penColor[2],
        penColor[3],

        x2,
        -y2,
        1,
        1,
        penColor[0],
        penColor[1],
        penColor[2],
        penColor[3],

        x3,
        -y3,
        1,
        1,
        penColor[0],
        penColor[1],
        penColor[2],
        penColor[3],
      ]);
    }

    //? Bind Positional Data

    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, vertexBufferData, gl.DYNAMIC_DRAW);

    gl.vertexAttribPointer(
      a_position_Location_untext,
      4,
      gl.FLOAT,
      false,
      f32_8,
      0
    );
    gl.vertexAttribPointer(
      a_color_Location_untext,
      4,
      gl.FLOAT,
      false,
      f32_8,
      f32_4
    );

    gl.useProgram(penPlusShaders.untextured.ProgramInf.program);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

    gl.drawArrays(gl.TRIANGLES, 0, 3);
    //? Hacky fix but it works.
    gl.useProgram(penPlusShaders.pen.program);
    gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
  };

  const drawTextTri = (
    curProgram,
    x1,
    y1,
    x2,
    y2,
    x3,
    y3,
    targetID,
    texture
  ) => {
    //? get triangle attributes for current sprite.
    const triAttribs = triangleAttributesOfAllSprites[targetID];

    if (triAttribs) {
      vertexBufferData = new Float32Array([
        x1,
        -y1,
        -triAttribs[5],
        triAttribs[6],
        triAttribs[2],
        triAttribs[3],
        triAttribs[4],
        triAttribs[7],
        triAttribs[0],
        triAttribs[1],

        x2,
        -y2,
        -triAttribs[13],
        triAttribs[14],
        triAttribs[10],
        triAttribs[11],
        triAttribs[12],
        triAttribs[15],
        triAttribs[8],
        triAttribs[9],

        x3,
        -y3,
        -triAttribs[21],
        triAttribs[22],
        triAttribs[18],
        triAttribs[19],
        triAttribs[20],
        triAttribs[23],
        triAttribs[16],
        triAttribs[17],
      ]);
    } else {
      vertexBufferData = new Float32Array([
        x1,
        -y1,
        1,
        1,
        1,
        1,
        1,
        1,
        0,
        0,

        x2,
        -y2,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,

        x3,
        -y3,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        0,
      ]);
    }
    //? Bind Positional Data
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, vertexBufferData, gl.DYNAMIC_DRAW);

    gl.vertexAttribPointer(
      a_position_Location_text,
      4,
      gl.FLOAT,
      false,
      f32_10,
      0
    );
    gl.vertexAttribPointer(
      a_color_Location_text,
      4,
      gl.FLOAT,
      false,
      f32_10,
      f32_4
    );
    gl.vertexAttribPointer(
      a_textCoord_Location_text,
      2,
      gl.FLOAT,
      false,
      f32_10,
      f32_8
    );

    gl.useProgram(penPlusShaders.textured.ProgramInf.program);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

    if (gl.getParameter(gl.TEXTURE_BINDING_2D) != texture) {
      gl.bindTexture(gl.TEXTURE_2D, texture);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, currentFilter);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, currentFilter);
      gl.uniform1i(u_texture_Location_text, 0);
    }

    gl.drawArrays(gl.TRIANGLES, 0, 3);
    //? Hacky fix but it works.
    gl.useProgram(penPlusShaders.pen.program);
    gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
  };

  const lilPenDabble = (nativeSize, curTarget, util) => {
    checkForPen(util);

    const attrib = curTarget["_customState"]["Scratch.pen"].penAttributes;

    Scratch.vm.renderer.penLine(
      Scratch.vm.renderer._penSkinId,
      {
        color4f: [0, 0, 1, 1],
        diameter: 1,
      },
      10000,
      10000,
      10000,
      10000
    );
  };

  const setValueAccordingToCaseTriangle = (
    targetId,
    attribute,
    value,
    wholeTri,
    offset
  ) => {
    offset = offset + attribute || attribute;
    let valuetoSet = 0;
    switch (attribute) {
      //U
      case 0:
        valuetoSet = value;
        break;
      //V
      case 1:
        valuetoSet = value;
        break;

      //100 since that is what scratch users are accustomed to.
      //R
      case 2:
        valuetoSet = Math.min(Math.max(value, 0), 100) * 0.01;
        break;
      //G
      case 3:
        valuetoSet = Math.min(Math.max(value, 0), 100) * 0.01;
        break;
      //B
      case 4:
        valuetoSet = Math.min(Math.max(value, 0), 100) * 0.01;
        break;

      //Clamp to 0 so we can't go behind the stage.
      //Z
      case 5:
        valuetoSet = 1 - Math.min(Math.max(value, 0), 1000) / 1000;
        break;

      //Clamp to 1 so we don't accidentally clip.
      //W
      case 6:
        valuetoSet = Math.max(value, 1);
        break;
      //Transparency
      //Same story as color
      case 7:
        valuetoSet = Math.min(Math.max(value, 0), 1000) * 0.01;
        break;

      //Just break if value isn't valid
      default:
        break;
    }
    //Check if the index even exists.
    if (attribute >= 0 && attribute <= 7) {
      if (wholeTri) {
        triangleAttributesOfAllSprites[targetId][attribute] = valuetoSet;
        triangleAttributesOfAllSprites[targetId][attribute + 8] = valuetoSet;
        triangleAttributesOfAllSprites[targetId][attribute + 16] = valuetoSet;
      } else {
        triangleAttributesOfAllSprites[targetId][offset] = valuetoSet;
      }
    }
  };

  //? Define the menus
  extension.addMenu("orderMenu", ["off", "on"]);
  extension.addMenu(
    "hsvMenu",
    ["color", "saturation", "brightness", "transparency", "size"],
    true
  );

  extension.addMenu(
    "stampSquare",
    [
      {
        text: "Width",
        value: 0,
      },
      {
        text: "Height",
        value: 1,
      },
      {
        text: "Rotation",
        value: 2,
      },
    ],
    true
  );

  extension.addMenu(
    "triAttribute",
    [
      {
        text: "U value",
        value: 0,
      },
      {
        text: "V value",
        value: 1,
      },
      {
        text: "red tint",
        value: 2,
      },
      {
        text: "green tint",
        value: 3,
      },
      {
        text: "blue tint",
        value: 4,
      },
      {
        text: "transparency",
        value: 7,
      },
      {
        text: "corner pinch",
        value: 6,
      },
    ],
    true
  );
  extension.addMenu(
    "filterType",
    [
      {
        text: "Closest",
        value: gl.NEAREST,
      },
      {
        text: "Linear",
        value: gl.LINEAR,
      },
    ],
    true
  );

  extension.addMenu(
    "wrapType",
    [
      {
        text: "Clamp",
        value: gl.CLAMP_TO_EDGE,
      },
      {
        text: "Repeat",
        value: gl.REPEAT,
      },
      {
        text: "Mirrored",
        value: gl.MIRRORED_REPEAT,
      },
    ],
    true
  );

  extension.addMenu("pointMenu", ["1", "2", "3"], true);
  extension.addMenu(
    "blendMenu",
    [
      {
        text: "additive",
        value: gl.ONE_MINUS_SRC_ALPHA,
      },
    ],
    true
  );

  //? Seperate blocks from the rest of the code to just clean up the workspace a bit
  const addBlocks = () => {
    extension.addLabel("Made by ObviousAlexC");
    extension.addLabel("Warning Misc Limits makes this lag!");
    extension.addLabel("The sprite that is drawing must not be...");
    extension.addLabel("hidden!");

    extension.addDivider();

    extension.addLabel("Pen Properties");

    extension
      .addBlock(
        "Pen down?",
        "isPenDown",
        Scratch.BlockType.BOOLEAN,
        (args, util) => {
          checkForPen(util);
          const curTarget = util.target;
          return curTarget["_customState"]["Scratch.pen"].penDown;
        }
      )
      .setFilter();

    extension
      .addBlock(
        "Pen [HSV]",
        "getPenHSV",
        Scratch.BlockType.REPORTER,
        ({ HSV }, util) => {
          checkForPen(util);
          const curTarget = util.target;
          if (HSV == "size") {
            return curTarget["_customState"]["Scratch.pen"].penAttributes
              .diameter;
          }
          return curTarget["_customState"]["Scratch.pen"][HSV];
        }
      )
      .addArgument("HSV", "color", null, "hsvMenu")
      .setFilter();

    //TODO Figure out Z problems

    extension
      .addBlock(
        "Draw dot at [x] [y]",
        "drawDot",
        Scratch.BlockType.COMMAND,
        ({ x, y }, util) => {
          checkForPen(util);
          const curTarget = util.target;
          const attrib = curTarget["_customState"]["Scratch.pen"].penAttributes;

          curTarget.runtime.ext_pen.penDown(null, util);

          Scratch.vm.renderer.penPoint(
            Scratch.vm.renderer._penSkinId,
            attrib,
            x,
            y
          );

          curTarget.runtime.ext_pen.penUp(null, util);
        }
      )
      .addArgument("x", 0)
      .addArgument("y", 0)
      .setFilter();

    extension
      .addBlock(
        "Draw line from [x1] [y1] to [x2] [y2]",
        "drawLine",
        Scratch.BlockType.COMMAND,
        ({ x1, y1, x2, y2 }, util) => {
          checkForPen(util);
          const curTarget = util.target;
          const attrib = curTarget["_customState"]["Scratch.pen"].penAttributes;

          curTarget.runtime.ext_pen.penDown(null, util);

          Scratch.vm.renderer.penLine(
            Scratch.vm.renderer._penSkinId,
            attrib,
            x1,
            y1,
            x2,
            y2
          );

          curTarget.runtime.ext_pen.penUp(null, util);
        }
      )
      .addArgument("x1", 0)
      .addArgument("y1", 0)
      .addArgument("x2", 10)
      .addArgument("y2", 10)
      .setFilter();

    extension.addLabel("Square Pen Blocks");

    extension
      .addBlock(
        "Stamp pen square",
        "squareDown",
        Scratch.BlockType.COMMAND,
        (arg, util) => {
          //Just a simple thing to allow for pen drawing
          const curTarget = util.target;

          checkForPen(util);

          const attrib = curTarget["_customState"]["Scratch.pen"].penAttributes;
          const diam = attrib.diameter;

          const nativeSize = renderer.useHighQualityRender
            ? [canvas.width, canvas.height]
            : renderer._nativeSize;

          lilPenDabble(nativeSize, curTarget, util); // Do this so the renderer doesn't scream at us

          if (
            typeof triangleAttributesOfAllSprites[
              "squareStamp_" + curTarget.id
            ] == "undefined"
          ) {
            triangleAttributesOfAllSprites["squareStamp_" + curTarget.id] =
              triangleDefaultAttributes;
          }

          if (
            typeof squareAttributesOfAllSprites[curTarget.id] == "undefined"
          ) {
            squareAttributesOfAllSprites[curTarget.id] =
              squareDefaultAttributes;
          }

          const myAttributes = squareAttributesOfAllSprites[curTarget.id];

          //trying my best to reduce memory usage
          gl.viewport(0, 0, nativeSize[0], nativeSize[1]);
          const dWidth = 1 / nativeSize[0];
          const dHeight = 1 / nativeSize[1];

          const spritex = curTarget.x;
          const spritey = curTarget.y;

          //correction for HQ pen
          const typSize = renderer._nativeSize;
          const mul = renderer.useHighQualityRender
            ? 2 * ((canvas.width + canvas.height) / (typSize[0] + typSize[1]))
            : 2;

          //Predifine stuff so there aren't as many calculations
          const wMulX = mul * myAttributes[0];
          const wMulY = mul * myAttributes[1];

          const offDiam = 0.5 * diam;

          const sprXoff = spritex * mul;
          const sprYoff = spritey * mul;
          //Paratheses because I know some obscure browser will screw this up.
          let x1 = Scratch.Cast.toNumber(-offDiam) * wMulX;
          let x2 = Scratch.Cast.toNumber(offDiam) * wMulX;
          let x3 = Scratch.Cast.toNumber(offDiam) * wMulX;
          let x4 = Scratch.Cast.toNumber(-offDiam) * wMulX;

          let y1 = Scratch.Cast.toNumber(offDiam) * wMulY;
          let y2 = Scratch.Cast.toNumber(offDiam) * wMulY;
          let y3 = Scratch.Cast.toNumber(-offDiam) * wMulY;
          let y4 = Scratch.Cast.toNumber(-offDiam) * wMulY;

          function rotateTheThings(ox1, oy1, ox2, oy2, ox3, oy3, ox4, oy4) {
            let sin = Math.sin(myAttributes[2] * d2r);
            let cos = Math.cos(myAttributes[2] * d2r);

            x1 = ox1 * sin + oy1 * cos;
            y1 = ox1 * cos - oy1 * sin;

            x2 = ox2 * sin + oy2 * cos;
            y2 = ox2 * cos - oy2 * sin;

            x3 = ox3 * sin + oy3 * cos;
            y3 = ox3 * cos - oy3 * sin;

            x4 = ox4 * sin + oy4 * cos;
            y4 = ox4 * cos - oy4 * sin;
          }

          rotateTheThings(x1, y1, x2, y2, x3, y3, x4, y4);

          x1 += sprXoff;
          y1 += sprYoff;

          x2 += sprXoff;
          y2 += sprYoff;

          x3 += sprXoff;
          y3 += sprYoff;

          x4 += sprXoff;
          y4 += sprYoff;

          x1 *= dWidth;
          y1 *= dHeight;

          x2 *= dWidth;
          y2 *= dHeight;

          x3 *= dWidth;
          y3 *= dHeight;

          x4 *= dWidth;
          y4 *= dHeight;

          drawTri(
            gl.getParameter(gl.CURRENT_PROGRAM),
            x1,
            y1,
            x2,
            y2,
            x3,
            y3,
            attrib.color4f,
            "squareStamp"
          );

          drawTri(
            gl.getParameter(gl.CURRENT_PROGRAM),
            x1,
            y1,
            x3,
            y3,
            x4,
            y4,
            attrib.color4f,
            "squareStamp_" + curTarget.id
          );
        }
      )
      .setFilter();

    extension
      .addBlock(
        "Stamp pen square with the texture of [tex]",
        "squareTexDown",
        Scratch.BlockType.COMMAND,
        ({ tex }, util) => {
          //Just a simple thing to allow for pen drawing
          const curTarget = util.target;

          const costIndex = curTarget.getCostumeIndexByName(
            Scratch.Cast.toString(tex)
          );

          const curCostume = curTarget.sprite.costumes_[costIndex];
          if (costIndex != curTarget.currentCostume) {
            curTarget.setCostume(costIndex);
          }

          const currentTexture =
            renderer._allSkins[curCostume.skinId].getTexture();

          checkForPen(util);

          const attrib = curTarget["_customState"]["Scratch.pen"].penAttributes;
          const diam = attrib.diameter;

          const nativeSize = renderer.useHighQualityRender
            ? [canvas.width, canvas.height]
            : renderer._nativeSize;

          lilPenDabble(nativeSize, curTarget, util); // Do this so the renderer doesn't scream at us

          if (!triangleAttributesOfAllSprites["squareStamp_" + curTarget.id]) {
            triangleAttributesOfAllSprites["squareStamp_" + curTarget.id] =
              triangleDefaultAttributes;
          }

          if (!squareAttributesOfAllSprites[curTarget.id]) {
            squareAttributesOfAllSprites[curTarget.id] =
              squareDefaultAttributes;
          }

          const myAttributes = squareAttributesOfAllSprites[curTarget.id];

          //trying my best to reduce memory usage
          gl.viewport(0, 0, nativeSize[0], nativeSize[1]);
          const dWidth = 1 / nativeSize[0];
          const dHeight = 1 / nativeSize[1];

          const spritex = curTarget.x;
          const spritey = curTarget.y;

          //correction for HQ pen
          const typSize = renderer._nativeSize;
          const mul = renderer.useHighQualityRender
            ? 2 * ((canvas.width + canvas.height) / (typSize[0] + typSize[1]))
            : 2;

          //Predifine stuff so there aren't as many calculations
          const wMulX = mul * myAttributes[0];
          const wMulY = mul * myAttributes[1];

          const offDiam = 0.5 * diam;

          const sprXoff = spritex * mul;
          const sprYoff = spritey * mul;
          //Paratheses because I know some obscure browser will screw this up.
          let x1 = Scratch.Cast.toNumber(-offDiam) * wMulX;
          let x2 = Scratch.Cast.toNumber(offDiam) * wMulX;
          let x3 = Scratch.Cast.toNumber(offDiam) * wMulX;
          let x4 = Scratch.Cast.toNumber(-offDiam) * wMulX;

          let y1 = Scratch.Cast.toNumber(offDiam) * wMulY;
          let y2 = Scratch.Cast.toNumber(offDiam) * wMulY;
          let y3 = Scratch.Cast.toNumber(-offDiam) * wMulY;
          let y4 = Scratch.Cast.toNumber(-offDiam) * wMulY;

          function rotateTheThings(ox1, oy1, ox2, oy2, ox3, oy3, ox4, oy4) {
            let sin = Math.sin(myAttributes[2] * d2r);
            let cos = Math.cos(myAttributes[2] * d2r);

            x1 = ox1 * sin + oy1 * cos;
            y1 = ox1 * cos - oy1 * sin;

            x2 = ox2 * sin + oy2 * cos;
            y2 = ox2 * cos - oy2 * sin;

            x3 = ox3 * sin + oy3 * cos;
            y3 = ox3 * cos - oy3 * sin;

            x4 = ox4 * sin + oy4 * cos;
            y4 = ox4 * cos - oy4 * sin;
          }

          rotateTheThings(x1, y1, x2, y2, x3, y3, x4, y4);

          x1 += sprXoff;
          y1 += sprYoff;

          x2 += sprXoff;
          y2 += sprYoff;

          x3 += sprXoff;
          y3 += sprYoff;

          x4 += sprXoff;
          y4 += sprYoff;

          x1 *= dWidth;
          y1 *= dHeight;

          x2 *= dWidth;
          y2 *= dHeight;

          x3 *= dWidth;
          y3 *= dHeight;

          x4 *= dWidth;
          y4 *= dHeight;

          if (currentTexture != null && typeof currentTexture != "undefined") {
            triangleAttributesOfAllSprites[
              "squareStamp_" + curTarget.id
            ][0] = 0;
            triangleAttributesOfAllSprites[
              "squareStamp_" + curTarget.id
            ][1] = 1;

            triangleAttributesOfAllSprites[
              "squareStamp_" + curTarget.id
            ][8] = 1;
            triangleAttributesOfAllSprites[
              "squareStamp_" + curTarget.id
            ][9] = 1;

            triangleAttributesOfAllSprites[
              "squareStamp_" + curTarget.id
            ][16] = 1;
            triangleAttributesOfAllSprites[
              "squareStamp_" + curTarget.id
            ][17] = 0;

            drawTextTri(
              gl.getParameter(gl.CURRENT_PROGRAM),
              x1,
              y1,
              x2,
              y2,
              x3,
              y3,
              "squareStamp_" + curTarget.id,
              currentTexture
            );

            triangleAttributesOfAllSprites[
              "squareStamp_" + curTarget.id
            ][0] = 0;
            triangleAttributesOfAllSprites[
              "squareStamp_" + curTarget.id
            ][1] = 1;

            triangleAttributesOfAllSprites[
              "squareStamp_" + curTarget.id
            ][8] = 1;
            triangleAttributesOfAllSprites[
              "squareStamp_" + curTarget.id
            ][9] = 0;

            triangleAttributesOfAllSprites[
              "squareStamp_" + curTarget.id
            ][16] = 0;
            triangleAttributesOfAllSprites[
              "squareStamp_" + curTarget.id
            ][17] = 0;

            drawTextTri(
              gl.getParameter(gl.CURRENT_PROGRAM),
              x1,
              y1,
              x3,
              y3,
              x4,
              y4,
              "squareStamp_" + curTarget.id,
              currentTexture
            );
          }
        }
      )
      .addArgument("tex", null, Scratch.ArgumentType.COSTUME)
      .setFilter();

    extension
      .addBlock(
        "Set pen square's [target] to [number]",
        "setStampAttribute",
        Scratch.BlockType.COMMAND,
        ({ target, number }, util) => {
          const curTarget = util.target;
          if (!squareAttributesOfAllSprites[curTarget.id]) {
            squareAttributesOfAllSprites[curTarget.id] =
              squareDefaultAttributes;
          }

          squareAttributesOfAllSprites[curTarget.id][target] = number;
        }
      )
      .addArgument("target", 0, Scratch.ArgumentType.NUMBER, "stampSquare")
      .addArgument("number", 1, Scratch.ArgumentType.NUMBER)
      .setFilter();

    extension
      .addBlock(
        "get pen square's [target]",
        "getStampAttribute",
        Scratch.BlockType.REPORTER,
        ({ target }, util) => {
          const curTarget = util.target;
          if (!squareAttributesOfAllSprites[curTarget.id]) {
            squareAttributesOfAllSprites[curTarget.id] =
              squareDefaultAttributes;
          }

          return squareAttributesOfAllSprites[curTarget.id][target];
        }
      )
      .addArgument("target", 0, Scratch.ArgumentType.NUMBER, "stampSquare")
      .setFilter();

    extension.addLabel("Triangle Blocks");

    extension
      .addBlock(
        "Set triangle filter mode to [filter]",
        "setTriangleFilterMode",
        Scratch.BlockType.COMMAND,
        ({ filter }) => {
          currentFilter = filter;
        }
      )
      .addArgument("filter", gl.NEAREST, null, "filterType")
      .setFilter();

    extension
      .addBlock(
        "Set triangle point [point]'s [attribute] to [value]",
        "setTrianglePointAttribute",
        Scratch.BlockType.COMMAND,
        ({ point, attribute, value }, util) => {
          const trianglePointStart = (point - 1) * 8;

          const targetId = util.target.id;

          if (!triangleAttributesOfAllSprites[targetId]) {
            triangleAttributesOfAllSprites[targetId] =
              triangleDefaultAttributes;
          }
          setValueAccordingToCaseTriangle(
            targetId,
            attribute,
            value,
            false,
            trianglePointStart
          );
        }
      )
      .addArgument("point", "1", null, "pointMenu")
      .addArgument("attribute", 2, null, "triAttribute")
      .addArgument("value", 1)
      .setFilter();

    extension
      .addBlock(
        "Get triangle point [point]'s [attribute]",
        "getTrianglePointAttribute",
        Scratch.BlockType.REPORTER,
        ({ point, attribute }, util) => {
          const trianglePointStart = (point - 1) * 8;

          const targetId = util.target.id;

          if (!triangleAttributesOfAllSprites[targetId]) {
            triangleAttributesOfAllSprites[targetId] =
              triangleDefaultAttributes;
          }
          let value =
            triangleAttributesOfAllSprites[targetId][
              trianglePointStart + attribute
            ];

          if ((attribute >= 2 && attribute <= 4) || attribute == 7) {
            value *= 100;
          }
          return value;
        }
      )
      .addArgument("point", "1", null, "pointMenu")
      .addArgument("attribute", 2, null, "triAttribute")
      .addArgument("value", 1)
      .setFilter();

    extension
      .addBlock(
        "Draw triangle between [x1] [y1], [x2] [y2] and [x3] [y3]",
        "drawSolidTri",
        Scratch.BlockType.COMMAND,
        ({ x1, y1, x2, y2, x3, y3 }, util) => {
          const curTarget = util.target;
          checkForPen(util);
          const attrib = curTarget["_customState"]["Scratch.pen"].penAttributes;

          const nativeSize = renderer.useHighQualityRender
            ? [canvas.width, canvas.height]
            : renderer._nativeSize;

          if (triangleAttributesOfAllSprites[curTarget.id]) {
            triangleAttributesOfAllSprites[curTarget.id][5] = 1;
            triangleAttributesOfAllSprites[curTarget.id][13] = 1;
            triangleAttributesOfAllSprites[curTarget.id][21] = 1;
          }

          //?Renderer Freaks out if we don't do this so do it.
          lilPenDabble(nativeSize, curTarget, util); // Do this so the renderer doesn't scream at us

          //trying my best to reduce memory usage
          gl.viewport(0, 0, nativeSize[0], nativeSize[1]);
          const dWidth = 1 / nativeSize[0];
          const dHeight = 1 / nativeSize[1];

          //correction for HQ pen
          const typSize = renderer._nativeSize;
          const mul = renderer.useHighQualityRender
            ? 2 * ((canvas.width + canvas.height) / (typSize[0] + typSize[1]))
            : 2;
          //Paratheses because I know some obscure browser will screw this up.
          x1 = Scratch.Cast.toNumber(x1) * dWidth * mul;
          x2 = Scratch.Cast.toNumber(x2) * dWidth * mul;
          x3 = Scratch.Cast.toNumber(x3) * dWidth * mul;

          y1 = Scratch.Cast.toNumber(y1) * dHeight * mul;
          y2 = Scratch.Cast.toNumber(y2) * dHeight * mul;
          y3 = Scratch.Cast.toNumber(y3) * dHeight * mul;

          drawTri(
            gl.getParameter(gl.CURRENT_PROGRAM),
            x1,
            y1,
            x2,
            y2,
            x3,
            y3,
            attrib.color4f,
            curTarget.id
          );
        }
      )
      .addArgument("x1", 0)
      .addArgument("y1", 0)
      .addArgument("x2", 10)
      .addArgument("y2", 10)
      .addArgument("x3", 10)
      .addArgument("y3", 0)
      .setFilter();

    extension
      .addBlock(
        "Draw textured triangle between [x1] [y1], [x2] [y2] and [x3] [y3] with the texture [tex]",
        "drawTexTri",
        Scratch.BlockType.COMMAND,
        ({ x1, y1, x2, y2, x3, y3, tex }, util) => {
          const curTarget = util.target;
          const costIndex = curTarget.getCostumeIndexByName(
            Scratch.Cast.toString(tex)
          );
          const curCostume = curTarget.sprite.costumes_[costIndex];
          if (costIndex != curTarget.currentCostume) {
            curTarget.setCostume(costIndex);
          }

          const currentTexture =
            renderer._allSkins[curCostume.skinId].getTexture();

          const nativeSize = renderer.useHighQualityRender
            ? [canvas.width, canvas.height]
            : renderer._nativeSize;

          //?Renderer Freaks out if we don't do this so do it.
          lilPenDabble(nativeSize, curTarget, util); // Do this so the renderer doesn't scream at us

          if (triangleAttributesOfAllSprites[curTarget.id]) {
            triangleAttributesOfAllSprites[curTarget.id][5] = 1;
            triangleAttributesOfAllSprites[curTarget.id][13] = 1;
            triangleAttributesOfAllSprites[curTarget.id][21] = 1;
          }

          //trying my best to reduce memory usage
          gl.viewport(0, 0, nativeSize[0], nativeSize[1]);
          const dWidth = 1 / nativeSize[0];
          const dHeight = 1 / nativeSize[1];

          //correction for HQ pen
          const typSize = renderer._nativeSize;
          const mul = renderer.useHighQualityRender
            ? 2 * ((canvas.width + canvas.height) / (typSize[0] + typSize[1]))
            : 2;
          //Paratheses because I know some obscure browser will screw this up.
          x1 = Scratch.Cast.toNumber(x1) * dWidth * mul;
          x2 = Scratch.Cast.toNumber(x2) * dWidth * mul;
          x3 = Scratch.Cast.toNumber(x3) * dWidth * mul;

          y1 = Scratch.Cast.toNumber(y1) * dHeight * mul;
          y2 = Scratch.Cast.toNumber(y2) * dHeight * mul;
          y3 = Scratch.Cast.toNumber(y3) * dHeight * mul;

          if (currentTexture != null && typeof currentTexture != "undefined") {
            drawTextTri(
              gl.getParameter(gl.CURRENT_PROGRAM),
              x1,
              y1,
              x2,
              y2,
              x3,
              y3,
              curTarget.id,
              currentTexture
            );
          }
        }
      )
      .addArgument("x1", 0)
      .addArgument("y1", 0)
      .addArgument("x2", 10)
      .addArgument("y2", 10)
      .addArgument("x3", 10)
      .addArgument("y3", 0)
      .addArgument("tex", null, Scratch.ArgumentType.COSTUME)
      .setFilter();
  };

  addBlocks();

  //? A small hack to stop the renderer from immediatly dying.
  Scratch.vm.renderer.penLine(
    Scratch.vm.renderer._penSkinId,
    {
      color4f: [0, 0, 1, 1],
      diameter: 1,
    },
    0,
    0,
    0,
    0
  );
  extension.register();
})(window.Scratch);
