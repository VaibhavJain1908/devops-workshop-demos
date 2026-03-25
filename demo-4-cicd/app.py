from flask import Flask, jsonify
import datetime
import os

app = Flask(__name__)

@app.route('/')
def home():
    return jsonify({
        'message': 'CI/CD Demo App',
        'version': '1.0.0',
        'environment': os.getenv('ENV', 'development'),
        'timestamp': datetime.datetime.now().isoformat()
    })

@app.route('/health')
def health():
    return jsonify({
        'status': 'healthy',
        'service': 'cicd-demo'
    })

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
