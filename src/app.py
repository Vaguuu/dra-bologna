from flask import Flask,jsonify,request
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow

app = Flask(__name__)
CORS(app, supports_credentials=True)

app.config['SQLALCHEMY_DATABASE_URI']='mysql+pymysql://Vaguuu:0SapereAude!@Vaguuu.mysql.pythonanywhere-services.com/Vaguuu$sistema'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS']=False
db= SQLAlchemy(app)
ma=Marshmallow(app)

class Profesional(db.Model):   # la clase Producto hereda de db.Model
    mn=db.Column(db.String(6), primary_key=True)   #define los campos de la tabla
    nombre=db.Column(db.String(100))
    especialidad=db.Column(db.String(200))
    correo=db.Column(db.String(200))
    horarios=db.Column(db.String(400))
    foto=db.Column(db.String(400))
    def __init__(self,mn,nombre,especialidad,correo,horarios,foto):   #crea el  constructor de la clase
        self.mn=mn
        self.nombre=nombre
        self.especialidad=especialidad
        self.correo=correo
        self.horarios=horarios
        self.foto=foto

with app.app_context():
    db.create_all()

class ProfesionalSchema(ma.Schema):
    class Meta:
        fields=('mn','nombre','especialidad','correo','horarios','foto')

profesional_schema=ProfesionalSchema() # El objeto producto_schema es para traer un producto
profesionales_schema=ProfesionalSchema(many=True) # El objeto productos_schema es para traer multiples registros de producto

# crea los endpoint o rutas (json)

@app.route("/")
def helloWorld():
  return "Hello, cross-origin-world!"

@app.route('/staff', methods=['GET'])
def obtener_profesionales():
    all_staff=Profesional.query.all()
    result=profesionales_schema.dump(all_staff)
    return jsonify(result)

@app.route('/staff/<path:mn>', methods=['GET'])
def obtener_profesional(mn):
    profesional=Profesional.query.get(mn)
    return profesional_schema.jsonify(profesional)

@app.route('/staff/<path:mn>', methods=['DELETE'])
def remover_profesional(mn):
    profesional=Profesional.query.get(mn)
    db.session.delete(profesional)
    db.session.commit()
    return profesional_schema.jsonify(profesional)

@app.route('/staff', methods=['POST'])
def agregar_profesional():
    mn=request.json['mn']
    nombre=request.json['nombre']
    especialidad=request.json['especialidad']
    correo=request.json['correo']
    horarios=request.json['horarios']
    foto=request.json['foto']
    nuevo_profesional=Profesional(mn,nombre,especialidad,correo,horarios,foto)
    db.session.add(nuevo_profesional)
    db.session.commit()
    return profesional_schema.jsonify(nuevo_profesional)

@app.route('/staff/<path:mn>' ,methods=['PUT'])
def modificar_profesional(mn):
    profesional=Profesional.query.get(mn)
    profesional.especialidad=request.json['especialidad']
    profesional.correo=request.json['correo']
    profesional.horarios=request.json['horarios']
    profesional.foto=request.json['foto']
    db.session.commit()
    return profesional_schema.jsonify(profesional)


if __name__ == '__main__':
    app.run(debug=True, port=5000)