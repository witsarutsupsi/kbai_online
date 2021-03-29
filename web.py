from flask_ngrok import run_with_ngrok
from flask import Flask, render_template, request, abort, jsonify
import os
import glob
from xml.etree import ElementTree as ET
import xmltodict
from io import BytesIO
from PIL import Image
TEMPLATE_DIR = os.path.abspath('./dist')
STATIC_DIR = os.path.abspath('./dist/static')
print(TEMPLATE_DIR)
print(STATIC_DIR)

def parseXmlToJson(xml):
  response = {}

  for child in list(xml):
    if len(list(child)) > 0:
      response[child.tag] = parseXmlToJson(child)
    else:
      response[child.tag] = child.text or ''

    # one-liner equivalent
    # response[child.tag] = parseXmlToJson(child) if len(list(child)) > 0 else child.text or ''

  return response

def list_paths(path):
    directories = [x[1] for x in os.walk(path)]
    non_empty_dirs = [x for x in directories if x] # filter out empty lists
    return [item for subitem in non_empty_dirs for item in subitem] # flatten the list

app = Flask(__name__, template_folder=TEMPLATE_DIR, static_folder=STATIC_DIR) # template_folder='/Users/cake/Desktop/Projects/kidbrightAI/testVue/kidbrightai/dist')
#run_with_ngrok(app)   #starts ngrok when the app is run
@app.route("/")
def home():
    return render_template('index.html')

@app.route('/getDrive', methods=['GET'])
def getDrive():
    drive = {
        'drives': 'OK',
        'mountPoints': TEMPLATE_DIR
    }
    return jsonify(drive), 201


@app.route('/createProject', methods=['POST'])
def createProject():
    #data = request.form
    STATIC_DIR
    content = request.json
    print(content["projectDir"])
    try:
        os.mkdir(os.path.join(STATIC_DIR, content["projectDir"]))
        os.mkdir(os.path.join(STATIC_DIR, content["projectDir"], "images"))
        os.mkdir(os.path.join(STATIC_DIR, content["projectDir"], "imgclass"))
        f = open(os.path.join(STATIC_DIR, content["projectDir"], "imclass.json"), "a")
        f.write("{}")
        f.close()
        fxml = open(os.path.join(STATIC_DIR, content["projectDir"], "project.xml"), "a")
        fxml.write(" ")
        fxml.close()
        res = {'status': 'OK', 'mountPoints': content["projectDir"]}
    except OSError:
        print ("Creation of the directory  failed")
        res = {
            'status': 'not OK',
            'mountPoints': TEMPLATE_DIR
        }
  
        return jsonify(res), 201
    else:
        print ("Successfully created the directory")
        res = {
            'status': 'OK',
            'mountPoints': TEMPLATE_DIR
        }
  
        return jsonify(res), 201

@app.route('/getFiles', methods=['POST'])
def getFiles():
    allfiles = []
    for file in glob.glob("./dist/static/ruri/images/*.png"):
        
                
        #(os.path.relpath(file, 'dist'))

        allfiles.append({'file': os.path.relpath(file, 'dist'),
            'id': 1,
            'isAnotated': False,
            'class': 'totoro',
            'classCounts': 5})

        
    
    print(allfiles)

    res = {
        'status': 'OK',
        'mountPoints': TEMPLATE_DIR,
        'files': allfiles
    }
  
    return jsonify(res), 201



@app.route('/getProjects', methods=['GET'])
def getProjects():
    dds = []
    for x in os.listdir('./dist/static'):
        for fname in os.listdir('./dist/static/' + x):
            if fname.endswith('.xml'):
                # do stuff on the file
                print(x)
                dds.append(x)
                break
            else:
            # do stuff if a file .true doesn't exist.
                pass
            
    res = {
        'status': 'OK',
        'projects': dds
    }
  
    return jsonify(res), 201



@app.route('/writeXml', methods=['POST'])
def writeXml():
    rjson = request.json
    filename = TEMPLATE_DIR + "/" + rjson["filename"]
    xml_data = rjson["data"]
    print(xml_data)
    root = ET.fromstring(xml_data)
    print(filename)

    tree = ET.ElementTree(root)
    tree.write(filename)

    res = {
        'status': 'OK'
    }
  
    return jsonify(res), 201

@app.route('/checkXmlFile', methods=['POST'])
def checkXmlFile():
    rjson = request.json
    filename = TEMPLATE_DIR + "/" + rjson["filename"]
    print(filename)
    if(os.path.isfile(filename) == True):
        tree    = ET.parse(filename)
        xml = tree.getroot()
        xmlstr = ET.tostring(xml, encoding='utf8', method='xml')
        
        #parsed = xmljson.badgerfish.data(xml)
        parsed = xmltodict.parse(xmlstr)
        print(xml)
        res = {
            'status': 'OK',
            'data' : parsed
        }
    else:
        res = {
            'status': 'FAIL'
        }
    return jsonify(res), 201

@app.route('/imclassAnotaion', methods=['POST'])
def imclassAnotaion():
    req = request.json
    dirname = os.path.join(STATIC_DIR, req["projectpath"], "imgclass", req["dirname"])
    try:
        os.mkdir(dirname)
        res = {
            'status': 'OK',
        }
    except OSError:
        res = {
            'status': 'FAIL',
        }
    return jsonify(res), 201


@app.route('/getAnotaions', methods=['POST'])
def getAnotaions():
    req = request.json
    dirname = os.path.join(STATIC_DIR, req["projectpath"], "imgclass")
    try:
        dds = list_paths(dirname)
        print("get dds")
        print(dds)
        res = {
            'classes': dds,
            'status': 'OK'
        }
    except OSError:
        res = {
            'status': 'FAIL',
        }
    return jsonify(res), 201



@app.route('/addClass', methods=['POST'])
def addClass():
    content = request.json
    filePath = os.path.join(STATIC_DIR, content["projectpath"], "imclass.json")
    print(filePath)
    res = {
        'status': 'OK'
    }
    return jsonify(res), 201


@app.route('/upload', methods=['POST'])
def upload():
    res = {
        'status': 'OK'
    }
    return jsonify(res), 201

@app.route("/multiple-files", methods=["POST"])
def uploadm():
    print("Save multiple files")
    uploaded_files = request.files
    print(request.form)
    for key in request.files:
        print(key)
    print("********")
    ii = request.files.values()
    while True:
        try:
            # get the next item
            element = next(ii)
            print(element.filename)
            filePath = os.path.join(STATIC_DIR, request.form['projectpath'], 'images', element.filename) 
            im = Image.open(BytesIO(element.read()))
            basename = os.path.splitext(os.path.basename(element.filename))[0] + '.png'

            basewidth = 640
            
            wpercent = (basewidth/float(im.size[0]))
            hsize = int((float(im.size[1])*float(wpercent)))
            new_image = im.resize((basewidth,hsize), Image.ANTIALIAS)
            #new_image = im.resize((640,480))
            filePath2 = os.path.join(STATIC_DIR, request.form['projectpath'], 'images', basename)
            new_image.save(filePath2)
            
            # do something with element
        except StopIteration:
            # if StopIteration is raised, break from loop
            break
  
    res = {
        'status': 'OK'
    }
    return jsonify(res), 201

@app.route('/putdata', methods=['POST'])
def create_task():
    if not request.json or not 'title' in request.json:
        abort(400)
    task = {
        'id': 2,
        'title': request.json['title'],
        'description': request.json.get('description', ""),
        'done': False
    }
    tasks.append(task)
    return jsonify({'task': task}), 201

app.run(host='0.0.0.0', port=80)
#app.run()
