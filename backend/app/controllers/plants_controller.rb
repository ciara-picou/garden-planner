class PlantsController < ApplicationController
    
    def index
        plants = Plant.all
        render json: plants
   end

   def show
       plant = Plant.find(params[:id])
       render json: plant
   end

   def create
    plant = Plant.create(plant_params)
    render json: plant
   end

   def update
    plant= Plant.find(params[:id])
    plant.update(plant_params)
    render json: plant
end

   def destroy
    plant = Plant.find(params[:id])
    plant.destroy
    end

private

def plant_params
    params.require(:plant).permit(
        :name, 
        :pimage,
        :water,
        :light, 
        :fertilization,
        :next_fertilization_date,
        :cold_tolerance,
        :user_id)
end

end
